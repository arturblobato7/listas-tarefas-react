import React, { useEffect, useState } from 'react';
import styles from './Tarefas.module.css';

const Tarefas = () => {
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    
    const tarefasSalvas = JSON.parse(localStorage.getItem('tarefas')) || [];
    setTarefas(tarefasSalvas);
  }, []);

  return (
    <div className={styles.container}>
      <h1>Minhas Tarefas</h1>

      {tarefas.length === 0 ? (
        <div className={styles.emptyBox}>
          <p>📝 Nenhuma tarefa cadastrada ainda.</p>
          <p>Adicione sua primeira tarefa clicando em "Nova Tarefa"!</p>
        </div>
      ) : (
        <ul className={styles.lista}>
          {tarefas.map((tarefa) => (
            <li key={tarefa.id} className={styles.item}>
              <h3>{tarefa.titulo}</h3>
              <p>{tarefa.descricao}</p>
              <small>Criada em: {tarefa.dataCriacao}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Tarefas;