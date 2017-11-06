import graphql from 'graphql';
import AboutPage from './AboutPage';

export default AboutPage;

// Note: Ideally this would be in its own file and imported from a Page
// Container, but Gatsby preprocesses the pages looking for a graphql call.
// Moving it anywhere else results in an error.
export const query = graphql`
  query AboutPageQuery {
    mainText: file(relativePath: { eq: "about/main.md" }) {
      childMarkdownRemark {
        html
      }
    }
  }
`;
