import React from 'react';
import styles from './Sobre.module.css';

const Sobre = () => {
  return (
    <div className={styles.container}>
      <h1>Sobre o Sistema</h1>
      
      <div className={styles.content}>
        <section className={styles.section}>
          <h2>📋 Sistema ListaTarefa</h2>
          <p>
            Este é um sistema desenvolvido em React para gerenciar tarefas diárias de forma eficiente.
            Com uma interface intuitiva e responsiva, você pode organizar todas as suas atividades
            em um só lugar.
          </p>
        </section>
        
        <section className={styles.section}>
          <h2>🚀 Tecnologias Utilizadas</h2>
          <div className={styles.techGrid}>
            <div className={styles.techCard}>
              <h3>React</h3>
              <p>Biblioteca JavaScript para construção da interface do usuário</p>
            </div>
            <div className={styles.techCard}>
              <h3>React Router DOM</h3>
              <p>Navegação entre páginas (SPA - Single Page Application)</p>
            </div>
            <div className={styles.techCard}>
              <h3>CSS Modules</h3>
              <p>Estilização modular e escopada dos componentes</p>
            </div>
            <div className={styles.techCard}>
              <h3>LocalStorage</h3>
              <p>Persistência de dados no navegador do usuário</p>
            </div>
          </div>
        </section>
        
        <section className={styles.section}>
          <h2>✅ Funcionalidades</h2>
          <ul className={styles.featuresList}>
            <li><strong>CRUD Completo:</strong> Criar, Ler, Atualizar e Deletar tarefas</li>
            <li><strong>SPA:</strong> Navegação sem recarregar a página</li>
            <li><strong>Props:</strong> Componentes reutilizáveis com passagem de dados</li>
            <li><strong>Design Responsivo:</strong> Funciona em desktop e mobile</li>
            <li><strong>4 Páginas:</strong> Início, Tarefas, Nova Tarefa e Sobre</li>
            <li><strong>Componentes Fixos:</strong> Navbar e Footer em todas as páginas</li>
          </ul>
        </section>
        
        <section className={styles.section}>
          <h2>🎯 Requisitos Atendidos</h2>
          <div className={styles.requirements}>
            <span className={styles.requirement}>✅ Props</span>
            <span className={styles.requirement}>✅ Componentes SPA</span>
            <span className={styles.requirement}>✅ HTML/CSS/JS</span>
            <span className={styles.requirement}>✅ 4 Páginas</span>
            <span className={styles.requirement}>✅ Navbar/Footer Fixos</span>
            <span className={styles.requirement}>✅ Responsivo</span>
            <span className={styles.requirement}>✅ Organização de Pastas</span>
            <span className={styles.requirement}>✅ CSS Modules</span>
            <span className={styles.requirement}>✅ GitHub</span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Sobre;