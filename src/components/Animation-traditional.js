import { useEffect } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

function Animation2() {
    let renderer, scene, control, requestAnimation, camera, mainModel

    useEffect(() => {
        scene = new THREE.Scene()
        camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 1000)
        camera.position.z = 12
        camera.position.y = 3
        camera.lookAt(0, 0, 0)

        renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' })
        renderer.shadowMap.enabled = true
        renderer.shadowMap.type = THREE.PCFSoftShadowMap
        renderer.shadowMapSoft = true
        renderer.outputEncoding = THREE.sRGBEncoding
        renderer.setPixelRatio(window.devicePixelRatio)
        renderer.setSize(window.innerWidth, window.innerHeight)
        document.querySelector('.three-anim').appendChild(renderer.domElement)
        renderer.render(scene, camera)
        control = new OrbitControls(camera, renderer.domElement)
        control.minDistance = 1
        control.maxDistance = 40
        control.maxPolarAngle = Math.PI / 2
        control.enableZoom = false;
        let light1 = new THREE.AmbientLight(0xffffff, 0.1)
        scene.add(light1)
        const light3 = new THREE.SpotLight(0xffffff, 2)
        light3.position.set(5, 5, 5)
        light3.shadow.bias = -0.0004
        light3.penumbra = 0.5
        light3.castShadow = true
        light3.angle = Math.PI / 4;
        light3.shadow.mapSize.set(1024, 1024)
        scene.add(light3)
        console.log(light3)

        const loader = new GLTFLoader()
        loader.load(
            'models/animation-01.glb',
            function (gltf) {
                mainModel = gltf.scene
                scene.add(mainModel)
                gltf.scene.traverse(child => {
                    if (child.isMesh) {
                        child.castShadow = true
                        child.receiveShadow = true
                        // console.log(child)
                        // child.material = child.material.clone()
                        //         // set unique material to each meshes
                        //         child.material = child.material.clone()
                    }
                    //     if (child.name === 'Lid') lid = child
                    //     if (child.name === 'Filter') filter = child
                    //     if (child.name === 'Cup') cup = child
                })
                // startAnimation()
            },
            undefined,
            function (error) {
                console.error(error)
            }
        )

        const animate = () => {
            requestAnimation = requestAnimationFrame(animate)
            control.update()
            renderer.render(scene, camera)
        }
        animate()
    }, []);

    return (
        <div>
            <div className="three-anim"></div>
        </div>
    )
}
export default Animation2