'use client'
import { useEffect, useState } from 'react'
import { fetchPictures } from '../lib/fetchPictures'
import { AllPictures } from '@/features/allPictures'

export default function HomePage() {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchPictures(24)
      const dataWithPrices = data.map(pic => ({
        ...pic,
        price: (Math.floor(Math.random() * 20) + 10 + '.50') 
      }))
      setPictures(dataWithPrices)
    }
    loadData()
  }, [])

  return (
    <main style={{ backgroundColor: '#f9fafb', minHeight: '100vh' }}>
      <AllPictures pictures={pictures} />
    </main>
  )
}