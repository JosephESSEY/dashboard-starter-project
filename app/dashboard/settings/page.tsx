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
    <div className="px-6 pb-8 space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-2"
      >
        <h1 className="text-3xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground">
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
          <Card className="p-6 bg-card border-border">
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-bold text-foreground">
                  Profile Settings
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Update your profile information
                </p>
              </div>

              <Separator className="bg-border" />

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-foreground font-medium">
                      Full Name
                    </Label>
                    <Input
                      placeholder="John Doe"
                      className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-foreground font-medium">
                      Email
                    </Label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-foreground font-medium">
                    Company
                  </Label>
                  <Input
                    placeholder="Your Company"
                    className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                  />
                </div>

                <Button
                  onClick={handleSave}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                >
                  {isSaved ? 'Saved!' : 'Save Changes'}
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Preferences */}
        <motion.div variants={itemVariants}>
          <Card className="p-6 bg-card border-border">
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-bold text-foreground">
                  Preferences
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Customize your experience
                </p>
              </div>

              <Separator className="bg-border" />

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-secondary rounded-lg">
                  <div>
                    <p className="font-medium text-foreground">
                      Email Notifications
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Receive updates via email
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between p-4 bg-secondary rounded-lg">
                  <div>
                    <p className="font-medium text-foreground">
                      Marketing Emails
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Receive promotional updates
                    </p>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between p-4 bg-secondary rounded-lg">
                  <div>
                    <p className="font-medium text-foreground">
                      Analytics
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Help us improve with usage data
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Security */}
        <motion.div variants={itemVariants}>
          <Card className="p-6 bg-card border-border">
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-bold text-foreground">
                  Security
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Manage your account security
                </p>
              </div>

              <Separator className="bg-border" />

              <div className="space-y-4">
                <div className="p-4 bg-secondary rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-foreground">
                        Password
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Last changed 3 months ago
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      className="border-border text-foreground hover:bg-card bg-transparent"
                    >
                      Change Password
                    </Button>
                  </div>
                </div>

                <div className="p-4 bg-secondary rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-foreground">
                        Two-Factor Authentication
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Add an extra layer of security
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      className="border-border text-foreground hover:bg-card bg-transparent"
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
