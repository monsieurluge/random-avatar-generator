'use strict'

function Avatar() {
  this.draw = function(context) {
    const width = context.canvas.width
    const height = context.canvas.height
    const color = randomRgbColor()
    context.clearRect(0, 0, width, height)
    context.fillStyle = cssRgbColor(color)
    context.fillRect(4, 4, width - 8, height - 8)
  }
}
