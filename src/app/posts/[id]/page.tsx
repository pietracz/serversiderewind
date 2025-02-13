import React from 'react';

import { Metadata } from 'next';
import { getPost } from '@/src/actions/get/posts';
import { getComments } from '@/src/actions/get/comments';

export async function generateMetadata({
  params,
}: {
  params: { id: number };
}): Promise<Metadata> {
  const post = await getPost(params.id);

  return {
    title: post.title,
    description: post.body,
    /* openGraph: {
      images: [
        {
          url: `https://jsonplaceholder.typicode.com/posts/${params.id}`,
        },
      ],
    }, */
  };
}

const Post = async ({ params }: { params: { id: number } }) => {
  const post = await getPost(params.id);
  const comments = await getComments(params.id);

  return (
    <div key={post.id}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <div>
        <h3>Comments</h3>
        {comments.map((comment) => (
          <div key={comment.id}>
            <p>
              Author:{''}
              {comment.email}
            </p>
            <p>{comment.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;
