import theApi from './api'

// Note: VSCode currently doesn't respect object prop one-liner and removes
// import, so we need to rename the prop. This is already fixed in the repo and
// can be removed on next vscode releaase.
const theme = {
  api: theApi,
}

export default theme
