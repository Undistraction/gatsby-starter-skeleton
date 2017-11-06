import graphql from 'graphql';

export default graphql`
  query AboutPageQuery {
    mainText: file(relativePath: { eq: "about/main.md" }) {
      childMarkdownRemark {
        html
      }
    }
  }
`;
