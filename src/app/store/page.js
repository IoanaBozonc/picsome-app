'use client'
import { useState } from 'react'
import useStore from '../../lib/useStore'

export default function StorePage() {
  const { cart, removeFromCart, clearCart } = useStore()
  const [orderPlaced, setOrderPlaced] = useState(false)
  const pricePerItem = 5.99
  const total = (cart.length * pricePerItem).toFixed(2)

  const handlePlaceOrder = () => {
    if (cart.length === 0) return
    setTimeout(() => {
      setOrderPlaced(true)
      clearCart()
    }, 2000) // Simulăm procesarea comenzii (2 secunde)
  }

  if (orderPlaced) {
    return <h1 className="p-10 text-center text-2xl text-green-600">Mulțumim pentru comandă! 🎉</h1>
  }

  return (
    <main className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center uppercase">Check out</h1>
      
      {cart.map((item) => (
        <div key={item.id} className="flex items-center justify-between border-b py-4">
          <div className="flex items-center gap-4">
            <button onClick={() => removeFromCart(item.id)} className="text-xl">🗑️</button>
            <img 
  src={item.download_url} 
  style={{ 
    width: '120px', 
    height: '80px', 
    objectFit: 'cover', 
    borderRadius: '8px',
    flexShrink: 0 
  }} 
  alt="Produs"
/>          
          </div>
          <p className="font-bold">${pricePerItem}</p>
        </div>
      ))}

      <div className="mt-8 text-right">
        <p className="text-xl font-bold">Total: ${total}</p>
        <button 
          onClick={handlePlaceOrder}
          className="mt-4 bg-black text-white px-8 py-2 rounded hover:bg-gray-800 transition"
        >
          {cart.length > 0 ? 'Place Order' : 'Coșul e gol'}
        </button>
      </div>
    </main>
  )
}