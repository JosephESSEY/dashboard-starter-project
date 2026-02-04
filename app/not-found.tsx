'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-6 md:py-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-4 md:space-y-6 max-w-md"
      >
        {/* 404 Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground">
            404
          </h1>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-2"
        >
          <h2 className="text-xl md:text-2xl font-bold text-foreground">
            Page Not Found
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </motion.div>

        {/* Action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="pt-2 md:pt-4"
        >
          <Link href="/dashboard">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
              Return to Dashboard
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}
