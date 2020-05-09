'use strict'

function Client() {
  const padding = { height: 60, width: 60 }

  this.install = function(host) {
    this.renderer = new Renderer(this)

    this.renderer.install(host)
  }

  this.paddedSize = function() {
    return {
      height: window.innerHeight - padding.height,
      width: window.innerWidth - padding.width
    }
  }

  this.start = function() {
    this.renderer.start()
  }
}
