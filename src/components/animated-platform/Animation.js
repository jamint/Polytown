import React, { Suspense, useEffect } from 'react'
import { PCFSoftShadowMap, sRGBEncoding } from 'three'
import { Canvas, useLoader, useThree, useRender } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'drei'
import AnimatedPlatformLights from '../lights/AnimatedPlatformLights'
import { modelState } from "../../state";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { initialSequence } from './AnimSequence'


function TheAnimation() {
    let gltf = useLoader(GLTFLoader, '/models/animation-03.glb')
    const children = gltf.scene.children
    const { camera, gl } = useThree()
    let sceneObjects = {}
    // const [theModel, setTheModel] = useRecoilState(modelState);
    // useEffect(() => {
    //     console.log(theModel)
    // }, [theModel])

    useEffect(() => {
        // setTheModel()

        gl.shadowMap.enabled = true
        gl.shadowMap.type = PCFSoftShadowMap
        gl.shadowMapSoft = true
        gl.outputEncoding = sRGBEncoding

        sceneObjects.camera = camera
        gltf.scene.traverse(child => {
            if (child.isMesh) {
                child.castShadow = true
                child.receiveShadow = true
            }
            if (child.name === "MainEmpty") {
                sceneObjects.mainEmpty = child
                sceneObjects.platform = get3DObject(child.children, 'Platform')
                sceneObjects.platform02 = get3DObject(child.children, 'Platform02')
                sceneObjects.arch01 = get3DObject(child.children, 'Arch01')
            }

        })
        initialSequence(sceneObjects)
    }, [])

    return <primitive object={gltf.scene} receiveShadow position={[0, 0, 0]} />
}

export const get3DObject = (arr, query) => {
    var result = arr.filter(obj => {
        return obj.name === query;
    });
    return result[0];
}

function Animation() {
    return (
        <div className="three-anim">
            {/* <Canvas colorManagement shadowMap camera={{ fov: 30, position: [0, 5, 12] }}> */}
            <Canvas colorManagement camera={{ fov: 30, position: [0, 5, 12] }}>
                <RecoilRoot>
                    <AnimatedPlatformLights />
                    <Suspense fallback={null}>
                        <TheAnimation />
                    </Suspense>
                    <OrbitControls enableZoom={false} />
                </RecoilRoot>
            </Canvas>
        </div >
    );
}

export default Animation;