import { User, Users } from '@/src/types/users';

export async function getAllUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    return users as Users;
  } catch (error) {
    console.error('Error getting users', error);
    throw error;
  }
}

export async function getUser(id: number) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const user = await response.json();
    return user as User;
  } catch (error) {
    console.error('Error getting user', error);
    throw error;
  }
}
