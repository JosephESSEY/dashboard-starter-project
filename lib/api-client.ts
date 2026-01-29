/**
 * Centralized API Client
 * 
 * This client is configured to work with a separate Node.js API backend.
 * 
 * Usage:
 * const response = await apiClient.get('/users');
 * const data = await apiClient.post('/login', { email, password });
 * 
 * Configuration:
 * - API_BASE_URL: Set via environment variable (default: http://localhost:3001)
 * - Replace the auth token logic with real JWT/session management
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001'

interface ApiError {
  message: string
  status: number
  data?: unknown
}

class ApiClient {
  private baseUrl: string

  constructor(baseUrl: string = API_BASE_URL) {
    this.baseUrl = baseUrl
  }

  private async request<T>(
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
    endpoint: string,
    data?: unknown,
    headers?: Record<string, string>
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`
    const defaultHeaders: Record<string, string> = {
      'Content-Type': 'application/json',
    }

    // Add auth token if available
    // Replace this with your actual token retrieval logic
    // const token = getAuthToken()
    // if (token) {
    //   defaultHeaders['Authorization'] = `Bearer ${token}`
    // }

    try {
      const response = await fetch(url, {
        method,
        headers: { ...defaultHeaders, ...headers },
        ...(data && { body: JSON.stringify(data) }),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        const error: ApiError = {
          message: errorData.message || `API request failed: ${response.statusText}`,
          status: response.status,
          data: errorData,
        }
        throw error
      }

      // Handle empty responses
      if (response.status === 204) {
        return {} as T
      }

      return await response.json()
    } catch (error) {
      if (error instanceof ApiError) {
        throw error
      }

      throw {
        message: error instanceof Error ? error.message : 'Unknown error occurred',
        status: 0,
        data: error,
      } as ApiError
    }
  }

  public get<T>(endpoint: string, headers?: Record<string, string>): Promise<T> {
    return this.request<T>('GET', endpoint, undefined, headers)
  }

  public post<T>(
    endpoint: string,
    data?: unknown,
    headers?: Record<string, string>
  ): Promise<T> {
    return this.request<T>('POST', endpoint, data, headers)
  }

  public put<T>(
    endpoint: string,
    data?: unknown,
    headers?: Record<string, string>
  ): Promise<T> {
    return this.request<T>('PUT', endpoint, data, headers)
  }

  public patch<T>(
    endpoint: string,
    data?: unknown,
    headers?: Record<string, string>
  ): Promise<T> {
    return this.request<T>('PATCH', endpoint, data, headers)
  }

  public delete<T>(
    endpoint: string,
    data?: unknown,
    headers?: Record<string, string>
  ): Promise<T> {
    return this.request<T>('DELETE', endpoint, data, headers)
  }
}

export const apiClient = new ApiClient()
