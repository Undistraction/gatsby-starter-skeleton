const Joi = require('joi');

const fileNameRegex = /^[a-zA-Z0-9-_]+$/;

const meta = Joi.object().keys({
  owner: Joi.string().required(),
  // This will be used in the site title.
  title: Joi.string().required(),
  // This will be used in the site copyright, with a range running from
  // startYear to the current year.
  startYear: Joi.string()
    .regex(/^(19|20)\d{2}$/)
    .required(),
  showCredit: Joi.boolean().required(),
});

const seo = Joi.object().keys({
  googleTrackingID: Joi.string()
    .regex(/^ua-\d{4,9}-\d{1,4}$/i)
    .optional(),
});

const structure = Joi.object().keys({
  downloadsDirectory: Joi.string()
    .regex(fileNameRegex)
    .required(),
  replCodeDirectory: Joi.string()
    .regex(fileNameRegex)
    .required(),
});

const media = Joi.object().keys({
  images: Joi.object().keys({
    quality: Joi.number()
      .min(0)
      .max(100)
      .required(),
  }),
});

const layout = Joi.object().keys({
  maxWidth: Joi.number()
    .min(0)
    .required(),
});

const cli = Joi.object().keys({
  emoji: Joi.string().optional(),
});

module.exports = Joi.object().keys({
  meta,
  seo,
  structure,
  media,
  layout,
  cli,
});
