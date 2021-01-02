import {
    Switch,
    Route,
} from "react-router-dom";

import BallLoop from './scenes/BallLoop'
import Balls from './scenes/Balls'
import Characters from './scenes/Characters'
import FireStation from './scenes/FireStation'
import Tester from './scenes/Tester'

function Main() {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={BallLoop} />
                <Route exact path='/balls' component={Balls} />
                <Route exact path='/ball-loop' component={BallLoop} />
                <Route path='/characters' component={Characters} />
                {/* <Route path='/fire-station' component={FireStation} /> */}
                <Route path='/tester' component={Tester} />
            </Switch>
        </main>
    );
}

export default Main;