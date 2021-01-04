
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
    const numCopies = 9
    const rot = Math.PI * 2 / numCopies

    useEffect(() => {
        camera = world.camera
        gsap.fromTo(camera.position, { x: -2, y: 0, z: 5 }, {
            duration: 7, x: 4, y: -1, z: 15, onComplete: () => {
                gsap.to(camera.position, { duration: 7, x: -4, repeat: -1, yoyo: true, ease: "power1.inOut" })
            }
        })

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
            }, 300);
            // }, 300 + 3 * iZ);
        })
        return () => {
            models = []
            mixers = []
            actions = []
        };
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

export default function KaleidoscopeColor() {
    return (
        <div className="three-anim">
            <Canvas
                colorManagement
                shadowMap
                concurrent
                camera={{
                    fov: 40,
                    // position: [0, -1, 15],
                }}
                onCreated={({ gl, scene }) => {
                    gl.toneMapping = THREE.ACESFilmicToneMapping
                    gl.outputEncoding = THREE.sRGBEncoding
                }} >
                <fog attach='fog' args={["#fff", 0, 90]} />
                <Lights />
                <Suspense fallback={null}>
                    <EnvironmentLighting />
                    <Model path={'/models/tester-01.glb'} />
                    <Floor path={'/models/tester-01-bg.glb'} />
                </Suspense>
                <OrbitControls
                    enableZoom={false}
                    minPolarAngle={1.2}
                    maxPolarAngle={1.8}
                    maxAzimuthAngle={0.5}
                    minAzimuthAngle={-0.5}
                />
            </Canvas>
        </div >
    );
}