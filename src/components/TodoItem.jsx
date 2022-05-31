import PropTypes from 'prop-types';
import React, { useState } from 'react';

const TodoItem = (props) => {
  const { todo } = props;
  const { handleChangeProps } = props;
  const { deleteTodoProps } = props;
  const { setUpdateProps } = props;

  const [isEditing, setIsEditing] = useState(false);
  const viewMode = {};
  const editMode = {};

  if (isEditing) viewMode.display = 'none';
  else { editMode.display = 'none'; }

  const handleUpdateDone = (event) => {
    if (event.key === 'Enter') {
      setIsEditing(false);
    }
  };

  return (
    <li className={todo.completed ? 'completed' : ''}>
      <div
        onDoubleClick={() => { setIsEditing(!isEditing); }}
        style={viewMode}
      >
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => { handleChangeProps(todo.id); }}
        />
        <span>
          {todo.title}
        </span>
        <button
          type="button"
          onClick={() => deleteTodoProps(todo.id)}
          className="delete-btn"
        >
          Delete
        </button>
      </div>
      <input
        type="text"
        style={editMode}
        className="text-input"
        value={todo.title}
        onChange={(event) => { setUpdateProps(event.target.value, todo.id); }}
        onKeyDown={handleUpdateDone}
      />
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    completed: PropTypes.bool,
  })).isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
  setUpdateProps: PropTypes.func.isRequired,
};

export default TodoItem;
