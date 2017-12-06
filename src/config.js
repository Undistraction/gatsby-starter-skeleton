module.exports = {
  meta: {
    owner: 'Your Name Here',
    // This will be used in the site title.
    title: 'Gatsby Skeleton',
    // This will be used in the site copyright, with a range running from
    // startYear to the current year.
    startYear: 2017,
  },
  seo: {
    // Your Google Tracking ID, in the form: UA-000000-0.
    // If you leave undefined, the tracking code will not be added.
    googleTrackingID: undefined,
  },
  structure: {
    downloadsDirectory: 'downloads',
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
};
