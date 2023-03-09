import React, { useState, useEffect, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import fetchData from '../../utils/fetchData';
import './main.css';
import { TodoInterface } from '../../types';

function Main({ user }: any) {
  const navigate = useNavigate();
  const [isEdit, setIsEdit] = useState(false);

  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [id, setId] = useState();

  const [loader, setLoader] = useState<boolean>(false);
  const [todos, setTodos] = useState<TodoInterface[]>([]);

  async function fetchTodos() {
    const result: any = await fetchData('todos', 'GET');
    setTodos(result.data);
    setLoader(false);
  }

  useEffect(() => {
    setLoader(true);
    fetchTodos();
  }, []);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const result = await fetchData('todos', 'POST', {
      title,
      description,
    });
    if (result?.data) {
      setTodos([...todos, result.data]);
    }

    if (!result.ok) {
      toast.error(result?.message);
    }

    setTitle('');
    setDescription('');
  }

  const deleteTodo = async (todoId: number) => {
    const result = await fetchData(`todos/${todoId}`, 'DELETE');
    if (!result.ok && result.status === 400) {
      toast.error(result?.message);
    }
    if (!result.status) {
      const deleteArr = todos.filter((e) => e.id !== id);
      setTodos([...deleteArr]);
    }
  };
  const selectTodo = (todo: any) => {
    setIsEdit(true);
    setTitle(todo.title);
    setId(todo.id);
    setDescription(todo.description);
  };

  const editTodo = async (e: FormEvent) => {
    e.preventDefault();
    const result = await fetchData(`todos/${id}`, 'PUT', {
      title,
      description,
    });
    if (!result.ok && result.status === 400) {
      toast.error(result?.message);
    }
    if (!result.status) {
      const newArr = todos.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            title,
            description,
          };
        }
        return item;
      });
      setTodos([...newArr]);
    }
  };

  return (
    <div className="main">
      <h1 className="title">Todo</h1>
      <form onSubmit={!isEdit ? handleSubmit : editTodo} className="main__form">
        <input
          className="main__input"
          type="text"
          name="title"
          placeholder="Add title"
          autoComplete="off"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          className="main__input"
          type="text"
          name="description"
          placeholder="Add description"
          autoComplete="off"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <button type="submit">
          <FontAwesomeIcon icon={!isEdit ? faPlus : faEdit} />
        </button>
      </form>
      {loader ? (
        <h1>Loader...</h1>
      ) : (
        <div>
          {todos?.length >= 1 ? (
            <ul className="list">
              {todos.map((todo) => (
                <li className="task" key={todo.id}>
                  <h2 className="task-author">{todo.createdBy}</h2>
                  <div className="task-text">
                    <h2 className="task-title">{todo.title}</h2>
                    <p className="task-description">{todo.description}</p>
                  </div>
                  {user?.data?.role === 'admin' ||
                  user?.data?.role === todo?.createdBy ? (
                    <div className="action">
                      <button
                        onClick={() => selectTodo(todo)}
                        type="button"
                        className="done">
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                      <button
                        onClick={() => deleteTodo(todo.id)}
                        type="button"
                        className="remove">
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  ) : (
                    <div />
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <h1>Empty</h1>
          )}
        </div>
      )}
    </div>
  );
}

export default Main;
