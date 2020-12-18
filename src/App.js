import './App.scss';
import Header from './components/Header'
import Animation from './components/Animation'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <Animation />
        <Header />
      </div>
    </RecoilRoot>
  );
}

export default App;
