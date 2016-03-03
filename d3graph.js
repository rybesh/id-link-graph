'use strict'

import d3 from 'd3'

const d3graph = {}

d3graph.create = function(element, props) {

  while (element.firstChild) {
    element.removeChild(element.firstChild)
  }

  var mount = d3.select(element)

  var force = d3.layout.force()
    .charge(-200)
    .gravity(0.05)
    .linkDistance(90)
    .size([props.width, props.height])

  var svg = mount.append("svg")
    .attr("width", props.width)
    .attr("height", props.height)

  force
    .nodes(props.nodes)
    .links(props.links)
    .start()

  var link = svg.selectAll(".link")
    .data(props.links)
    .enter().append("line")
    .attr("class", "link")

  var node = svg.selectAll(".node")
    .data(props.nodes)
    .enter().append("g")
    .attr("class", "node")
    .call(force.drag)

  node.append("circle")
    .attr("r", 15)
    .attr("x", -5)
    .attr("y", -5)

  node.append("text")
    .attr("dx", 12)
    .attr("dy", ".20em")
    .text(d => d.name)

  node.append("title")
    .text(d => d.name)

  force.on("tick", function() {
    link.attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y)
    node.attr("transform", d => "translate(" + d.x + "," + d.y + ")")
  })
}
export default d3graph
