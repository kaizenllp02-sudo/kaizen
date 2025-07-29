// Environment variables configuration and validation

/**
 * Validates that all required environment variables are present
 * Call this function early in your app initialization
 */

export function validateEnvironmentVariables() {
  const requiredVars = [
    'VITE_SANITY_PROJECT_ID',
    'VITE_GOOGLE_SCRIPT_URL',
    'VITE_ABSTRACT_API_KEY'
  ];

  const missing = requiredVars.filter(varName => !import.meta.env[varName]);
  
  if (missing.length > 0) {
    console.error('Missing required environment variables:', missing);
    console.error('Please check your .env file and ensure all required variables are set.');
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
  }
  
  console.log('✅ All required environment variables are configured');
}

/**
 * Get environment variables with defaults
 */
export const env = {
  // Sanity configuration
  SANITY_PROJECT_ID: import.meta.env.VITE_SANITY_PROJECT_ID,
  SANITY_DATASET: import.meta.env.VITE_SANITY_DATASET || 'production',

  // Google Apps Script configuration
  GOOGLE_SCRIPT_URL: import.meta.env.VITE_GOOGLE_SCRIPT_URL,

  // AbstractAPI Email Validation Key
  ABSTRACT_API_KEY: import.meta.env.VITE_ABSTRACT_API_KEY,

  // Development mode
  IS_DEV: import.meta.env.DEV,
  IS_PROD: import.meta.env.PROD,

  // Base URL
  BASE_URL: import.meta.env.BASE_URL,
};

// Validate environment variables in development
if (import.meta.env.DEV) {
  validateEnvironmentVariables();
}
