import React from 'react'
import Footer from './footer'
import AddToDo from '../containers/addTodo'
import VisibleTodoList from '../containers/visibleTodoList'

const App = () => (
  <div>
    <AddToDo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App