import { create } from 'zustand'; 


const useLocationStore = create((set) => ({
 
  currentLocation: {},
  AllLocations: [],
  setCurrentLocation: (location) => set({ currentLocation: location }),
  addLocation: (location) => 
    set((state) => ({
      AllLocations: [...state.AllLocations, location], 
    })),
}));

export default useLocationStore;