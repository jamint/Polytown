// import { sceneNum, setSceneNum } from "../../state";
// import { useRecoilState } from "recoil";
import './buttons.scss'

export default function Buttons() {
    // const [scene, setScene] = useRecoilState(sceneNum);

    const handleClick = () => {
        console.log('clicked')
    }

    return (
        <div className="buttons">
            <button onClick={() => handleClick(0)}>Button0</button>
            <button onClick={() => handleClick(1)} > Button1</button>
            <button onClick={() => handleClick(2)}> Button2</button>
        </div>
    )
}