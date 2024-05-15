
import {create} from 'zustand';
import Axios from 'axios';
import { BACKEND_URL } from '../src/urls';
const useWorkoutStore = create((set) => ({
  workouts: null,
  fetchWorkouts: async () => {
    try {
      const response = await Axios.get(BACKEND_URL);
      set({ workouts: response.data });
    } catch (error) {
      console.error('Error fetching workouts:', error);
    }
  },
  addWorkout: async (newWorkout) => {
    try {
      const response = await Axios.post(BACKEND_URL, newWorkout);
      set((state) => ({ workouts: [...state.workouts, response.data] }));
    } catch (error) {
      console.error('Error adding workout:', error);
      throw error;
    }
  },
}));

export default useWorkoutStore;
