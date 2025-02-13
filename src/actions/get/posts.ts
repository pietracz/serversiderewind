import { Post, Posts } from '@/src/types/posts';

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
    return post as Post;
  } catch (error) {
    console.error('Error getting post', error);
    throw error;
  }
}
