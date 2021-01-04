import {
    Switch,
    Route,
} from "react-router-dom";

import BallLoop from './scenes/BallLoop'
import Balls from './scenes/Balls'
import Characters from './scenes/Characters'
import KaleidoscopeColor from './scenes/KaleidoscopeColor'
import KaleidoscopeChocolate from './scenes/KaleidoscopeChocolate'
import KaleidoscopeGoldenShapes from './scenes/KaleidoscopeGoldenShapes'
import Emoji from './scenes/Emoji'
import Tester from './scenes/Tester'

function Main() {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={KaleidoscopeGoldenShapes} />

                <Route path='/tester' component={Tester} />
                <Route exact path='/kaleidoscope-golden-shapes' component={KaleidoscopeGoldenShapes} />
                <Route exact path='/emoji' component={Emoji} />
                <Route path='/kaleidoscope-color' component={KaleidoscopeColor} />
                <Route path='/kaleidoscope-chocolate' component={KaleidoscopeChocolate} />
                <Route exact path='/balls' component={Balls} />
                <Route exact path='/ball-loop' component={BallLoop} />
                <Route path='/characters' component={Characters} />
            </Switch>
        </main>
    );
}

export default Main;