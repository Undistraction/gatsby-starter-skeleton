// This configuration file allows you to customise many aspects of this Gatsby
// starter.

module.exports = {
  // ---------------------------------------------------------------------------
  // Site Data
  // ---------------------------------------------------------------------------
  site: {
    owner: 'Your Name Here',
    // This will be used in the site title.
    title: 'Gatsby Skeleton',
    // This will be used in the site copyright, with a date range running from
    // startYear to the current year.
    description: 'Your site description for RSS feed',
    // Used in RSS Feed
    url: 'https://example.com',
    // Starting year for copyright range
    startYear: '2018',
    // Show the credit in the footer (much appreciated)
    showCredit: true,
  },
  // ---------------------------------------------------------------------------
  // Metadata
  // ---------------------------------------------------------------------------
  metadata: {
    home: {
      title: 'Site / Home Page',
      description: 'The home page of the site',
      keywords: 'home, site',
    },
    about: {
      title: 'Site / About Page',
      description: 'The about page of the site',
      keywords: 'about, site',
    },
    articles: {
      title: 'Site / Articles Page',
      description: 'The Articles',
      keywords: 'articles, site',
    },
    projects: {
      title: 'Site / Projects Page',
      description: 'The Projects',
      keywords: 'projects',
    },
    tags: {
      title: 'Site / Tags Page',
      description: 'All tags used on the site',
      keywords: 'tags',
    },
  },
  // ---------------------------------------------------------------------------
  // SEO
  // ---------------------------------------------------------------------------
  seo: {
    // Your Google Tracking ID, in the form: UA-000000-0.
    // If you leave undefined, the tracking code will not be added.
    googleTrackingID: undefined,
  },
  // ---------------------------------------------------------------------------
  // Site Structure
  // ---------------------------------------------------------------------------
  structure: {
    // Directory path for downloads, relative to your root url
    downloadsDirectory: 'downloads',
    // Directly path for code used in REPLs
    replCodeDirectory: 'code',
    // Configuration for articles.
    articles: {
      name: 'Spanky',
      directory: 'articles',
      path: 'articles',
      perPage: 5,
    },
    // Configuration for projects
    projects: {
      name: 'Projects',
      directory: 'projects',
      path: 'projects',
    },
    // Configuration for projects
    tags: {
      name: 'Tags',
      directory: 'tags',
      path: 'tags',
    },
  },
  // ---------------------------------------------------------------------------
  // Media
  // ---------------------------------------------------------------------------
  media: {
    images: {
      // JPG quality for images encoded for the site.
      quality: 60,
    },
  },
  // ---------------------------------------------------------------------------
  // Layout
  // ---------------------------------------------------------------------------
  layout: {
    // Maximum width for the site before it stops growing horizontally.
    // Note: This is used to decide what dimensions saved images should have.
    maxWidth: 1200,
  },
  // ---------------------------------------------------------------------------
  // CLI
  // ---------------------------------------------------------------------------
  cli: {
    emoji: '💀',
  },
}
