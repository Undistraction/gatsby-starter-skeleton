import React from 'react'
import Link from 'gatsby-link'

const NotFoundPage = () => (
  <div>
    <h1>Page Doesn&#39;t Exist</h1>
    <p>
      The page you wanted doesn&#39;t exist. Would you like to go to the{' '}
      <Link to="/">Home page</Link>?
    </p>
  </div>
)

export default NotFoundPage
