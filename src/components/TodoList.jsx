import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = (props) => {
  const { todos } = props;
  const { handleChangeProps } = props;
  const { deleteTodoProps } = props;
  const { setUpdateProps } = props;
  return (
    <ul>
      {
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={handleChangeProps}
            deleteTodoProps={deleteTodoProps}
            setUpdateProps={setUpdateProps}
          />
        ))
      }
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    completed: PropTypes.bool,
  })).isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
  setUpdateProps: PropTypes.func.isRequired,
};

export default TodoList;
