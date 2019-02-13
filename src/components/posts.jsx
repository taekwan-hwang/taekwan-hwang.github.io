import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { rhythm } from '../utils/typography';
import PostTags from './postTags';

const PostTitle = styled.h3`
  margin-bottom: ${rhythm(1 / 4)};
`;

const PostDate = styled.span`
  color: #8e8e8e;
  font-size: 14px;
`;

const PostLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-style: italic;
`;

export default function Posts({ data }) {
  return (
    <>
      {data.map(({ node }) => (
        <div key={node.id}>
          <PostDate>{node.frontmatter.date}</PostDate>
          {' '}
          <PostTags tags={node.frontmatter.tags} />
          <PostLink to={node.fields.slug}>
            <PostTitle>
              {node.frontmatter.title}
              {' '}
            </PostTitle>
          </PostLink>
          <p>{node.excerpt}</p>
          <hr />
        </div>
      ))}
    </>
  );
}

Posts.propTypes = {
  data: Proptypes.arrayOf(Proptypes.object),
};

Posts.defaultProps = {
  data: [],
};
