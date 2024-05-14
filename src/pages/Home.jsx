import { useEffect,useState } from "react"
import Axios from 'axios'
import WorkoutDetails from "../components/WorkoutDetails";


import { BACKEND_URL, LOCAL_BACKEND_URL } from "../urls";
const Home = () => {

  const [workouts, setWorkouts] = useState(null);

  const fetchWorkouts = () => {
    try {
       Axios.get(BACKEND_URL).then((response)=>{
        setWorkouts(response.data);
      })
     
    }catch (error) {
      console.error('Error fetching workouts:', error);
    }
  };

  useEffect(() => {
    fetchWorkouts();
  }, []);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap 6">
    
      <div className="col-span-2">
        {workouts && workouts.map((workout)=>(
          <WorkoutDetails key={workout.id} workout={workout}/>
        ))}
      </div>
      <div></div>
    </div>
  )
}

export default Home