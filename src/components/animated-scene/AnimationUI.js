import React, { useContext } from 'react'
import { AnimStateContext } from '../../pages/Home'

export default function AnimationUI(props) {
    const value = useContext(AnimStateContext);

    return (
        <div className="buttons">
            <button className="left" onClick={() => props.handleAnimChange("left")}>Left {value}</button>
            <button className="right" onClick={() => props.handleAnimChange("right")}>Right</button>
        </div>
    )
}