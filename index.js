'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import UI from './ui'
import data from './data/links.json'

ReactDOM.render(<UI data={data}/>, document.getElementById('ui'))
