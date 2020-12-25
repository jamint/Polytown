import React, { useEffect } from 'react'
import { useLoader, useThree } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

function Model(props) {
    const gltf = useLoader(GLTFLoader, '/models/garsone-01.glb')
    const model = gltf.scene

    useEffect(() => {
        model.scale.set(0.5, 0.5, 0.5)
        model.position.x = -1.65
        model.position.y = -0.05
        model.rotation.y = 0.5

        model.traverse(child => {
            child.castShadow = true
            child.receiveShadow = true
        })
    }, [])

    return (
        <>
            <primitive object={model} receiveShadow position={[0, 0, 0]} />
        </>
    )
}

export default Model