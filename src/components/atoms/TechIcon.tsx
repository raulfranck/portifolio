'use client'

import { motion } from 'framer-motion'
import { 
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiNodedotjs,
  SiTailwindcss, SiMongodb, SiPostgresql, SiDocker, SiGit,
  SiPython, SiFigma, SiFramer, SiVercel, SiGithub,
  SiHtml5, SiCss3, SiExpress, SiPrisma, SiRedis,
  SiGooglecloud, SiFirebase, SiSupabase, SiStripe,
  SiOpenai, SiTensorflow, SiAmazon, SiGithubactions,
  SiNestjs, SiFastapi
} from 'react-icons/si'
import { 
  DiJava, DiPhp, DiMysql, DiSass, DiBootstrap,
  DiWordpress
} from 'react-icons/di'
import { FaVuejs, FaAngular, FaLaravel } from 'react-icons/fa'
import { IconType } from 'react-icons'

// Mapeamento de tecnologias para ícones
const techIconMap: Record<string, IconType> = {
  // Frontend
  'react': SiReact,
  'nextjs': SiNextdotjs,
  'next.js': SiNextdotjs,
  'vue': FaVuejs,
  'vue.js': FaVuejs,
  'angular': FaAngular,
  'javascript': SiJavascript,
  'typescript': SiTypescript,
  'html': SiHtml5,
  'html5': SiHtml5,
  'css': SiCss3,
  'css3': SiCss3,
  'tailwind': SiTailwindcss,
  'tailwindcss': SiTailwindcss,
  'bootstrap': DiBootstrap,
  'sass': DiSass,
  'scss': DiSass,
  'framer-motion': SiFramer,
  'framer': SiFramer,

  // Backend
  'nodejs': SiNodedotjs,
  'node.js': SiNodedotjs,
  'node': SiNodedotjs,
  'express': SiExpress,
  'expressjs': SiExpress,
  'python': SiPython,
  'java': DiJava,
  'php': DiPhp,
  'laravel': FaLaravel,
  'fastapi': SiFastapi,
  'nest.js': SiNestjs,
  'nestjs': SiNestjs,

  // Database
  'mongodb': SiMongodb,
  'mongo': SiMongodb,
  'postgresql': SiPostgresql,
  'postgres': SiPostgresql,
  'mysql': DiMysql,
  'redis': SiRedis,
  'prisma': SiPrisma,

  // DevOps & Tools
  'docker': SiDocker,
  'git': SiGit,
  'github': SiGithub,
  'github actions': SiGithubactions,
  'githubactions': SiGithubactions,
  'vercel': SiVercel,
  'gcp': SiGooglecloud,
  'aws': SiAmazon,
  'firebase': SiFirebase,
  'supabase': SiSupabase,

  // AI & ML
  'openai api': SiOpenai,
  'openai': SiOpenai,
  'tensorflow': SiTensorflow,
  'langchain': SiPython, // usando Python como fallback
  'hugging face': SiPython, // usando Python como fallback
  'python ml': SiPython,
  'rag systems': SiPython, // usando Python como fallback
  'vector dbs': SiPython, // usando Python como fallback
  'langgraph': SiPython,
  'autogen': SiPython,
  'crewai': SiPython,
  'multi-agent': SiPython,
  'kubernetes': SiDocker, // usando Docker como similar
  'serverless': SiGooglecloud,
  'embedding systems': SiPython,
  'rag architecture': SiPython,
  'llm orchestration': SiPython,
  'smart caching': SiRedis,
  'ai-native apis': SiPython,
  'semantic search': SiPython,

  // Others
  'figma': SiFigma,
  'stripe': SiStripe,
  'wordpress': DiWordpress
}

// Cores por categoria de tecnologia
const categoryColors: Record<string, string> = {
  frontend: '#00FFC6', // accent-green
  backend: '#7F5AF0',  // accent-purple
  database: '#FFD600', // accent-yellow
  devops: '#E4E4E7',   // text-accent
  ai: '#00FFC6',       // accent-green
  design: '#F4F4F5',   // text-accent
  other: '#A1A1AA'     // text-secondary
}

