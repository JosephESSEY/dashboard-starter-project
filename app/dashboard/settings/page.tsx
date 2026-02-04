'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
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

export default function SettingsPage() {
  const [isSaved, setIsSaved] = useState(false)

  const handleSave = () => {
    setIsSaved(true)
    setTimeout(() => setIsSaved(false), 3000)
  }

  return (
    <div className="px-4 md:px-6 pb-8 space-y-6 md:space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-2"
      >
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">Settings</h1>
        <p className="text-sm md:text-base text-muted-foreground">
          Manage your account and preferences
        </p>
      </motion.div>

      {/* Settings Sections */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6 max-w-2xl"
      >
        {/* Profile Settings */}
        <motion.div variants={itemVariants}>
          <Card className="p-4 md:p-6 bg-card border-border">
            <div className="space-y-4 md:space-y-6">
              <div>
                <h2 className="text-base md:text-lg font-bold text-foreground">
                  Profile Settings
                </h2>
                <p className="text-xs md:text-sm text-muted-foreground mt-1">
                  Update your profile information
                </p>
              </div>

              <Separator className="bg-border" />

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-foreground font-medium text-sm md:text-base">
                      Full Name
                    </Label>
                    <Input
                      placeholder="John Doe"
                      className="bg-input border-border text-foreground placeholder:text-muted-foreground text-sm md:text-base"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-foreground font-medium text-sm md:text-base">
                      Email
                    </Label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      className="bg-input border-border text-foreground placeholder:text-muted-foreground text-sm md:text-base"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-foreground font-medium text-sm md:text-base">
                    Company
                  </Label>
                  <Input
                    placeholder="Your Company"
                    className="bg-input border-border text-foreground placeholder:text-muted-foreground text-sm md:text-base"
                  />
                </div>

                <Button
                  onClick={handleSave}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold w-full sm:w-auto"
                >
                  {isSaved ? 'Saved!' : 'Save Changes'}
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Preferences */}
        <motion.div variants={itemVariants}>
          <Card className="p-4 md:p-6 bg-card border-border">
            <div className="space-y-4 md:space-y-6">
              <div>
                <h2 className="text-base md:text-lg font-bold text-foreground">
                  Preferences
                </h2>
                <p className="text-xs md:text-sm text-muted-foreground mt-1">
                  Customize your experience
                </p>
              </div>

              <Separator className="bg-border" />

              <div className="space-y-3 md:space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-3 md:p-4 bg-secondary rounded-lg">
                  <div className="min-w-0">
                    <p className="font-medium text-sm md:text-base text-foreground">
                      Email Notifications
                    </p>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Receive updates via email
                    </p>
                  </div>
                  <Switch defaultChecked className="flex-shrink-0" />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-3 md:p-4 bg-secondary rounded-lg">
                  <div className="min-w-0">
                    <p className="font-medium text-sm md:text-base text-foreground">
                      Marketing Emails
                    </p>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Receive promotional updates
                    </p>
                  </div>
                  <Switch className="flex-shrink-0" />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-3 md:p-4 bg-secondary rounded-lg">
                  <div className="min-w-0">
                    <p className="font-medium text-sm md:text-base text-foreground">
                      Analytics
                    </p>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Help us improve with usage data
                    </p>
                  </div>
                  <Switch defaultChecked className="flex-shrink-0" />
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Security */}
        <motion.div variants={itemVariants}>
          <Card className="p-4 md:p-6 bg-card border-border">
            <div className="space-y-4 md:space-y-6">
              <div>
                <h2 className="text-base md:text-lg font-bold text-foreground">
                  Security
                </h2>
                <p className="text-xs md:text-sm text-muted-foreground mt-1">
                  Manage your account security
                </p>
              </div>

              <Separator className="bg-border" />

              <div className="space-y-3 md:space-y-4">
                <div className="p-3 md:p-4 bg-secondary rounded-lg">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div className="min-w-0">
                      <p className="font-medium text-sm md:text-base text-foreground">
                        Password
                      </p>
                      <p className="text-xs md:text-sm text-muted-foreground">
                        Last changed 3 months ago
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      className="border-border text-foreground hover:bg-card bg-transparent text-sm md:text-base w-full sm:w-auto flex-shrink-0"
                    >
                      Change Password
                    </Button>
                  </div>
                </div>

                <div className="p-3 md:p-4 bg-secondary rounded-lg">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div className="min-w-0">
                      <p className="font-medium text-sm md:text-base text-foreground">
                        Two-Factor Authentication
                      </p>
                      <p className="text-xs md:text-sm text-muted-foreground">
                        Add an extra layer of security
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      className="border-border text-foreground hover:bg-card bg-transparent text-sm md:text-base w-full sm:w-auto flex-shrink-0"
                    >
                      Enable
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}
