'use strict'

function Client() {
  let tools = []
  let avatar = undefined
  let avatarCanvas = undefined
  let gui = undefined

  function install(host) {
    avatarCanvas = createCanvas({ id: 'avatar', dimensions: { height: 280, width: 280 }, host })
    avatar = Avatar({ context: avatarCanvas.context, listener: this, grain: 5, seed: 42, size: 280 })
    gui = Interface()

    avatar.install(host)
    gui.install(host)
  }

  function register({ name, callback }) {
    tools.push({ name, callback })
  }

  function start() {
    avatar.start()
    gui.start()
  }

  function toolRequested(name) {
    tools
      .filter(tool => tool.name === name)
      .map(tool => tool.callback())
  }

  return Object.freeze({ install, register, start, toolRequested })
}
