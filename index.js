const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const gravity = 0.5
class Player {
    constructor() {
        this.position = {
            x: 100,
            y: 100
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.width = 30
        this.height = 30
    }

    draw() {
        c.fillStyle = 'gold'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
        
    }

    update() {
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        if(this.position.y + this.height + this.velocity.y <= canvas.height)
            this.velocity.y += gravity
        else this.velocity.y = 0
    }
}

const player = new Player()

function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)
    
player.update()
}

animate()

addEventListener('keydown', ({ keyCode }) => {
    switch (keyCode) {
        case 38:
            console.log('up')
            player.velocity.y -= 15           
            break
        case 40:
            console.log('down')
            player.velocity.y += 10
            break
        case 37:
            console.log('left')
            player.velocity.x -= 5
            break
        case 39:
            console.log('right')
            player.velocity.x += 5
            break
    }
})
addEventListener('keyup', ({ keyCode }) => {
    switch (keyCode) {
        case 38:
            console.log('up')
            player.velocity.y = 0           
            break
        case 40:
            console.log('down')
            player.velocity.y = 0
            break
        case 37:
            console.log('left')
            player.velocity.x = 0
            break
        case 39:
            console.log('right')
            player.velocity.x = 0
            break
    }
})
