import {
    Switch,
    Route,
} from "react-router-dom";

// import Home from '../pages/Home'
// import Shop from '../pages/Shop'
// import About from '../pages/About'
import BallLoop from './test-scene/BallLoop'
import BallLoop2 from './test-scene/BallLoop2'
import Characters from './test-scene/Characters'

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