'use strict'

function Grid({ canvas, size, theme }) {
    this.context = canvas.getContext('2d')
    this.height  = canvas.height
    this.size    = size
    this.theme   = theme
    this.width   = canvas.width
}

Grid.prototype.draw = function() {
    this.clear()
    this.drawGrid()
}

Grid.prototype.clear = function() {
    clear(this.context)({
        width: this.width,
        height: this.height,
        color: this.theme.background
    })
}

Grid.prototype.drawGrid = function() {
    for (let i = 1; i < this.size; i++) {
        const current = i * (this.width / this.size)

        drawLine(this.context)({
            start: { x: current, y: 0 },
            end: { x: current, y: this.height },
            color: this.theme.grid
        })

        drawLine(this.context)({
            start: { x: 0, y: current },
            end: { x: this.width, y: current },
            color: this.theme.grid
        })
    }
}
