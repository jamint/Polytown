import React, { Suspense } from 'react'
import { PCFSoftShadowMap, sRGBEncoding } from 'three'
import { Canvas, useLoader, useThree, useRender } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls, RoundedBox } from 'drei'
import gsap from 'gsap'

function Schnitzel() {
    const gltf = useLoader(GLTFLoader, '/models/animation-01.glb')
    const children = gltf.scene.children
    const { camera, gl } = useThree()
    gl.shadowMap.enabled = true
    gl.shadowMap.type = PCFSoftShadowMap
    gl.shadowMapSoft = true
    gl.outputEncoding = sRGBEncoding

    for (let i = 0; i < children.length; i++) {
        const child = children[i]
        if (child.isMesh) {
            child.castShadow = true
            child.receiveShadow = true
        }
        // if (child.name === "Platform01") {
        //     gsap.from(child.scale, { duration: 2, x: 0, y: 0, z: 0, ease: 'elastic.out(1, 1)' })
        //     gsap.from(child.rotation, { duration: 2, y: Math.PI, ease: 'elastic.out(1, 1)' })
        // }
        // if (child.name === "Platform02") {
        //     gsap.from(child.scale, { duration: 2, x: 0, y: 0, z: 0, ease: 'elastic.out(1, 1)', delay: 0.1 })
        //     gsap.from(child.rotation, { duration: 2, y: Math.PI, ease: 'elastic.out(1, 1)', delay: 0.1 })
        // }
    }

    return <primitive object={gltf.scene} receiveShadow position={[0, 0, 0]} />
}


function Animation() {
    return (
        <div className="three-anim">
            <Canvas colorManagement shadowMap camera={{ fov: 30, position: [0, 3, 12] }}>
                <ambientLight intensity={0.1} />
                <spotLight
                    intensity={2}
                    position={[5, 5, 5]}
                    castShadow
                    penumbra={0.5}
                    shadowBias={-0.0004}
                    angle={Math.PI / 4}
                    shadow-mapSize-height={1024}
                    shadow-mapSize-width={1024}
                />
                {/* <spotLight
                    intensity={2}
                    position={[-5, 5, 5]}
                    castShadow
                    penumbra={0.5}
                    shadowBias={-0.0004}
                    angle={Math.PI / 4}
                    shadow-mapSize-height={1024}
                    shadow-mapSize-width={1024}
                /> */}
                <Suspense fallback={null}>
                    <Schnitzel />
                </Suspense>
                <OrbitControls enableZoom={false} />
            </Canvas>
        </div >
    );
}

export default Animation;