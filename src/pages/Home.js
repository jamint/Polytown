import React, { useState, useRef, useEffect } from 'react'
// import TestScene from '../components/test-scene/TestScene'
import AnimationTestScene from '../components/test-scene/AnimationTestScene'
import BallLoop from '../components/test-scene/BallLoop'
// import Menu from '../components/ui/Menu'
// import AnimatedScene from '../components/animated-scene/AnimatedScene'
// import AnimationUI from '../components/animated-scene/AnimationUI'
import { numAnimations } from '../components/animated-scene/AnimationController'

export const AnimStateContext = React.createContext();

function Home() {
    // const [currAnim, setCurrAnim] = useState(3)

    // const prevAnimRef = useRef()
    // const prevAnim = prevAnimRef.current;

    // useEffect(() => {
    //     prevAnimRef.current = currAnim;
    // }, [currAnim]);

    // function changeNum(direction) {
    //     let anim = (direction === "left") ? currAnim - 1 : currAnim + 1

    //     if (anim >= numAnimations) {
    //         anim = 0
    //     }
    //     if (anim < 0) {
    //         anim = numAnimations - 1
    //     }
    //     console.log("anim: " + anim)
    //     setCurrAnim(anim)
    // }

    return (
        // <AnimStateContext.Provider value={{ currAnim, prevAnim }} >
        <>
            {/* <TestScene /> */}
            {/* <AnimationTestScene /> */}
            <BallLoop />
            {/* <Menu /> */}
        </>
        //     <AnimatedScene />
        //     <AnimationUI handleAnimChange={(direction) => changeNum(direction)} /> */}
        // </ AnimStateContext.Provider>
    );
}

export default Home;