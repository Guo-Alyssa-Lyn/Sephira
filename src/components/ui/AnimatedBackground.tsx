import { motion } from 'framer-motion';

interface AnimatedBackgroundProps {
  className?: string;
}

const AnimatedBackground = ({ className = '' }: AnimatedBackgroundProps) => {
  return (
    <div className={`absolute inset-0 -z-10 overflow-hidden ${className}`}>
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
      
      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"
        animate={{
          x: ['0%', '100%', '0%'],
          y: ['0%', '100%', '0%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e5_1px,transparent_1px),linear-gradient(to_bottom,#4f46e5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      {/* Shimmer effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
      </div>
    </div>
  );
};

export default AnimatedBackground; 