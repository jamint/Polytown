import { gsap } from 'gsap'

export const initialSequence = (
    {
        camera,
        mainEmpty,
        platform,
        platform02,
        arch01 }
) => {
    gsap.from(camera.position, { duration: 5, y: 1 })
    gsap.from(mainEmpty.scale, { duration: 3.5, x: 0, y: 0, z: 0, ease: 'elastic.out(1, 1)' })
    gsap.from(mainEmpty.rotation, { duration: 3.5, y: Math.PI, ease: 'elastic.out(1, 1)' })
    gsap.from(platform02.scale, { duration: 2, y: 0, ease: 'elastic.out(1, 1)', delay: 1 })
    gsap.from(platform.position, { duration: 2, y: -2, delay: 1.5, ease: 'elastic.out(1, 1)' })
    gsap.from(arch01.scale, { duration: 2, z: 0, y: 0, ease: 'elastic.out(1, 1)', delay: 1.2 })
}