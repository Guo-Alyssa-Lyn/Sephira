export const theme = {
  colors: {
    primary: '#00ffff', // Cyan
    secondary: '#0891b2', // Darker cyan
    accent: '#0e7490', // Deep cyan
    background: {
      darker: '#000000',
      dark: '#111111',
      gradient: {
        from: '#000000',
        via: '#001a1a',
        to: '#002626'
      }
    },
    text: {
      primary: '#ffffff',
      secondary: '#94a3b8',
      muted: '#64748b'
    }
  },
  fonts: {
    sans: 'Inter, system-ui, -apple-system, sans-serif',
    mono: 'JetBrains Mono, monospace'
  },
  effects: {
    glow: '0 0 20px rgba(0, 255, 255, 0.5)',
    gradientText: 'linear-gradient(to right, #00ffff, #0891b2)',
    glassMorphism: 'rgba(0, 255, 255, 0.1)'
  },
  animation: {
    duration: {
      fast: '0.2s',
      normal: '0.3s',
      slow: '0.5s'
    },
    easing: {
      smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
    }
  }
} as const; 