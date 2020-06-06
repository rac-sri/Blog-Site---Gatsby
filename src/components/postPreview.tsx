import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import ReadLink from './readLink';

export interface Props {
  post: {
    title: string;
    excerpt: string;
    slug: string;
  };
}

const Postreview: React.SFC<Props> = ({ post }) => {
  return (
    <article
      css={css`
        border-bottom: 1px solid #ddd;
        margin-top: 0.75rem;
        padding-bottom: 1rem;
        :first-of-type {
          margin-top: 1rem;
        }
      `}
    >
      <h2>{post.title}</h2>
      <p>{post.excerpt}</p>
      <ReadLink to={post.slug}>read this post &rarr;</ReadLink>
    </article>
  );
};

export default Postreview;
