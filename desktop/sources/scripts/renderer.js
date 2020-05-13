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
    const cssSize = size => `${size}px`
    this.canvas.height = target.height
    this.canvas.width = target.width
    this.canvas.style.height = cssSize(target.height)
    this.canvas.style.width = cssSize(target.width)
  }

  this.start = function() {
    this.resize()
  }

  this.update = function() {
    this.resize()
    client.avatar.draw(this.context)
  }
}
