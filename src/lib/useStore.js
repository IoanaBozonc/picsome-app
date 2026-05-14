import { create } from 'zustand';

const useStore = create((set) => ({
  cart: [],
  favorites: [],
  addToCart: (product) => set((state) => {
    const exists = state.cart.find(item => item.id === product.id);
    if (exists) {
      return {
        cart: state.cart.map(item =>
          item.id === product.id 
            ? { ...item, quantity: (item.quantity || 1) + 1 } 
            : item
        )
      };
    }
    return { cart: [...state.cart, { ...product, quantity: 1 }] };
  }),
  removeFromCart: (id) => set((state) => {
    const existingItem = state.cart.find(item => item.id === id);
    
    if (existingItem && existingItem.quantity > 1) {
      return {
        cart: state.cart.map(item =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
      };
    }
    return { cart: state.cart.filter(item => item.id !== id) };
  }),
  clearCart: () => set({ cart: [] }),
  toggleFavorite: (product) => set((state) => {
    const exists = state.favorites.find(item => item.id === product.id);
    if (exists) {
      return { favorites: state.favorites.filter(item => item.id !== product.id) };
    }
    return { favorites: [...state.favorites, product] };
  })
}));

export default useStore;