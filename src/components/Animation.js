import { useRef, useState } from 'react'
import React, { Suspense } from 'react'
import { Canvas, useLoader, useFrame } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'drei'
import gsap from 'gsap'

function Schnitzel() {
    const gltf = useLoader(GLTFLoader, '/garsone-01.glb')
    const children = gltf.scene.children
    for (let i = 0; i < children.length; i++) {
        // if (children[i].name === "Schnitzel") {
        //     gsap.from(children[i].position, { duration: 1.5, x: -10, ease: 'elastic.inOut(1, 1)' })
        // }
    }

    return <primitive object={gltf.scene} position={[0, 0, 0]} />
}

function Animation() {
    return (
        <Canvas>
            <ambientLight intensity={0.3} />
            <pointLight position={[10, 10, 10]} intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={0.5} />
            <Suspense fallback={null}>
                <Schnitzel />
            </Suspense>
            <OrbitControls />
        </Canvas>
    );
}

export default Animation;