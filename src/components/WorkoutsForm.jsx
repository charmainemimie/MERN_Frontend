import { useState } from "react";
import useWorkoutStore from "../../zustand/workoutStore";
const WorkoutsForm = () => {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null)
  
  //from zustand
  const { addWorkout } = useWorkoutStore();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const workout = { title, reps, load };

    try {
      await addWorkout(workout);
      alert('Workout added');
      setTitle('');
      setLoad('');
      setReps('');
      setError(null);
    } catch (error) {
      console.error('Error:', error);
      setError(error.message);
    }
  };

  return (
    <div>
      <form className="max-w-full" onSubmit={handleSubmit}>
        <h4 className="pb-4 text-xl">Add a New Workout</h4>
        <div className="mb-4">
          <label className="form-control ">
            <div className="label">
              <span className="label-text">Exercise title</span>
            </div>
            <input
              type="text"
              placeholder="Title"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              value={title}
              className="border rounded-md py-2 px-2 w-full "
              required
            />
          </label>
        </div>

        <div className="mb-4">
          <label className="form-control w-full max-w-">
            <div className="label">
              <span className="label-text">Load (kg)</span>
            </div>
            <input
              type="number"
              placeholder="Load"
              onChange={(e) => {
                setLoad(e.target.value);
              }}
              value={load}
              className="border rounded-md py-2 px-2 w-full max-w-full"
              required
            />
          </label>
        </div>

        <div className="mb-4">
          <label className="form-control w-full max-w-">
            <div className="label">
              <span className="label-text">Reps</span>
            </div>
            <input
              type="number"
              placeholder="Reps"
              onChange={(e) => {
                setReps(e.target.value);
              }}
              value={reps}
              className="border rounded-md py-2 px-2 w-full max-w-full"
              required
            />
          </label>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add workout
        </button>

        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default WorkoutsForm;
