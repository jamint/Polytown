
import React, { Suspense, useEffect } from 'react'
import { Canvas, useLoader, useThree, useFrame } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'drei'
import * as THREE from 'three'
import EnvironmentLighting from '../lights/EnvironmentLighting'
import gsap from 'gsap'
import Lights from '../lights/AnimatedPlatformLights'
// import Lights from '../lights/LightTest1'

let mixer = null

const Model = ({
    path,
    position = [0, 0, 0]
}) => {
    const { camera } = useThree()
    let { scene, animations } = useLoader(GLTFLoader, path)
    let actions = null

    useEffect(() => {
        mixer = new THREE.AnimationMixer(scene);
        gsap.fromTo(camera.position, { x: 2, y: 3, z: 14 }, {
            duration: 5, x: 2, y: 3, z: 12, ease: "power1.out", onComplete: () => {
                gsap.to(camera.position, { duration: 7, x: 3, repeat: -1, yoyo: true, ease: "power1.inOut" })
            }
        })
        actions = {}
        for (let i = 0; i < animations.length; i++) {
            const clip = animations[i];
            const action = mixer.clipAction(clip);
            actions[clip.name] = action;
            action.play()
        }

        scene.traverse((s => {
            if (s.isMesh) {
                s.castShadow = true
                s.receiveShadow = true
                if (s.material.map) s.material.map.anisotropy = 16
            }
        }))
    }, [])
    useFrame((state, delta) => {
        mixer.update(delta);
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
                    position: [0, 3, 12],
                }}
                onCreated={({ gl, scene }) => {
                    gl.toneMapping = THREE.ACESFilmicToneMapping
                    gl.outputEncoding = THREE.sRGBEncoding
                }} >
                <fog attach='fog' args={["black", 0, 45]} />
                <Lights />
                <Suspense fallback={null}>
                    <EnvironmentLighting />
                    <Model path={'/models/ball-loop.glb'} />
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