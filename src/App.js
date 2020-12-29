import './App.scss';
import Header from './components/Header'
import Main from './components/Main'
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Main />
          <Header />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
