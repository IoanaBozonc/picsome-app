'use client'
import useStore from '../../lib/useStore'

export default function FavoritesPage() {
  const { favorites, toggleFavorite } = useStore()

  if (favorites.length === 0) {
    return <h1 className="p-10 text-center text-gray-500">Nu ai favorite. ❤️</h1>
  }

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6 text-red-600">Favoritele mele</h1>
      
      {/* Container care așază pozele una lângă alta (flex-wrap le trece pe rândul nou dacă nu mai au loc) */}
      <div className="flex flex-wrap gap-4">
        {favorites.map((pic) => (
          <div key={pic.id} className="relative group shadow-sm rounded-lg overflow-hidden" style={{ width: '150px', height: '150px' }}>
            <img 
              src={pic.download_url} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              alt="Favorite"
            />
            
           {/* Buton de Eliminare din Favorite */}
<button 
  onClick={() => toggleFavorite(pic)}
  title="Elimină din Favorite"
  style={{ 
    position: 'absolute', 
    top: '5px', 
    left: '5px', 
    zIndex: 10,
    backgroundColor: 'white', // Fundal alb, ca să iasă în evidență
    borderRadius: '50%',
    width: '32px',
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    border: '2px solid black', // Margine neagră, pentru contrast
    boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
  }}
>
  ❤️ {/* Poți schimba în ❤️ dacă vrei să arate că e selectată */}
</button>
          </div>
        ))}
      </div>
    </main>
  )
}