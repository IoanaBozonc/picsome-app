'use client'
import { useState } from 'react'
import useStore from '../../lib/useStore'
import Link from 'next/link'

export default function StorePage() {
  const { cart, removeFromCart, clearCart, addToCart } = useStore();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const total = cart.reduce((sum, item) => {
    const price = Number(item.price) || 0;
    const quantity = item.quantity || 1;
    return sum + (price * quantity);
  }, 0).toFixed(2);

  const handlePlaceOrder = () => {
    if (cart.length === 0) return;
    setOrderPlaced(true);
    clearCart();
  }

  if (orderPlaced) {
    return (
      <main style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif', backgroundColor: '#f9fafb' }}>
        <div style={{ textAlign: 'center', padding: '40px', backgroundColor: 'white', borderRadius: '24px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', maxWidth: '400px', width: '100%' }}>
          <h1 style={{ fontSize: '60px', margin: '0 0 10px 0' }}>🎉</h1>
          <h1 style={{ fontSize: '24px', fontWeight: '900', color: '#111827', margin: '0 0 10px 0' }}>Comandă trimisă!</h1>
          <p style={{ color: '#6b7280', marginBottom: '25px', fontSize: '16px' }}>Produsele vor ajunge în cel mai scurt timp.</p>
          <Link href="/" style={{ display: 'inline-block', backgroundColor: '#111827', color: 'white', fontWeight: 'bold', padding: '12px 24px', 
            borderRadius: '12px', textDecoration: 'none', textTransform: 'uppercase', fontSize: '14px' }}>
            Înapoi la cumpărături
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f9fafb', padding: '40px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '600px', width: '100%', backgroundColor: 'white', borderRadius: '24px', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)', padding: '40px', display: 'flex', 
        flexDirection: 'column', alignItems: 'center' }}>
        
        {/* TITLU PE MIJLOC */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: '900', textTransform: 'uppercase', tracking: '-1px', color: '#111827', margin: '0' }}>SUMAR COMANDĂ</h1>
          <p style={{ color: '#9ca3af', marginTop: '5px', fontWeight: '500', fontStyle: 'italic', margin: '5px 0 0 0' }}>Ai {cart.length} articole în coș</p>
        </div>

        {cart.length > 0 ? (
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {cart.map((item, index) => (
                <div 
                  key={`${item.id}-${index}`} 
                  style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', 
                    padding: '24px 0', borderBottom: '1px solid #f3f4f6', gap: '16px' }}
                >
                  
                  {/* se poate alege dimensiunea pozelor din cos de aici */}
                  <div style={{ width: '200px', height: '200px', overflow: 'hidden', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', 
                    display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img 
                      src={item.download_url} 
                      alt="Produs"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '18px', fontWeight: '900', color: '#111827', margin: '0' }}></h3>
                    <p style={{ fontSize: '12px', color: '#9ca3af', margin: '2px 0' }}>ID: {item.id}</p>
                    <p style={{ fontSize: '20px', fontWeight: '900', color: '#2563eb', margin: '5px 0 0 0' }}>
                      ${item.price ? Number(item.price).toFixed(2) : "0.00"}
                    </p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '4px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #d1d5db', borderRadius: '8px', overflow: 'hidden', backgroundColor: '#f9fafb' }}>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        style={{ padding: '6px 12px', backgroundColor: 'white', border: 'none', cursor: 'pointer', fontWeight: 'bold', fontSize: '16px', color: '#374151' }}
                      >
                        -
                      </button>
                      <span style={{ padding: '6px 12px', fontWeight: 'bold', fontSize: '14px', color: '#111827', minWidth: '24px', display: 'inline-block' }}>
                        {item.quantity || 1}
                      </span>
                      <button 
                        onClick={() => addToCart(item)}
                        style={{ padding: '6px 12px', backgroundColor: 'white', border: 'none', cursor: 'pointer', fontWeight: 'bold', fontSize: '16px', color: '#374151' }}
                      >
                        +
                      </button>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      style={{ color: '#ef4444', fontWeight: 'bold', fontSize: '14px', backgroundColor: '#fef2f2', border: 'none', padding: '8px 12px', 
                        borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
                    >
                      🗑️ Șterge
                    </button>
                  </div>

                </div>
              ))}
            </div>

            {/* SECTIUNE TOTAL PE MIJLOC */}
            <div style={{ width: '100%', marginTop: '30px', paddingTop: '24px', borderTop: '2px dashed #e5e7eb', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'between', alignItems: 'center', width: '100%', maxWidth: '400px', marginBottom: '24px' }}>
                <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '1px', flex: 1, textAlign: 'left' }}>TOTAL DE PLATĂ</span>
                <span style={{ fontSize: '32px', fontWeight: '900', color: '#111827', textTarget: 'right' }}>${total}</span>
              </div>
              
              <button 
                onClick={handlePlaceOrder}
                style={{ width: '100%', maxWidth: '400px', backgroundColor: '#2563eb', color: 'white', fontSize: '18px', fontWeight: '900', padding: '16px 0', borderRadius: '14px', border: 'none', 
                  cursor: 'pointer', boxShadow: '0 4px 14px rgba(37,99,235,0.3)', textTransform: 'uppercase', tracking: '-0.5px' }}
              >
                Finalizează Comanda 🚀
              </button>
            </div>

          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '60px 0' }}>
            <span style={{ fontSize: '48px', display: 'block', marginBottom: '15px' }}>🛒</span>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#d1d5db' }}>Coșul tău este gol...</h2>
            <Link href="/" style={{ marginTop: '15px', display: 'inline-block', color: '#2563eb', fontWeight: '900', textTransform: 'uppercase', textDecoration: 'none', fontSize: '14px' }}>
              Înapoi la magazin
            </Link>
          </div>
        )}
      </div>
    </main>
  )
}