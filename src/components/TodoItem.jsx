import { faCancel, faClose, faEdit, faSave, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


/* eslint-disable react/prop-types */
function TodoItem(props) {
  const { job, hdlDel, hdlUpdate, hdlStatus } = props
  const [edit, setEdit] = useState(true)
  const [editValue, setEditValue] = useState(job.todo)
  // console.log(edit)

  const hdlChange = (e) => {
    setEditValue(e.target.value)
  }
  const hdlSave = (id, completed) => {
    Swal.fire({
      title: "Save",
      text: "You save!",
      icon: "success"
    });
    setEdit(true)
    hdlUpdate(id, completed, editValue)
  }
  return (
    <div className=" flex gap-2 p-2 transition delay-75 hover:scale-[1.03] rounded-md bg-lime-900 my-2 ">

      <input className={`w-full  bg-lime-500 px-2 mx-2 rounded-md  focus:outline-gray-700 ${edit === true ? 'cursor-pointer' : 'cursor-text'} ${job.completed && edit === true ? 'line-through text-red-600' : 'no-underline text-black'}`} onClick={() => !edit ? '' : hdlStatus(job.id, editValue, job.completed)} value={editValue} readOnly={edit}
        onChange={hdlChange} />
      <div className="flex gap-2">
        {edit ? (
          <>

            <button className="p-2 flex items-center gap-2 bg-lime-500 px-5 text-black hover:bg-black hover:text-lime-500 transition delay-75" onClick={() => setEdit(false)}>Edit<FontAwesomeIcon icon={faEdit} /></button>
            <button className="flex items-center gap-2 p-2 bg-lime-500 px-5 text-black hover:bg-black hover:text-lime-500 transition delay-75" onClick={() => hdlDel(job.id)}>Delete<FontAwesomeIcon icon={faTrash} /></button>
          </>
        ) : (
          <>
            <button className="flex items-center gap-2 p-2 bg-lime-500 px-5 text-black hover:bg-black hover:text-lime-500 transition delay-75" onClick={() => hdlSave(job.id, job.completed)}>Save <FontAwesomeIcon icon={faSave} /></button>
            <button className="flex items-center gap-2 p-2 bg-lime-500 px-5 text-black hover:bg-black hover:text-lime-500 transition delay-75" onClick={() => setEdit(true)}>Cancel <FontAwesomeIcon icon={faClose} /></button>
          </>


        )}
      </div>
    </div>
  )
}

export default TodoItem