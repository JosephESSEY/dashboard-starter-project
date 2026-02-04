'use client'

import React from "react"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth-context'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { motion } from 'framer-motion'

export default function LoginPage() {
  const router = useRouter()
  const { login, isLoading } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    try {
      await login(email, password)
      router.push('/dashboard')
    } catch (err) {
      setError('Invalid email or password')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-6 md:py-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="space-y-6 md:space-y-8">
          {/* Header */}
          <div className="space-y-2 text-center">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-foreground"
            >
              Welcome Back
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-sm md:text-base text-muted-foreground"
            >
              Sign in to your account to continue
            </motion.p>
          </div>

          {/* Form Card */}
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            onSubmit={handleSubmit}
            className="space-y-6 bg-card border border-border rounded-lg p-6 md:p-8"
          >
            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground font-medium text-sm md:text-base">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
                className="h-10 md:h-11 bg-input border-border text-foreground placeholder:text-muted-foreground text-sm md:text-base"
                required
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground font-medium text-sm md:text-base">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
                className="h-10 md:h-11 bg-input border-border text-foreground placeholder:text-muted-foreground text-sm md:text-base"
                required
              />
            </div>

            {/* Remember Me */}
            <div className="flex items-center space-x-2">
              <Checkbox
                id="remember"
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                disabled={isLoading}
              />
              <Label htmlFor="remember" className="text-xs md:text-sm font-normal text-foreground cursor-pointer">
                Remember me
              </Label>
            </div>

            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-3 bg-destructive/10 border border-destructive/30 rounded text-destructive text-xs md:text-sm"
              >
                {error}
              </motion.div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-10 md:h-11 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm md:text-base"
            >
              {isLoading ? 'Signing In...' : 'Sign In'}
            </Button>
          </motion.form>

          {/* Footer Note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center text-xs md:text-sm text-muted-foreground"
          >
            Demo: Use any email and password to login
          </motion.p>
        </div>
      </motion.div>
    </div>
  )
}
