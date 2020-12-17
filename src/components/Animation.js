import { useRef, useState } from 'react'
import React, { Suspense } from 'react'
import { Canvas, useLoader, useFrame } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls, StandardEffects } from 'drei'
import gsap from 'gsap'

function TheModel() {
    const gltf = useLoader(GLTFLoader, '/schnitzel-01.glb')
    const children = gltf.scene.children
    for (let i = 0; i < children.length; i++) {
        if (children[i].name === "Schnitzel") {
            gsap.from(children[i].position, { duration: 1.5, x: -10, ease: 'elastic.inOut(1, 1)' })
        }
    }

    return <primitive object={gltf.scene} position={[0, 0, 0]} />
}

function Box(props) {
    const mesh = useRef()
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    useFrame(() => {
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    })

    return (
        <mesh
            {...props}
            ref={mesh}
            scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
            onClick={(event) => setActive(!active)}
            onPointerOver={(event) => setHover(true)}
            onPointerOut={(event) => setHover(false)}>
            <boxBufferGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
}

function Animation() {
    return (
        <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            {/* <Box position={[-1.2, 0, 0]} /> */}
            {/* <Box position={[1.2, 0, 0]} /> */}
            <Suspense fallback={null}>
                <TheModel />
            </Suspense>
            <OrbitControls />
        </Canvas>
    );
}

export default Animation;