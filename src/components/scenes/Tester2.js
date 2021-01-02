
import React, { Suspense, useEffect } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { SkeletonUtils } from 'three/examples/jsm/utils/SkeletonUtils'
import { OrbitControls } from 'drei'
import { Canvas, useLoader, useThree, useFrame } from 'react-three-fiber'
import * as THREE from 'three'
import EnvironmentLighting from '../lights/EnvironmentLighting'
import Lights from '../lights/AnimatedPlatformLights'
import gsap from 'gsap'

let models = [], mixers = [], actions = [], camera

const Floor = ({ path }) => {
    const gltf = useLoader(GLTFLoader, path)
    gltf.scene.traverse((s => {
        if (s.isMesh) {
            s.receiveShadow = true
        }
    }))
    return <primitive object={gltf.scene} receiveShadow />
}

const Model = ({
    path,
    position = [0, 0, 0]
}) => {
    const gltf = useLoader(GLTFLoader, path)
    const world = useThree(),
        worldScene = world.scene
    const numCopies = 5
    const rot = Math.PI * 2 / numCopies

    useEffect(() => {
        camera = world.camera
        gsap.from(camera.position, { duration: 3, x: -4, y: 3, z: 18 })

        const model = gltf.scene,
            fileAnimations = gltf.animations,
            anims = fileAnimations

        model.traverse((s => {
            if (s.isMesh) {
                s.castShadow = true
                s.receiveShadow = true
                if (s.material.map) s.material.map.anisotropy = 16
            }
        }))

        for (let i = 0; i < numCopies; i++) {
            let newModel = model.clone();
            newModel.rotation.z = rot * i
            models.push(newModel);
        }
        model.position.x = 100
        models.map(model => {
            worldScene.add(model);
            mixers.push(new THREE.AnimationMixer(model));
        })

        let modified = {
            loop: THREE.LoopOnce,
            clampWhenFinished: true,
            // timeScale: .3
        }
        mixers.map(mixer => {
            for (let i = 0; i < anims.length; i++) {
                actions.push(
                    overwriteProps(
                        mixer.clipAction(anims[i]),
                        modified
                    )
                )
            }
        })
        actions.map((act, i) => {
            setTimeout(() => {
                actions[i].play()
            }, 300 + 20 * i);
        })
    }, [])

    useFrame((state, delta) => {
        mixers.map(mixer => {
            mixer.update(delta)
        })
    });

    let overwriteProps = (proto, object) => {
        Object.entries(object).map(entry => {
            proto[entry[0]] = entry[1];
        })
        return proto;
    }

    return <primitive object={gltf.scene} receiveShadow position={position} />
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
                    position: [0, -1, 15],
                }}
                onCreated={({ gl, scene }) => {
                    gl.toneMapping = THREE.ACESFilmicToneMapping
                    gl.outputEncoding = THREE.sRGBEncoding
                }} >
                <Lights />
                <Suspense fallback={null}>
                    <EnvironmentLighting />
                    <Model path={'/models/tester-02.glb'} />
                </Suspense>
                <Suspense fallback={null}>
                    <Floor path={'/models/tester-02-bg.glb'} />
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