

import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
function App() {

  

  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route  path='/about' exact Component={About}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
