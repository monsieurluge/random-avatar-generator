'use strict'

function Avatar({ seed = Date.now() } = {}) {
  const random = seededRandom(seed)
  const blockout = () => random() < 0.4
  const size = 280

  const drawCell = function({ context, color, x, y, cellSize }) {
    context.fillStyle = cssRgbColor(color)
    context.fillRect(x * cellSize, y * cellSize, cellSize, cellSize)
  }

  this.draw = function() {
    const widthSteps = Math.ceil(this.grain / 2)
    const cellSize = size / this.grain
    const steps = this.grain * widthSteps

    this.context.clearRect(0, 0, size, size)

    let currentColor = this.baseColor

    for (let step = 0; step < steps; step++) {
      if (blockout()) {
        continue
      }
      drawCell({
        context: this.context,
        color: currentColor,
        x: step % widthSteps,
        y: Math.floor(step / widthSteps),
        cellSize
      })
      drawCell({
        context: this.context,
        color: currentColor,
        x: this.grain - step % widthSteps - 1,
        y: Math.floor(step / widthSteps),
        cellSize
      })
      currentColor = nextRgbColor(currentColor)
    }
  }

  this.install = function(host) {
    this.baseColor = randomRgbColor()
    this.grain = 5

    this.canvas = document.createElement('canvas')
    this.canvas.id = 'avatar'
    this.context = this.canvas.getContext('2d')

    this.canvas.height = size
    this.canvas.width = size
    this.canvas.style.height = `${size}px`
    this.canvas.style.width = `${size}px`

    host.appendChild(this.canvas)
  }
}
