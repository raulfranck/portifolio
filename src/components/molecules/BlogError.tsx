'use client'

import { motion } from 'framer-motion'
import { AlertCircle, RefreshCw, ExternalLink } from 'lucide-react'
import { Button, Text, Heading } from '@/components/atoms'

interface BlogErrorProps {
  error: string
  onRetry?: () => void
  className?: string
}

const BlogError = ({ error, onRetry, className = '' }: BlogErrorProps) => {
  return (
    <motion.div
      className={`text-center p-12 bg-bg-secondary rounded-2xl border border-red-500/20 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
      >
        <AlertCircle className="w-16 h-16 text-red-400 mx-auto mb-6" />
      </motion.div>
      
      <Heading as="h3" variant="subsection" className="mb-4 text-red-400">
        Ops! Algo deu errado
      </Heading>
      
      <Text variant="body" color="secondary" className="mb-8 max-w-md mx-auto">
        {error.includes('Username') 
          ? 'Parece que o username do Dev.to não foi configurado. Verifique as variáveis de ambiente.'
          : error.includes('fetch')
          ? 'Não foi possível conectar com o Dev.to. Verifique sua conexão com a internet.'
          : `Erro: ${error}`
        }
      </Text>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {onRetry && (
          <Button
            variant="primary"
            leftIcon={<RefreshCw size={18} />}
            onClick={onRetry}
          >
            Tentar Novamente
          </Button>
        )}
        
        <Button
          variant="outline"
          rightIcon={<ExternalLink size={18} />}
          onClick={() => window.open('https://dev.to', '_blank')}
        >
          Visitar Dev.to
        </Button>
      </div>
      
      {/* Geometric Elements for Error State */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
        <motion.div
          className="absolute top-4 right-4 w-8 h-8 border-2 border-red-400/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-4 left-4 w-6 h-6 bg-red-400/10 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-8 w-4 h-4 bg-red-400/5 rotate-45"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>
    </motion.div>
  )
}

export default BlogError 