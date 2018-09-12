'use strict'

const plugin = {
  id: 'sort',
  options: [],
  beforeInit: function (chart) {
    this.options = chart.options.plugins.sort
  },
  afterInit: function (chart) {
    if (this.options.enable === true) {
      switch (this.options.mode) {
        case 'array':
          let sortedDataSet = []
          sortedDataSet = this.sortByArray(chart, this.options)
          chart.config.data.dataset = sortedDataSet
          break
        case 'function':
          chart.config.dataset.sort(this.options.sortFunction)
          break
      }
    }
  },
  sortByArray: function (chart, options) {
    let reference = options.reference
    let datasets = chart.config.data.datasets

    datasets.sort(function (a, b) {
      let sortOrder = (options.order === 'desc') ? -1 : 1
      return sortOrder * (reference.indexOf(a[options.sortBy]) - reference.indexOf(b[options.sortBy]))
    })

    return datasets
  }
}

export default plugin
