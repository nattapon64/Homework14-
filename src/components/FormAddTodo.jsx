/* eslint-disable react/prop-types */
import { faSquare } from "@fortawesome/free-regular-svg-icons"
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

function FormAddTodo(props) {
  const {hdlAdd} = props
  const [input, setInput] = useState('')

  const hdlSubmit = (e) => {
    e.preventDefault()  
    let newJob = { todo: input, completed: false, user: 1 }

    input === '' ? alert('Enter something to do ') : hdlAdd(newJob)
    
  }

  return (
    <form className="flex gap-2 p-2 bg-lime-400 border-2 border-gray-600 rounded-md my-2" onSubmit={hdlSubmit}>
      <input className="bg-lime-500 w-full grow px-5 h-10 rounded-md text-gray-900 placeholder:gray-400 focus:outline-black" placeholder="Enter what to do" value={input} onChange={e=>setInput(e.target.value)} />
      <button className="flex items-center gap-2 bg-lime-500 px-5 text-black hover:bg-black hover:text-lime-500 transition delay-75 rounded-full" type="submit">Add <FontAwesomeIcon icon={faSquarePlus}/></button>
    </form>
  )
}

export default FormAddTodo