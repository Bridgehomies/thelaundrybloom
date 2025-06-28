"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Play, Pause } from "lucide-react"

export function VisualStorytellingBlock() {
  const [isArabic, setIsArabic] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [shouldLoadVideo, setShouldLoadVideo] = useState(true)
  const [videoVisible, setVideoVisible] = useState(false)
  const [isReplaying, setIsReplaying] = useState(false)

  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Toggle language every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsArabic(prev => !prev)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Detect network quality
  useEffect(() => {
    const checkNetworkQuality = () => {
      if ("connection" in navigator) {
        const connection = navigator.connection as { effectiveType?: string; downlink?: number }
        const effectiveType = connection.effectiveType || "4g"
        const downlink = connection.downlink || 10

        if (effectiveType === "2g" || downlink < 1.5) {
          setShouldLoadVideo(false)
        }
      } else {
        setShouldLoadVideo(false)
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

  // Intersection observer to trigger video loading
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

    const currentContainer = containerRef.current
    if (currentContainer) {
      observer.observe(currentContainer)
    }

    return () => {
      if (currentContainer) {
        observer.unobserve(currentContainer)
      }
    }
  }, [])

  const togglePlay = () => {
    setIsPlaying((prev) => !prev)
  }

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
    <section className="relative h-[90vh] w-full overflow-hidden" ref={containerRef}>
      {/* Background video and fallback */}
      <div className="absolute inset-0 z-0">
        {/* Fallback background image */}
        <div className="absolute inset-0 bg-[url('/images/laundry-hero.jpg')] bg-cover bg-center bg-no-repeat opacity-60"></div>

        {/* Conditional video */}
        {(shouldLoadVideo || process.env.NODE_ENV === "development") && videoVisible && (
          <video
            ref={videoRef}
            className="w-full h-full object-cover object-center"
            autoPlay
            muted
            playsInline
            onLoadedData={() => setVideoLoaded(true)}
            onEnded={handleEnded}
            preload="auto"
          >
            <source src="/video/clean-elegant1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/50 pointer-events-none"></div>
      </div>

      {/* Play/Pause floating button (top-right) */}
      {shouldLoadVideo && videoVisible && (
        <div className="absolute top-4 right-4 z-30">
          <button
            onClick={togglePlay}
            className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-md transition-all duration-300 shadow-md"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-0.5" />}
          </button>
        </div>
      )}

      {/* Replay notice */}
      {isReplaying && (
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 bg-black/60 text-white px-4 py-2 rounded-full text-sm">
          Replaying in 10 seconds...
        </div>
      )}

      {/* Content overlay */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex h-full items-center justify-center px-4 md:px-8"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="bg-white/10 backdrop-blur-xl p-6 md:p-12 rounded-3xl text-center text-white max-w-md md:max-w-2xl shadow-2xl border border-white/10"
        >
          <p className="mt-4 text-sm md:text-lg text-white/80">
            {isArabic
              ? "هذا ليس مجرد غسيل ملابس عادي."
              : "This isn't your average laundry service."}
          </p >

          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight leading-snug md:leading-tight">
            {isArabic
              ? "هذا هو اعتناء جديد بالملابس"
              : "This is fabric care, redefined"}
          </h2>

          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight leading-snug md:leading-tight">
            {isArabic
              ? "هذا هو تنظيف الأحذية بأسلوب مُحسّن "
              : "This is shoe cleaning, upgraded"}
          </h2>

          <p className="mt-4 text-sm md:text-lg text-white/80">
            {isArabic
              ? "هذا هو غسيل البر Laundry Bloom — حيث تحصل كل خصلة على العناية التي تستحقها"
              : "This is The Laundry Bloom — where every thread gets the TLC it deserves."}
          </p>

          <Button
            className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-5 py-2.5 md:px-6 md:py-3 rounded-full text-sm shadow-lg transition-transform duration-300 hover:scale-105 transform"
          >
            {isArabic ? "احجز الآن" : "Book Now"}
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
