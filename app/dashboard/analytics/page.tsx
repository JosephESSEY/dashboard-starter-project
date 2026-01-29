'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

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

export default function AnalyticsPage() {
  return (
    <div className="px-6 pb-8 space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-2"
      >
        <h1 className="text-3xl font-bold text-foreground">Analytics</h1>
        <p className="text-muted-foreground">
          Track and analyze your application metrics
        </p>
      </motion.div>

      {/* Time Period Selection */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="flex gap-2 flex-wrap"
      >
        {['Today', 'Week', 'Month', 'Year'].map((period) => (
          <button
            key={period}
            className="px-4 py-2 rounded-lg bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            {period}
          </button>
        ))}
      </motion.div>

      {/* Metrics Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {['Page Views', 'Unique Visitors', 'Conversion Rate', 'Avg. Duration'].map((metric, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="p-6 bg-card border-border">
              <div className="space-y-3">
                <p className="text-sm font-medium text-muted-foreground">
                  {metric}
                </p>
                <Skeleton className="h-8 w-24 bg-secondary" />
                <Skeleton className="h-3 w-32 bg-secondary" />
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Chart Section */}
      <motion.div variants={itemVariants} initial="hidden" animate="visible">
        <Card className="p-6 bg-card border-border">
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-bold text-foreground mb-2">
                Trends
              </h2>
              <p className="text-sm text-muted-foreground">
                Connect your API endpoint to display analytics trends
              </p>
            </div>
            <div className="h-80 bg-secondary rounded-lg flex items-center justify-center">
              <div className="text-center space-y-2">
                <p className="text-muted-foreground text-sm">
                  Waiting for API data
                </p>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Detailed Metrics */}
      <motion.div variants={itemVariants} initial="hidden" animate="visible">
        <Card className="p-6 bg-card border-border">
          <h2 className="text-lg font-bold text-foreground mb-6">
            Detailed Metrics
          </h2>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="flex items-center justify-between p-4 bg-secondary rounded-lg">
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-4 w-1/3 bg-background" />
                  <Skeleton className="h-3 w-1/4 bg-background" />
                </div>
                <Skeleton className="h-6 w-20 bg-background" />
              </div>
            ))}
          </div>
        </Card>
      </motion.div>
    </div>
  )
}
