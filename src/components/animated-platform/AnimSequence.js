import { gsap } from 'gsap'
let o = {}

export const setSceneObjects = (obj) => {
    o = obj
}

export const playScene = (num) => {
    if (num === 0) playScene0()
}

export const initializeScene = () => {
    o.world.visible = false
    o.scene2Empty.visible = false
    o.platform.visible = false
    gsap.from(o.camera.position, { duration: 5, y: 1 })
    gsap.from(o.mainEmpty.scale, { duration: 3.5, x: 0, y: 0, z: 0, ease: 'elastic.out(1, 1)' })
    gsap.from(o.mainEmpty.rotation, { duration: 3.5, y: Math.PI, ease: 'elastic.out(1, 1)' })
    gsap.from(o.platform02.scale, { duration: 2, y: 0, ease: 'elastic.out(1, 1)', delay: 1 })
    gsap.from(o.arch01.scale, { duration: 2, z: 0, y: 0, ease: 'elastic.out(1, 1)', delay: 1.2 })
}

export const playScene0 = () => {
    o.world.visible = true
    o.platform.visible = true
    gsap.from(o.platform.position, { duration: 2, y: -2, ease: 'elastic.out(1, 1)' })
}

export const playScene1 = () => {
    // gsap.set(o.scene2Empty, { visible: true })
    // gsap.to(o.camera.position, { duration: 5, y: 8 })
    // gsap.to(o.scene2Empty.position, { duration: 2, x: 2 })
    // gsap.to(o.thing.position, { duration: 2, y: 2, delay: 2 })
}

export const removeScenes = () => {
    // o.scene2Empty.visible = false
    // o.world.visible = false
}