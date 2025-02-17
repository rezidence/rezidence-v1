"use client"

import { useRouter } from 'next/navigation'

interface ClientButtonProps {
  href: string
  className?: string
  children: React.ReactNode
}

export default function ClientButton({ href, className, children }: ClientButtonProps) {
  const router = useRouter()
  
  return (
    <button 
      onClick={() => router.push(href)}
      className={className}
    >
      {children}
    </button>
  )
} 