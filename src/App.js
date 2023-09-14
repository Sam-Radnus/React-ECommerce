import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import { BrowserRouter as Router, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
     <Router>
      <Navbar />
       <Shop/>
    </Router>
    </div>
  );
}

export default App;
