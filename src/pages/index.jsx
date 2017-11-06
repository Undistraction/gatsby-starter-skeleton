import graphql from 'graphql';
import HomePage from '../components/HomePage';

export default HomePage;

// Note: Ideally this would be in its own file and imported from a Page
// Container, but Gatsby preprocesses the pages looking for a graphql call.
// Moving it anywhere else results in an error.
export const query = graphql`
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
