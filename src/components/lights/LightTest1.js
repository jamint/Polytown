export default function LightTest1() {
    return (
        <>
            <hemisphereLight
                intensity={0}
                skyColor='red'
                groundColor='green'
                position={[-10, 10, 5]}
            />
            <spotLight
                color='#fff'
                intensity={1}
                position={[10, 20, 10]}
                castShadow
                shadow-mapSize-height={1024 * 4}
                shadow-mapSize-width={1024 * 4}
                shadowBias={-0.0001}
            />
        </>
    )
}