import Animation0 from './animations/Animation0'

export default function AnimationController(props) {
    return (
        <>
            <Animation0 currAnim={props.currAnim} prevAnim={props.prevAnim} obj={props.obj} />
        </>
    )
}