import {
    Switch,
    Route,
} from "react-router-dom";

import BallLoop from './scenes/BallLoop'
import Balls from './scenes/Balls'
import Characters from './scenes/Characters'
import KaleidoscopeColor from './scenes/KaleidoscopeColor'
import KaleidoscopeChocolate from './scenes/KaleidoscopeChocolate'
import Tester04 from './scenes/Tester04'

function Main() {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={Tester04} />
                <Route exact path='/tester-03' component={Tester04} />
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