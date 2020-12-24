import { gsap } from 'gsap'
let myReq = null
let o = null

export const playScene2 = (obj) => {
    o = obj
    setTimeout(() => {
        gsap.set(o.scene2Empty, { visible: true })
        gsap.fromTo(o.platform.position, { y: -2 }, { duration: 2, y: 1.2, ease: 'elastic.out(1, 1)' })
        myReq = requestAnimationFrame(animate);
    }, 2000);
}
const animate = () => {
    myReq = requestAnimationFrame(animate);
    o.scene2Empty.rotation.y += 0.005
}

export const removeScene2 = (o) => {
    gsap.to(o.platform.position, { duration: 1.5, y: -2, ease: 'elastic.in(1, 1)' })
    setTimeout(() => {
        cancelAnimationFrame(myReq);
        o.scene2Empty.visible = false
    }, 1500);
}