import React from 'react';
import Proptypes from 'prop-types';

import Layout from '../components/layout';
import Posts from '../components/posts';

export default function SingleTagIndex({ pageContext }) {
  const { posts, tagName } = pageContext;

  return (
    <Layout>
      <h1>
Posts about
        {' '}
        {tagName}
      </h1>
      <Posts data={posts} />
    </Layout>
  );
}

SingleTagIndex.propTypes = {
  pageContext: Proptypes.shape({
    posts: Proptypes.arrayOf(Proptypes.object),
  }),
};

SingleTagIndex.defaultProps = {
  pageContext: {},
};
