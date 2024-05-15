import './App.css';
import Navbar from './components/navbar';
import Outsdie from './components/outsdie'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <Router>
    <Navbar/>
    <Routes>
          <Route path="/" element={<Outsdie  key={"general"}  category="general"/>}/>
          <Route path="/business" element={<Outsdie  key={"business"}  category="business"/>}/>
          <Route path="/health" element={<Outsdie  key={"health"}  category="health"/>}/>
          <Route path="/sports" element={<Outsdie  key={"sports"}  category="sports"/>}/>
          <Route path="/entertainment" element={<Outsdie  key={"entertainment"}  category="entertainment"/>}/>
          <Route path="/science" element={<Outsdie  key={"science"}  category="science"/>}/>
          <Route path="/technology" element={<Outsdie  key={"technology"}  category="technology"/>}/>
        </Routes>
    
    </Router>
  );
}

export default App;
