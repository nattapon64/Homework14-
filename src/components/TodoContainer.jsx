/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem"

function TodoContainer(props) {
  const {todos,hdlDel, hdlUpdate, hdlStatus} = props
  return (
    <div className="todo-container">
    { todos.map( el=> (
      <TodoItem key={el.id} job={el} hdlDel={hdlDel} hdlUpdate={hdlUpdate} hdlStatus={hdlStatus}/>
    ))   
    }  
    <p className="text-center text-green-500">SNRU Nattpon Nupao </p>
    
    </div>
  )
}

export default TodoContainer