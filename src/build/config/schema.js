const Joi = require(`joi`)

const fileNameRegex = /^[a-zA-Z]+[a-zA-Z0-9-_]+$/
const pathRegex = /^[/a-zA-Z_]*[/a-zA-Z0-9-_]*$/

// -----------------------------------------------------------------------------
// Data
// -----------------------------------------------------------------------------

const data = Joi.object().keys({
  owner: Joi.string().required(),
  // This will be used in the site title.
  title: Joi.string().required(),
  // This will be used in the site copyright, with a range running from
  // startYear to the current year.
  startYear: Joi.string()
    .regex(/^(19|20)\d{2}$/)
    .required(),
  showCredit: Joi.boolean().required(),
  description: Joi.string().optional(),
  url: Joi.string()
    .uri()
    .optional(),
  dateFormat: Joi.string().required(),
})

// -----------------------------------------------------------------------------
// Metadata
// -----------------------------------------------------------------------------

const metadata = Joi.object().pattern(
  /[A-Za-z0-9-_]+/,
  Joi.object().keys({
    title: Joi.string(),
    description: Joi.string(),
    keywords: Joi.string(),
  })
)

// -----------------------------------------------------------------------------
// SEO
// -----------------------------------------------------------------------------

const seo = Joi.object().keys({
  googleTrackingID: Joi.string()
    .regex(/^ua-\d{4,9}-\d{1,4}$/i)
    .optional(),
})

// -----------------------------------------------------------------------------
// Structure
// -----------------------------------------------------------------------------

const resource = Joi.object().keys({
  title: Joi.string().required(),
  navTitle: Joi.string().optional(),
  directory: Joi.string()
    .regex(fileNameRegex)
    .allow(``)
    .optional(),
  path: Joi.string()
    .regex(pathRegex)
    .required(),
  groupSize: Joi.number()
    .greater(0)
    .optional(),
})

const page = Joi.object().keys({
  title: Joi.string(),
  navTitle: Joi.string().optional(),
  path: Joi.string()
    .regex(pathRegex)
    .allow(``)
    .required(),
})

const structure = Joi.object().keys({
  downloadsDir: Joi.string()
    .regex(fileNameRegex)
    .required(),
  codeDir: Joi.string()
    .regex(fileNameRegex)
    .required(),
  resources: Joi.object({
    articles: resource,
    projects: resource,
    tags: resource,
  }),
  pages: Joi.object({
    home: page,
    about: page,
    notFound: page,
  }),
})

// -----------------------------------------------------------------------------
// Media
// -----------------------------------------------------------------------------

const media = Joi.object().keys({
  images: Joi.object().keys({
    maxWidth: Joi.number()
      .min(0)
      .required(),
    quality: Joi.number()
      .min(0)
      .max(100)
      .required(),
  }),
})

// -----------------------------------------------------------------------------
// CLI
// -----------------------------------------------------------------------------

const cli = Joi.object().keys({
  emoji: Joi.string().optional(),
})

// -----------------------------------------------------------------------------
// Exports
// -----------------------------------------------------------------------------

const schema = Joi.object().keys({
  data,
  metadata,
  seo,
  structure,
  media,
  cli,
})

module.exports = schema
