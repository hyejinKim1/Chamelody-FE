// import Home from './pages/Home'
// import Select from './pages/Select'
// import Play from './pages/Play'
import {Home,Select,Play} from './pages'
import Header from './components/utils/Header'
import {Routes, Route} from 'react-router-dom';
import './css/App.css';

function App(){
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/select" element={<Select />} />
        <Route path="/play" element={<Play />} />
      </Routes>
    </div>
  )
}

export default App;
