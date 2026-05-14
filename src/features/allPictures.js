'use client'
import useStore from '../lib/useStore'; 

export function AllPictures({ pictures }) {
  const { addToCart, toggleFavorite, favorites, cart } = useStore();

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
      gap: '20px',
      padding: '20px'
    }}>
      {pictures && pictures.map((pic) => {
        const isFavorite = favorites.some(fav => fav.id === pic.id);
        const isInCart = cart?.some(cartItem => cartItem.id === pic.id);
        
        return (
          <div key={pic.id} style={{
            border: '1px solid #eee',
            borderRadius: '15px',
            padding: '15px',
            textAlign: 'center',
            backgroundColor: 'white',
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
          }}>
            <img 
              src={pic.download_url} 
              alt={pic.author} 
              style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '10px' }} 
            />
            
            <h3 style={{ fontSize: '16px', margin: '10px 0 5px 0', fontWeight: 'bold' }}>
              {pic.author}
            </h3>
            
            <p style={{ fontSize: '18px', fontWeight: '900', color: '#111827', margin: '0 0 10px 0' }}>
              ${pic.price}
            </p>
            
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
              <button 
                onClick={() => addToCart(pic)}
                style={{ 
                  backgroundColor: isInCart ? '#10b981' : '#111827',
                  color: 'white', 
                  border: 'none', 
                  padding: '8px 12px', 
                  borderRadius: '8px', 
                  cursor: 'pointer', 
                  fontWeight: 'bold',
                  transition: 'background-color 0.2s'
                }}
              >
                {isInCart ? '✅ Adăugat' : '🛒 Adaugă'}
              </button>

              <button 
                onClick={() => toggleFavorite(pic)}
                style={{ 
                  backgroundColor: isFavorite ? '#fef2f2' : '#f3f4f6', 
                  color: isFavorite ? '#ef4444' : '#6b7280', 
                  border: 'none', 
                  padding: '8px', 
                  borderRadius: '8px', 
                  cursor: 'pointer' 
                }}
              >
                {isFavorite ? '❤️' : '🤍'}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}