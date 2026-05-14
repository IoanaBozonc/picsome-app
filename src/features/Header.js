"use client";
import Link from 'next/link';
import useStore from '../lib/useStore';

export default function Header() {
  const { cart, favorites } = useStore();

  return (
    <header 
      style={{ 
        backgroundColor: '#f1a7a7', 
        padding: '20px 40px',
        display: 'grid',
        gridTemplateColumns: '1fr 2fr 1fr',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      }}
    >
      
      {/* 1. Pagina principala */}
      <div style={{ textAlign: 'left' }}>
        <Link href="/" style={{ 
          textDecoration: 'none', 
          fontSize: '20px', 
          fontWeight: 'bold', 
          color: '#374151', 
          textTransform: 'uppercase' 
        }}>
          PAGINA PRINCIPALA
        </Link>
      </div>

      {/* 2. MIJLOC */}
      <div style={{ textAlign: 'center' }}>
        <span style={{ 
          fontSize: '80px', 
          fontWeight: '950', 
          color: 'white',
          letterSpacing: '-3px',
          textTransform: 'uppercase'
        }}>
          IOANA'S APP
        </span>
      </div>

      {/* 3. DREAPTA: magazin si favorite cu numere incercuite */}
      <nav style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '10px', 
        alignItems: 'flex-end' 
      }}>
        
        {/* MAGAZIN */}
        <Link href="/store" style={{ 
          textDecoration: 'none', 
          color: '#1f2937', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '8px',
          fontWeight: 'bold',
          fontSize: '18px'
        }}>
          <span>🛒 MAGAZIN</span>
          <span style={{
            border: '2px solid #1f2937',
            borderRadius: '50%',
            width: '28px',
            height: '28px',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px'
          }}>
            {cart.length}
          </span>
        </Link>

        {/* FAVORITE */}
        <Link href="/favorites" style={{ 
          textDecoration: 'none', 
          color: '#1f2937', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '8px',
          fontWeight: 'bold',
          fontSize: '18px'
        }}>
          <span>❤️ FAVORITE</span>
          <span style={{
            border: '2px solid #ef4444',
            color: '#ef4444',
            borderRadius: '50%',
            width: '28px',
            height: '28px',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px'
          }}>
            {favorites.length}
          </span>
        </Link>

      </nav>
    </header>
  );
}