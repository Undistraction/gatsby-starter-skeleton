const Joi = require('joi')

const fileNameRegex = /^[a-zA-Z0-9-_]+$/

const item = Joi.object().keys({
  name: Joi.string()
    .regex(fileNameRegex)
    .required(),
  directory: Joi.string()
    .regex(fileNameRegex)
    .required(),
  path: Joi.string()
    .regex(fileNameRegex)
    .required(),
  perPage: Joi.number()
    .greater(0)
    .optional(),
})

const site = Joi.object().keys({
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
})

const metadata = Joi.object().pattern(
  /[A-Za-z0-9-_]+/,
  Joi.object().keys({
    title: Joi.string(),
    description: Joi.string(),
    keywords: Joi.string(),
  })
)

const seo = Joi.object().keys({
  googleTrackingID: Joi.string()
    .regex(/^ua-\d{4,9}-\d{1,4}$/i)
    .optional(),
})

const structure = Joi.object().keys({
  downloadsDirectory: Joi.string()
    .regex(fileNameRegex)
    .required(),
  replCodeDirectory: Joi.string()
    .regex(fileNameRegex)
    .required(),
  articles: item,
  projects: item,
  tags: item,
})

const media = Joi.object().keys({
  images: Joi.object().keys({
    quality: Joi.number()
      .min(0)
      .max(100)
      .required(),
  }),
})

const layout = Joi.object().keys({
  maxWidth: Joi.number()
    .min(0)
    .required(),
})

const cli = Joi.object().keys({
  emoji: Joi.string().optional(),
})

module.exports = Joi.object().keys({
  site,
  metadata,
  seo,
  structure,
  media,
  layout,
  cli,
})
