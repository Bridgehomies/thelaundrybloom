"use client"

import { useState, useEffect } from "react"

export default function LaundryLoadingPage() {
  const [animationComplete, setAnimationComplete] = useState(false)
  const [showText, setShowText] = useState(false)

  useEffect(() => {
    // Complete animation after 4 seconds
    const animationTimer = setTimeout(() => {
      setAnimationComplete(true)
    }, 4000)

    // Show text after 4.5 seconds (slight delay for smooth transition)
    const textTimer = setTimeout(() => {
      setShowText(true)
    }, 4500)

    return () => {
      clearTimeout(animationTimer)
      clearTimeout(textTimer)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center overflow-hidden">
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Animated Laundry Items */}
        {!animationComplete && (
          <>
            {/* Shirt 1 - from top left */}
            <div className="absolute animate-[slideToBasket1_4s_ease-in-out_forwards] opacity-0">
              <div className="w-8 h-8 md:w-12 md:h-12 bg-blue-400 rounded-t-lg relative">
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-4 h-2 md:w-6 md:h-3 bg-blue-400 rounded-t-full"></div>
                <div className="absolute top-2 left-0 w-2 h-4 md:w-3 md:h-6 bg-blue-400 rounded-l-full"></div>
                <div className="absolute top-2 right-0 w-2 h-4 md:w-3 md:h-6 bg-blue-400 rounded-r-full"></div>
              </div>
            </div>

            {/* Pants - from top right */}
            <div className="absolute animate-[slideToBasket2_4s_ease-in-out_0.5s_forwards] opacity-0">
              <div className="w-6 h-10 md:w-8 md:h-12 bg-green-400 rounded-t-lg relative">
                <div className="absolute bottom-0 left-0 w-2 h-6 md:w-3 md:h-8 bg-green-400 rounded-b-lg"></div>
                <div className="absolute bottom-0 right-0 w-2 h-6 md:w-3 md:h-8 bg-green-400 rounded-b-lg"></div>
              </div>
            </div>

            {/* Towel - from bottom left */}
            <div className="absolute animate-[slideToBasket3_4s_ease-in-out_1s_forwards] opacity-0">
              <div className="w-10 h-6 md:w-12 md:h-8 bg-pink-400 rounded-lg relative">
                <div className="absolute inset-1 border-2 border-pink-300 rounded"></div>
              </div>
            </div>

            {/* Shirt 2 - from bottom right */}
            <div className="absolute animate-[slideToBasket4_4s_ease-in-out_1.5s_forwards] opacity-0">
              <div className="w-8 h-8 md:w-12 md:h-12 bg-purple-400 rounded-t-lg relative">
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-4 h-2 md:w-6 md:h-3 bg-purple-400 rounded-t-full"></div>
                <div className="absolute top-2 left-0 w-2 h-4 md:w-3 md:h-6 bg-purple-400 rounded-l-full"></div>
                <div className="absolute top-2 right-0 w-2 h-4 md:w-3 md:h-6 bg-purple-400 rounded-r-full"></div>
              </div>
            </div>

            {/* Socks - from left */}
            <div className="absolute animate-[slideToBasket5_4s_ease-in-out_2s_forwards] opacity-0">
              <div className="flex space-x-1">
                <div className="w-3 h-6 md:w-4 md:h-8 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-6 md:w-4 md:h-8 bg-yellow-400 rounded-full"></div>
              </div>
            </div>

            {/* Dress - from right */}
            <div className="absolute animate-[slideToBasket6_4s_ease-in-out_2.5s_forwards] opacity-0">
              <div className="w-8 h-10 md:w-10 md:h-12 bg-red-400 rounded-t-lg relative">
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-4 h-2 md:w-6 md:h-3 bg-red-400 rounded-t-full"></div>
                <div className="absolute bottom-0 left-0 w-full h-4 md:h-6 bg-red-400 rounded-b-full"></div>
              </div>
            </div>
          </>
        )}

        {/* Central Basket */}
        <div
          className={`relative z-10 transition-all duration-1000 ${
            animationComplete
              ? "transform translate-y-16 scale-100 opacity-60"
              : "transform translate-y-0 scale-100 opacity-100"
          }`}
        >
          <svg
            width="120"
            height="100"
            viewBox="0 0 120 100"
            className="w-24 h-20 md:w-32 md:h-24 lg:w-36 lg:h-28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Basket body */}
            <path d="M20 35 L100 35 L95 85 L25 85 Z" stroke="#8B4513" strokeWidth="3" fill="#D2B48C" opacity="0.8" />

            {/* Basket weave pattern */}
            <line x1="30" y1="35" x2="28" y2="85" stroke="#8B4513" strokeWidth="1.5" opacity="0.6" />
            <line x1="40" y1="35" x2="38" y2="85" stroke="#8B4513" strokeWidth="1.5" opacity="0.6" />
            <line x1="50" y1="35" x2="48" y2="85" stroke="#8B4513" strokeWidth="1.5" opacity="0.6" />
            <line x1="60" y1="35" x2="58" y2="85" stroke="#8B4513" strokeWidth="1.5" opacity="0.6" />
            <line x1="70" y1="35" x2="68" y2="85" stroke="#8B4513" strokeWidth="1.5" opacity="0.6" />
            <line x1="80" y1="35" x2="78" y2="85" stroke="#8B4513" strokeWidth="1.5" opacity="0.6" />
            <line x1="90" y1="35" x2="88" y2="85" stroke="#8B4513" strokeWidth="1.5" opacity="0.6" />

            {/* Horizontal weave */}
            <line x1="20" y1="45" x2="100" y2="45" stroke="#8B4513" strokeWidth="1.5" opacity="0.4" />
            <line x1="22" y1="55" x2="98" y2="55" stroke="#8B4513" strokeWidth="1.5" opacity="0.4" />
            <line x1="24" y1="65" x2="96" y2="65" stroke="#8B4513" strokeWidth="1.5" opacity="0.4" />
            <line x1="26" y1="75" x2="94" y2="75" stroke="#8B4513" strokeWidth="1.5" opacity="0.4" />

            {/* Basket handles */}
            <path d="M15 30 Q10 25 15 20 Q20 25 15 30" stroke="#8B4513" strokeWidth="3" fill="none" />
            <path d="M105 30 Q110 25 105 20 Q100 25 105 30" stroke="#8B4513" strokeWidth="3" fill="none" />
          </svg>
        </div>

        {/* Brand Text */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 ${
            showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              The Laundry Bloom
            </h1>
            <div className="mt-4 w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          </div>
        </div>

        {/* Loading dots (subtle) */}
        {!showText && (
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes slideToBasket1 {
          0% { 
            transform: translate(-200px, -200px) rotate(0deg); 
            opacity: 0; 
          }
          20% { 
            opacity: 1; 
          }
          80% { 
            transform: translate(-20px, -20px) rotate(180deg); 
            opacity: 1; 
          }
          100% { 
            transform: translate(0px, 0px) rotate(360deg) scale(0.5); 
            opacity: 0; 
          }
        }

        @keyframes slideToBasket2 {
          0% { 
            transform: translate(200px, -200px) rotate(0deg); 
            opacity: 0; 
          }
          20% { 
            opacity: 1; 
          }
          80% { 
            transform: translate(20px, -20px) rotate(-180deg); 
            opacity: 1; 
          }
          100% { 
            transform: translate(0px, 0px) rotate(-360deg) scale(0.5); 
            opacity: 0; 
          }
        }

        @keyframes slideToBasket3 {
          0% { 
            transform: translate(-200px, 200px) rotate(0deg); 
            opacity: 0; 
          }
          20% { 
            opacity: 1; 
          }
          80% { 
            transform: translate(-20px, 20px) rotate(90deg); 
            opacity: 1; 
          }
          100% { 
            transform: translate(0px, 0px) rotate(180deg) scale(0.5); 
            opacity: 0; 
          }
        }

        @keyframes slideToBasket4 {
          0% { 
            transform: translate(200px, 200px) rotate(0deg); 
            opacity: 0; 
          }
          20% { 
            opacity: 1; 
          }
          80% { 
            transform: translate(20px, 20px) rotate(-90deg); 
            opacity: 1; 
          }
          100% { 
            transform: translate(0px, 0px) rotate(-180deg) scale(0.5); 
            opacity: 0; 
          }
        }

        @keyframes slideToBasket5 {
          0% { 
            transform: translate(-300px, 0px) rotate(0deg); 
            opacity: 0; 
          }
          20% { 
            opacity: 1; 
          }
          80% { 
            transform: translate(-30px, 0px) rotate(270deg); 
            opacity: 1; 
          }
          100% { 
            transform: translate(0px, 0px) rotate(360deg) scale(0.5); 
            opacity: 0; 
          }
        }

        @keyframes slideToBasket6 {
          0% { 
            transform: translate(300px, 0px) rotate(0deg); 
            opacity: 0; 
          }
          20% { 
            opacity: 1; 
          }
          80% { 
            transform: translate(30px, 0px) rotate(-270deg); 
            opacity: 1; 
          }
          100% { 
            transform: translate(0px, 0px) rotate(-360deg) scale(0.5); 
            opacity: 0; 
          }
        }
      `}</style>
    </div>
  )
}
