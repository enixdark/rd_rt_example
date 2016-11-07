import { connect } from 'react-redux'
import { toggleTodo } from '../actions/index'
import ToDoList from '../components/todoList'
const getVisibleToDos = (todos, filter) => {
  switch(filter){
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
  }
}

const mapStateToProps = (state) => {
  return {
    todos: getVisibleToDos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchTOProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibilityToDoList = connect(
  mapStateToProps,
  mapDispatchTOProps
)(ToDoList)

export default VisibilityToDoList