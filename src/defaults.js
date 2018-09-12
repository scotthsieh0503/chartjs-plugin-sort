'use strict'

export default {
  enable: false,
  mode: 'function',
  reference: [],
  sortBy: 'label',
  order: 'asc',
  sortFunction: (a, b) => {
    if (a.label < b.label) return -1
    if (a.label > b.label) return 1
    return 0
  }
}
