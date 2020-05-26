'use strict'

const createCanvas = function({ id, dimensions, host }) {
  const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d')

  canvas.id = 'avatar'
  canvas.height = dimensions.height
  canvas.width = dimensions.height
  canvas.style.height = `${dimensions.height}px`
  canvas.style.width = `${dimensions.height}px`

  host.appendChild(canvas)

  return { canvas, context }
}
