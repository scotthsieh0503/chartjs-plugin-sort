'use strict'

import defaults from './defaults'
import plugin from './plugin'

Chart.defaults.global.plugins.sort = defaults
Chart.plugins.register(plugin)
