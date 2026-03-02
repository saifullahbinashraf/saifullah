import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { path } = await request.json();
    
    if (path) {
      revalidatePath(path);
      return NextResponse.json({ revalidated: true, path });
    } else {
      // Revalidate all main pages
      revalidatePath('/blog');
      revalidatePath('/portfolio');
      revalidatePath('/');
      
      return NextResponse.json({ revalidated: true, paths: ['/blog', '/portfolio', '/'] });
    }
  } catch (err) {
    console.error('Revalidation error:', err);
    return NextResponse.json({ error: 'Error revalidating' }, { status: 500 });
  }
}