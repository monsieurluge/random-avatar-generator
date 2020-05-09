'use strict'

function Renderer(client) {
  this.install = function(host) {
    this.canvas = document.createElement('canvas')
    this.canvas.id = 'avatar'
    this.context = this.canvas.getContext('2d')

    host.appendChild(this.canvas)
  }

  this.resize = function() {
    const target = client.paddedSize()
    const size = Math.min(target.height, target.width)
    const cssSize = `${size}px`

    this.canvas.height = cssSize
    this.canvas.width = cssSize
    this.canvas.style.height = cssSize
    this.canvas.style.width = cssSize
  }

  this.start = function() {
    this.resize()
  }
}
