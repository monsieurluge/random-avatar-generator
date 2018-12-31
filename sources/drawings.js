'use strict'

const clear = context => ({ width, height, color }) => {
    context.fillStyle = color
    context.fillRect(0, 0, width, height)
}

const drawLine = context => ({ start, end, color }) => {
    context.strokeStyle = color
    context.beginPath()
    context.moveTo(start.x, start.y)
    context.lineTo(end.x, end.y)
    context.stroke()
}
