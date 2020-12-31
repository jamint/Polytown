
import React, { Suspense, useEffect } from 'react'
import { Canvas, useLoader, useThree, useFrame } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'drei'
import * as THREE from 'three'
import EnvironmentLighting from '../lights/EnvironmentLighting'
import Lights from '../lights/AnimatedPlatformLights'
import gsap from 'gsap'

let mixer = null

const playScene = (scene) => {
    let balls = []
    const spread = 5
    let ball = null
    for (let i = 0; i < 100; i++) {
        ball = scene.getObjectByName("Ball")
        const clone = ball.clone()
        clone.name = "ball" + i
        scene.add(clone)
        balls.push(clone)
    }
    ball.position.x = 5000

    for (let i = 0; i < 100; i++) {
        const ball = balls[i]
        ball.scale.set(0, 0, 0)
        gsap.to(ball.position, {
            duration: 1,
            x: THREE.MathUtils.randFloatSpread(spread),
            y: THREE.MathUtils.randFloatSpread(spread),
            z: THREE.MathUtils.randFloatSpread(spread),
            ease: 'elastic.out(1, 1)',
            delay: 1 + i * 0.005
        })
        gsap.to(ball.scale, {
            duration: 1,
            x: 1,
            y: 1,
            z: 1,
            ease: 'elastic.out(1, 1)',
            delay: 1 + i * 0.005
        })
    }
}

const Model = ({
    path,
    position = [0, 0, 0]
}) => {
    let { scene, animations } = useLoader(GLTFLoader, path)
    let actions = null

    useEffect(() => {
        mixer = new THREE.AnimationMixer(scene);
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
        playScene(scene)
    }, [])
    useFrame((state, delta) => {
        mixer.update(delta);
    });

    return (
        <>
            <primitive object={scene} receiveShadow position={position} />
        </>
    )
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
                    position: [6, 3, 12],
                }}
                onCreated={({ gl, scene }) => {
                    gl.toneMapping = THREE.ACESFilmicToneMapping
                    gl.outputEncoding = THREE.sRGBEncoding
                    scene.background = new THREE.Color('#000000')
                }} >
                <Lights />
                <Suspense fallback={null}>
                    <EnvironmentLighting />
                    <Model path={'/models/balls-01.glb'} />
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