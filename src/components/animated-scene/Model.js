import React, { useEffect } from 'react'
import { useLoader, useThree, useFrame } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { gsap } from 'gsap'
import * as THREE from 'three'
import AnimationController from './AnimationController'

let mixer = null

function Model(props) {
    const { camera } = useThree()
    let { scene, animations } = useLoader(GLTFLoader, '/models/animation-04.glb')
    let obj = {}

    useEffect(() => {
        mixer = new THREE.AnimationMixer(scene);
        // let animationsArr = []

        for (let i = 0; i < animations.length; i++) {
            mixer.clipAction(animations[i]).play()
        }
        // animationsArr.push(THREE.AnimationClip.findByName(animations, "bender"))
        // animationsArr.push(THREE.AnimationClip.findByName(animations, "Key.001Action"))
        // animationsArr.map(clip => mixer.clipAction(clip).play())

        obj.camera = camera
        obj.floor = scene.getObjectByName("Floor", true)
        obj.platform = scene.getObjectByName('Platform', true)
        obj.floorCover = scene.getObjectByName('FloorCover', true)
        obj.mainEmpty = scene.getObjectByName('MainEmpty', true)
        obj.platform02 = scene.getObjectByName('Platform02', true)
        obj.arch01 = scene.getObjectByName('Arch01', true)
        obj.circle = scene.getObjectByName('Circle', true)
        obj.scene0Empty = scene.getObjectByName('Scene0Empty', true)
        obj.scene1Empty = scene.getObjectByName('Scene1Empty', true)
        obj.scene2Empty = scene.getObjectByName('Scene2Empty', true)
        obj.scene3Empty = scene.getObjectByName('Scene3Empty', true)
        obj.octopusArm = obj.scene2Empty.getObjectByName('OctopusArm')

        scene.traverse(child => {
            if (child.name !== "FloorCover") {
                child.castShadow = true
                child.receiveShadow = true
            }
        })

        // Set initial values
        obj.floorCover.visible = false
        obj.scene0Empty.visible = false
        obj.scene1Empty.visible = false
        obj.scene2Empty.visible = false
        obj.scene3Empty.visible = false
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