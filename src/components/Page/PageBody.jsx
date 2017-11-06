import React from 'react';

const PageBody = ({ children }) => <div>{children}</div>;

PageBody.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default PageBody;
