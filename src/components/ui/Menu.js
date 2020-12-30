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
        console.log('clicked')
    }
    return (
        <>
            <div className="label" onClick={() => handleClick()}>More</div>
            <div className="menu">
                <ul>
                    <li><Link to="/shop">About</Link></li>
                    <li>Two</li>
                    <li>Three</li>
                </ul>
            </div>
        </>
    )
}