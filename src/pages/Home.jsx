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
    <div className="grid grid-cols-2 lg:grid-cols-3 gap 6">
    
      <div className="col-span-2">
        {workouts && workouts.map((workout)=>(
          <WorkoutDetails key={workout.id} workout={workout}/>
        ))}
      </div>
      <div className="m-4"><WorkoutsForm/></div>
    </div>
  )
}

export default Home