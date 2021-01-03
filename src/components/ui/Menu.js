import { useState, useEffect } from 'react'
import Shop from '../../pages/Shop'
import {
    Link,
    NavLink
} from "react-router-dom";
import '../../styles/menu.scss'

export default function Menu() {
    const [panelIsOpen, setPanelIsOpen] = useState(false)

    useEffect(() => {

        const btn = document.querySelector('.menu')
        if (panelIsOpen) {
            btn.classList.add('open')
        } else {
            btn.classList.remove('open')
        }
        // console.log(panelIsOpen)
    }, [panelIsOpen])

    function handleClick() {
        setPanelIsOpen(!panelIsOpen)
    }
    return (
        <>
            <div className="label" onClick={() => handleClick()}>Experiments</div>
            <div className="menu" onClick={() => handleClick()} >
                <div className="close">
                    <div className="btn">&#10005;</div>
                </div>
                <ul>
                    <NavLink activeClassName="active" to="/"><li>Kaleidoscope Black and Gold</li></NavLink>
                    <NavLink activeClassName="active" to="/kaleidoscope-color"><li>Kaleidoscope Color</li></NavLink>
                    <NavLink activeClassName="active" to="/kaleidoscope-chocolate"><li>Kaleidoscope Chocolate</li></NavLink>
                    <NavLink activeClassName="active" to="/balls"><li>Balls</li></NavLink>
                    <NavLink activeClassName="active" to="/ball-loop"><li>Ball Loop</li></NavLink>
                    <NavLink activeClassName="active" to="/characters"><li>Characters</li></NavLink>

                </ul>
            </div>
        </>
    )
}