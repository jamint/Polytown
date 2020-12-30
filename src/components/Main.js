import {
    Switch,
    Route,
} from "react-router-dom";

import BallLoop from './scenes/BallLoop'
import BallLoop2 from './scenes/BallLoop2'
import Characters from './scenes/Characters'

function Main() {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={BallLoop} />
                <Route exact path='/ball-loop' component={BallLoop} />
                <Route path='/ball-loop-2' component={BallLoop2} />
                <Route path='/characters' component={Characters} />
            </Switch>
        </main>
    );
}

export default Main;