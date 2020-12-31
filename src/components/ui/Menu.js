import { useState, useEffect } from 'react'
import Shop from '../../pages/Shop'
import {
    Link
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
        console.log(panelIsOpen)
    }, [panelIsOpen])

    function handleClick() {
        setPanelIsOpen(!panelIsOpen)
    }
    return (
        <>
            <div className="label" onClick={() => handleClick()}>Experiments</div>
            <div className="menu" onClick={() => handleClick()} >
                <div className="close"></div>
                <ul>
                    <li><Link to="/ball-loop">Ball Loop</Link></li>
                    <li><Link to="/characters">Characters</Link></li>
                    <li><Link to="/fire-station">Fire Truck</Link></li>
                </ul>
            </div>
        </>
    )
}