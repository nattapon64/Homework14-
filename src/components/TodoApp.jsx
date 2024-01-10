/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import Dashboard from "./Dashboard"
import FormAddTodo from "./FormAddTodo"
import TodoContainer from "./TodoContainer"
import axios from 'axios';

function TodoApp() {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [trigger, setTrigger] = useState(false)
  const apiUrl = 'https://api-54db.onrender.com/todos/'

  
    useEffect( ()=>{
    setIsLoading(true)
    axios.get(apiUrl).then( res => {
      console.log(res)
      setData(res.data)
      setIsLoading(false)
    })
  }, [trigger] )

  const hdlAdd = (newJob) => {
    axios.post(apiUrl,newJob).then(res =>{
      console.log(res)
      setTrigger(prv=> !prv)
    })
  }
  const hdlUpdate = (id, completed, editValue) =>{
    let udtjob = {todo: editValue, completed : completed, userId:1}
    axios.put(apiUrl+id, udtjob).then(() => setTrigger((prv) => !prv))
  }
  const hdlDel =(id) =>{
    confirm('You want to Remove to do list ?') === true ? axios.delete(apiUrl+id).then(() =>setTrigger((prv)=> !prv))&& alert('Delete successfully!') : alert('Undelete')
  }

  const hdlStatus = (id,editValue,completed) =>{
    console.log(completed)
    if(completed ===true){
      let udtStatus = {todo: editValue,completed:false,userId:1}
      axios.put(apiUrl+id, udtStatus).then((res) => setTrigger((prv) => !prv))
    }else {
      let udtStatus = {todo: editValue , completed: true, userId:1}
      axios.put(apiUrl+id,udtStatus).then(() =>setTrigger((prv) => !prv))
    }
  }


  if (isLoading) {
    return ( <h1 className="text-center">Loading...</h1> )
  }

  return (
    <div  >
      <Dashboard task={data.length}/>
      <FormAddTodo hdlAdd={hdlAdd}/>
      <TodoContainer todos={data} hdlDel={hdlDel} hdlUpdate={hdlUpdate} hdlStatus={hdlStatus}/>
    </div>
  )
}

export default TodoApp