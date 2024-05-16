/* eslint-disable react/prop-types */
// EditWorkoutForm.js
import { useState } from 'react';
import useWorkoutStore from '../../zustand/workoutStore';

const EditWorkoutForm = ({ workout, onClose }) => {
  const [title, setTitle] = useState(workout.title);
  const [load, setLoad] = useState(workout.load);
  const [reps, setReps] = useState(workout.reps);

  const editWorkout = useWorkoutStore((state) => state.editWorkout);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedWorkout = { ...workout, title, load, reps };
    editWorkout(updatedWorkout);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="number" value={load} onChange={(e) => setLoad(e.target.value)} />
      <input type="number" value={reps} onChange={(e) => setReps(e.target.value)} />
      <button type="submit">Update Workout</button>
    </form>
  );
};

export default EditWorkoutForm;
