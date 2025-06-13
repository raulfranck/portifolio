'use client'

import { motion } from 'framer-motion'

interface SectionSeparatorProps {
  className?: string
  variant?: 'default' | 'gradient' | 'minimal'
}

const SectionSeparator = ({ className = '', variant = 'default' }: SectionSeparatorProps) => {
  return (
    <div className={`relative py-16 overflow-hidden ${className}`}>
      {/* Background Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating geometric elements */}
        <motion.div
          className="absolute top-8 left-1/4 w-16 h-16 border border-accent-green/20 rounded-full"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-8 right-1/3 w-12 h-12 bg-accent-purple/10 rounded-xl blur-sm"
          animate={{
            y: [0, 15, 0],
            rotate: [0, -180, -360],
            scale: [1, 0.9, 1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-accent-yellow/15 rounded-full blur-md"
          animate={{
            x: [-20, 20, -20],
            y: [-10, 10, -10],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        {/* Additional scattered elements */}
        <motion.div
          className="absolute top-4 right-1/4 w-6 h-6 bg-accent-green/5 rounded-full blur-lg"
          animate={{
            y: [0, -25, 0],
            x: [0, 10, 0],
            scale: [1, 1.4, 1]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />

        <motion.div
          className="absolute bottom-4 left-1/3 w-10 h-10 border border-accent-purple/15 rounded-lg"
          animate={{
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Separator Line */}
      {variant === 'gradient' && (
        <motion.div
          className="relative h-px bg-gradient-to-r from-transparent via-accent-green/30 to-transparent mx-auto max-w-xs"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          {/* Glowing effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-green/50 to-transparent blur-sm" />
        </motion.div>
      )}

      {variant === 'minimal' && (
        <motion.div
          className="flex items-center justify-center space-x-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="w-2 h-2 bg-accent-green rounded-full"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="w-2 h-2 bg-accent-purple rounded-full"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
          />
          <motion.div
            className="w-2 h-2 bg-accent-yellow rounded-full"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
          />
        </motion.div>
      )}
    </div>
  )
}

export default SectionSeparator 