'use strict'

function Avatar() {

  this.baseColor = randomRgbColor()

  this.draw = function(context) {
    const height = context.canvas.height
    const width = context.canvas.width
    const size = Math.min(height, width)
    const padding = (height > width)
      ? { top: (height - width) / 2, left: 0 }
      : { top: 0, left: (width - height) / 2 }
    context.clearRect(0, 0, width, height)
    context.fillStyle = cssRgbColor(this.baseColor)
    context.fillRect(0 + padding.left, 0 + padding.top, size, size)
  }
}
