import { Comments } from '@/src/types/comments';

export async function getComments(id: number) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    const comments = await response.json();
    return comments as Comments;
  } catch (error) {
    console.error('Error getting comments', error);
    throw error;
  }
}
