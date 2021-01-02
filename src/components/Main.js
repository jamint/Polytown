import {
    Switch,
    Route,
} from "react-router-dom";

import BallLoop from './scenes/BallLoop'
import Balls from './scenes/Balls'
import Characters from './scenes/Characters'
import FireStation from './scenes/FireStation'
import Tester from './scenes/Tester'
import Tester2 from './scenes/Tester2'

function Main() {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={Tester2} />
                <Route path='/tester' component={Tester} />
                <Route path='/tester2' component={Tester2} />
                <Route exact path='/balls' component={Balls} />
                <Route exact path='/ball-loop' component={BallLoop} />
                <Route path='/characters' component={Characters} />
                {/* <Route path='/fire-station' component={FireStation} /> */}
            </Switch>
        </main>
    );
}

export default Main;