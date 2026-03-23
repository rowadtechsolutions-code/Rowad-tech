'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function PageLoader() {
  const [visible, setVisible] = useState(true)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setFading(true)
      setTimeout(() => setVisible(false), 400)
    }, 1200)
    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <div
      className="page-loader"
      style={{ opacity: fading ? 0 : 1, transition: 'opacity 0.4s ease' }}
      aria-hidden="true"
    >
      <div className="flex flex-col items-center gap-6">
        <Image
          src="/logo.svg"
          alt="Rowad Technology Solutions"
          width={180}
          height={47}
          className="h-12 w-auto animate-pulse"
          priority
        />
        <div className="w-48 bg-muted rounded-full overflow-hidden h-1">
          <div className="loader-bar rounded-full" />
        </div>
      </div>
    </div>
  )
}
