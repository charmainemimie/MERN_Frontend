/* eslint-disable react/prop-types */
// import useWorkoutStore from "../../zustand/workoutStore";
import { useState } from 'react';

import useModalStore from "../../zustand/deleteModalStore";
import DeleteConfirmationModal from "./DeleteModal";
import EditWorkoutForm from "./EditWorkout";
const WorkoutDetails = ({ workout }) => {

  function getTimeAgo(createdAt) {
    const now = new Date();
    const createdDate = new Date(createdAt);
    const timeDifference = now - createdDate;
    const minutesDifference = Math.floor(timeDifference / (1000 * 60));
  
    if (minutesDifference < 1) {
      return 'now';
    } else if (minutesDifference < 60) {
      return `${minutesDifference} minute${minutesDifference > 1 ? 's' : ''} ago`;
    } else {
      const hours = Math.floor(minutesDifference / 60);
      const remainingMinutes = minutesDifference % 60;
      return `${hours} hour${hours > 1 ? 's' : ''} and ${remainingMinutes} minute${remainingMinutes > 1 ? 's' : ''} ago`;
    }
  }
  
  
  
  const [isEditOpen, setIsEditOpen] = useState(false);

  const handleEditClick = () => {
    setIsEditOpen(true);
  };

  const handleCloseEdit = () => {
    setIsEditOpen(false);
  };

  //from zustand
  // const deleteWorkout = useWorkoutStore((state) => state.deleteWorkout);
  const openModal = useModalStore((state) => state.openModal);

  // const handleDelete = async () => {
  //   try {
  //     await deleteWorkout(workout._id);
  //   } catch (error) {
  //     console.error("Error deleting workout:", error);
  //   }
  // };
  return (
    <div className="relative bg-[#fff] border border-2 m-4 p-4 shadow-md ">
      <div className="py-4 flex items-center justify-between">
        <div>
          {" "}
          <h4 className="font-bold mb-3 text-lg text-blue-700">
            {workout.title}
          </h4>
          <p className="m-0 text-sm">
            <span className="font-bold">Load (kg): </span>
            {workout.load}
          </p>
          <p className="m-0 text-sm">
            <span className="font-bold">Reps: </span>
            {workout.reps}
          </p>
          <p> {getTimeAgo(workout.createdAt)}</p>
        </div>

        <div>
        <span
            onClick={handleEditClick}
            className="border py-2 px-2 mr-10 rounded-lg bg-blue-700 text-white font-medium hover:cursor-pointer"
          >
            Edit
          </span>
          <span
            onClick={() => openModal(workout)}
            className="border py-2 px-2 rounded-lg bg-blue-700 text-white mr-10 font-medium hover:cursor-pointer"
          >
            Delete
          </span>


        </div>
      </div>
      <DeleteConfirmationModal/>
      {isEditOpen && <EditWorkoutForm workout={workout} onClose={handleCloseEdit} />}
  
    </div>
  );
};

export default WorkoutDetails;
