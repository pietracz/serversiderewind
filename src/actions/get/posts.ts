import { Post, Posts } from '@/src/types/posts';
import { notFound } from 'next/navigation';

export async function getAllPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    return posts as Posts;
  } catch (error) {
    console.error('Error getting posts', error);
    throw error;
  }
}

export async function getPost(id: number) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const post = await response.json();

    if (response.status === 404) {
      notFound();
    } else {
      return post as Post;
    }
  } catch (error) {
    console.error('Error getting post', error);
    throw error;
  }
}
