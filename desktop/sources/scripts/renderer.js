'use strict'

function Renderer() {
  // todo
}

Renderer.prototype.install = function(host) {
  this.canvas = document.createElement('canvas')
  this.canvas.id = 'avatar'
  this.canvas.height = '400px'
  this.canvas.width = '400px'
  this.canvas.style.height = '400px'
  this.canvas.style.width = '400px'
  this.context = this.canvas.getContext('2d')

  host.appendChild(this.canvas)
}
