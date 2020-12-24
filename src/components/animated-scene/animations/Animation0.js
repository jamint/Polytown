import { gsap } from 'gsap'
import { useEffect } from 'react'

const thisAnimationNum = 0
const numCircles = 100

let obj = null
let myReq = null
let circlesArr = []


export default function Animation0(props) {
    useEffect(() => {
        console.log("set obj .....")
        obj = props.obj
    }, [])
    useEffect(() => {

        if (props.currAnim === thisAnimationNum) {
            console.log("play 0")
            playAnimation()
        }
        if (props.prevAnim === thisAnimationNum) {
            console.log("remove 0")
            removeAnimation()
        }
    }, [props.currAnim])
    return null
}
function playAnimation() {
    console.log(obj)
    setTimeout(() => {
        obj.platform.visible = true
        gsap.set(obj.scene0Empty, { visible: true })
        gsap.set(obj.platform, { visible: true })
        gsap.fromTo(obj.platform.position, { y: -2 }, { duration: 2, y: 1.2, ease: 'elastic.out(1, 1)' })
        myReq = requestAnimationFrame(animate);
    }, 2000);
    console.log(obj.circle)
    setTimeout(() => {
        for (let i = 0; i < numCircles; i++) {
            // console.log(obj.circle)
            const circ = obj.circle.clone()
            circ.name = "s" + i
            obj.scene0Empty.add(circ)
            circlesArr.push(circ)
            const x = Math.random() * 2 - 1;
            const y = Math.random() * 2 - 1;
            const z = Math.random() * 2 - 1;
            gsap.to(circ.position, { duration: 1, x, y: y + 1.5, z, delay: 2.5 + i * 0.001, ease: 'elastic.out(1, 1)' })
        }
    }, 10);
}
const animate = () => {
    myReq = requestAnimationFrame(animate);
    obj.scene0Empty.rotation.y += 0.005
}

function removeAnimation() {
    for (let i = 0; i < circlesArr.length; i++) {
        const circ = circlesArr[i]
        gsap.to(circ.position, { duration: 1, x: 0, y: 1, z: 0, ease: 'elastic.in(1, 1)' })
    }
    gsap.to(obj.platform.position, { duration: 1.5, y: -2, ease: 'elastic.in(1, 1)' })
    setTimeout(() => {
        obj.scene0Empty.visible = false
        cancelAnimationFrame(myReq);
        for (let i = 0; i < circlesArr.length; i++) {
            const circ = circlesArr[i]
            obj.scene0Empty.remove(circ)
        }
        circlesArr = []
    }, 1500);
}