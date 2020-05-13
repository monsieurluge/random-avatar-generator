'use strict'

function Client() {
  const padding = { height: 120, width: 120 }

  this.install = function(host) {
    this.avatar = new Avatar()
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
    this.renderer.update()
  }
}