// Categorização das tecnologias
const techCategories: Record<string, string> = {
  react: 'frontend',
  nextjs: 'frontend',
  'next.js': 'frontend',
  vue: 'frontend',
  'vue.js': 'frontend',
  angular: 'frontend',
  javascript: 'frontend',
  typescript: 'frontend',
  html: 'frontend',
  html5: 'frontend',
  css: 'frontend',
  css3: 'frontend',
  tailwind: 'frontend',
  tailwindcss: 'frontend',
  bootstrap: 'frontend',
  sass: 'frontend',
  scss: 'frontend',
  'framer-motion': 'frontend',
  framer: 'frontend',

  nodejs: 'backend',
  'node.js': 'backend',
  node: 'backend',
  express: 'backend',
  expressjs: 'backend',
  python: 'backend',
  java: 'backend',
  php: 'backend',
  laravel: 'backend',
  fastapi: 'backend',
  'nest.js': 'backend',
  nestjs: 'backend',

  mongodb: 'database',
  mongo: 'database',
  postgresql: 'database',
  postgres: 'database',
  mysql: 'database',
  redis: 'database',
  prisma: 'database',

  docker: 'devops',
  git: 'devops',
  github: 'devops',
  'github actions': 'devops',
  githubactions: 'devops',
  vercel: 'devops',
  gcp: 'devops',
  aws: 'devops',
  firebase: 'devops',
  supabase: 'devops',

  // AI & ML
  'openai api': 'ai',
  openai: 'ai',
  tensorflow: 'ai',
  langchain: 'ai',
  'hugging face': 'ai',
  'python ml': 'ai',
  'rag systems': 'ai',
  'vector dbs': 'ai',
  langgraph: 'ai',
  autogen: 'ai',
  crewai: 'ai',
  'multi-agent': 'ai',
  'embedding systems': 'ai',
  'rag architecture': 'ai',
  'llm orchestration': 'ai',
  'ai-native apis': 'ai',
  'semantic search': 'ai',

  // DevOps & Cloud
  kubernetes: 'devops',
  serverless: 'devops',
  'smart caching': 'devops',

  figma: 'design',
  stripe: 'other',
  wordpress: 'other'
}

interface TechIconProps {
  tech: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  color?: 'auto' | 'inherit' | 'green' | 'purple' | 'yellow' | 'accent' | 'secondary'
  animated?: boolean
  showTooltip?: boolean
  className?: string
}

const TechIcon = ({
  tech,
  size = 'md',
  color = 'auto',
  animated = true,
  showTooltip = false,
  className = ''
}: TechIconProps) => {
  // Normalizar o nome da tecnologia
  const normalizedTech = tech.toLowerCase().replace(/\s+/g, '')
  
  // Buscar o ícone correspondente
  const IconComponent = techIconMap[normalizedTech]
  
  // Se não encontrar ícone, retornar um placeholder
  if (!IconComponent) {
    return (
      <div className={`
        flex items-center justify-center rounded-lg bg-bg-tertiary text-text-secondary
        ${getSizeClasses(size)}
        ${className}
      `}>
        <span className="text-xs font-bold">
          {tech.charAt(0).toUpperCase()}
        </span>
      </div>
    )
  }
  
  // Determinar a cor
  const iconColor = getIconColor(color)
  
  const iconElement = (
    <IconComponent 
      className={`${getSizeClasses(size)} ${iconColor} ${className}`}
      style={{ color: color === 'auto' ? getAutoCategoryColor(normalizedTech) : undefined }}
    />
  )

  if (animated) {
    return (
      <motion.div
        className="relative group"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.3 }}
      >
        {iconElement}
        
        {showTooltip && (
          <motion.div
            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-bg-primary border border-bg-tertiary rounded text-xs text-text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0, y: 0 }}
            whileHover={{ opacity: 1, y: 0 }}
          >
            {tech}
          </motion.div>
        )}
      </motion.div>
    )
  }

  return showTooltip ? (
    <div className="relative group">
      {iconElement}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-bg-primary border border-bg-tertiary rounded text-xs text-text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
        {tech}
      </div>
    </div>
  ) : iconElement
}

function getSizeClasses(size: string): string {
  const sizes: Record<string, string> = {
    xs: 'w-4 h-4',
    sm: 'w-5 h-5',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-10 h-10',
    '2xl': 'w-12 h-12'
  }
  return sizes[size] || sizes.md
}

function getIconColor(color: string): string {
  if (color === 'auto') return ''
  
  const colors: Record<string, string> = {
    inherit: '',
    green: 'text-accent-green',
    purple: 'text-accent-purple',
    yellow: 'text-accent-yellow',
    accent: 'text-text-accent',
    secondary: 'text-text-secondary'
  }
  
  return colors[color] || ''
}

function getAutoCategoryColor(tech: string): string {
  const category = techCategories[tech] || 'other'
  return categoryColors[category]
}

export default TechIcon 