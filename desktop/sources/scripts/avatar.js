'use strict'

function Avatar({ context, grain = 5, listener, seed = Date.now(), size } = {}) {
  let grainOffset = 0
  let seedOffset = 0
  let cells = []

  const drawCell = cellSize => ({ color, x, y }) => {
    context.fillStyle = cssRgbColor(color)
    context.fillRect(x * cellSize, y * cellSize, cellSize, cellSize)
  }

  const generateCells = function() {
    const random = seededRandom(seed + seedOffset)
    const randomColor = randomRgbColor(random)
    const localBlockout = blockout(random)
    const widthSteps = Math.ceil((grain + grainOffset) / 2)
    const steps = (grain + grainOffset) * widthSteps

    let currentColor = randomColor()

    cells = []

    for (let step = 0; step < steps; step++) {
      if (localBlockout()) {
        continue
      }
      cells.push({
        color: currentColor,
        x: step % widthSteps,
        y: Math.floor(step / widthSteps)
      })
      cells.push({
        color: currentColor,
        x: (grain + grainOffset) - step % widthSteps - 1,
        y: Math.floor(step / widthSteps)
      })
      currentColor = nextRgbColor(currentColor)
    }
  }

  function draw() {
    context.clearRect(0, 0, size, size)
    cells.map(drawCell(size / (grain + grainOffset)))
  }

  /**
   * [changeGrain description]
   * @return {[type]} [description]
   */
  function changeGrain() {
    grainOffset += 1
    if (grainOffset > 2) {
      grainOffset = -2
    }
    generateCells()
    draw()
  }

  function install(host) {
    listener.register({ name: 'grain', callback: changeGrain })
  }

  function start() {
    generateCells()
    draw()
  }

  return Object.freeze({
    draw,
    install,
    start
  })
}
