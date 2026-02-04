'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

const stats = [
  { label: 'Total Users', value: '-' },
  { label: 'Active Sessions', value: '-' },
  { label: 'Revenue', value: '-' },
  { label: 'Growth', value: '-' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export default function DashboardPage() {
  return (
    <div className="px-4 md:px-6 pb-8 space-y-6 md:space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-2"
      >
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-sm md:text-base text-muted-foreground">
          Welcome to your dashboard. Connect your API to start displaying data.
        </p>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
      >
        {stats.map((stat, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="p-4 md:p-6 bg-card border-border">
              <div className="space-y-3">
                <p className="text-xs md:text-sm font-medium text-muted-foreground">
                  {stat.label}
                </p>
                <div className="space-y-2">
                  <Skeleton className="h-7 md:h-8 w-24 bg-secondary" />
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Main Content Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6"
      >
        {/* Large Card */}
        <motion.div variants={itemVariants} className="lg:col-span-2">
          <Card className="p-4 md:p-6 bg-card border-border">
            <div className="space-y-4 md:space-y-6">
              <div>
                <h2 className="text-base md:text-lg font-bold text-foreground mb-2">
                  Analytics Overview
                </h2>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Connect your API endpoint to display analytics data
                </p>
              </div>
              <div className="h-48 md:h-80 bg-secondary rounded-lg flex items-center justify-center">
                <div className="text-center space-y-2">
                  <p className="text-muted-foreground text-xs md:text-sm">
                    Waiting for API data
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Sidebar Cards */}
        <motion.div variants={itemVariants} className="space-y-4 md:space-y-6">
          <Card className="p-4 md:p-6 bg-card border-border">
            <h3 className="font-bold text-sm md:text-base text-foreground mb-4">Recent Activity</h3>
            <div className="space-y-3">
              {[1, 2, 3].map((item) => (
                <div key={item} className="space-y-2">
                  <Skeleton className="h-3 md:h-4 w-full bg-secondary" />
                  <Skeleton className="h-2 md:h-3 w-3/4 bg-secondary" />
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-4 md:p-6 bg-primary text-primary-foreground">
            <h3 className="font-bold text-sm md:text-base mb-2">API Status</h3>
            <div className="space-y-2">
              <p className="text-xs md:text-sm opacity-90">
                Set up your API connection to begin
              </p>
              <button className="mt-3 md:mt-4 text-xs md:text-sm font-medium hover:underline">
                Configure →
              </button>
            </div>
          </Card>
        </motion.div>
      </motion.div>

      {/* Bottom Section */}
      <motion.div variants={itemVariants} initial="hidden" animate="visible">
        <Card className="p-4 md:p-6 bg-card border-border">
          <h2 className="text-base md:text-lg font-bold text-foreground mb-4 md:mb-6">
            Getting Started
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="space-y-3">
                <div className="w-8 md:w-10 h-8 md:h-10 rounded-lg bg-secondary" />
                <Skeleton className="h-3 md:h-4 w-2/3 bg-secondary" />
                <Skeleton className="h-2 md:h-3 w-full bg-secondary" />
              </div>
            ))}
          </div>
        </Card>
      </motion.div>
    </div>
  )
}
