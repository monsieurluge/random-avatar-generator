'use strict'

const cssRgbColor = color => `rgb(${color.red}, ${color.green}, ${color.blue})`

const nextRgbColor = color => ({ red: color.red - 5, green: color.green + 5, blue: color.blue + 5 })

const randomRgbValue = randomValue(256)

const randomRgbColor = () => ({ red: randomRgbValue(), green: randomRgbValue(), blue: randomRgbValue() })
