'use strict'

function Grid({ canvas, size, theme }) {
    this.context = canvas.getContext('2d')
    this.height  = canvas.height
    this.size    = size
    this.theme   = theme
    this.width   = canvas.width
}

Grid.prototype.show = function() {
    this.clear()
    this.drawSpots()
}

Grid.prototype.clear = function() {
    clear(this.context)({
        width: this.width,
        height: this.height,
        color: this.theme.background
    })
}

Grid.prototype.drawSpots = function() {
    for (let j = 1; j < this.size; j++) {
        for (let i = 1; i < this.size; i++) {
            const position = {
                x: i * (this.width / this.size),
                y: j * (this.height / this.size)
            }

            drawSpot(this.context)({ position, color: this.theme.grid })
        }
    }
}
