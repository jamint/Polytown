import React, { Suspense, useEffect, useState } from 'react'
import { Canvas, useLoader, useThree } from 'react-three-fiber'
import { PCFSoftShadowMap, sRGBEncoding } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'drei'
import { sceneNum, setSceneNum } from "../../state";
import { RecoilRoot, useRecoilState } from "recoil";
import AnimatedPlatformLights from '../lights/AnimatedPlatformLights'
import { setSceneObjects, playScene, initializeScene, setScene } from './AnimationController'

function TheAnimation() {
    let gltf = useLoader(GLTFLoader, '/models/animation-03.glb')
    const { camera, gl, scene } = useThree()
    const [currScene, setCurrScene] = useRecoilState(sceneNum);
    const [firstTime, setFirstTime] = useState(true)

    useEffect(() => {
        if (!firstTime) {
            playScene(currScene)
        }
        setFirstTime(false)
    }, [currScene])

    useEffect(() => {
        gl.shadowMap.enabled = true
        gl.shadowMap.type = PCFSoftShadowMap
        gl.shadowMapSoft = true
        gl.outputEncoding = sRGBEncoding

        let obj = {}
        obj.camera = camera

        console.log(gltf.scene)
        gltf.scene.traverse(child => {
            if (child.name !== "FloorCover") {
                child.castShadow = true
                child.receiveShadow = true
            }
            if (child.name === "Floor") obj.floor = child
            if (child.name === "FloorCover") obj.floorCover = child
            if (child.name === "MainEmpty") {
                obj.mainEmpty = child
                obj.platform = get3DObject(child.children, 'Platform')
                obj.platform02 = get3DObject(child.children, 'Platform02')
                obj.arch01 = get3DObject(child.children, 'Arch01')
                obj.scene0Empty = get3DObject(obj.platform.children, 'Scene0Empty')
                console.log(obj.scene0Empty.children)
                obj.circle = get3DObject(obj.scene0Empty.children, 'Circle')
                obj.scene1Empty = get3DObject(obj.platform.children, 'Scene1Empty')
                obj.scene2Empty = get3DObject(obj.platform.children, 'Scene2Empty')
                obj.scene2Empty = get3DObject(obj.platform.children, 'Scene2Empty')
            }
        })
        setSceneObjects(obj)
        setScene(scene)
        initializeScene()
        setCurrScene(0)
        setTimeout(() => {
            setCurrScene(1)
        }, 7000)
        setTimeout(() => {
            setCurrScene(2)
        }, 12000)
        setTimeout(() => {
            setCurrScene(0)
        }, 17000)
        setTimeout(() => {
            setCurrScene(1)
        }, 25000)
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
            <Canvas colorManagement shadowMap camera={{ fov: 30, position: [0, 0, 12] }}>
                <RecoilRoot>
                    <AnimatedPlatformLights />
                    <Suspense fallback={null}>
                        <TheAnimation />
                    </Suspense>
                    <OrbitControls enableZoom={false} />
                </RecoilRoot>
            </Canvas>
            {/* <Buttons /> */}
        </div >
    );
}

export default Animation;