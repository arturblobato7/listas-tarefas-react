import React from 'react';
import styles from './TarefaItem.module.css';

const TarefaItem = ({ id, titulo, descricao, concluida, onToggle, onDelete }) => {
  return (
    <div className={`${styles.tarefa} ${concluida ? styles.concluida : ''}`}>
      <div className={styles.tarefaConteudo}>
        <h3>{titulo}</h3>
        <p>{descricao || 'Sem descrição'}</p>
      </div>
      <div className={styles.tarefaAcoes}>
        <button 
          onClick={() => onToggle(id)}
          className={styles.toggleBtn}
        >
          {concluida ? 'Desfazer' : 'Concluir'}
        </button>
        <button 
          onClick={() => onDelete(id)}
          className={styles.deleteBtn}
        >
          Excluir
        </button>
      </div>
    </div>
  );
};

export default TarefaItem;