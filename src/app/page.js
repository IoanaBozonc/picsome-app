'use client'
import { useEffect } from 'react'
import { fetchPictures } from '../lib/fetchPictures'
import useStore from '../lib/useStore'

export default function HomePage() {
  const { allPictures, setPictures, favorites, toggleFavorite, cart, addToCart } = useStore()

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchPictures(20)
      setPictures(data)
    }
    loadData()
  }, [])

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Ioana's App</h1>
      
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {allPictures.map((pic) => {
          const isFav = favorites.some(f => f.id === pic.id)

          return (
            <div key={pic.id} className="relative break-inside-avoid shadow-lg rounded-xl overflow-hidden bg-gray-200">
              <img 
                src={pic.download_url} 
                alt="Picsum"
                className="w-full h-auto block"
              />
              {/* Buton de Adăugare în Coș */}
            <button 
              onClick={() => addToCart(pic)}
              disabled={cart.some(item => item.id === pic.id)}
              style={{ 
                position: 'absolute', top: '10px', right: '10px', zIndex: 10,
                backgroundColor: 'white', borderRadius: '50%', width: '40px', height: '40px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: '2px solid blue', cursor: 'pointer'
              }}
            >
              {cart.some(item => item.id === pic.id) ? '✅' : '🛒'}
            </button>

            {/* Butonul de Favorite */}
            <button 
              onClick={() => toggleFavorite(pic)}
              style={{ 
                position: 'absolute', top: '10px', left: '10px', zIndex: 10,
                backgroundColor: 'white', borderRadius: '50%', width: '40px', height: '40px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: '2px solid red', cursor: 'pointer'
              }}
            >
              {favorites.some(f => f.id === pic.id) ? '❤️' : '🤍'}
            </button>
            </div>
          )
        })}
      </div>
    </main>
  )
}