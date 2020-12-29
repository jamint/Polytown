const AnimatedPlatformLights = () => {
    const intensity = 0.3
    return (
        <>
            <ambientLight intensity={intensity} />
            <spotLight
                intensity={intensity}
                position={[5, 5, 5]}
                castShadow
                penumbra={0.5}
                shadowBias={-0.0004}
                angle={Math.PI / 4}
                shadow-mapSize-height={1024}
                shadow-mapSize-width={1024}
            />
            <spotLight
                intensity={intensity}
                position={[-5, 5, 5]}
                castShadow
                penumbra={0.5}
                shadowBias={-0.0004}
                angle={Math.PI / 4}
                shadow-mapSize-height={1024}
                shadow-mapSize-width={1024}
            />
            <pointLight
                intensity={intensity}
                position={[1, 5, 1]}
                castShadow
                shadowBias={-0.0004}
                shadow-mapSize-height={1024}
                shadow-mapSize-width={1024}
            />
        </>
    )
}

export default AnimatedPlatformLights