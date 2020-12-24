import React, { useState, useRef, useEffect } from 'react'
import AnimatedScene from '../components/animated-scene/AnimatedScene'
import AnimationUI from '../components/animated-scene/AnimationUI'

export const AnimStateContext = React.createContext();

function Home() {
    const [currAnim, setCurrAnim] = useState(0)

    const prevAnimRef = useRef()
    const prevAnim = prevAnimRef.current;
    useEffect(() => {
        prevAnimRef.current = currAnim;
    }, [currAnim]);

    function changeNum(direction) {
        const dir = (direction === "left") ? currAnim - 1 : currAnim + 1
        setCurrAnim(dir)
    }

    return (
        <AnimStateContext.Provider value={{ currAnim, prevAnim }} >
            <AnimatedScene />
            <AnimationUI handleAnimChange={(direction) => changeNum(direction)} />
        </ AnimStateContext.Provider>
    );
}

export default Home;