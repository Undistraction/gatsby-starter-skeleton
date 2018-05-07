// This configuration file allows you to customise many aspects of this Gatsby
// starter.

module.exports = {
  // ---------------------------------------------------------------------------
  // Site Data
  // ---------------------------------------------------------------------------

  data: {
    // Used in the site copyright
    owner: `Your Name Here`,
    // Used for the main site title and in RSS Feed
    title: `Gatsby Skeleton`,
    // Used in RSS Feed
    description: `Your site description for RSS feed`,
    url: `https://example.com`,
    // Starting year of copyright range
    startYear: `2017`,
    // Show the credit in the footer (much appreciated)
    showCredit: true,
    // Formatting for dates displayed across the site
    dateFormat: `DD MMMM, YYYY`,
  },

  // ---------------------------------------------------------------------------
  // Metadata
  // ---------------------------------------------------------------------------

  metadata: {
    home: {
      title: `Site / Home Page`,
      description: `The home page of the site`,
      keywords: `home`,
    },
    about: {
      title: `Site / About Page`,
      description: `The about page of the site`,
      keywords: `about`,
    },
    articles: {
      title: `Site / Articles Page`,
      description: `The Articles`,
      keywords: `articles`,
    },
    projects: {
      title: `Site / Projects Page`,
      description: `The Projects`,
      keywords: `projects`,
    },
    tags: {
      title: `Site / Tags Page`,
      description: `All tags used on the site`,
      keywords: `tags`,
    },
    tag: {
      title: `Tag: `,
      description: `Resources tagged with`,
      keywords: `tags`,
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
    // -------------------------------------------------------------------------
    // Directories
    // -------------------------------------------------------------------------

    // Directory path for downloads, relative to your root url
    downloadsDir: `downloads`,
    // Directly path for code used in REPLs
    codeDir: `code`,

    // -------------------------------------------------------------------------
    // Pages
    // -------------------------------------------------------------------------

    pages: {
      home: {
        // Page title
        title: `Home`,
        // Path used in URL
        path: `/`,
      },
      about: {
        // Page title
        title: `About`,
        // Path used in URL
        path: `/about`,
      },
      notFound: {
        // Page title
        title: `Page Not Found`,
        // Path used in URL
        path: `/404`,
      },
    },

    // -------------------------------------------------------------------------
    // Resources
    // -------------------------------------------------------------------------

    resources: {
      // Configuration for articles.
      articles: {
        // Page title
        title: `Articles`,
        // Name of dir containing markdown docs
        directory: `articles`,
        // Path used in URL
        path: `/articles`,
        // Paginate to this number of items per page
        groupSize: 5,
      },
      // Configuration for projects
      projects: {
        // Page title
        title: `Projects`,
        // Name of dir containing markdown docs
        directory: `projects`,
        // Path used in URL
        path: `/projects`,
      },
      // Configuration for projects
      tags: {
        // Page title
        title: `Tags`,
        // Path used in URL
        path: `/tags`,
      },
    },
  },

  // ---------------------------------------------------------------------------
  // Media
  // ---------------------------------------------------------------------------

  media: {
    images: {
      // The maximum width an image will be displayed at
      maxWidth: 1200,
      // JPG quality for images encoded for the site.
      quality: 60,
    },
  },

  // ---------------------------------------------------------------------------
  // CLI
  // ---------------------------------------------------------------------------

  // Internal
  cli: {
    // Emojo used to prefix messages reported during build
    emoji: `💀`,
  },
}
