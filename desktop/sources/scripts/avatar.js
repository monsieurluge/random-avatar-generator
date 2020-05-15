'use strict'

function Avatar({ seed = Date.now() } = {}) {
  const size = 280
  this.baseColor = randomRgbColor()
  this.grain = 5

  this.draw = function() {
    const blockout = seededRandom(seed)
    const widthSteps = Math.ceil(this.grain / 2)
    const cellSize = size / this.grain
    const steps = this.grain * widthSteps

    this.context.clearRect(0, 0, size, size)

    let currentColor = this.baseColor

    for (let step = 0; step < steps; step++) {
      if (blockout() < 0.4) {
        continue
      }
      this.drawMirroredCells({
        color: currentColor,
        x: step % widthSteps,
        y: Math.floor(step / widthSteps),
        cellSize
      })
      currentColor = nextRgbColor(currentColor)
    }
  }

  this.drawCell = function({ color, x, y, cellSize }) {
    this.context.fillStyle = cssRgbColor(color)
    this.context.fillRect(x * cellSize, y * cellSize, cellSize, cellSize)
  }

  this.drawMirroredCells = function ({ color, x, y, cellSize }) {
    this.drawCell({ color, x, y, cellSize })
    this.drawCell({ color, x: this.grain - x - 1, y, cellSize })
  }

  this.install = function(host) {
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
