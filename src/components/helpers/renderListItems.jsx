import { mapIndexed } from 'ramda-adjunct'
import React from 'react'

const renderListItems = (Component, dataProp, data) =>
  mapIndexed((dataItem, key) => {
    const props = {
      [dataProp]: dataItem,
    }
    return (
      <li key={key}>
        <Component {...props} />
      </li>
    )
  }, data)

export default renderListItems
