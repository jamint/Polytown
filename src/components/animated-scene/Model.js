import React, { useEffect } from 'react'
import { useLoader, useThree, useFrame } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { gsap } from 'gsap'
import * as THREE from 'three'
import { get3DObject } from '../../utils/get3DObject'
import AnimationController from './AnimationController'

let mixer = null

function Model(props) {
    const { camera } = useThree()
    let { scene, animations } = useLoader(GLTFLoader, '/models/animation-04.glb')
    let obj = {}

    useEffect(() => {
        mixer = new THREE.AnimationMixer(scene);
        console.log(animations)
        void mixer.clipAction(animations[0]).play();
        void mixer.clipAction(animations[1]).play();

        obj.camera = camera

        scene.traverse(child => {
            if (child.name !== "FloorCover") {
                child.castShadow = true
                child.receiveShadow = true
            }
            if (child.name === "Floor") obj.floor = child
            if (child.name === "FloorCover") obj.floorCover = child
            if (child.name === "MainEmpty") {
                obj.mainEmpty = child
                obj.platform = get3DObject(child.children, 'Platform')
                obj.platform02 = get3DObject(child.children, 'Platform02')
                obj.arch01 = get3DObject(child.children, 'Arch01')
                obj.scene0Empty = get3DObject(obj.platform.children, 'Scene0Empty')
                obj.circle = get3DObject(obj.scene0Empty.children, 'Circle')
                obj.scene1Empty = get3DObject(obj.platform.children, 'Scene1Empty')
                obj.scene2Empty = get3DObject(obj.platform.children, 'Scene2Empty')
                obj.scene2Empty = get3DObject(obj.platform.children, 'Scene2Empty')
            }
        })
        // Set initial values
        obj.floorCover.visible = false
        obj.scene0Empty.visible = false
        obj.scene1Empty.visible = false
        obj.scene2Empty.visible = false
        obj.platform.visible = false
        gsap.fromTo(obj.camera.position, { y: 0 }, { duration: 5, x: 1, y: 3 })
        gsap.from(obj.mainEmpty.scale, { duration: 3.5, x: 0, y: 0, z: 0, ease: 'elastic.out(1, 1)' })
        gsap.from(obj.mainEmpty.rotation, { duration: 3.5, y: Math.PI, ease: 'elastic.out(1, 1)' })
        gsap.set(obj.floorCover, { visible: true, delay: 0.5 })
        gsap.from(obj.platform02.scale, { duration: 2, y: 0, ease: 'elastic.out(1, 1)', delay: 1 })
        gsap.from(obj.arch01.scale, { duration: 2, z: 0, y: 0, ease: 'elastic.out(1, 1)', delay: 1.2 })
    }, [])

    useFrame((state, delta) => {
        mixer.update(delta);
    });

    return (
        <>
            <primitive object={scene} receiveShadow position={[0, 0, 0]} />
            <AnimationController currAnim={props.currAnim} prevAnim={props.prevAnim} obj={obj} />
        </>
    )
}

export default Model