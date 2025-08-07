# Overview

This is a full-stack web application for CEFCO, a French refrigeration and air conditioning company with 10 years of experience. The application serves as a business website featuring company information, services (both commercial and residential), portfolio showcase, and a contact form system. The frontend is built with React and modern UI components, while the backend uses Express.js with a contact form submission system.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **React SPA**: Single-page application using React with TypeScript
- **Routing**: Client-side routing implemented with Wouter library
- **UI Framework**: Shadcn/ui components built on top of Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming, including brand-specific colors (CEFCO blue, green, red)
- **State Management**: React Query (TanStack Query) for server state management
- **Form Handling**: React Hook Form with Zod validation for type-safe form validation

## Backend Architecture
- **Node.js/Express**: RESTful API server with Express.js
- **Development Setup**: Vite development server with HMR (Hot Module Replacement)
- **Storage Layer**: Abstracted storage interface with in-memory implementation (MemStorage class)
- **API Endpoints**: 
  - POST `/api/contact` - Contact form submissions
  - GET `/api/contacts` - Retrieve all contact submissions (admin functionality)
- **Request Logging**: Custom middleware for API request/response logging
- **Error Handling**: Centralized error handling with proper HTTP status codes

## Database Schema
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Definition**: Shared schema between client and server
- **Tables**:
  - `users` - User authentication (id, username, password)
  - `contact_submissions` - Contact form data with type differentiation (commercial vs residential)
- **Validation**: Zod schemas for runtime validation and TypeScript type inference

## Build System
- **Frontend Build**: Vite with React plugin and TypeScript support
- **Backend Build**: ESBuild for server compilation
- **Path Aliases**: Configured for clean imports (@, @shared, @assets)
- **Development Tools**: Hot reloading, error overlays, and Replit integration

## Project Structure
- **Monorepo Setup**: Client, server, and shared code in single repository
- **client/**: React frontend application
- **server/**: Express.js backend API
- **shared/**: Common TypeScript types and schemas
- **Component Organization**: UI components separated from page components

# External Dependencies

## UI and Frontend
- **@radix-ui/***: Comprehensive set of accessible UI primitives for building the component library
- **@tanstack/react-query**: Server state management and caching
- **wouter**: Lightweight client-side routing
- **react-hook-form**: Performance-focused form library
- **@hookform/resolvers**: Validation resolvers for React Hook Form
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe variant API for styling components
- **clsx**: Utility for constructing className strings
- **lucide-react**: Icon library
- **date-fns**: Date utility library

## Database and ORM
- **drizzle-orm**: TypeScript ORM with PostgreSQL support
- **drizzle-zod**: Integration between Drizzle and Zod for schema validation
- **@neondatabase/serverless**: Serverless PostgreSQL driver (configured for Neon database)

## Validation and Type Safety
- **zod**: Runtime type validation and schema definition
- **typescript**: Static type checking across the entire application

## Development Tools
- **vite**: Fast development server and build tool
- **@vitejs/plugin-react**: React support for Vite
- **tsx**: TypeScript execution engine for Node.js
- **@replit/vite-plugin-runtime-error-modal**: Development error handling
- **@replit/vite-plugin-cartographer**: Replit-specific development tools

## Build and Deployment
- **esbuild**: Fast JavaScript bundler for production builds
- **postcss**: CSS processing with Tailwind CSS integration
- **autoprefixer**: CSS vendor prefixing

The application is designed to be deployed on Replit with PostgreSQL database integration, supporting both development and production environments with proper environment variable configuration.