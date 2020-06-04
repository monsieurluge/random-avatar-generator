'use strict'

function Dispatcher() {
  let listeners = []

  function emit(name) {
    listeners
      .filter(listener => listener.name === name)
      .map(listener => listener.callback())
  }

  function register({ name, callback }) {
    listeners.push({ name, callback })
  }

  return Object.freeze({
    emit,
    register
  })
}
