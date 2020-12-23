import { gsap } from 'gsap'
import { playScene0, removeScene0 } from './animations/scene0'
import { playScene1, removeScene1 } from './animations/scene1'
import { playScene2, removeScene2 } from './animations/scene2'

let o = {}
let scene = null
let currNum = null
let prevNum = null

export const setSceneObjects = (obj) => {
    o = obj
}
export const setScene = (s) => {
    scene = s
}

export const initializeScene = () => {
    o.floorCover.visible = false
    o.scene0Empty.visible = false
    o.scene1Empty.visible = false
    o.scene2Empty.visible = false
    o.platform.visible = false
    gsap.fromTo(o.camera.position, { y: 0 }, { duration: 5, x: 1, y: 3 })
    gsap.from(o.mainEmpty.scale, { duration: 3.5, x: 0, y: 0, z: 0, ease: 'elastic.out(1, 1)' })
    gsap.from(o.mainEmpty.rotation, { duration: 3.5, y: Math.PI, ease: 'elastic.out(1, 1)' })
    gsap.set(o.floorCover, { visible: true, delay: 0.5 })
    gsap.from(o.platform02.scale, { duration: 2, y: 0, ease: 'elastic.out(1, 1)', delay: 1 })
    gsap.from(o.arch01.scale, { duration: 2, z: 0, y: 0, ease: 'elastic.out(1, 1)', delay: 1.2 })
}

export const playScene = (num) => {
    prevNum = currNum
    currNum = num
    switch (currNum) {
        case 0:
            playScene0(o)
            break
        case 1:
            playScene1(o)
            break
        case 2:
            playScene2(o)
            break
    }
    switch (prevNum) {
        case 0:
            removeScene0(o)
            break
        case 1:
            removeScene1(o)
            break
        case 2:
            removeScene2(o)
            break
    }
}