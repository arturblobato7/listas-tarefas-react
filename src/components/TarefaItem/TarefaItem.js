import styles from './TarefaItem.module.css';

const TarefaItem = ({ id, titulo, descricao, concluida, onToggle, onDelete }) => {
  return (
    <div className={styles.card}>
      <input
        type="checkbox"
        checked={concluida}
        onChange={() => onToggle(id)}
      />

      <div className={styles.info}>
        <h3 className={concluida ? styles.done : ''}>{titulo}</h3>
        <p>{descricao}</p>
      </div>

      <button onClick={() => onDelete(id)}>Excluir</button>
    </div>
  );
};

export default TarefaItem;