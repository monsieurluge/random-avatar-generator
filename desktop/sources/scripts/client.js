'use strict'

function Client({ host, dispatcher }) {
  let avatar = undefined
  let avatarCanvas = undefined
  let gui = undefined

  function install() {
    avatarCanvas = createCanvas({ id: 'avatar', dimensions: { height: 280, width: 280 }, host })
    avatar = Avatar({ context: avatarCanvas.context, listener: dispatcher, grain: 5, seed: Date.now(), size: 280 })
    gui = Interface()

    dispatcher.register({ name: 'next', callback: nextAvatar })

    avatar.install(host)
    gui.install(host)
  }

  function nextAvatar() {
    avatar = Avatar({ context: avatarCanvas.context, listener: dispatcher, grain: 5, seed: Date.now(), size: 280 })
    avatar.install(host)
    avatar.start()
  }

  function start() {
    avatar.start()
    gui.start()
  }

  return Object.freeze({ install, start })
}
