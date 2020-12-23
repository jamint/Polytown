import { gsap } from 'gsap'

export const playScene0 = (o) => {
    setTimeout(() => {
        o.platform.visible = true
        gsap.set(o.scene0Empty, { visible: true })
        gsap.set(o.platform, { visible: true })
        gsap.fromTo(o.platform.position, { y: -2 }, { duration: 2, y: 1.2, ease: 'elastic.out(1, 1)' })
    }, 2000);
}
export const removeScene0 = (o) => {
    gsap.to(o.platform.position, { duration: 1.5, y: -2, ease: 'elastic.in(1, 1)' })
    setTimeout(() => {
        o.scene0Empty.visible = false
    }, 1500);
}