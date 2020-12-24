import './App.scss';
import Header from './components/Header'
import Main from './components/Main'
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Main />
        <Header />
      </div>
    </Router>
  );
}

export default App;
