import useStore from '../lib/useStore'

export default function FavoriteButton({ pic }) {
  const { favorites, toggleFavorite } = useStore()
  const isFav = favorites.some(f => f.id === pic.id)

  return (
    <button 
      onClick={() => toggleFavorite(pic)}
      style={{
        padding: '8px',borderRadius: '5px',cursor: 'pointer', zIndex: 10,backgroundColor: 'white', 
        borderRadius: '50%', width: '40px', height: '40px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        border: '2px solid red', cursor: 'pointer'
      }}
    >
      {isFav ? '❤️' : '🤍'}
    </button>
  )
}