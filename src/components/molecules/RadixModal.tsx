'use client'

import { ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { Button, Icon } from '@/components/atoms'

interface RadixModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  className?: string
}

const RadixModal = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  className = ''
}: RadixModalProps) => {
  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
    full: 'max-w-7xl'
  }

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  const contentVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        duration: 0.5,
        bounce: 0.3
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.3
      }
    }
  }

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <AnimatePresence>
        {isOpen && (
          <Dialog.Portal forceMount>
            {/* Overlay */}
            <Dialog.Overlay asChild forceMount>
              <motion.div
                className="fixed inset-0 z-[9998] bg-bg-primary/80 backdrop-blur-sm"
                variants={overlayVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              />
            </Dialog.Overlay>

            {/* Content Container */}
            <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4" onClick={onClose}>
              <Dialog.Content asChild forceMount>
                <motion.div
                  className={`
                    relative w-full ${sizeClasses[size]} max-h-[90vh]
                    bg-bg-secondary border border-bg-tertiary rounded-2xl 
                    shadow-2xl overflow-hidden ${className}
                  `}
                                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  onClick={(e) => e.stopPropagation()}
                >
                {/* Header */}
                {title && (
                  <div className="flex items-center justify-between p-6 border-b border-bg-tertiary">
                    <Dialog.Title className="text-xl font-semibold text-text-accent">
                      {title}
                    </Dialog.Title>
                    <Dialog.Close asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-text-secondary hover:text-text-accent"
                      >
                        <Icon icon={X} size="sm" />
                      </Button>
                    </Dialog.Close>
                  </div>
                )}

                {/* Close button (quando não há título) */}
                {!title && (
                  <div className="absolute top-4 right-4 z-10">
                    <Dialog.Close asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-text-secondary hover:text-text-accent bg-bg-primary/50 backdrop-blur-sm"
                      >
                        <Icon icon={X} size="sm" />
                      </Button>
                    </Dialog.Close>
                  </div>
                )}

                {/* Content */}
                <div 
                  className="overflow-y-auto max-h-[calc(90vh-120px)] custom-scrollbar"
                  style={{
                    scrollbarWidth: 'thin',
                    scrollbarColor: '#00FFC6 #2E2E33'
                  }}
                >
                  <div className="p-8">
                    {children}
                  </div>
                </div>
                              </motion.div>
              </Dialog.Content>
            </div>
            </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  )
}

export default RadixModal 