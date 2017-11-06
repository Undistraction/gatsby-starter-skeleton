import { pluck } from 'ramda';

export default data => pluck('node')(data.allMarkdownRemark.edges);
