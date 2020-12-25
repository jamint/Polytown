import React, { useEffect, useContext } from 'react'
import { AnimStateContext } from '../../pages/Home'
import { gsap } from 'gsap'

export default function AnimationUI(props) {
    const value = useContext(AnimStateContext)

    useEffect(() => {
        gsap.set('.buttons', { alpha: 0 })
        gsap.to('.buttons', { alpha: 1, duration: 0.6, delay: 3 })
    }, [value])

    return (
        <div className="buttons">
            <button className="left" onClick={() => props.handleAnimChange("left")}>&larr;</button>
            <button className="right" onClick={() => props.handleAnimChange("right")}>&rarr;</button>
        </div>
    )
}