import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import TarefaItem from '../../components/TarefaItem/TarefaItem';
import styles from './Tarefas.module.css';

const STORAGE_KEY = 'tarefas';

const Tarefas = () => {
  const [tarefas, setTarefas] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      setTarefas(JSON.parse(raw));
    } else {
      setTarefas([]);
    }
  }, [location.pathname]);

  const handleToggle = (id) => {
    const atualizadas = tarefas.map(t =>
      t.id === id ? { ...t, concluida: !t.concluida } : t
    );
    setTarefas(atualizadas);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(atualizadas));
  };

  const handleDelete = (id) => {
    const filtradas = tarefas.filter(t => t.id !== id);
    setTarefas(filtradas);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtradas));
  };

  return (
    <div className={styles.container}>
      <h1>Minhas Tarefas</h1>

      {tarefas.length === 0 ? (
        <p>Nenhuma tarefa cadastrada.</p>
      ) : (
        <ul className={styles.lista}>
          {tarefas.map((tarefa) => (
            <li key={tarefa.id} className={styles.item}>
              <TarefaItem
                id={tarefa.id}
                titulo={tarefa.titulo}
                descricao={tarefa.descricao}
                concluida={tarefa.concluida}
                onToggle={handleToggle}
                onDelete={handleDelete}
              />
              <small>{tarefa.dataCriacao}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Tarefas;