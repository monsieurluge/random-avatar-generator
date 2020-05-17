'use strict'

function Client() {
  this.install = function(host) {
    this.tools = []

    this.avatar = new Avatar({ listener: this })
    this.interface = new Interface()

    this.avatar.install(host)
    this.interface.install(host)
  }

  this.register = function({ name, callback }) {
    this.tools.push({ name, callback })
  }

  this.start = function() {
    this.avatar.draw()
    this.interface.start()
  }

  this.toolRequested = function(name) {
    this.tools
      .filter(tool => tool.name === name)
      .map(tool => tool.callback())
  }
}
