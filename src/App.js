import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Tarefas from './pages/Tarefas/Tarefas';
import NovaTarefa from './pages/NovaTarefa/NovaTarefa';
import Sobre from './pages/Sobre/Sobre';
import styles from './App.module.css';

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <Navbar />
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tarefas" element={<Tarefas />} />
            <Route path="/nova" element={<NovaTarefa />} />
            <Route path="/sobre" element={<Sobre />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;