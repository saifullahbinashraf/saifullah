import { createClient } from 'contentful';

// Contentful credentials from environment variables
const spaceId = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

const hasCredentials = spaceId && accessToken;

if (!hasCredentials) {
  console.warn('[Contentful] Credentials missing. Set CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN in .env.local');
}

// Create client with actual credentials
export const contentfulClient = createClient({
  space: spaceId || 'placeholder',
  accessToken: accessToken || 'placeholder',
});

// Flag to check if Contentful is properly configured
export const isContentfulConfigured = hasCredentials;

// Safe wrapper for fetching entries with error handling
export const safeGetEntries = async (query: any) => {
  try {
    if (!isContentfulConfigured) {
      return { items: [], total: 0 };
    }
    const response = await contentfulClient.getEntries(query);
    return response;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.warn(`[Contentful] Query failed for content_type '${query.content_type}':`, errorMessage);
    return { items: [], total: 0 };
  }
};