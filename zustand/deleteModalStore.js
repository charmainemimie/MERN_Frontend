
import {create} from 'zustand';

const useModalStore = create((set) => ({
  isOpen: false,
  workoutToDelete: null,
  openModal: (workout) => set({ isOpen: true, workoutToDelete: workout }),
  closeModal: () => set({ isOpen: false, workoutToDelete: null }),
}));

export default useModalStore;
