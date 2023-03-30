// import Home from './pages/Home'
// import Select from './pages/Select'
// import Play from './pages/Play'
import {Home,Select,Play, Test} from './pages'
import Header from './components/utils/Header'
import {Routes, Route} from 'react-router-dom';
import './App.css';

function App(){
  return (
    <div className="App">
      <div className="App-wrapper">
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/select" element={<Select />} />
        <Route path="/play" element={<Play />} />
        <Route path="/test" element={<Test />} />
      </Routes>
      </div>
    </div>
  )
}

export default App;
