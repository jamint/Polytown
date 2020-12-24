import React, { useState, useRef, useEffect } from 'react'
import AnimatedScene from '../components/animated-scene/AnimatedScene'
import AnimationUI from '../components/animated-scene/AnimationUI'

export const AnimStateContext = React.createContext();

function Home() {
    const [currCount, setCurrCount] = useState(0)
    const prevCountRef = useRef()

    useEffect(() => {
        prevCountRef.current = currCount;
    });
    const prevCount = prevCountRef.current;

    console.log(currCount)
    console.log(prevCount)
    console.log("==========")

    function changeNum(direction) {
        const dir = (direction === "left") ? currCount - 1 : currCount + 1
        setCurrCount(dir)
    }

    return (
        <AnimStateContext.Provider value={currCount}>
            <AnimatedScene />
            <AnimationUI handleAnimChange={(direction) => changeNum(direction)} />
        </AnimStateContext.Provider>
    );
}

export default Home;