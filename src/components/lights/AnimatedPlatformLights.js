const AnimatedPlatformLights = () => {
    return (
        <>
            <ambientLight intensity={0.3} />
            <spotLight
                intensity={0.9}
                position={[5, 5, 5]}
                castShadow
                penumbra={0.5}
                shadowBias={-0.0004}
                angle={Math.PI / 4}
                shadow-mapSize-height={1024}
                shadow-mapSize-width={1024}
            />
            <spotLight
                intensity={0.9}
                position={[-5, 5, 5]}
                castShadow
                penumbra={0.5}
                shadowBias={-0.0004}
                angle={Math.PI / 4}
                shadow-mapSize-height={1024}
                shadow-mapSize-width={1024}
            />
            <pointLight
                intensity={0.9}
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