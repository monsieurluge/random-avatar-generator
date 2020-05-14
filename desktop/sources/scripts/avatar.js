'use strict'

function Avatar({ seed = Date.now() } = {}) {
  this.baseColor = randomRgbColor()
  this.grain = 5

  this.draw = function() {
    const blockout = seededRandom(seed)
    const size = 280
    const widthSteps = Math.ceil(this.grain / 2)
    const cellSize = size / this.grain
    const steps = this.grain * widthSteps

    this.context.clearRect(0, 0, 280, 280)

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

    this.canvas.height = 280
    this.canvas.width = 280
    this.canvas.style.height = '280px'
    this.canvas.style.width = '280px'

    host.appendChild(this.canvas)
  }
}
