import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Header from './Header';
import InputTodo from './InputTodo';
import TodoList from './TodoList';

const TodoContainer = () => {
  const localTodos = JSON.parse(localStorage.getItem('todos'));
  // eslint-disable-next-line no-unused-vars
  const [todos, setTodos] = useState(localTodos);

  const saveToLocal = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  useEffect(() => {
    saveToLocal();
  }, [todos]);

  const handleOnChange = (id) => {
    setTodos(todos.map((todo) => {
      const updatedTodo = todo;
      if (updatedTodo.id === id) {
        return {
          ...todo,
          completed: !updatedTodo.completed,
        };
      }
      return updatedTodo;
    }));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const addTodo = (newTitle) => {
    const newTodo = {
      id: uuidv4(),
      title: newTitle,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const setUpdate = (updatedTitle, id) => {
    setTodos(todos.map((todo) => {
      const updatedTodo = todo;
      if (updatedTodo.id === id) {
        return {
          ...todo,
          title: updatedTitle,
        };
      }
      return updatedTodo;
    }));
  };

  return (
    <>
      <Header />
      <InputTodo addTodoProps={addTodo} />
      <TodoList
        todos={todos}
        handleChangeProps={handleOnChange}
        deleteTodoProps={deleteTodo}
        setUpdateProps={setUpdate}
      />
    </>
  );
};

export default TodoContainer;
