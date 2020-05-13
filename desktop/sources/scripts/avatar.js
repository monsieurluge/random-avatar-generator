'use strict'

function Avatar() {
  this.draw = function(context) {
    const width = context.canvas.width
    const height = context.canvas.height
    context.clearRect(0, 0, width, height)
    context.fillStyle = 'crimson'
    context.fillRect(4, 4, width - 8, height - 8)
  }
}
