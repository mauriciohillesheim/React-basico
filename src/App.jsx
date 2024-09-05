import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RickAndMortyApi from './pages/ApiRickAndMorty';

function App() {
  return (
    <>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api" element={<RickAndMortyApi />} />
        {/* Rota de fallback para páginas não encontradas */}
        <Route path="*" element={<h1>404 - Página Não Encontrada</h1>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
