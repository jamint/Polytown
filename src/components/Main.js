import {
    Switch,
    Route,
} from "react-router-dom";

import BallLoop from './scenes/BallLoop'
import Balls from './scenes/Balls'
import Characters from './scenes/Characters'
import FireStation from './scenes/FireStation'
import KaleidoscopeColor from './scenes/KaleidoscopeColor'
import KaleidoscopeChocolate from './scenes/KaleidoscopeChocolate'

function Main() {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={KaleidoscopeChocolate} />
                <Route path='/kaleidoscope-color' component={KaleidoscopeColor} />
                <Route path='/kaleidoscope-chocolate' component={KaleidoscopeChocolate} />
                <Route exact path='/balls' component={Balls} />
                <Route exact path='/ball-loop' component={BallLoop} />
                <Route path='/characters' component={Characters} />
                {/* <Route path='/fire-station' component={FireStation} /> */}
            </Switch>
        </main>
    );
}

export default Main;