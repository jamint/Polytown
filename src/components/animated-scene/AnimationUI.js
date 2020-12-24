import React, { useContext } from 'react'

export default function AnimationUI(props) {

    return (
        <div className="buttons">
            <button className="left" onClick={() => props.handleAnimChange("left")}>Left</button>
            <button className="right" onClick={() => props.handleAnimChange("right")}>Right</button>
        </div>
    )
}