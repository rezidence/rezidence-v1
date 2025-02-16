'use client'

import { Button } from "@/components/ui/button"
import { useEffect } from "react"

export default function ErrorProperties({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
        <p className="text-gray-600 mb-4">
          {error.message || "Failed to load properties"}
        </p>
        <Button onClick={reset}>Try again</Button>
      </div>
    </div>
  )
} 