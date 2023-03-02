import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import './main.css';

function Main() {
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
        <li className="task">
          <h2 className="task-author">User</h2>
          <div className="task-text">
            <h2 className="task-title">Exercises</h2>
            <p className="task-description">
              jugging, running, jumping, push up, pull up
            </p>
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
        <li className="task">
          <h2 className="task-author">User</h2>
          <div className="task-text">
            <h2 className="task-title">Exercises</h2>
            <p className="task-description">
              jugging, running, jumping, push up, pull up
            </p>
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
        <li className="task">
          <h2 className="task-author">User</h2>
          <div className="task-text">
            <h2 className="task-title">Exercises</h2>
            <p className="task-description">
              jugging, running, jumping, push up, pull up
            </p>
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
        <li className="task">
          <h2 className="task-author">User</h2>
          <div className="task-text">
            <h2 className="task-title">Exercises</h2>
            <p className="task-description">
              jugging, running, jumping, push up, pull up
            </p>
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
      </ul>
    </div>
  );
}

export default Main;
