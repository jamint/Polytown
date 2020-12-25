import React, { useEffect } from 'react'
import { useLoader, useThree } from 'react-three-fiber'
import { PCFSoftShadowMap, sRGBEncoding } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { gsap } from 'gsap'
import { get3DObject } from '../../utils/get3DObject'

import AnimationController from './AnimationController'

function Model(props) {
    const { camera, gl } = useThree()
    const gltf = useLoader(GLTFLoader, '/models/garsone-01.glb')
    const model = gltf.scene

    useEffect(() => {
        gl.shadowMap.enabled = true
        gl.shadowMap.type = PCFSoftShadowMap
        gl.shadowMapSoft = true
        gl.outputEncoding = sRGBEncoding

        model.scale.set(0.5, 0.5, 0.5)
        model.position.x = -1.7
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