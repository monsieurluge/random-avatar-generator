'use strict'

const randomValue = max => () => Math.floor(Math.random() * max)

const randomRgbColor = randomValue(256)

const randomColor = () => ({ red: randomRgbColor(), green: randomRgbColor(), blue: randomRgbColor() })

