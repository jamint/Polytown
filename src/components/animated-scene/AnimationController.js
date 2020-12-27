import Animation0 from './animations/Animation0'
import Animation1 from './animations/Animation1'
import Animation2 from './animations/Animation2'
import Animation3 from './animations/Animation3'

export const numAnimations = 4

export default function AnimationController(props) {
    return (
        <>
            <Animation0 currAnim={props.currAnim} prevAnim={props.prevAnim} obj={props.obj} />
            <Animation1 currAnim={props.currAnim} prevAnim={props.prevAnim} obj={props.obj} />
            <Animation2 currAnim={props.currAnim} prevAnim={props.prevAnim} obj={props.obj} />
            <Animation3 currAnim={props.currAnim} prevAnim={props.prevAnim} obj={props.obj} />
        </>
    )
}