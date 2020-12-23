import { gsap } from 'gsap'
let o = {}
let currNum = null
let prevNum = null

export const setSceneObjects = (obj) => {
    o = obj
}

export const playScene = (num) => {
    prevNum = currNum
    currNum = num
    switch (currNum) {
        case 0:
            playScene0()
            break
        case 1:
            playScene1()
            break
        case 2:
            playScene2()
            break
    }
    switch (prevNum) {
        case 0:
            removeScene0()
            break
        case 1:
            removeScene1()
            break
        case 2:
            removeScene2()
            break
    }
}

export const initializeScene = () => {
    o.scene0Empty.visible = false
    o.scene1Empty.visible = false
    o.scene2Empty.visible = false
    o.platform.visible = false
    gsap.from(o.camera.position, { duration: 5, y: 1 })
    gsap.from(o.mainEmpty.scale, { duration: 3.5, x: 0, y: 0, z: 0, ease: 'elastic.out(1, 1)' })
    gsap.from(o.mainEmpty.rotation, { duration: 3.5, y: Math.PI, ease: 'elastic.out(1, 1)' })
    gsap.from(o.platform02.scale, { duration: 2, y: 0, ease: 'elastic.out(1, 1)', delay: 1 })
    gsap.from(o.arch01.scale, { duration: 2, z: 0, y: 0, ease: 'elastic.out(1, 1)', delay: 1.2 })
}

// =============== SCENE 0 ===============
// =======================================
const playScene0 = () => {
    console.log("play scene 0")
    setTimeout(() => {
        o.platform.visible = true
        gsap.set(o.scene0Empty, { visible: true })
        gsap.set(o.platform, { visible: true })
        gsap.fromTo(o.platform.position, { y: -2 }, { duration: 2, y: 1.2, ease: 'elastic.out(1, 1)' })
    }, 2000);
}
const removeScene0 = () => {
    // console.log("remove scene 0")
    gsap.to(o.platform.position, { duration: 1.5, y: -2, ease: 'elastic.in(1, 1)' })
    setTimeout(() => {
        o.scene0Empty.visible = false
    }, 1500);
}

// =============== SCENE 1 ===============
// =======================================
const playScene1 = () => {
    console.log("play scene 1")
    setTimeout(() => {
        gsap.set(o.scene1Empty, { visible: true })
        gsap.fromTo(o.platform.position, { y: -2 }, { duration: 2, y: 1.2, ease: 'elastic.out(1, 1)' })
    }, 2000);
}

const removeScene1 = () => {
    // console.log("remove scene 1")
    gsap.to(o.platform.position, { duration: 1.5, y: -2, ease: 'elastic.in(1, 1)' })
    setTimeout(() => {
        o.scene1Empty.visible = false
    }, 1500);
}

// =============== SCENE 2 ===============
// =======================================
const playScene2 = () => {
    console.log("play scene 2")
    setTimeout(() => {
        gsap.set(o.scene2Empty, { visible: true })
        gsap.fromTo(o.platform.position, { y: -2 }, { duration: 2, y: 1.2, ease: 'elastic.out(1, 1)' })
    }, 2000);
}

const removeScene2 = () => {
    // console.log("remove scene 2")
    gsap.to(o.platform.position, { duration: 1.5, y: -2, ease: 'elastic.in(1, 1)' })
    setTimeout(() => {
        o.scene2Empty.visible = false
    }, 1500);
}