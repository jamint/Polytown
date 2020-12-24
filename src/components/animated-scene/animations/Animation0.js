import { gsap } from 'gsap'
import { useEffect } from 'react'

const thisAnimationNum = 0
// let circlesArr = []
// const numCircles = 100
// let myReq = null
// let o = null

export default function Animation0({ state, model }) {
    useEffect(() => {
        console.log("state changed...")
    }, [state])
    // if (state === thisAnimationNum) {
    // console.log("it's 000000000")
    // }
    // console.log(state, model)
    return null
    // o = obj
    // setTimeout(() => {
    //     o.platform.visible = true
    //     gsap.set(o.scene0Empty, { visible: true })
    //     gsap.set(o.platform, { visible: true })
    //     gsap.fromTo(o.platform.position, { y: -2 }, { duration: 2, y: 1.2, ease: 'elastic.out(1, 1)' })
    //     myReq = requestAnimationFrame(animate);
    // }, 2000);
    // for (let i = 0; i < numCircles; i++) {
    //     const circ = o.circle.clone()
    //     circ.name = "s" + i
    //     o.scene0Empty.add(circ)
    //     circlesArr.push(circ)
    //     const x = Math.random() * 2 - 1;
    //     const y = Math.random() * 2 - 1;
    //     const z = Math.random() * 2 - 1;
    //     gsap.to(circ.position, { duration: 1, x, y: y + 1.5, z, delay: 2.5 + i * 0.001, ease: 'elastic.out(1, 1)' })
    // }
}
// const animate = () => {
    // myReq = requestAnimationFrame(animate);
    // o.scene0Empty.rotation.y += 0.005
// }

// export const removeScene0 = (o) => {
    // for (let i = 0; i < circlesArr.length; i++) {
    //     const circ = circlesArr[i]
    //     gsap.to(circ.position, { duration: 1, x: 0, y: 1, z: 0, ease: 'elastic.in(1, 1)' })
    // }
    // gsap.to(o.platform.position, { duration: 1.5, y: -2, ease: 'elastic.in(1, 1)' })
    // setTimeout(() => {
    //     o.scene0Empty.visible = false
    //     cancelAnimationFrame(myReq);
    //     for (let i = 0; i < circlesArr.length; i++) {
    //         const circ = circlesArr[i]
    //         o.scene0Empty.remove(circ)
    //     }
    //     circlesArr = []
    // }, 1500);
// }