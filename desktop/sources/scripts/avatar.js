'use strict'

function Avatar({ context, grain = 5, listener, seed = Date.now(), size } = {}) {
  let grainOffset = 0
  let seedOffset = 0

  const drawCell = function({ color, x, y, cellSize }) {
    context.fillStyle = cssRgbColor(color)
    context.fillRect(x * cellSize, y * cellSize, cellSize, cellSize)
  }

  function draw() {
    const random = seededRandom(seed + seedOffset)
    const randomColor = randomRgbColor(random)
    const localBlockout = blockout(random)
    const widthSteps = Math.ceil((grain + grainOffset) / 2)
    const cellSize = size / (grain + grainOffset)
    const steps = (grain + grainOffset) * widthSteps

    let currentColor = randomColor()

    context.clearRect(0, 0, size, size)

    for (let step = 0; step < steps; step++) {
      if (localBlockout()) {
        continue
      }
      drawCell({
        color: currentColor,
        x: step % widthSteps,
        y: Math.floor(step / widthSteps),
        cellSize
      })
      drawCell({
        color: currentColor,
        x: (grain + grainOffset) - step % widthSteps - 1,
        y: Math.floor(step / widthSteps),
        cellSize
      })
      currentColor = nextRgbColor(currentColor)
    }
  }

  function changeGrain() {
    grainOffset += 1
    if (grainOffset > 2) {
      grainOffset = -2
    }
    draw()
  }

  function install(host) {
    listener.register({ name: 'grain', callback: () => changeGrain() })
    listener.register({ name: 'next', callback: () => next() })
  }

  function next() {
    seedOffset += 1
    draw()
  }

  return Object.freeze({
    draw,
    install
  })
}
