# CA Services Platform

## Overview
This platform is a modern Chartered Accountancy services website offering business registration, GST & tax services, and compliance solutions with appointment booking functionality. It aims to provide a comprehensive online presence for CA services, improving accessibility and streamlining client interactions. The project leverages a full-stack architecture to deliver a robust and user-friendly experience for individuals and businesses seeking professional financial and legal compliance assistance.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **UI Library**: shadcn/ui (built on Radix UI)
- **Styling**: Tailwind CSS with a consistent black theme (#161616 main, #18181b cards/sections, #222222 borders, #5b91e1 accent)
- **Routing**: Wouter
- **State Management**: TanStack Query (React Query)
- **Form Handling**: React Hook Form with Zod validation
- **UI/UX Decisions**:
    - Consistent professional black theme across all components (navigation, home, booking modal, service pages).
    - Responsive 3-column grid layout for navigation dropdowns.
    - Standardized service page template with Hero, Overview, Services Grid, and CTA sections.
    - Optimized service card display on landing page (4 registrations per service).
    - Professional button styling: #35373c background with #f8fafd hover.
    - Enhanced mobile navigation with full scrollability and improved touch targets.

### Backend
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM for PostgreSQL
- **Email Service**: Nodemailer with Brevo SMTP for transactional emails (booking notifications).
- **Session Storage**: In-memory (development), planned PostgreSQL session store.
- **API Design**: RESTful with Zod validation for request/response.
- **Error Handling**: Centralized middleware.
- **AI Integration**: OpenAI GPT-4o for AI-powered service recommendations and business analysis, with rule-based fallback.

### Key Components
- **Database**: Drizzle ORM with PostgreSQL (Neon serverless). Schema defined in `shared/schema.ts` (`users`, `bookings`).
- **API**: Express.js endpoints for services, booking, and AI recommendations (`/api/ai-recommendations`, `/api/analyze-business`).
- **Frontend Components**: Navigation (sticky header, dropdowns), dynamic service pages, Booking Modal (20-minute consultation limit, Jitsi meeting link generation), UI components using shadcn/ui.
- **Authentication**: Basic user schema defined; session-based authentication planned.

### Data Flow
1. User browses services.
2. Service details displayed dynamically.
3. User books consultation via modal form.
4. Automated emails sent to user and admin (`pottipatisaiprathap1234@gmail.com`).
5. Booking data persisted in PostgreSQL.

## External Dependencies
- **Database**: Neon (serverless PostgreSQL)
- **Email Service**: Brevo (SMTP for transactional emails)
- **AI Service**: OpenAI API (for service recommendations)
- **UI Components**: Radix UI (primitives for shadcn/ui)
- **Build Tools**: Vite, TypeScript, Tailwind CSS
- **Database Tools**: Drizzle Kit (for migrations)