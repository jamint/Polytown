import React, { Suspense, useContext } from 'react'
import { Canvas } from 'react-three-fiber'
import { OrbitControls } from 'drei'
import AnimatedPlatformLights from '../lights/AnimatedPlatformLights'
import { AnimStateContext } from '../../pages/Home'
import Model from './Model'

function AnimatedScene() {
    const value = useContext(AnimStateContext);

    return (
        <div className="three-anim">
            <Canvas colorManagement shadowMap camera={{ fov: 30, position: [0, 0, 12] }}>
                <AnimatedPlatformLights />
                <Suspense fallback={null}>
                    <Model state={value} />
                </Suspense>
                <OrbitControls enableZoom={false} />
            </Canvas>
        </div >
    );
}

export default AnimatedScene;