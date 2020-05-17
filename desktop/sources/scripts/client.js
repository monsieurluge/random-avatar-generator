'use strict'

function Client() {
  this.install = function(host) {
    this.avatar = new Avatar()
    this.interface = new Interface()

    this.avatar.install(host)
    this.interface.install(host)
  }

  this.start = function() {
    this.avatar.draw()
    this.interface.start()
  }

  this.toolRequested = function(name) {
    // todo
    console.log('tool requested:', name)
  }
}
