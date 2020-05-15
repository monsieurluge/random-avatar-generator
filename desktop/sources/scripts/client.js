'use strict'

function Client() {
  this.install = function(host) {
    this.avatar = new Avatar()

    this.avatar.install(host)
  }

  this.start = function() {
    this.avatar.draw()
  }
}
