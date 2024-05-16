import { useEffect} from "react"

import WorkoutDetails from "../components/WorkoutDetails";
import useWorkoutStore from "../../zustand/workoutStore";


import WorkoutsForm from "../components/WorkoutsForm";
const Home = () => {
  //from zustand
  const { workouts, fetchWorkouts } = useWorkoutStore();

  // const fetchWorkouts = () => {
  //   try {
  //      Axios.get(BACKEND_URL).then((response)=>{
  //       setWorkouts(response.data);
  //     })
     
  //   }catch (error) {
  //     console.error('Error fetching workouts:', error);
  //   }
  // };

  // useEffect(() => {
  //   fetchWorkouts();
  // }, []);

  useEffect(() => {
    fetchWorkouts();
  }, [fetchWorkouts]);


  return (
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
  <div className="col-span-1 lg:col-span-2">
    {workouts && workouts.map((workout) => (
      <WorkoutDetails key={workout.id} workout={workout}/>
    ))}
  </div>
  <div className="p-4 ">
    <div className="max-w-xl mx-auto"> {/* Set a maximum width */}
      <WorkoutsForm/>
    </div>
  </div>
</div>

  )
}

export default Home