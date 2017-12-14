module.exports = {
  meta: {
    owner: 'Your Name Here',
    // This will be used in the site title.
    title: 'Gatsby Skeleton',
    // This will be used in the site copyright, with a range running from
    // startYear to the current year.
    description: 'Your site description for RSS feed',
    url: 'https://example.com',
    startYear: '2017',
    showCredit: true,
  },
  seo: {
    // Your Google Tracking ID, in the form: UA-000000-0.
    // If you leave undefined, the tracking code will not be added.
    googleTrackingID: undefined,
  },
  structure: {
    // Directory path for downloads relative to your root url
    downloadsDirectory: 'downloads',
    replCodeDirectory: 'code',
  },
  media: {
    images: {
      // JPG quality for images encoded for the site.
      quality: 60,
    },
  },
  layout: {
    // Maximum width for the site before it stops growing horizontally.
    maxWidth: 1200,
  },
  cli: {
    emoji: '💀',
  },
};
