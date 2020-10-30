import throttle from "lodash.throttle"
function Parallax(options) {
    options = options || {};
    this.nameSpaces = {
        wrapper: options.wrapper || '.parallax',
        layers: options.layers || '.parallax-layer',
        deep: options.deep || 'data-parallax-deep'
    };
    this.onMouseMove = (e, i) => {
        const self = this,
            parallaxWrappers = document.querySelectorAll(this.nameSpaces.wrapper);
        const layers = parallaxWrappers[i].querySelectorAll(self.nameSpaces.layers);
        for (var j = 0; j < layers.length; j++) {
            (function (j) {
                const $this = $(layers[j]);
                const relX = e.pageX - $this.offset().left;
                const relY = e.pageY - $this.offset().top;
                const deep = layers[j].getAttribute(self.nameSpaces.deep),
                    disallow = layers[j].getAttribute('data-parallax-disallow'),
                    x = (disallow && disallow === 'x') ? 0 : (relX - $this.width() / 2) / $this.width() * deep,
                    y = (disallow && disallow === 'y') ? 0 : (relY - $this.height() / 2) / $this.height() * deep;
                if (disallow && disallow === 'both') return;
                // layers[j].style.transform = 'translateX(' + x + 'px) translateY(' + y + 'px)';
                gsap.to(layers[j], {
                    x: x,
                    y: y,
                    duration: 1,
                })
            })(j);
        }
    }
    this.onMouseMove = throttle(this.onMouseMove.bind(this), 200)
    this.init = function () {
        const self = this
        const parallaxWrappers = document.querySelectorAll(this.nameSpaces.wrapper);
        for (var i = 0; i < parallaxWrappers.length; i++) {

            (function (i) {
                parallaxWrappers[i].addEventListener('mousemove', (e) => {
                    self.onMouseMove(e, i)
                })
            })(i);
        }
    };
    this.init();
    return this;
}


    new Parallax();

