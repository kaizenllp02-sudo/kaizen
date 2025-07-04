# Environment Variables Setup

This project uses environment variables for secure configuration management. All sensitive data and configuration options are stored in environment variables to ensure security and flexibility across different deployment environments.

## Required Environment Variables

### 1. Sanity CMS Configuration
```bash
VITE_SANITY_PROJECT_ID=your_sanity_project_id
VITE_SANITY_DATASET=production
```

### 2. Google Apps Script Integration
```bash
VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

## Setup Instructions

### 1. Copy Environment Template
```bash
cp .env.example .env
```

### 2. Configure Your Values
Edit the `.env` file with your actual values:

```bash
# Sanity Configuration
VITE_SANITY_PROJECT_ID=xvwfx739
VITE_SANITY_DATASET=production

# Google Apps Script Configuration
VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycbz.../exec
```

### 3. Restart Development Server
After updating environment variables, restart your development server:
```bash
npm run dev
```

## Environment Variable Validation

The project includes automatic validation of required environment variables:

- **Development**: Warnings are logged if variables are missing
- **Production**: The app will throw errors for missing required variables
- **Centralized Configuration**: All environment variables are managed through `src/lib/env.js`

## Security Best Practices

### ✅ What We Do:
- Store sensitive data in environment variables
- Use `.env` file for local development
- Include `.env` in `.gitignore` to prevent committing secrets
- Provide `.env.example` template for other developers
- Validate required variables at startup

### ❌ What to Avoid:
- Never commit `.env` files to version control
- Don't hardcode API keys or sensitive URLs in source code
- Don't expose sensitive variables to client-side code unnecessarily

## Deployment

For production deployments, ensure your hosting platform supports environment variables:

### Vercel
1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add each variable with its production value

### Netlify
1. Go to Site Settings → Environment Variables
2. Add each variable with its production value

### Other Platforms
Refer to your hosting provider's documentation for setting environment variables.

## Troubleshooting

### Missing Environment Variables
If you see errors about missing environment variables:

1. **Check `.env` file exists** in project root
2. **Verify variable names** match exactly (case-sensitive)
3. **Restart development server** after changes
4. **Check for typos** in variable names or values

### Environment Variable Not Loading
1. Ensure variables start with `VITE_` prefix (required by Vite)
2. Variables must be defined before starting the dev server
3. Check the browser console for validation warnings

### Development vs Production
- Use different `.env` files for different environments
- Never use development keys in production
- Validate that production environment variables are set correctly

## File Structure
```
├── .env                 # Your local environment variables (not committed)
├── .env.example         # Template for environment variables (committed)
├── src/lib/env.js       # Centralized environment configuration
└── README.md           # This documentation
```
