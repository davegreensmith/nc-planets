import './App.css';
import Header from './components/Header';
import PlanetList from './components/PlanetList';
import SinglePlanet from './components/SinglePlanet';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <Link to="/planets">Planets</Link>

        <Routes>
          <Route path="/" element={<Header />}></Route>
          <Route path="/planets" element={<PlanetList />}></Route>
          <Route path="/planets/:planet_id" element={<SinglePlanet />}></Route>
        </Routes>
      </div>
      ;
    </BrowserRouter>
  );
}

export default App;
