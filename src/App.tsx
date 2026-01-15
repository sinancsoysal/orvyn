import { useState, useEffect, useMemo } from 'react'
// @ts-ignore
import FaultyTerminal from './components/FaultyTerminal'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Give the terminal a moment to initialize
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 50)

    return () => clearTimeout(timer)
  }, [])

  // Memoize the terminal component so it doesn't re-render
  const memoizedTerminal = useMemo(() => (
    <FaultyTerminal
      scale={1.4}
      digitSize={1.8}
      scanlineIntensity={0.3}
      glitchAmount={1}
      flickerAmount={1}
      noiseAmp={0}
      chromaticAberration={0}
      dither={0}
      curvature={0.1}
      tint="#ffffff"
      mouseReact
      mouseStrength={0.2}
      brightness={1}
    />
  ), [])

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#000000',
      }}
    >

      {memoizedTerminal}

      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffffff',
          fontFamily: 'monospace',
          textAlign: 'center',
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            background: isLoading ? 'transparent' : 'radial-gradient(ellipse at center, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.65) 50%, transparent 100%)',
            padding: '3rem 4rem',
            borderRadius: '0.5rem',
            transition: 'background 0.8s ease-in-out',
          }}
        >
          <h1 style={{ fontSize: '3rem', margin: 0, letterSpacing: '.3em' }}>
            orvyn
          </h1>
          <p style={{ marginTop: '1rem', opacity: 0.7, fontSize: '1.2rem' }}>
            Site ve hizmetlerimiz yapım aşamasında
          </p>
          <p style={{ marginTop: '0.5rem', opacity: 0.6, fontSize: '0.9rem' }}>
            Çok yakında sizlerle olacağız
          </p>
          <a
            href="mailto:info@orvyn.com.tr"
            style={{
              marginTop: '2rem',
              padding: '0.75rem 2rem',
              color: '#ffffff',
              border: '1px solid #ffffff',
              textDecoration: 'none',
              letterSpacing: '0.1em',
              pointerEvents: 'auto',
              opacity: 0.8,
              transition: 'opacity 0.3s',
              display: 'inline-block',
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '0.8'}
          >
            Daha fazla bilgi
          </a>
        </div>
      </div>
    </div>
  )
}

export default App