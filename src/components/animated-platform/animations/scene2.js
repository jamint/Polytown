import { gsap } from 'gsap'

export const playScene2 = (o) => {
    setTimeout(() => {
        gsap.set(o.scene2Empty, { visible: true })
        gsap.fromTo(o.platform.position, { y: -2 }, { duration: 2, y: 1.2, ease: 'elastic.out(1, 1)' })
    }, 2000);
}

export const removeScene2 = (o) => {
    gsap.to(o.platform.position, { duration: 1.5, y: -2, ease: 'elastic.in(1, 1)' })
    setTimeout(() => {
        o.scene2Empty.visible = false
    }, 1500);
}