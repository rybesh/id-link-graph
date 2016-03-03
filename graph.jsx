'use strict'

import React from 'react'
import d3graph from './d3graph'

class Graph extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    d3graph.create(this.mount, this.props)
  }
  componentDidUpdate() {
    d3graph.create(this.mount, this.props)
  }
  render() {
    return (
      <div
        id="mount"
        ref={ref => this.mount = ref}
      />)
  }
}
export default Graph
