/* eslint-disable react/prop-types */

function Dashboard(props) {
  const {task} = props
  return (
    <div className="flex justify-between px-10 my-2 bg-lime-500 h-20 items-center text-[24px] border-2 border-gray-800 rounded-md text-black">
      <h2>{new Date().toDateString()}</h2>
      <p>{task} Tasks</p>
    </div>
  )
}

export default Dashboard