const AnimatedPlatformLights = ({ intensity = 0.3 }) => {
    return (
        <>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={2} />
            <pointLight position={[-10, -10, -5]} color="red" intensity={5} />
            <pointLight position={[0, -10, 0]} intensity={1.5} />
        </>
    )
}

export default AnimatedPlatformLights