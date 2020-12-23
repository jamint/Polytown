import { gsap } from 'gsap'
let myReq = null
let o = null

export const playScene1 = (obj) => {
    o = obj
    setTimeout(() => {
        gsap.set(o.scene1Empty, { visible: true })
        gsap.fromTo(o.platform.position, { y: -2 }, { duration: 2, y: 1.2, ease: 'elastic.out(1, 1)' })
        myReq = requestAnimationFrame(animate);
    }, 2000);
}
const animate = () => {
    myReq = requestAnimationFrame(animate);
    o.scene1Empty.rotation.y += 0.005
}

export const removeScene1 = (o) => {
    gsap.to(o.platform.position, { duration: 1.5, y: -2, ease: 'elastic.in(1, 1)' })
    setTimeout(() => {
        o.scene1Empty.visible = false
        cancelAnimationFrame(myReq);
    }, 1500);
}