export default function AnimationUI(props) {

    return (
        <div className="buttons">
            <button className="left" onClick={() => props.handleAnimChange("left")}>&larr;</button>
            <button className="right" onClick={() => props.handleAnimChange("right")}>&rarr;</button>
        </div>
    )
}