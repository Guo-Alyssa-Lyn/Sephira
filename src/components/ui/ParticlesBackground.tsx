import { useCallback } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Engine } from '@tsparticles/engine';

interface ParticlesBackgroundProps {
  className?: string;
  variant?: 'default' | 'sparse' | 'dense';
}

const ParticlesBackground = ({ className = '', variant = 'default' }: ParticlesBackgroundProps) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const getConfig = (variant: string) => {
    const baseConfig = {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            area: 800,
          },
        },
        color: {
          value: '#ffffff',
        },
        shape: {
          type: 'circle',
        },
        opacity: {
          value: 0.5,
        },
        size: {
          value: { min: 1, max: 5 },
        },
        links: {
          enable: true,
          distance: 150,
          color: '#ffffff',
          opacity: 0.5,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: 'repulse',
          },
        },
        modes: {
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      detectRetina: true,
    };

    switch (variant) {
      case 'sparse':
        return {
          ...baseConfig,
          particles: {
            ...baseConfig.particles,
            number: {
              ...baseConfig.particles.number,
              value: 40,
            },
            opacity: {
              value: 0.3,
            },
          },
        };
      case 'dense':
        return {
          ...baseConfig,
          particles: {
            ...baseConfig.particles,
            number: {
              ...baseConfig.particles.number,
              value: 120,
            },
            opacity: {
              value: 0.7,
            },
          },
        };
      default:
        return baseConfig;
    }
  };

  return (
    <Particles
      className={`absolute inset-0 -z-10 ${className}`}
      id="tsparticles"
      particlesInit={particlesInit}
      options={getConfig(variant)}
      particlesLoaded={async () => {}}
    />
  );
};

export default ParticlesBackground; 