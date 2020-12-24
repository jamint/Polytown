import { gsap } from 'gsap'
import { useEffect } from 'react'

const thisAnimationNum = 2
let obj = null
let myReq = null

export default function Animation2(props) {
    useEffect(() => {
        obj = props.obj
    }, [])
    useEffect(() => {
        if (props.currAnim === thisAnimationNum) {
            playAnimation()
        }
        if (props.prevAnim === thisAnimationNum) {
            removeAnimation()
        }
    }, [props.currAnim])
    return null
}
function playAnimation() {
    setTimeout(() => {
        gsap.set(obj.scene2Empty, { visible: true })
        gsap.fromTo(obj.platform.position, { y: -2 }, { duration: 2, y: 1.2, ease: 'elastic.out(1, 1)' })
        myReq = requestAnimationFrame(animate);
    }, 2000);
}
const animate = () => {
    myReq = requestAnimationFrame(animate);
    obj.scene1Empty.rotation.y += 0.005
}

function removeAnimation() {
    gsap.to(obj.platform.position, { duration: 1.5, y: -2, ease: 'elastic.in(1, 1)' })
    setTimeout(() => {
        obj.scene2Empty.visible = false
        cancelAnimationFrame(myReq);
    }, 1500);
}