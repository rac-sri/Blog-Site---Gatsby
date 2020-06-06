import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout.tsx';
import usePosts from '../hooks/usepost';
import Postreview from '../components/postPreview';
import Hero from '../components/hero';

export default () => {
  const posts = usePosts();

  return (
    <>
      <Hero />
      <Layout>
        <h1>Home</h1>
        <p>Hello Minnesota!</p>
        <Link to="/about/">Learn about me &rarr;</Link>

        <h2>Read my blog</h2>
        {posts.map(post => (
          <Postreview key={post.slug} post={post} />
        ))}
      </Layout>
    </>
  );
};
