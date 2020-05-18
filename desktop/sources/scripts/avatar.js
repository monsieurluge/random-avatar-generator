'use strict'

function Avatar({ listener, seed = Date.now() } = {}) {
  const size = 280

  const drawCell = function({ context, color, x, y, cellSize }) {
    context.fillStyle = cssRgbColor(color)
    context.fillRect(x * cellSize, y * cellSize, cellSize, cellSize)
  }

  this.draw = function() {
    const random = seededRandom(seed + this.seedOffset)
    const randomColor = randomRgbColor(random)
    const localBlockout = blockout(random)
    const widthSteps = Math.ceil(this.grain / 2)
    const cellSize = size / this.grain
    const steps = this.grain * widthSteps

    let currentColor = randomColor()

    this.context.clearRect(0, 0, size, size)

    for (let step = 0; step < steps; step++) {
      if (localBlockout()) {
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

  this.changeGrain = function(scope) {
    scope.grain += 1
    if (scope.grain > 7) {
      scope.grain = 3
    }
    scope.draw()
  }

  this.install = function(host) {
    this.grain = 5
    this.seedOffset = 0

    this.canvas = document.createElement('canvas')
    this.canvas.id = 'avatar'
    this.context = this.canvas.getContext('2d')

    this.canvas.height = size
    this.canvas.width = size
    this.canvas.style.height = `${size}px`
    this.canvas.style.width = `${size}px`

    host.appendChild(this.canvas)

    listener.register({ name: 'grain', callback: () => this.changeGrain(this) })
    listener.register({ name: 'next', callback: () => this.next(this) })
  }

  this.next = function (scope) {
    scope.seedOffset += 1
    scope.draw()
  }
}
