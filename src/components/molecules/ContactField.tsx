'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import { Input, Textarea, Text, Icon } from '@/components/atoms'

interface ContactFieldProps {
  type?: 'input' | 'textarea'
  inputType?: string
  label: string
  placeholder: string
  value: string
  onChange: (value: string) => void
  error?: string
  required?: boolean
  icon?: LucideIcon
  variant?: 'filled' | 'outlined' | 'minimal'
  rows?: number
  autoResize?: boolean
  animated?: boolean
}

const ContactField = ({
  type = 'input',
  inputType = 'text',
  label,
  placeholder,
  value,
  onChange,
  error,
  required = false,
  icon,
  variant = 'outlined',
  rows = 4,
  autoResize = false,
  animated = true
}: ContactFieldProps) => {
  
  const fieldContent = (
    <div className="space-y-2">
      {/* Label */}
      <div className="flex items-center gap-2">
        {icon && (
                   <Icon 
           icon={icon} 
           size="sm" 
           color="secondary"
           className={error ? 'text-red-400' : ''}
         />
       )}
       <Text 
         variant="small" 
         color="secondary"
         className={`font-medium ${error ? 'text-red-400' : ''}`}
        >
          {label}
          {required && <span className="text-red-400 ml-1">*</span>}
        </Text>
      </div>
      
      {/* Field */}
      {type === 'textarea' ? (
        <Textarea
          label=""
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          variant={variant}
          rows={rows}
          autoResize={autoResize}
          error={error}
          className="w-full"
        />
      ) : (
        <Input
          label=""
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          variant={variant}
          error={error}
          leftIcon={icon ? <Icon icon={icon} size="sm" /> : undefined}
          className="w-full"
        />
      )}
      
      {/* Error message */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <Text variant="small" className="text-red-400">
            {error}
          </Text>
        </motion.div>
      )}
    </div>
  )

  if (animated) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
        {fieldContent}
      </motion.div>
    )
  }

  return <div className="w-full">{fieldContent}</div>
}

export default ContactField 