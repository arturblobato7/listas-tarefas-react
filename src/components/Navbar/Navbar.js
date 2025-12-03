import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>ListaTarefa</Link>
      <div className={styles.links}>
        <Link to="/">Início</Link>
        <Link to="/tarefas">Tarefas</Link>
        <Link to="/nova">Nova Tarefa</Link>
        <Link to="/sobre">Sobre</Link>
      </div>
    </nav>
  );
};

export default Navbar;