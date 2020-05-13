'use strict'

const cssRgbColor = color => `rgb(${color.red}, ${color.green}, ${color.blue})`

const nextRgbColor = color => ({ red: color.red - 10, green: color.green + 10, blue: color.blue + 10 })

const randomRgbValue = randomValue(256)

const randomRgbColor = () => ({ red: randomRgbValue(), green: randomRgbValue(), blue: randomRgbValue() })
