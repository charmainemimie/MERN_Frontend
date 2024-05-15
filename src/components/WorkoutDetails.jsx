/* eslint-disable react/prop-types */


const WorkoutDetails = ({workout}) => {

  const handleClick=()=>{

  }
  return (
   <div className='relative bg-[#fff] border border-2 m-4 p-4 shadow-md '>
    <div className='py-4 flex items-center justify-between'>
      <div>  <h4 className='font-bold mb-3 text-lg text-blue-700'>{workout.title}</h4>
    <p className='m-0 text-sm'><span className='font-bold'>Load (kg): </span>{workout.load}</p>
    <p className='m-0 text-sm'><span className='font-bold'>Reps: </span>{workout.reps}</p>
    <p >{workout.createdAt}</p></div>
  

    <div><span onClick={handleClick} className="border py-2 px-2 rounded-lg bg-blue-700 text-white mr-10 font-medium hover:cursor-pointer">Delete</span></div>
    </div>
   </div>
  )
}

export default WorkoutDetails