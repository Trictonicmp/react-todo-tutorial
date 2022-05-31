import React, { useState } from 'react';
import PropTypes from 'prop-types';

const InputTodo = (props) => {
  const [title, setTitle] = useState('');
  const { addTodoProps } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodoProps(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add Todo..."
        value={title}
        onChange={(event) => { setTitle(event.target.value); }}
        required
      />
      <button type="submit"> Submit </button>
    </form>
  );
};

InputTodo.propTypes = {
  addTodoProps: PropTypes.func.isRequired,
};

export default InputTodo;
