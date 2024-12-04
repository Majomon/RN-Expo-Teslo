import { create } from "zustand";

interface TemporalCameraStoreState {
  selectedImage: string[];

  addSelectedImage: (image: string) => void;
  clearImages: () => void;
}

export const useCameraStore = create<TemporalCameraStoreState>()((set) => ({
  selectedImage: [],

  addSelectedImage: (image) => {
    set((state) => ({ selectedImage: [...state.selectedImage, image] }));
  },
  
  clearImages: () => set({ selectedImage: [] }),
}));
