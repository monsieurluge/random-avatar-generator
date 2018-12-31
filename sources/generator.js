'use strict'

function Generator() {
    // todo
}

Generator.prototype.install = function({ grid, theme }) {
    this.theme = theme

    this.grid = new Grid({
        canvas: document.getElementById(grid),
        size: 5,
        theme: theme.grid
    })
}

Generator.prototype.start = function() {
    this.grid.show()
}
