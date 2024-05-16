
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
  deleteWorkout: async (workoutId) => {
    try {
      await Axios.delete(`${BACKEND_URL}/${workoutId}`);
      set((state) => ({
        workouts: state.workouts.filter((workout) => workout._id !== workoutId),
      }));
    } catch (error) {
      console.error('Error deleting workout:', error);
      throw error;
    }
  },
  editWorkout: async (updatedWorkout) => {
    try {
      await Axios.put(`${BACKEND_URL}/${updatedWorkout._id}`, updatedWorkout);
      set((state) => ({
        workouts: state.workouts.map((workout) =>
          workout._id === updatedWorkout._id ? updatedWorkout : workout
        ),
      }));
    } catch (error) {
      console.error('Error editing workout:', error);
      throw error;
    }
  },
}));

export default useWorkoutStore;
