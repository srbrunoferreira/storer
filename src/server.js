'use strict'

import api from './api.js'
import { SERVER_PORT } from './config.js'

api.listen(SERVER_PORT)
console.log('Running at port ' + SERVER_PORT)
