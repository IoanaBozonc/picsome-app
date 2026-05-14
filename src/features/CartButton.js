import useStore from '../lib/useStore'

export default function CartButton({ pic }) {
  const { cart, addToCart } = useStore()
  const inCart = cart.some(item => item.id === pic.id)

  return (
    <button 
      onClick={() => addToCart(pic)}
      disabled={inCart}
      style={{
        padding: '8px 12px',
        borderRadius: '8px',
        fontSize: '14px',
        fontWeight: 'bold',
        cursor: inCart ? 'not-allowed' : 'pointer',
        backgroundColor: inCart ? '#e2e8f0' : '#f63b3b',
        color: inCart ? '#64748b' : 'white',
        border: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
        width: 'fit-content'
      }}
    >
      {inCart ? (
        <>✅ Adăugat</>
      ) : (
        <>🛒 Adaugă</>
      )}
    </button>
  )
}