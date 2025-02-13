import React from 'react';

import sleep from '@/src/lib/sleep';
import { getAllPosts } from '@/src/actions/get/posts';
import Link from 'next/link';

export const metadata = {
  title: 'Posts',
  description: 'Check out all posts available',
};

const Posts = async () => {
  await sleep(2000);

  const posts = await getAllPosts();

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </h2>
        </div>
      ))}
    </div>
  );
};

export default Posts;
