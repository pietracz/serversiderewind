import { MetadataRoute } from 'next';
import { getAllPosts } from '@/src/actions/get/posts';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();

  const urls = posts.map((post) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/posts/${post.id}`,
    /* lastModified: new Date(post.updatedAt), */
  }));

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/posts`,
    },
    ...urls,
  ];
}
