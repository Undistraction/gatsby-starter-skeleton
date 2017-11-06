import graphql from 'graphql';

export default graphql`
  query HomePageQuery {
    mainImageSizes: file(relativePath: { eq: "home/images/main.jpg" }) {
      childImageSharp {
        sizes {
          ...GatsbyImageSharpSizes
        }
      }
    }
    mainText: file(relativePath: { eq: "home/main.md" }) {
      childMarkdownRemark {
        html
      }
    }
  }
`;
