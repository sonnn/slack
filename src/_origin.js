var origin = 'https://slack.com'

// allow configuring the url if steno is running on a non-standard port/host
if (process.env.REACT_APP_ORIGIN) {
  origin = process.env.REACT_APP_ORIGIN
}

module.exports = origin
