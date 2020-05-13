'use strict'

const cssRgbColor = color => `rgb(${color.red}, ${color.green}, ${color.blue})`

const randomRgbValue = randomValue(256)

const randomRgbColor = () => ({ red: randomRgbValue(), green: randomRgbValue(), blue: randomRgbValue() })
