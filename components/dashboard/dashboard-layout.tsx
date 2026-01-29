'use client'

import { ReactNode } from 'react'
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
  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:ml-80">
        {/* Topbar */}
        <Topbar title={title} breadcrumbs={breadcrumbs} />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto pt-20">
          {children}
        </main>
      </div>
    </div>
  )
}
