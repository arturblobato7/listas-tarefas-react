import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './NovaTarefa.module.css';

const STORAGE_KEY = 'tarefas';

const NovaTarefa = () => {
  const navigate = useNavigate();
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const novaTarefa = {
      id: Date.now(),
      titulo,
      descricao,
      concluida: false,
      dataCriacao: new Date().toLocaleString(),
    };

    const raw = localStorage.getItem(STORAGE_KEY);
    const tarefas = raw ? JSON.parse(raw) : [];

    tarefas.push(novaTarefa);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tarefas));

    navigate('/tarefas');
  };

  return (
    <div className={styles.container}>
      <h1>Nova Tarefa</h1>

      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          Título
          <input
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </label>

        <label>
          Descrição (opcional)
          <textarea
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
        </label>

        <div className={styles.actions}>
          <button type="submit" className={styles.saveBtn}>
            Salvar Tarefa
          </button>

          <button
            type="button"
            className={styles.cancelBtn}
            onClick={() => navigate('/tarefas')}
          >
            Voltar para Tarefas
          </button>
        </div>
      </form>
    </div>
  );
};

export default NovaTarefa;