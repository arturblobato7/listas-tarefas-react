import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './NovaTarefa.module.css';

const NovaTarefa = () => {
  const navigate = useNavigate();
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [erro, setErro] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setErro('');

    
    if (!titulo.trim()) {
      setErro('Por favor, insira um título para a tarefa');
      return;
    }

    if (titulo.length > 100) {
      setErro('O título deve ter no máximo 100 caracteres');
      return;
    }

    
    const novaTarefa = {
      id: Date.now(),
      titulo: titulo.trim(),
      descricao: descricao.trim(),
      concluida: false,
      dataCriacao: new Date().toLocaleDateString()
    };

    
    const tarefasExistentes = JSON.parse(localStorage.getItem('tarefas')) || [];

    
    const tarefasAtualizadas = [...tarefasExistentes, novaTarefa];

    
    localStorage.setItem('tarefas', JSON.stringify(tarefasAtualizadas));

    
    alert('✅ Tarefa adicionada com sucesso!');

    
    setTitulo('');
    setDescricao('');

    
    navigate('/tarefas');
  };

  return (
    <div className={styles.container}>
      <h1>Adicionar Nova Tarefa</h1>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="titulo">Título *</label>
          <input
            id="titulo"
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="Digite o título da tarefa"
            maxLength={100}
            className={erro ? styles.inputError : ''}
          />
          <div className={styles.charCount}>
            {titulo.length}/100 caracteres
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="descricao">Descrição</label>
          <textarea
            id="descricao"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            placeholder="Digite a descrição da tarefa (opcional)"
            rows="5"
            maxLength={500}
          />
          <div className={styles.charCount}>
            {descricao.length}/500 caracteres
          </div>
        </div>

        {erro && (
          <div className={styles.errorMessage}>
            ⚠️ {erro}
          </div>
        )}

        <div className={styles.buttons}>
          <button type="submit" className={styles.submitBtn}>
            ➕ Adicionar Tarefa
          </button>

          <button
            type="button"
            className={styles.cancelBtn}
            onClick={() => navigate('/tarefas')}
          >
            ↩️ Voltar para Tarefas
          </button>
        </div>
      </form>
    </div>
  );
};

export default NovaTarefa;