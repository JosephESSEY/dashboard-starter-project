# Professional API-Ready Dashboard Starter

A production-ready, reusable dashboard foundation built with Next.js 16, TypeScript, Tailwind CSS, and Framer Motion. Designed for SaaS platforms, admin panels, and internal tools.

## 🎯 Key Features

- **Professional Design System**: Bold, modern aesthetic with custom flat color palette
- **Authentication Flow**: Login page with protected dashboard routes
- **API-Ready Architecture**: Centralized HTTP client configured for backend integration
- **Responsive Layout**: Collapsible sidebar and dynamic topbar with theme toggle
- **Dark/Light Mode**: Seamless theme switching with next-themes
- **Component Library**: Reusable UI components built with shadcn/ui
- **Smooth Animations**: Framer Motion for elegant transitions
- **Type-Safe**: Full TypeScript support throughout

## 📁 Project Structure

```
/app
  /(auth)/login          # Login page
  /dashboard             # Protected dashboard routes
    /page.tsx           # Dashboard home
    /analytics          # Analytics page
    /projects           # Projects page
    /settings           # Settings page
  /not-found.tsx        # 404 error page
  /page.tsx             # Root redirect to dashboard
  /layout.tsx           # Root layout with theme provider
  /globals.css          # Design tokens and theme configuration

/components
  /ui                   # shadcn/ui components
  /dashboard
    /sidebar.tsx        # Collapsible sidebar with navigation
    /topbar.tsx         # Topbar with theme toggle and user menu
    /dashboard-layout.tsx # Main layout wrapper

/lib
  /auth-context.ts      # Zustand auth state management
  /api-client.ts        # Centralized API client
  /route-protection.ts  # Route protection configuration
  /services
    /auth-service.ts    # Authentication API service
    /data-service.ts    # General data fetching service
  /utils.ts             # Utility functions
```

## 🚀 Getting Started

### Installation

1. Clone or download this project
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Default Behavior

- **Root path** (`/`) redirects to `/dashboard`
- **Dashboard** (`/dashboard`) requires authentication
- **Login page** (`/login`) is public and accepts any email/password combination for demo purposes
- All navigation is configured in `/components/dashboard/sidebar.tsx`

## 🔐 Authentication

The dashboard uses a Zustand store for authentication state management:

```typescript
import { useAuth } from '@/lib/auth-context'

const { user, isAuthenticated, login, logout } = useAuth()
```

### Integrating with Your API

Currently, the `login` method in `/lib/auth-context.ts` is mocked. To integrate with your backend:

1. Update `/lib/auth-context.ts` - Replace the mock `login` function with an actual API call
2. Update `/lib/services/auth-service.ts` - Uncomment API calls and remove mock implementations
3. Store auth tokens securely (HTTP-only cookies or localStorage with proper handling)
4. Add token refresh logic in the `checkAuth` method

Example:
```typescript
// In auth-context.ts
login: async (email: string, password: string) => {
  const response = await apiClient.post('/auth/login', { email, password })
  // Store token securely
  // Update user state
}
```

## 🔌 API Integration

### Using the API Client

The project includes a centralized API client at `/lib/api-client.ts`:

```typescript
import { apiClient } from '@/lib/api-client'

// GET request
const users = await apiClient.get('/users')

// POST request
const result = await apiClient.post('/users', { name: 'John' })

// PUT request
await apiClient.put('/users/1', { name: 'Jane' })

// DELETE request
await apiClient.delete('/users/1')
```

### Configuring API Base URL

Set the `NEXT_PUBLIC_API_BASE_URL` environment variable:

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:3001
```

Default: `http://localhost:3001`

### API Services

Example service files are included:
- `/lib/services/auth-service.ts` - Authentication endpoints
- `/lib/services/data-service.ts` - General data fetching

Create additional service files for different API endpoints.

## 🎨 Design System

### Color Tokens

The design system uses semantic color tokens defined in `/app/globals.css`:

- **Primary**: Main brand color (deep purple)
- **Secondary**: Supporting color
- **Accent**: Interactive elements
- **Background**: Page background
- **Foreground**: Text color
- **Muted**: Disabled states
- **Destructive**: Error states

### Customizing Colors

Edit the CSS custom properties in `/app/globals.css`:

```css
:root {
  --primary: oklch(0.35 0.12 270);  /* Adjust hue, saturation, lightness */
  /* ... other colors */
}
```

### Typography

- **Heading Font**: Geist (bold, confident)
- **Body Font**: Geist (clean, readable)
- **Monospace**: Geist Mono

## 🌙 Dark/Light Mode

Theme switching is handled by `next-themes` and integrated in the topbar:

```typescript
const { theme, setTheme } = useTheme()

setTheme(theme === 'dark' ? 'light' : 'dark')
```

The theme preference is automatically saved to localStorage.

## 📦 Dependencies

Key packages included:
- **next**: 16.0.10 - React framework
- **react**: 19.2.0 - UI library
- **typescript**: 5.x - Type safety
- **tailwindcss**: 4.1.9 - Styling
- **framer-motion**: 11.0.3 - Animations
- **zustand**: 4.4.0 - State management
- **next-themes**: 0.4.6 - Theme management
- **lucide-react**: 0.454.0 - Icons
- **shadcn/ui**: Component library

## 🛡️ Route Protection

Routes are protected through the dashboard layout wrapper. Configure protected routes in `/lib/route-protection.ts`:

```typescript
export const protectedRoutes = ['/dashboard', '/settings']
export const publicRoutes = ['/login']
```

## 📱 Responsive Design

The layout is fully responsive:
- **Mobile**: Single-column, collapsible sidebar
- **Tablet**: Two-column grid
- **Desktop**: Full sidebar + content area

## 🎬 Animations

Smooth animations throughout using Framer Motion:
- Page transitions
- Sidebar collapse/expand
- Button interactions
- Card stagger animations

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy with one click

### Other Platforms

```bash
npm run build
npm run start
```

## 📝 Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:3001
```

## 🔧 Customization Guide

### Adding New Pages

1. Create a new file in `/app/dashboard/[page-name]/page.tsx`
2. Use the `DashboardLayout` wrapper component
3. Add navigation item to sidebar in `/components/dashboard/sidebar.tsx`

### Adding New Components

1. Create component in `/components/dashboard/`
2. Use shadcn/ui components for consistency
3. Follow the existing component patterns

### Modifying the Sidebar

Edit `/components/dashboard/sidebar.tsx`:
```typescript
const navItems: NavItem[] = [
  {
    label: 'New Item',
    href: '/dashboard/new-item',
    icon: <IconComponent size={20} />,
  },
]
```

## 🐛 Troubleshooting

### "Cannot find module" errors
- Run `npm install` to ensure all dependencies are installed
- Check that file paths are correct (relative imports use `@/`)

### Authentication not working
- Check that auth state is being persisted
- Verify API endpoint is correct
- Check browser console for network errors

### Styles not applying
- Clear `.next` folder: `rm -rf .next`
- Restart dev server: `npm run dev`
- Check Tailwind config in `/app/globals.css`

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [shadcn/ui](https://ui.shadcn.com)
- [Zustand](https://github.com/pmndrs/zustand)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

This is a starter template. Feel free to extend it with your own features and customizations.

---

**Built for scalability and reusability. Ready for production.**
