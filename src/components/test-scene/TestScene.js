
import React, { Suspense } from 'react'
import { Canvas, useLoader, useThree } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'drei'
import * as THREE from 'three'
import Environment from './Environment'
import LightTest1 from '../lights/AnimatedPlatformLights'
import Effects from './Effects'

const Model = () => {
    const { camera } = useThree()
    let { scene } = useLoader(GLTFLoader, '/models/test.glb')
    scene.traverse((s => {
        if (s.isMesh) {
            s.castShadow = true
            s.receiveShadow = true
            if (s.material.map) s.material.map.anisotropy = 16
        }
    }))
    return <primitive object={scene} receiveShadow position={[0, 0, 0]} />
}

export default function TestScene() {
    return (
        <div className="three-anim">
            <Canvas
                colorManagement
                shadowMap
                concurrent
                // noEvents={active}
                camera={{
                    fov: 40,
                    position: [1, 4, 12],
                }}
                onCreated={({ gl, scene }) => {
                    gl.toneMapping = THREE.ACESFilmicToneMapping
                    gl.outputEncoding = THREE.sRGBEncoding
                }} >
                <LightTest1 />
                <Suspense fallback={null}>
                    <Environment />
                    <Model />
                    {/* <Effects /> */}
                </Suspense>
                <OrbitControls enableZoom={true} />
            </Canvas>
        </div >
    );
}