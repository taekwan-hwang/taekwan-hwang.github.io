import React from 'react';
import Proptypes from 'prop-types';
import { graphql } from 'gatsby';

export default function PostFiles({ data }) {
  return (
    <>
      <h1>My Site&apos;s Files</h1>
      <table>
        <thead>
          <tr>
            <th>relativePath</th>
            <th>prettySize</th>
            <th>extension</th>
            <th>birthTime</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data.allFile.edges).map((index) => {
            const { node } = data.allFile.edges[index];
            return (
              <tr key={index}>
                <td>{node.relativePath}</td>
                <td>{node.prettySize}</td>
                <td>{node.extension}</td>
                <td>{node.birthTime}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

PostFiles.propTypes = {
  data: Proptypes.shape({
    edges: Proptypes.arrayOf(Proptypes.object),
  }),
};

PostFiles.defaultProps = {
  data: {},
};

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`;
