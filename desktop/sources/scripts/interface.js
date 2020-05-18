'use strict'

function Interface() {
  this.install = function (host) {
    this.tools = document.createElement('div')
    this.tools.id = 'tools-bar'

    host.appendChild(this.tools)
  }

  this.start = function () {
    const tools = [
      { name: 'next', icon: 'M80 80 L220 150 L80 220 V80' },
      { name: 'grain', icon: 'M60 120 H240 M60 180 H240 M120 60 V240 M180 60 V240' },
    ]

    let htmlContent = '<div class="tools">'

    tools.forEach(tool => {
      htmlContent += `
      <svg
        title="${name}"
        viewbox="0 0 300 300"
        class="icon"
        onmouseup="client.toolRequested('${tool.name}')">
        <path class="icon_path" d="${tool.icon}"/>
      </svg>`
    })

    htmlContent += '</div>'

    this.tools.innerHTML = htmlContent
  }
}
