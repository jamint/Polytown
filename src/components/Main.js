import {
    Switch,
    Route,
} from "react-router-dom";

import BallLoop from './scenes/BallLoop'
import Characters from './scenes/Characters'
import FireStation from './scenes/FireStation'

function Main() {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={BallLoop} />
                <Route exact path='/ball-loop' component={BallLoop} />
                <Route path='/characters' component={Characters} />
                <Route path='/fire-station' component={FireStation} />
            </Switch>
        </main>
    );
}

export default Main;