import React from 'react';
import { Link, PageProps } from 'gatsby';
import Layout from '../components/layout.tsx';

const About: React.FC<PageProps> = () => (
  <Layout>
    <h1>About Me</h1>
    <p>This is my personal website.</p>
    <Link to="/">&larr; back to home</Link>
  </Layout>
);

export default About;
