import {
    Switch,
    Route,
} from "react-router-dom";
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import About from '../pages/About'

function Main() {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/shop' component={Shop} />
                <Route path='/about' component={About} />
            </Switch>
        </main>
    );
}

export default Main;