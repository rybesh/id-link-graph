'use strict'

import React from 'react'
import {Table, Column, Cell} from 'fixed-data-table'
import Graph from './graph'
import {parseHash} from './utils'

class UI extends React.Component {
  constructor(props) {
    super(props)
    this.handleHashChange = this.handleHashChange.bind(this)
    this.state = {group: parseHash().group || 0}
  }
  componentDidMount() {
    window.onhashchange = this.handleHashChange
  }
  componentWillUnmount() {
    window.onhashchange = null
  }
  handleHashChange() {
    this.setState(parseHash())
  }
  render() {
    return (
      <div>
        <Table
          headerHeight={30}
          height={200}
          rowHeight={30}
          rowsCount={this.props.data.length}
          width={1000}
        >
          <Column
            cell={({rowIndex}) => (
              <a href={`#group=${rowIndex}`}>
                <Cell>{this.props.data[rowIndex].description}</Cell>
              </a>
            )}
            header={<Cell>Description</Cell>}
            width={1000}
          />
        </Table>
        <Graph
          height={500}
          links={this.props.data[this.state.group].links}
          nodes={this.props.data[this.state.group].nodes}
          width={1000}
        />
      </div>
    )
  }
}
export default UI
