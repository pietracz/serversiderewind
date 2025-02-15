import React from 'react';

import { Metadata } from 'next';
import { getPost, getAllPosts } from '@/src/actions/get/posts';
import { getComments } from '@/src/actions/get/comments';
import { Params } from '@/src/types/params';

/* Pre-caching of possible post-ids */
export async function generateStaticParams() {
  const posts = await getAllPosts();

  /* URL parameter need to be converted to a string value */
  return posts.map(({ id }) => ({ id: String(id) }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  /* destructure params to get the id value */
  const { id } = await params;
  const post = await getPost(Number(id));

  return {
    title: post.title,
    description: post.body,
    openGraph: {
      images: [
        {
          url: `https://jsonplaceholder.typicode.com/posts/${id}`,
        },
      ],
    },
  };
}

const Post = async ({ params }: { params: Params }) => {
  /* destructure params to get the id value */
  const { id } = await params;
  const post = await getPost(Number(id));
  const comments = await getComments(Number(id));

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
