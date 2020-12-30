import './App.scss';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';

import Main from './components/Main'
import Header from './components/Header'
import Menu from './components/ui/Menu'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Main />
          <Header />
          <Menu />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
