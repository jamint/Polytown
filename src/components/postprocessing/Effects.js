import { useMemo, useEffect } from 'react'
import { useLoader, useThree, useFrame } from 'react-three-fiber'
import {
    SMAAImageLoader,
    BlendFunction,
    KernelSize,
    BloomEffect,
    EffectComposer,
    EffectPass,
    RenderPass,
    SMAAEffect,
    GammaCorrectionEffect
} from 'postprocessing'

export default function Effects() {
    const { gl, scene, camera, size } = useThree()
    const smaa = useLoader(SMAAImageLoader)
    const composer = useMemo(() => {
        const composer = new EffectComposer(gl)
        composer.addPass(new RenderPass(scene, camera))
        const smaaEffect = new SMAAEffect(...smaa)
        smaaEffect.colorEdgesMaterial.setEdgeDetectionThreshold(0.1)
        const bloom = new BloomEffect({
            blendFunction: BlendFunction.SCREEN,
            kernelSize: KernelSize.HUGE,
            luminanceThreshold: 0.25,
            height: 600
        })
        const effectPass = new EffectPass(camera, smaaEffect, bloom)
        effectPass.renderToScreen = true
        composer.addPass(effectPass)
        return composer
    }, [])
    useEffect(() => void composer.setSize(size.width, size.height), [size])
    return useFrame((_, delta) => composer.render(delta), 1)
}
