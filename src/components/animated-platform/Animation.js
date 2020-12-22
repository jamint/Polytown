import React, { Suspense, useEffect } from 'react'
import { PCFSoftShadowMap, sRGBEncoding } from 'three'
import { Canvas, useLoader, useThree, useRender } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'drei'
import AnimatedPlatformLights from '../lights/AnimatedPlatformLights'
import { gsap, TimelineMax } from 'gsap'
import { modelState } from "../../state";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";


function TheAnimation() {
    let gltf = useLoader(GLTFLoader, '/models/animation-03.glb')
    const children = gltf.scene.children
    const { camera, gl } = useThree()
    let mainEmpty,
        platform,
        platform01,
        platform02,
        arch01

    const [theModel, setTheModel] = useRecoilState(modelState);

    useEffect(() => {
        console.log(theModel)
    }, [theModel])

    useEffect(() => {
        setTheModel("pooper")

        gl.shadowMap.enabled = true
        gl.shadowMap.type = PCFSoftShadowMap
        gl.shadowMapSoft = true
        gl.outputEncoding = sRGBEncoding

        gltf.scene.traverse(child => {
            if (child.isMesh) {
                child.castShadow = true
                child.receiveShadow = true
            }
            if (child.name === "MainEmpty") {
                mainEmpty = child
                platform = get3DObject(child.children, 'Platform')
                platform01 = get3DObject(child.children, 'Platform01')
                platform02 = get3DObject(child.children, 'Platform02')
                arch01 = get3DObject(child.children, 'Arch01')
            }
        })
        gsap.from(camera.position, { duration: 5, y: 1 })

        platform.visible = false

        gsap.from(mainEmpty.scale, { duration: 3.5, x: 0, y: 0, z: 0, ease: 'elastic.out(1, 1)' })
        gsap.from(mainEmpty.rotation, { duration: 3.5, y: Math.PI, ease: 'elastic.out(1, 1)' })

        gsap.from(platform02.scale, { duration: 2, y: 0, ease: 'elastic.out(1, 1)', delay: 1 })
        // gsap.from(platform.scale, { duration: 2, y: 0, ease: 'elastic.out(1, 1)', delay: 1 })
        gsap.from(arch01.scale, { duration: 2, z: 0, y: 0, ease: 'elastic.out(1, 1)', delay: 1.2 })

        setTimeout(() => {
            gsap.from(platform.position, { duration: 2, y: -5 })
            platform.visible = true
        }, 3000);
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