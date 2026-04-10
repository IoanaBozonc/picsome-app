import { create } from 'zustand'

const useStore = create((set) => ({
  allPictures: [],
  favorites: [],
  cart: [], // Coșul de cumpărături
  
  setPictures: (pictures) => set({ allPictures: pictures }),

  toggleFavorite: (picture) => set((state) => {
    const isFav = state.favorites.some(fav => fav.id === picture.id);
    return {
      favorites: isFav 
        ? state.favorites.filter(fav => fav.id !== picture.id) 
        : [...state.favorites, picture]
    };
  }),

  // Funcții pentru Magazin
  addToCart: (picture) => set((state) => ({
    cart: [...state.cart, picture]
  })),

  removeFromCart: (id) => set((state) => ({
    cart: state.cart.filter(item => item.id !== id)
  })),

  clearCart: () => set({ cart: [] }) // Golim coșul după comandă
}))

export default useStore