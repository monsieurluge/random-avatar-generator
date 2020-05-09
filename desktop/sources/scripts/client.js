'use strict'

function Client() {
  // todo
}

Client.prototype.install = function(host) {
  this.renderer = new Renderer()

  this.renderer.install(host)
}
