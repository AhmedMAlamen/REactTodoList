import { useState } from "react"
import "./App.css"
export default function App() {
  const [newItem, setnewItem] = useState("")
  const [todos, setTodos] = useState([])
  
  function handleSubmit(e) {
    e.preventDefault()
    setTodos((currentTodos) => {
      return [...currentTodos , {id : crypto.randomUUID(), title: newItem, completed: false}
      ]
    })
    setnewItem("")
  }
  function toggleTodo(id ,completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id) {
          return {...todo, completed}
        }
        return todo
      })
    })
  }
  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }
return (
  <>
  <form onSubmit={handleSubmit} className="new-item-form">
    <div className="form-row">
    <label htmlFor="item">New Items</label>
    <input value={newItem} onChange={e => setnewItem(e.target.value)} type="text" id="items" />
    </div>
    <button className="btn">Add</button>
  </form>
  <h1 className="header">Todo List</h1>
  <ul className="list">
    {todos.length === 0 && "No Todos"}
    {todos.map(todo => {
      return (
      <li key={todo.id}>
      <label>
        <input type="checkbox" checked ={todo.completed} onChange={e =>toggleTodo(todo.id, e.target.checked)}/>
        {todo.title}
      </label>
      <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">Delete</button>
    </li>
      )
    })}
    
    
  </ul>
  </>
)
}