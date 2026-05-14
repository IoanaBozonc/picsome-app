'use client'
import useStore from '../../lib/useStore'
import Link from 'next/link'

export default function FavoritesPage() {
  const { favorites, toggleFavorite, addToCart, cart } = useStore();

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f9fafb', padding: '40px 16px', 
    display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '600px', width: '100%', backgroundColor: 'white', 
        borderRadius: '24px', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)', padding: '40px',
         display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* TITLU PE MIJLOC */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: '900', textTransform: 'uppercase', color: '#111827', margin: '0' }}>PRODUSE FAVORITE</h1>
          <p style={{ color: '#9ca3af', marginTop: '5px', fontWeight: '500', fontStyle: 'italic', margin: '5px 0 0 0' }}>Ai {favorites.length} produse salvate</p>
        </div>

        {favorites.length > 0 ? (
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {favorites.map((item) => {
                const isInCart = cart?.some(cartItem => cartItem.id === item.id);

                return (
                  <div 
                    key={item.id} 
                    style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '24px 0', borderBottom: '1px solid #f3f4f6', gap: '16px' }}
                  >
                    <div style={{ width: '120px', height: '120px', overflow: 'hidden', borderRadius: '16px', boxShadow: '0 4px 10px rgba(0,0,0,0.08)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <img 
                        src={item.download_url} 
                        alt="Produs Favorit"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>

                    {/*DETALII PRODUS */}
                    <div>
                      <h3 style={{ fontSize: '18px', fontWeight: '900', color: '#111827', margin: '0' }}>
                        {item.author}
                      </h3>
                      <p style={{ fontSize: '12px', color: '#9ca3af', margin: '2px 0' }}>ID: {item.id}</p>
                      <p style={{ fontSize: '20px', fontWeight: '900', color: '#2563eb', margin: '5px 0 0 0' }}>
                        ${item.price || "0.00"}
                      </p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '4px' }}>
                      <button 
                        onClick={() => addToCart(item)}
                        style={{ backgroundColor: isInCart ? '#10b981' : '#111827', color: 'white', fontSize: '14px', 
                          fontWeight: 'bold', padding: '10px 18px', borderRadius: '10px', 
                          border: 'none', cursor: 'pointer', transition: 'all 0.2s' }}
                      >
                        {isInCart ? '✅ Adăugat în Coș' : '🛒 Pune în Coș'}
                      </button>
                      <button 
                        onClick={() => toggleFavorite(item)}
                        style={{ color: '#ef4444', fontWeight: 'bold', fontSize: '14px', backgroundColor: '#fef2f2', border: 'none', padding: '10px 14px', borderRadius: '10px', cursor: 'pointer' }}
                        title="Elimină de la favorite"
                      >
                        ❤️ Elimină
                      </button>
                    </div>

                  </div>
                );
              })}
            </div>
            <div style={{ width: '100%', marginTop: '30px', paddingTop: '24px', borderTop: '2px dashed #e5e7eb', 
              display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Link href="/" style={{ width: '100%', maxWidth: '400px', backgroundColor: '#f3f4f6', 
                color: '#374151', fontSize: '15px', fontWeight: 'bold', padding: '14px 0', borderRadius: '12px', border: 'none', 
                cursor: 'pointer', textDecoration: 'none', textTransform: 'uppercase', textAlign: 'center', transition: 'all 0.2s' }}>
                ⬅️ Continuă Cumpărăturile
              </Link>
            </div>

          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '60px 0' }}>
            <span style={{ fontSize: '48px', display: 'block', marginBottom: '15px' }}>❤️</span>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#d1d5db' }}>Nu ai niciun produs favorit...</h2>
            <Link href="/" style={{ marginTop: '15px', display: 'inline-block', color: '#2563eb', fontWeight: '900', 
              textTransform: 'uppercase', textDecoration: 'none', fontSize: '14px' }}>
              Explorează Magazinul
            </Link>
          </div>
        )}
      </div>
    </main>
  )
}