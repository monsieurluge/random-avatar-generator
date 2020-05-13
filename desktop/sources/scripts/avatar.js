'use strict'

function Avatar() {
  const blockout = () => Math.random() < 0.4

  this.baseColor = randomRgbColor()
  this.grain = 5
  this.seed = Date.now()

  this.draw = function(context) {
    const blockout = seededRandom(this.seed)
    const height = context.canvas.height
    const width = context.canvas.width
    const size = Math.min(height, width)
    const widthSteps = Math.ceil(this.grain / 2)
    const cellSize = size / this.grain
    const steps = this.grain * widthSteps
    const padding = (height > width)
      ? { top: (height - width) / 2, left: 0 }
      : { top: 0, left: (width - height) / 2 }

    context.clearRect(0, 0, width, height)

    let currentColor = this.baseColor

    for (let step = 0; step < steps; step++) {
      if (blockout() < 0.4) {
        continue
      }
      this.drawMirroredCells({
        context,
        padding,
        color: currentColor,
        x: step % widthSteps,
        y: Math.floor(step / widthSteps),
        cellSize,
        size
      })
      currentColor = nextRgbColor(currentColor)
    }
  }

  this.drawCell = function({ context, padding, color, x, y, cellSize }) {
    context.fillStyle = cssRgbColor(color)
    context.fillRect(x * cellSize + padding.left, y * cellSize + padding.top, cellSize, cellSize)
  }

  this.drawMirroredCells = function ({ context, padding, color, x, y, cellSize, size }) {
    this.drawCell({ context, padding, color, x, y, cellSize })
    this.drawCell({ context, padding, color, x: this.grain - x - 1, y, cellSize })
  }
}
