"use client"

import { useEffect, useState } from "react"
import LaundryLoadingPage from "./LaundryLoadingPage"

export default function LoaderWrapper({ children }: { children: React.ReactNode }) {
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 6000) // match your animation delay
    return () => clearTimeout(timer)
  }, [])

  return showLoader ? <LaundryLoadingPage /> : <>{children}</>
}
