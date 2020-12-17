import { useRef, useState } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import { OrbitControls } from 'drei'

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
            <Box position={[-1.2, 0, 0]} />
            <Box position={[1.2, 0, 0]} />
            <OrbitControls />
        </Canvas>
    );
}

export default Animation;