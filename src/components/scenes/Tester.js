
import React, { Suspense, useEffect } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'drei'
import { Canvas, useLoader, useThree, useFrame } from 'react-three-fiber'
import * as THREE from 'three'
import EnvironmentLighting from '../lights/EnvironmentLighting'
import Lights from '../lights/AnimatedPlatformLights'
// import Lights from '../lights/LightTest1'

let mixer = null

const Model = ({
    path,
    position = [0, 0, 0]
}) => {
    let { scene, animations } = useLoader(GLTFLoader, path)
    let actions = null
    const numCopies = 9

    useEffect(() => {
        const obj = scene.getObjectByName("Empty")
        const rot = Math.PI * 2 / numCopies
        for (let i = 0; i < numCopies; i++) {
            const copy = obj.clone()
            copy.name = "obj" + i
            scene.add(copy)
            copy.rotation.z = rot * i
        }
        obj.position.x = 5000

        scene.traverse((s => {
            if (s.isMesh) {
                s.castShadow = true
                s.receiveShadow = true
                if (s.material.map) s.material.map.anisotropy = 16
            }
        }))
    }, [])
    useFrame((state, delta) => {
        // mixer.update(delta);
    });

    return <primitive object={scene} receiveShadow position={position} />
}

export default function AnimationTestScene() {
    return (
        <div className="three-anim">
            <Canvas
                colorManagement
                shadowMap
                concurrent
                camera={{
                    fov: 40,
                    position: [0, 0, 12],
                }}
                onCreated={({ gl, scene }) => {
                    gl.toneMapping = THREE.ACESFilmicToneMapping
                    gl.outputEncoding = THREE.sRGBEncoding
                }} >
                <Lights />
                <Suspense fallback={null}>
                    <EnvironmentLighting />
                    <Model path={'/models/tester-01.glb'} />
                </Suspense>
                <OrbitControls
                    enableZoom={true}
                    minPolarAngle={1}
                    maxPolarAngle={1.5}
                    maxAzimuthAngle={0.5}
                    minAzimuthAngle={-0.5}
                />
            </Canvas>
        </div >
    );
}