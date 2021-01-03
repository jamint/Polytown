const AnimatedPlatformLights = ({ color = "#ffffff" }) => {
    const intensity = 1
    return (
        <>
            <ambientLight intensity={intensity} />
            <spotLight
                intensity={intensity}
                color={color}
                position={[5, 5, 5]}
                castShadow
                penumbra={0.5}
                shadowBias={-0.0004}
                angle={Math.PI / 4}
                shadow-mapSize-height={1024}
                shadow-mapSize-width={1024}
            />
            <spotLight
                intensity={1}
                color={color}
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
                color={'white'}
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