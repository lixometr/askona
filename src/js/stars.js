function random(min, max) {
    return Math.random() * (max - min) + min;
}
class Star {
    constructor({ color, xPos, yPos } = {}) {
        this.defaults = {
            color: 'rgba(255, 255, 255, 1)',
            minRadius: 0.5,
            maxRadius: 1.4,
            minSpeed: .1,
            maxSpeed: .5,
            speed: 2
        }
        this.minRadius = this.defaults.minRadius
        this.maxRadius = this.defaults.maxRadius;
        this.minSpeed = this.defaults.minSpeed
        this.maxSpeed = this.defaults.maxSpeed;
        this.speed = this.defaults.speed

        this.radius = this.radius || random(this.minRadius, this.maxRadius)
        this.xPos = xPos
        this.yPos = yPos
        this.xVelocity = random(this.minSpeed, this.maxSpeed)
        this.yVelocity = random(this.minSpeed, this.maxSpeed)
        this.color = color || this.defaults.color


    }
    init() {

    }
    getVelocity() {
        return {
            x: this.xVelocity * this.speed,
            y: this.yVelocity * this.speed
        }
    }
    setSpeed(speed) {
        this.speed = speed
    }
}

class Stars {
    constructor() {
        this.numStars = 400;
        this.stars = []
        this.canvas = document.getElementById('stars');
        this.ctx = this.canvas.getContext('2d');
        // this.ctx.filter = 'blur(300px) '
        // this.canvas.style.filter = 'blur(10px)'

        this.direction = 'horizontal'
        this.requestAnimationFrame = window.requestAnimationFrame
    }
    setSpeed(speed) {
        this.stars.forEach(star => star.setSpeed(speed))

    }
    setDirection(direction) {
        this.direction = direction
    }
    speedUp() {

    }
    updateStarsY(y) {
        this.stars.forEach(star => {
            star.yPos += y
            if (star.yPos < 0) {
                star.yPos += this.canvas.height + star.radius;
                star.xPos = random(0, this.canvas.width);

            } else if (star.yPos > this.canvas.height) {
                star.yPos -= this.canvas.height + star.radius;
                star.xPos = random(0, this.canvas.width);
            }
        })

    }
    destroy() {
        this.isDestroyed = true
    }
    //Initalize
    init() {
        this.isDestroyed = false

        this.setCanvasSize()

        this.createCircle();
        this.render();
    }
    setCanvasSize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }



    //Create shape
    createCircle() {
        var star = [];

        for (var i = 0; i < this.numStars; i++) {
            var self = this;
            star[i] = new Star({
                xPos: random(0, this.canvas.width),
                yPos: random(0, this.canvas.height),
                color: `rgba(0, ${random(130, 160)}, ${random(200, 255)},${random(.7, 1)})`
            })

            //once values are determined, draw star on canvas
            // self.draw(star, i);
        }
        this.stars = star

    }

    // Draw the stars on canvas
    draw(i) {
        var self = this,
            ctx = self.ctx;
        ctx.fillStyle = this.stars[i].color;


        // ctx.font = '28pt Calibri';
        // ctx.fillStyle = 'white';

        ctx.beginPath();
        // ctx.lineWidth = 5;
        // ctx.shadowColor = 'white';
        // ctx.strokeStyle = "rgba(255,255, 255,0.1)";
        // ctx.shadowBlur = this.stars[i].radius;
        // ctx.shadowOffsetX = 0;
        // ctx.shadowOffsetY = 0;
        ctx.arc(this.stars[i].xPos, this.stars[i].yPos, this.stars[i].radius, 0, 2 * Math.PI, false);
        // ctx.stroke();
    }


    render() {
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                if (this.isDestroyed) return
                //clears canvas
                this.clearCanvas();
                //redraws stars
                for (var i = 0; i < this.numStars; i++) {
                    if (this.direction === 'horizontal') {
                        this.stars[i].xPos -= this.stars[i].getVelocity().x;

                    } else {
                        this.stars[i].yPos -= this.stars[i].getVelocity().y;
                    }
                    //if star goes off screen from the left call reset method
                    if (this.stars[i].xPos < 0 || this.stars[i].xPos > this.canvas.width) {
                        this.resetStar(i);
                    }
                    else if (this.stars[i].yPos < 0 || this.stars[i].yPos > this.canvas.height) {
                        this.resetStar(i);
                    }
                    else {
                        this.draw(i);
                        console.log('draw')
                        this.ctx.fill();

                    }
                }
                this.render()
            })
        })
    }

    // reset the star xPos with a randon YPos 
    resetStar(i) {
        var self = this;
        if (this.direction === 'horizontal') {
            if (this.stars[i].xPos < 0) {
                this.stars[i].xPos += this.canvas.width + this.stars[i].radius;
            } else {
                this.stars[i].xPos -= this.canvas.width + this.stars[i].radius;
            }
            this.stars[i].yPos = random(0, this.canvas.height);
        } else {
            if (this.stars[i].yPos < 0) {
                this.stars[i].yPos += this.canvas.height + this.stars[i].radius;

            } else {
                this.stars[i].yPos -= this.canvas.height + this.stars[i].radius;
            }
            this.stars[i].xPos = random(0, this.canvas.width);
        }

        self.draw(i);

    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

const stars = new Stars()
stars.init()
export default stars