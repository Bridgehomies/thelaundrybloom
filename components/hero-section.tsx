"use client"

import { useEffect, useRef, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLeaf, faBolt, faGem, faSeedling } from "@fortawesome/free-solid-svg-icons"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Play, Pause } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [shouldLoadVideo, setShouldLoadVideo] = useState(true)
  const [videoVisible, setVideoVisible] = useState(false)
  const [isReplaying, setIsReplaying] = useState(false)

  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Check network quality
  useEffect(() => {
    const checkNetworkQuality = () => {
      if ("connection" in navigator) {
        const connection = navigator.connection as { effectiveType?: string; downlink?: number }
        const effectiveType = connection.effectiveType || "4g"
        const downlink = connection.downlink || 10
        if (effectiveType === "2g" || downlink < 1.5) {
          setShouldLoadVideo(false)
        }
      }
    }
    checkNetworkQuality()
  }, [])

  // Control video playback
  useEffect(() => {
    if (videoRef.current && videoVisible && shouldLoadVideo) {
      if (isPlaying) {
        videoRef.current.play().catch((err) => console.error("Autoplay failed", err))
      } else {
        videoRef.current.pause()
      }
    }
  }, [isPlaying, videoVisible, shouldLoadVideo])

  // Trigger when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVideoVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: "0px", threshold: 0.1 }
    )
    const current = containerRef.current
    if (current) observer.observe(current)
    return () => {
      if (current) observer.unobserve(current)
    }
  }, [])

  const handleEnded = () => {
    setIsPlaying(false)
    setIsReplaying(true)
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0
        videoRef.current.play()
        setIsPlaying(true)
        setIsReplaying(false)
      }
    }, 10000)
  }

  return (
    <section className="relative min-h-screen overflow-hidden font-nunito text-white" ref={containerRef}>
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/images/laundry-hero.jpg')] bg-cover bg-center opacity-60" />
        {(shouldLoadVideo || process.env.NODE_ENV === "development") && videoVisible && (
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            muted
            playsInline
            onLoadedData={() => setVideoLoaded(true)}
            onEnded={handleEnded}
          >
            <source src="/video/clean-elegant1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/60" />
      </div>

      {/* Play/Pause Button */}
      {shouldLoadVideo && videoVisible && (
        <div className="absolute top-4 right-4 z-30">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-md transition-all shadow-md"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-0.5" />}
          </button>
        </div>
      )}

      {/* Replay Notice */}
      {isReplaying && (
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 bg-black/60 text-white px-4 py-2 rounded-full text-sm">
          Replaying in 10 seconds...
        </div>
      )}

      {/* Content Overlay */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex items-center justify-center min-h-screen px-6"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="bg-white/10 backdrop-blur-xl p-6 md:p-12 rounded-3xl text-center max-w-2xl shadow-2xl border border-white/10"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-white to-blue-300">
            Laundry Bloom
          </h1>
          <p className="text-lg md:text-xl mb-4 opacity-90">
            Where Stains Transform into Pristine Perfection
          </p>
          <p className="text-sm md:text-base mb-6 text-white/80">
            At Laundry Bloom, we seamlessly blend luxury with efficiency. Our premium garment care services feature guaranteed 24–48 hour delivery, ensuring your wardrobe remains impeccable while your valuable time stays protected.
          </p>
          <Link href="/booking">
            <Button className="bg-blue-400 hover:bg-blue-900 text-gray-900 px-6 py-3 rounded-full shadow-lg transition-transform hover:scale-105">
              Begin Your Bloom Experience <FontAwesomeIcon icon={faLeaf} className="ml-2" />
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}