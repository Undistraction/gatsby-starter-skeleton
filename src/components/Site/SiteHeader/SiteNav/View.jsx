import React from 'react';
import Link from '../../../shared/Link';
import Layout from './Layout';

const SiteNav = () => (
  <Layout>
    <Link to="/">Home</Link>
    <Link to="/articles">Articles</Link>
    <Link to="/about">About</Link>
  </Layout>
);

export default SiteNav;
