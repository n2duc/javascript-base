const tabs = document.querySelectorAll('.tab-item')
const panes = document.querySelectorAll('.tab-pane')

const line = document.querySelector('.tabs .line')

tabs.forEach((tab, index) => {
    const pane = panes[index]

    tab.onclick = function() {
        document.querySelector('.tab-item.active').classList.remove('active')
        document.querySelector('.tab-pane.active').classList.remove('active')

        line.style.left = this.offsetLeft + 'px'
        line.style.width = this.offsetWidth + 'px'

        this.classList.add('active')
        pane.classList.add('active')
    }
})