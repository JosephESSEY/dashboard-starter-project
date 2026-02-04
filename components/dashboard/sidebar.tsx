'use client'

import React from "react"

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  BarChart3,
  FolderOpen,
  Settings,
  ChevronLeft,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'

interface NavItem {
  label: string
  href: string
  icon: React.ReactNode
}

interface SidebarProps {
  isMobile?: boolean
  isOpen?: boolean
  onClose?: () => void
}

const navItems: NavItem[] = [
  {
    label: 'Dashboard',
    href: '/dashboard',
    icon: <LayoutDashboard size={20} />,
  },
  {
    label: 'Analytics',
    href: '/dashboard/analytics',
    icon: <BarChart3 size={20} />,
  },
  {
    label: 'Projects',
    href: '/dashboard/projects',
    icon: <FolderOpen size={20} />,
  },
  {
    label: 'Settings',
    href: '/dashboard/settings',
    icon: <Settings size={20} />,
  },
]

export function Sidebar({ isMobile = false, isOpen = true, onClose }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const pathname = usePathname()

  if (isMobile) {
    return (
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: -256 }}
            animate={{ x: 0 }}
            exit={{ x: -256 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed left-0 top-0 h-screen w-64 bg-sidebar border-r border-sidebar-border z-40"
          >
            <div className="flex flex-col h-full">
              {/* Logo Section */}
              <div className="h-16 flex items-center justify-between px-4 border-b border-sidebar-border">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="font-bold text-lg text-sidebar-foreground"
                >
                  Dashboard
                </motion.div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-sidebar-accent rounded-lg transition-colors text-sidebar-foreground lg:hidden"
                  aria-label="Close sidebar"
                >
                  <ChevronLeft size={20} />
                </button>
              </div>

              {/* Navigation */}
              <nav className="flex-1 px-3 py-6 space-y-2 overflow-y-auto">
                {navItems.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        'flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200',
                        'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
                        isActive && 'bg-sidebar-primary text-sidebar-primary-foreground'
                      )}
                      onClick={onClose}
                    >
                      {item.icon}
                      <span className="font-medium text-sm">{item.label}</span>
                    </Link>
                  )
                })}
              </nav>

              {/* Footer */}
              <div className="border-t border-sidebar-border px-3 py-4">
                <div className="text-xs text-sidebar-foreground/60 text-center">
                  v1.0.0
                </div>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    )
  }

  return (
    <motion.aside
      animate={{ width: isCollapsed ? 80 : 256 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="fixed left-0 top-0 h-screen bg-sidebar border-r border-sidebar-border z-50 hidden lg:block"
    >
      <div className="flex flex-col h-full">
        {/* Logo Section */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-sidebar-border">
          <AnimatePresence mode="wait">
            {!isCollapsed && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="font-bold text-lg text-sidebar-foreground"
              >
                Dashboard
              </motion.div>
            )}
          </AnimatePresence>
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 hover:bg-sidebar-accent rounded-lg transition-colors text-sidebar-foreground"
            aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            <motion.div
              animate={{ rotate: isCollapsed ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronLeft size={20} />
            </motion.div>
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-6 space-y-2 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200',
                  'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
                  isActive && 'bg-sidebar-primary text-sidebar-primary-foreground'
                )}
              >
                <motion.div
                  animate={{ scale: isActive ? 1.1 : 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.icon}
                </motion.div>
                <AnimatePresence mode="wait">
                  {!isCollapsed && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="font-medium text-sm"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Link>
            )
          })}
        </nav>

        {/* Footer */}
        <div className="border-t border-sidebar-border px-3 py-4">
          <div className="text-xs text-sidebar-foreground/60">
            <AnimatePresence mode="wait">
              {!isCollapsed ? (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  v1.0.0
                </motion.p>
              ) : (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-center"
                >
                  v1
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.aside>
  )
}
