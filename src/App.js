import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Corretores from './pages/Corretores';
import Segurados from './pages/Segurados';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Proponentes from './pages/Proponentes';
import RequireAuth from './components/RequireAuth';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>

          {/* Publicas */}
          <Route path="/login" element={<Login/>}/>

          {/* Protegidas */}
          <Route element={<RequireAuth/>}>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/Corretores" element={<Corretores/>}/>
            <Route path="/Segurados" element={<Segurados/>}/>
            <Route path="/Proponentes" element={<Proponentes/>}/>
          </Route>

          {/* Catch-all */}
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
