import Home from './pages/Home'
import Start from './pages/Start'
import Select from './pages/Select'
import Play from './pages/Play'
import {Routes, Route} from 'react-router-dom';

function App(){
  return (
    <div className="App">
      <header className="App-header">
      <Routes>
        <Route exact path="/" element={<Start />} />
        <Route path="/home" element={<Home />} />
        <Route path="/select" element={<Select />} />
        <Route path="/play" element={<Play />} />
      </Routes>
      </header>
    </div>
  )
}

export default App;
