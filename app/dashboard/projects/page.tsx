'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { Plus } from 'lucide-react'

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

export default function ProjectsPage() {
  return (
    <div className="px-4 md:px-6 pb-8 space-y-6 md:space-y-8">
      {/* Header with Action */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
      >
        <div className="space-y-2">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">Projects</h1>
          <p className="text-sm md:text-base text-muted-foreground">
            Manage and organize your projects
          </p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold gap-2 w-full sm:w-auto">
          <Plus size={18} />
          <span className="hidden sm:inline">New Project</span>
          <span className="sm:hidden">New</span>
        </Button>
      </motion.div>

      {/* Filters */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="flex gap-2 flex-wrap"
      >
        {['All', 'Active', 'Archived', 'Completed'].map((filter) => (
          <button
            key={filter}
            className="px-3 md:px-4 py-1.5 md:py-2 text-sm md:text-base rounded-lg bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            {filter}
          </button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
      >
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <motion.div key={item} variants={itemVariants}>
            <Card className="p-4 md:p-6 bg-card border-border hover:border-primary/50 transition-colors cursor-pointer group">
              <div className="space-y-4">
                {/* Project Header */}
                <div className="flex items-start justify-between">
                  <div className="w-8 md:w-10 h-8 md:h-10 bg-secondary rounded-lg group-hover:bg-primary/20 transition-colors" />
                  <div className="px-2 py-1 bg-secondary text-xs font-medium text-foreground rounded">
                    Active
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-2">
                  <Skeleton className="h-4 md:h-5 w-2/3 bg-secondary" />
                  <Skeleton className="h-3 w-full bg-secondary" />
                  <Skeleton className="h-3 w-4/5 bg-secondary" />
                </div>

                {/* Progress */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium text-foreground">
                      <Skeleton className="h-3 w-8 bg-secondary inline-block" />
                    </span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-primary rounded-full" />
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((member) => (
                      <div
                        key={member}
                        className="w-6 h-6 rounded-full bg-secondary border border-card"
                      />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">
                    Due soon
                  </span>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Empty State Alternative */}
      <motion.div variants={itemVariants} initial="hidden" animate="visible">
        <Card className="p-6 md:p-12 bg-secondary border border-border text-center">
          <div className="space-y-3">
            <h3 className="text-base md:text-lg font-bold text-foreground">
              No projects yet
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground">
              Connect your API to load project data or create your first project
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold mt-4 w-full sm:w-auto">
              Get Started
            </Button>
          </div>
        </Card>
      </motion.div>
    </div>
  )
}
