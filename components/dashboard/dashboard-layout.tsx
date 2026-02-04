'use client'

import { ReactNode, useState } from 'react'
import { Sidebar } from './sidebar'
import { Topbar, type Topbar as TopbarProps } from './topbar'

interface DashboardLayoutProps {
  children: ReactNode
  title?: string
  breadcrumbs?: Array<{ label: string; href?: string }>
}

export function DashboardLayout({
  children,
  title,
  breadcrumbs,
}: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar - Hidden on mobile, visible on lg */}
      <div className="hidden lg:block">
        <Sidebar isMobile={false} />
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 lg:hidden z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div className="lg:hidden">
        <Sidebar isMobile={true} isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:ml-64">
        {/* Topbar */}
        <Topbar
          title={title}
          breadcrumbs={breadcrumbs}
          onMenuClick={() => setSidebarOpen(!sidebarOpen)}
        />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto pt-20 md:pt-24">
          {children}
        </main>
      </div>
    </div>
  )
}
