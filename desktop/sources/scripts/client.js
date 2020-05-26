'use strict'

function Client() {
  this.install = function(host) {
    this.tools = []

    this.avatarCanvas = createCanvas({ id: 'avatar', dimensions: { height: 280, width: 280 }, host })
    this.avatar = Avatar({ context: this.avatarCanvas.context, listener: this, grain: 5, seed: 42, size: 280 })
    this.interface = new Interface()

    this.avatar.install(host)
    this.interface.install(host)
  }

  this.register = function({ name, callback }) {
    this.tools.push({ name, callback })
  }

  this.start = function() {
    this.avatar.draw(this.avatarCanvas)
    this.interface.start()
  }

  this.toolRequested = function(name) {
    this.tools
      .filter(tool => tool.name === name)
      .map(tool => tool.callback())
  }
}
