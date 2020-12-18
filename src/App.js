import './App.scss';
import Header from './components/Header'
import Main from './components/Main'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <RecoilRoot>
        <div className="App">
          <Main />
          <Header />
        </div>
      </RecoilRoot>
    </Router>
  );
}

export default App;
