/**
 * Data Service
 * 
 * Handles general data fetching for dashboard content.
 * Replace the mock responses with real API calls when backend is ready.
 */

import { apiClient } from '@/lib/api-client'

export interface DashboardStats {
  totalUsers: number
  activeSessions: number
  revenue: number
  growth: number
}

export interface Activity {
  id: string
  title: string
  timestamp: string
  type: 'info' | 'success' | 'warning' | 'error'
}

class DataService {
  async getDashboardStats(): Promise<DashboardStats> {
    try {
      // Uncomment this when backend is ready:
      // return apiClient.get<DashboardStats>('/dashboard/stats')

      // Mock implementation
      return {
        totalUsers: 0,
        activeSessions: 0,
        revenue: 0,
        growth: 0,
      }
    } catch (error) {
      throw new Error('Failed to fetch dashboard stats')
    }
  }

  async getRecentActivity(): Promise<Activity[]> {
    try {
      // Uncomment this when backend is ready:
      // return apiClient.get<Activity[]>('/activities/recent')

      // Mock implementation
      return []
    } catch (error) {
      throw new Error('Failed to fetch recent activity')
    }
  }

  async getAnalyticsData(startDate: Date, endDate: Date): Promise<unknown> {
    try {
      // Uncomment this when backend is ready:
      // return apiClient.get(
      //   `/analytics?startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}`
      // )

      // Mock implementation
      return []
    } catch (error) {
      throw new Error('Failed to fetch analytics data')
    }
  }

  async getProjects(): Promise<unknown[]> {
    try {
      // Uncomment this when backend is ready:
      // return apiClient.get<Project[]>('/projects')

      // Mock implementation
      return []
    } catch (error) {
      throw new Error('Failed to fetch projects')
    }
  }
}

export const dataService = new DataService()
