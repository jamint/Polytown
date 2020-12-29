
import React, { Suspense } from 'react'
import { Canvas, useLoader, useThree } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'drei'
import * as THREE from 'three'
import Environment from './Environment'
import Lights from '../lights/AnimatedPlatformLights'
// import Lights from '../lights/LightTest1'
import Effects from './Effects'

const Model = ({
    path,
    position = [0, 0, 0]
}) => {
    const { camera } = useThree()
    // let { scene } = useLoader(GLTFLoader, '/models/garsone-01.glb')
    // let { scene } = useLoader(GLTFLoader, '/models/animate-bones.glb')
    // let { scene } = useLoader(GLTFLoader, '/models/garsone-01.glb')
    let { scene } = useLoader(GLTFLoader, path)
    // let { scene } = useLoader(GLTFLoader, '/models/test-01.glb')
    // let { scene } = useLoader(GLTFLoader, '/models/test-02.glb')
    scene.traverse((s => {
        if (s.isMesh) {
            s.castShadow = true
            s.receiveShadow = true
            if (s.material.map) s.material.map.anisotropy = 16
        }
    }))
    return <primitive object={scene} receiveShadow position={position} />
}

export default function TestScene() {
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
                <Lights />
                <Suspense fallback={null}>
                    <Environment />
                    <Model path={'/models/floor-01.glb'} />
                    <group position={[-1.2, 0, 0]}>
                        <Model path={'/models/schnitzel-01.glb'} position={[-4, 0, 0]} />
                        <Model path={'/models/garsone-01.glb'} position={[-1, 0, 0]} />
                        <Model path={'/models/cornwall-01.glb'} position={[2, 0, 0]} />
                        <Model path={'/models/magpie-01.glb'} position={[5, 0, 0]} />
                    </group>
                    {/* <Model path={'/models/gillespie-01.glb'} /> */}
                    {/* <Effects /> */}
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