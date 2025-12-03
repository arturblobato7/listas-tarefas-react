import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1>Bem-vindo ao ListaTarefa</h1>
        <p>Gerencie suas tarefas diárias de forma eficiente</p>
        <Link to="/tarefas" className={styles.ctaButton}>
          Ver Minhas Tarefas
        </Link>
      </div>

      <div className={styles.features}>
        <div className={styles.feature}>
          <div className={styles.featureIcon}>✅</div>
          <h3>Adicione Tarefas</h3>
          <p>Crie novas tarefas com título e descrição</p>
        </div>
        <div className={styles.feature}>
          <div className={styles.featureIcon}>📋</div>
          <h3>Organize</h3>
          <p>Marque tarefas como concluídas</p>
        </div>
        <div className={styles.feature}>
          <div className={styles.featureIcon}>🗑️</div>
          <h3>Remova</h3>
          <p>Exclua tarefas que não são mais necessárias</p>
        </div>
      </div>
    </div>
  );
};

export default Home;