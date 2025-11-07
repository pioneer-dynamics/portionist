# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Important: Documentation Maintenance

**CRITICAL**: Every time Claude makes changes to the codebase, this CLAUDE.md file MUST be updated to reflect those changes. This ensures Claude has complete context for future sessions.

### What to Document:
- New files, classes, services, or components created
- Architecture changes or new patterns introduced
- New routes, API endpoints, or controllers added
- Database schema changes (migrations, models, relationships)
- Configuration changes or new environment variables
- New dependencies or packages installed
- Changes to existing workflows or processes
- New commands or scripts added
- Any significant refactoring or restructuring

### When to Update:
- Immediately after making any code changes
- Before completing a feature or task
- When adding new functionality to the application
- When modifying existing architecture or patterns

This documentation is Claude's memory between sessions. Without updates, future Claude sessions will lack critical context about the current state of the codebase.

## Project Overview

Portion.ist is an AI-powered cocktail and food recipe generator built with Laravel 12 and Vue 3 (Inertia.js). The application generates creative recipes using OpenAI based on available ingredients.

## Development Commands

### Setup and Installation
```bash
composer install
npm install
php artisan key:generate
php artisan migrate
```

### Running the Development Server
The project uses a concurrent development setup that runs multiple services:
```bash
composer dev
```
This starts:
- Laravel server (http://localhost:8000)
- Queue worker
- Laravel Pail (logs)
- Vite dev server

Alternatively, run individual services:
```bash
php artisan serve          # Laravel server
php artisan queue:listen   # Queue worker
npm run dev                # Vite dev server
```

### Build and Release
```bash
npm run build              # Production build
npm run release            # Run Pint, build, and commit build assets
./vendor/bin/pint          # Code style fixer (Laravel Pint)
```

### Testing
```bash
./vendor/bin/phpunit                    # Run all tests
./vendor/bin/phpunit tests/Unit         # Run unit tests only
./vendor/bin/phpunit tests/Feature      # Run feature tests only
./vendor/bin/phpunit --filter=TestName  # Run specific test
```

## Architecture Overview

### AI Recipe Generation System

The core feature is AI-powered recipe generation using a provider-based architecture:

1. **Service Layer** (`app/Services/`):
   - `RecipeService`: Main service implementing `RecipeServiceContract`, coordinates recipe generation
   - `RecipeRepository`: Handles recipe data operations (CRUD, bookmarking, liking, searching)
   - `RecipeAi/RecipeAiProvider`: Base class for AI providers
   - `RecipeAi/OpenAi`: OpenAI implementation with structured JSON schema responses

2. **Contract-Based Design** (`app/Contracts/`):
   - `RecipeAi`: Interface for AI provider implementations
   - `RecipeService`: Interface for recipe generation service
   - `RecipeRepository`: Interface for recipe data operations
   - Services are bound in `AppServiceProvider` as singletons

3. **AI Provider Configuration** (`config/recipie-ai.php`):
   - Supports multiple AI providers (currently OpenAI)
   - Configurable via `RECIPE_AI_CONNECTION` environment variable
   - Default recipe count: 10 (configurable via `RECIPE_AI_COUNT`)
   - Uses structured JSON responses with strict schema validation

### Background Job Processing

The application uses Laravel's queue system for async operations:

1. **Jobs** (`app/Jobs/`):
   - `GenerateRecomendations`: Batch job that creates recommendation jobs for all users
   - `GenerateRecomendationForUser`: Generates personalized recipe recommendations
   - Uses batch processing on 'batch' queue

2. **Queue Configuration**:
   - Default: database queue connection
   - Run with: `php artisan queue:listen --tries=1`

### Frontend Architecture

**Stack**: Vue 3 + Inertia.js + Tailwind CSS + Flowbite

1. **Pages** (`resources/js/Pages/`):
   - `Welcome.vue`: Homepage
   - `Recipe/`: Recipe listing and generation pages
   - `Auth/`: Authentication pages
   - `Profile/`: User profile management

2. **Components** (`resources/js/Components/`):
   - `RecipeCard.vue`: Recipe display component
   - `TagInput.vue`: Ingredient input component
   - Reusable form components (TextInput, SelectInput, etc.)

3. **Build System**:
   - Vite for asset bundling
   - Entry point: `resources/js/app.js`
   - Config: `vite.config.js`

### Progressive Web App (PWA)

The application is configured as a Progressive Web App, allowing users to install it on their devices and use it offline.

1. **PWA Configuration** (`vite.config.js`):
   - Uses `vite-plugin-pwa` for automatic service worker generation
   - Manifest configuration for installability
   - Auto-update strategy with user confirmation

2. **Service Worker & Caching**:
   - **Precaching**: Static assets (JS, CSS, images) are precached for instant loading
   - **Font Caching**: Google Fonts cached with CacheFirst strategy (1 year expiration)
   - **Page Caching**: All navigation requests (recipes, dashboard) use NetworkFirst with 3s timeout
   - **API Caching**: Recipe API endpoints cached with NetworkFirst strategy (1-week expiration)
   - Service worker location: `public/build/sw.js` (auto-generated on build)
   - Network timeout: 3 seconds before falling back to cache when offline
   - **Important**: Pages must be visited while online first to be cached for offline use

3. **App Icons**:
   - `public/pwa-192x192.png`: Standard PWA icon
   - `public/pwa-512x512.png`: Large PWA icon (also used for maskable)
   - `public/apple-touch-icon.png`: iOS home screen icon
   - Icons generated from `resources/static/logo.png`

4. **PWA Registration** (`resources/js/app.js`):
   - Service worker registered only in production builds (not dev mode)
   - Prompts user to reload when new version available
   - Logs "App ready to work offline" to console when ready
   - Uses dynamic import to avoid dev mode conflicts

5. **Meta Tags** (`resources/views/app.blade.php`):
   - Theme color configuration
   - Apple mobile web app meta tags
   - Mobile-specific viewport optimizations

6. **Manifest** (`public/build/manifest.webmanifest`):
   - App name: "Portionist - AI Recipe Generator"
   - Display mode: standalone (fullscreen app experience)
   - Start URL: `/`
   - Auto-generated during build process

**Installation**: Users can install Portionist on their device by clicking "Add to Home Screen" or "Install" in their browser. Once installed, the app works offline for previously visited recipes and provides a native app-like experience.

**Testing PWA Locally**:
1. Build production assets: `npm run build`
2. Serve with Laravel: `php artisan serve`
3. Visit pages while online to cache them
4. Go offline (DevTools → Network → Offline)
5. Navigate to cached pages - they should work offline
6. Check cache in DevTools → Application → Cache Storage

**Dev Mode**: PWA features are disabled in `npm run dev` to avoid routing conflicts. Use production build for PWA testing.

### Authentication & Authorization

- **Laravel Jetstream**: Base authentication system with Inertia stack
- **Laravel Sanctum**: API authentication for mobile apps
- **Passkey Support**: WebAuthn implementation via `pioneer-dynamics/laravel-passkey`
- **Policies** (`app/Policies/`): Authorization logic for recipes and likes
- **Two-Factor Authentication**: Supported via Jetstream

### API Structure

**Web Routes** (`routes/web.php`):
- Recipe generation form and action
- Recipe listing (filtered by 'my'/'all' and 'cocktail'/'food')
- Bookmark and like/dislike actions

**API Routes** (`routes/api.php`):
- Sanctum-protected mobile API endpoints
- Mirror web functionality for mobile apps
- Routes prefixed with 'api.' namespace

### Search & Indexing

- **Laravel Scout**: Full-text search for recipes
- **Meilisearch**: Search engine (configured via `MEILISEARCH_KEY`)
- Search supports filtering by recipe type and user ownership

### Database Schema

Key models and relationships:

1. **User** (`app/Models/User.php`):
   - Has many recipes (bookmarked)
   - Has passkeys for authentication
   - Notification preferences via `laravel-notification-subscriptions`

2. **Recipie** (`app/Models/Recipie.php`):
   - Belongs to many users (bookmarks)
   - Has many likes
   - Stores: title, ingredients (JSON), directions (JSON), recipeType
   - Searchable via Scout

3. **Like** (`app/Models/Like.php`):
   - Polymorphic like system
   - Tracks liked (true/false) for like/dislike functionality

### Monitoring & Logging

- **Laravel Pulse**: Application monitoring (accessible to super admins)
- **Laravel Pail**: Real-time log viewing during development
- **Laravel Nightwatch**: Performance monitoring package

## Environment Configuration

Required environment variables:
```bash
OPENAI_API_KEY=           # OpenAI API key for recipe generation
MEILISEARCH_KEY=          # Meilisearch API key for search
DB_CONNECTION=sqlite      # Database (default: SQLite)
QUEUE_CONNECTION=database # Queue driver
```

## Code Style

- **Laravel Pint**: PHP code style fixer (runs automatically in `npm run release`)
- Configuration follows Laravel conventions
- Run manually: `./vendor/bin/pint`

## Git Workflow

- Main branch: `master`
- Development branch: `develop`
- Feature branches: `feature/*`
- Release branches: `release/*`
- Uses git-flow workflow (based on commit history)
