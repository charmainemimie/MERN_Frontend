/* eslint-disable react/prop-types */


const WorkoutDetails = ({workout}) => {
  return (
   <div className='relative bg-[#fff] border border-2 m-4 p-4 shadow-md '>
    <div className='py-4'>
    <h4 className='font-bold mb-3 text-lg text-blue-700'>{workout.title}</h4>
    <p className='m-0 text-sm'><span className='font-bold'>Load (kg): </span>{workout.load}</p>
    <p className='m-0 text-sm'><span className='font-bold'>Reps: </span>{workout.reps}</p>
    <p >{workout.createdAt}</p>
    </div>
   </div>
  )
}

export default WorkoutDetails