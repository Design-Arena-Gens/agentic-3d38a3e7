'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const heroShots = [
  {
    id: 1,
    title: 'Tartar Burst',
    subtitle: 'Crispy Perfection with Capers & Dill',
    bgColor: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
    accentColor: '#FFD700',
    description: 'Thick tartar sauce bursting with capers, dill, and chopped pickles'
  },
  {
    id: 2,
    title: 'Truffle Luxe',
    subtitle: 'White Truffle & Porcini Dust',
    bgColor: 'linear-gradient(135deg, #F5DEB3 0%, #D4AF77 100%)',
    accentColor: '#D4AF77',
    description: 'Creamy white truffle sauce with shaved mushrooms and porcini powder'
  }
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroShots.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [isAutoPlay])

  const currentHero = heroShots[currentSlide]

  return (
    <main style={{ width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative' }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            width: '100%',
            height: '100%',
            background: currentHero.bgColor,
            position: 'absolute',
            top: 0,
            left: 0
          }}
        >
          {/* Main Content Container */}
          <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            padding: '2rem'
          }}>

            {/* Title Section */}
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              style={{
                textAlign: 'center',
                marginBottom: '3rem',
                zIndex: 10
              }}
            >
              <h1 style={{
                fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                fontWeight: '900',
                color: '#1a1a1a',
                textShadow: '0 4px 12px rgba(0,0,0,0.1)',
                letterSpacing: '-0.02em',
                marginBottom: '0.5rem'
              }}>
                {currentHero.title}
              </h1>
              <p style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
                color: '#3a3a3a',
                fontWeight: '600',
                letterSpacing: '0.05em',
                textTransform: 'uppercase'
              }}>
                {currentHero.subtitle}
              </p>
            </motion.div>

            {/* Chicken Visual - Center Stage */}
            <motion.div
              initial={{ scale: 0.8, y: 100, opacity: 0 }}
              animate={{
                scale: 1,
                y: 0,
                opacity: 1,
                rotate: [0, -2, 2, -2, 0]
              }}
              transition={{
                delay: 0.5,
                duration: 1.2,
                rotate: {
                  delay: 1.5,
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              style={{
                position: 'relative',
                width: 'clamp(300px, 50vw, 600px)',
                height: 'clamp(400px, 66vw, 800px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {/* Glow Effect */}
              <div style={{
                position: 'absolute',
                width: '120%',
                height: '120%',
                background: `radial-gradient(circle, ${currentHero.accentColor}40 0%, transparent 70%)`,
                filter: 'blur(60px)',
                zIndex: 1
              }} />

              {/* Chicken Representation */}
              <div style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 2
              }}>
                <svg width="100%" height="100%" viewBox="0 0 300 400" style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))' }}>
                  {/* Chicken Thigh Shape */}
                  <defs>
                    <linearGradient id="chickenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#D4A574', stopOpacity: 1 }} />
                      <stop offset="50%" style={{ stopColor: '#B8860B', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: '#8B6914', stopOpacity: 1 }} />
                    </linearGradient>
                    <filter id="crispyTexture">
                      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" />
                      <feColorMatrix type="saturate" values="0.3"/>
                      <feBlend mode="overlay" in="SourceGraphic" />
                    </filter>
                  </defs>

                  {/* Main chicken thigh */}
                  <ellipse cx="150" cy="200" rx="80" ry="120" fill="url(#chickenGradient)" filter="url(#crispyTexture)" />
                  <ellipse cx="150" cy="200" rx="75" ry="115" fill="none" stroke="#A0826D" strokeWidth="2" opacity="0.6" />

                  {/* Crispy texture details */}
                  <circle cx="130" cy="160" r="8" fill="#C9A961" opacity="0.8" />
                  <circle cx="170" cy="180" r="6" fill="#C9A961" opacity="0.7" />
                  <circle cx="140" cy="220" r="7" fill="#C9A961" opacity="0.9" />
                  <circle cx="165" cy="230" r="5" fill="#C9A961" opacity="0.8" />

                  {/* Bone end */}
                  <ellipse cx="150" cy="130" rx="20" ry="15" fill="#F5E6D3" />
                  <rect x="145" y="110" width="10" height="25" fill="#F5E6D3" rx="5" />
                </svg>
              </div>

              {/* Animated Sauce Splashes */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: [0, 1.5, 1],
                    opacity: [0, 0.8, 0],
                    x: [0, (Math.cos(i * 45 * Math.PI / 180) * 150)],
                    y: [0, (Math.sin(i * 45 * Math.PI / 180) * 150)]
                  }}
                  transition={{
                    delay: 1 + (i * 0.1),
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                  style={{
                    position: 'absolute',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: currentSlide === 0
                      ? 'radial-gradient(circle, #F5F5DC 0%, #E8E8C8 100%)'
                      : 'radial-gradient(circle, #FFFEF0 0%, #F5E6D3 100%)',
                    zIndex: 3,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                  }}
                />
              ))}

              {/* Herb/Ingredient particles */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={`particle-${i}`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0.5],
                    x: [(Math.random() - 0.5) * 100, (Math.random() - 0.5) * 200],
                    y: [-50 + (Math.random() * 100), 50 + (Math.random() * 150)],
                    rotate: [0, 360]
                  }}
                  transition={{
                    delay: 1.5 + (Math.random() * 2),
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2
                  }}
                  style={{
                    position: 'absolute',
                    width: '6px',
                    height: '6px',
                    borderRadius: currentSlide === 0 ? '50%' : '2px',
                    background: currentSlide === 0 ? '#4A6741' : '#8B7355',
                    zIndex: 4
                  }}
                />
              ))}
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              style={{
                marginTop: '3rem',
                fontSize: 'clamp(0.9rem, 2vw, 1.2rem)',
                color: '#2a2a2a',
                textAlign: 'center',
                maxWidth: '600px',
                lineHeight: '1.6',
                fontWeight: '500'
              }}
            >
              {currentHero.description}
            </motion.p>

            {/* Navigation Dots */}
            <div style={{
              position: 'absolute',
              bottom: '3rem',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: '1rem',
              zIndex: 10
            }}>
              {heroShots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentSlide(index)
                    setIsAutoPlay(false)
                  }}
                  style={{
                    width: currentSlide === index ? '40px' : '12px',
                    height: '12px',
                    borderRadius: '6px',
                    border: 'none',
                    background: currentSlide === index ? '#1a1a1a' : 'rgba(26, 26, 26, 0.3)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: currentSlide === index ? '0 2px 8px rgba(0,0,0,0.3)' : 'none'
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Auto-play toggle */}
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              style={{
                position: 'absolute',
                bottom: '3rem',
                right: '3rem',
                padding: '0.75rem 1.5rem',
                background: 'rgba(26, 26, 26, 0.8)',
                color: 'white',
                border: 'none',
                borderRadius: '25px',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: '600',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease',
                zIndex: 10
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = 'rgba(26, 26, 26, 1)'
                e.currentTarget.style.transform = 'scale(1.05)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'rgba(26, 26, 26, 0.8)'
                e.currentTarget.style.transform = 'scale(1)'
              }}
            >
              {isAutoPlay ? '⏸ Pause' : '▶ Play'}
            </button>

            {/* Commercial Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              style={{
                position: 'absolute',
                top: '2rem',
                right: '2rem',
                padding: '0.5rem 1rem',
                background: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '20px',
                fontSize: '0.75rem',
                fontWeight: '700',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#1a1a1a',
                boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                zIndex: 10
              }}
            >
              Ultra-Detailed Commercial
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </main>
  )
}
