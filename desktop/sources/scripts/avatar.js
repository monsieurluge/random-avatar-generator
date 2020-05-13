'use strict'

function Avatar() {
  this.draw = function(context) {
    const width = context.canvas.width
    const height = context.canvas.height
    const color = randomColor()
    context.clearRect(0, 0, width, height)
    context.fillStyle = `rgb(${color.red}, ${color.green}, ${color.blue})`
    context.fillRect(4, 4, width - 8, height - 8)
  }
}
