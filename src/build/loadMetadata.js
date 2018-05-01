import { isNil, find, propEq } from 'ramda'
import metadata from '../metadata.yaml'

const loadMetadata = page => {
  const { pages } = metadata
  if (isNil(pages)) throw new Error('Problem loading metadata')
  const pageMetadata = find(propEq('id', page))(metadata.pages)
  if (isNil(pageMetadata))
    throw new Error(`Problem loading metadata for page: '${page}'`)

  return pageMetadata
}

export default loadMetadata
