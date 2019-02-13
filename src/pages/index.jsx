import React from 'react';
import Proptypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Posts from '../components/posts';

export default function Index({ data }) {
  return (
    <Layout>
      <Posts data={data.allMarkdownRemark.edges} />
    </Layout>
  );
}

Index.propTypes = {
  data: Proptypes.string,
};

Index.defaultProps = {
  data: '',
};


export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            tags
          }
          excerpt
        }
      }
    }
  }
`;
