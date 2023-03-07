import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import fetchData from '../../utils/fetchData';
import './main.css';
import { TodoInterface } from '../../types';

function Main() {
  const navigate = useNavigate();
  const [todos, setTodos] = useState<TodoInterface[]>([]);

  async function fetchTodos() {
    const result: any = await fetchData('todos', 'GET');

    setTodos(result.data);
  }
  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="main">
      <h1 className="title">Todo</h1>
      <form className="main__form">
        <input
          className="main__input"
          type="text"
          name="title"
          placeholder="Add title"
          required
          autoComplete="off"
        />
        <input
          className="main__input"
          type="text"
          name="description"
          placeholder="Add description"
          required
          autoComplete="off"
        />
        <button type="submit">
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </form>
      <ul className="list">
        {todos.map((todo) => (
          <li className="task" key={todo.id}>
            <h2 className="task-author">{todo.createdBy}</h2>
            <div className="task-text">
              <h2 className="task-title">{todo.title}</h2>
              <p className="task-description">{todo.description}</p>
            </div>
            <div className="action">
              <button type="button" className="done">
                <FontAwesomeIcon icon={faEdit} />
              </button>
              <button type="button" className="remove">
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Main;
