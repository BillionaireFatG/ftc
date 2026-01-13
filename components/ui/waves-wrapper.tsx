"use client"

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Waves } from './waves'

export function WavesWrapper() {
  const pathname = usePathname()
  const [key, setKey] = useState(0)

  // Force remount when route changes for fresh animations
  useEffect(() => {
    setKey(prev => prev + 1)
  }, [pathname])

  return (
    <Waves 
      key={key}
      strokeColor="rgba(200, 195, 255, 0.6)"
      backgroundColor="transparent"
      pointerSize={0.6}
    />
  )
}
