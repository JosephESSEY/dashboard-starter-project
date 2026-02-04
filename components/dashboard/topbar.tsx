'use client'

import { useAuth } from '@/lib/auth-context'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/navigation'
import { Moon, Sun, LogOut } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { motion } from 'framer-motion'

interface TopbarProps {
  title?: string
  breadcrumbs?: Array<{ label: string; href?: string }>
  onMenuClick?: () => void
}

export function Topbar({ title, breadcrumbs, onMenuClick }: TopbarProps) {
  const { user, logout } = useAuth()
  const { theme, setTheme } = useTheme()
  const router = useRouter()

  const handleLogout = async () => {
    try {
      await logout()
      router.push('/login')
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  const handleThemeToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 right-0 left-0 lg:left-64 h-16 md:h-20 bg-card border-b border-border z-30"
    >
      <div className="h-full px-4 md:px-6 flex items-center justify-between gap-4">
        {/* Menu Button - Mobile */}
        {onMenuClick && (
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 hover:bg-secondary rounded-lg transition-colors text-foreground"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        )}

        {/* Left Side - Title and Breadcrumbs */}
        <div className="flex-1 flex flex-col gap-1 min-w-0">
          {title && (
            <h1 className="text-base md:text-lg font-bold text-foreground truncate">{title}</h1>
          )}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav className="hidden md:flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
              {breadcrumbs.map((crumb, index) => (
                <div key={index} className="flex items-center gap-2">
                  {crumb.href ? (
                    <a href={crumb.href} className="hover:text-foreground transition-colors">
                      {crumb.label}
                    </a>
                  ) : (
                    <span>{crumb.label}</span>
                  )}
                  {index < breadcrumbs.length - 1 && (
                    <span className="text-border">/</span>
                  )}
                </div>
              ))}
            </nav>
          )}
        </div>

        {/* Right Side - Actions */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Theme Toggle */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleThemeToggle}
            className="p-2 hover:bg-secondary rounded-lg transition-colors text-foreground"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun size={18} className="md:w-5 md:h-5" />
            ) : (
              <Moon size={18} className="md:w-5 md:h-5" />
            )}
          </motion.button>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 p-2 hover:bg-secondary rounded-lg transition-colors"
              >
                <Avatar className="h-8 w-8 bg-primary text-primary-foreground">
                  <AvatarFallback className="bg-primary text-primary-foreground text-sm font-bold">
                    {user?.email?.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="hidden sm:flex flex-col items-start">
                  <p className="text-sm font-medium text-foreground">
                    {user?.name || 'User'}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {user?.email}
                  </p>
                </div>
              </motion.button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <div className="px-2 py-1.5">
                <p className="text-sm font-medium text-foreground">
                  {user?.name || 'User'}
                </p>
                <p className="text-xs text-muted-foreground">
                  {user?.email}
                </p>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-destructive">
                <LogOut size={16} className="mr-2" />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </motion.header>
  )
}
