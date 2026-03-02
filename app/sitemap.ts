import { contentfulClient } from '@/lib/contentfulClient';

// --- UPDATED: The correct URL for your live website (canonical domain for SEO) ---
export const baseUrl = 'https://saifullahbinashraf.vercel.app';

// Define the structure of a blog post for fetching
interface BlogPost {
  sys: {
    updatedAt: string;
  };
  fields: {
    slug: string;
  };
}

export default async function sitemap() {
  // 1. Start with your static pages and assign SEO priorities
  // homepage and /life get highest weight; others are scaled based on content value
  const priorityMap: Record<string, number> = {
    '': 1,
    '/portfolio': 0.9,
    '/portfolio/education': 0.8,
    '/academy': 0.9,
    '/blog': 0.8,
    '/life': 0.8,
    '/contact': 0.7,
  };

  const routes = ['', '/portfolio', '/portfolio/education', '/academy', '/blog', '/contact', '/life'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    priority: priorityMap[route] ?? 0.5, // default to medium
  }));

  // 2. Fetch all blog posts from Contentful
  try {
    const response = await contentfulClient.getEntries({
      content_type: 'zaifearsBlogPost',
    });
    const blogPosts = response.items as unknown as BlogPost[];

    const blogRoutes = blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.fields.slug}`,
      lastModified: new Date(post.sys.updatedAt).toISOString().split('T')[0],
      priority: 0.6, // individual posts important but below the main /blog listing
    }));
    
    // 3. Combine the static and dynamic routes
    return [...routes, ...blogRoutes];

  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : String(error);
    // Silently handle missing content type or Contentful misconfiguration
    if (errorMsg.includes('unknownContentType') || errorMsg.includes('placeholder')) {
      return routes;
    }
    console.warn("[Sitemap] Error fetching Contentful data:", errorMsg);
    // If Contentful fails, return only the static routes
    return routes;
  }
}
