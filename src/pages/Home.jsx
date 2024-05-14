import { useEffect,useState } from "react"
import Axios from 'axios'
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
    <div>
      <div>
        {workouts && workouts.map((workout)=>(
            <p key={workout.id}>{workout.title}</p>
        ))}
      </div>
    </div>
  )
}

export default Home