class Shapes {
    constructor() {
        this.color = '';
    }
    setColor(color) {
        this.color = color;
    }
}

class Circle extends Shapes {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }
}
//do the same thing for triangle and square, find the mesaurements/shape for other shapes online/doc
// look at jest documentation 


module.exports = {Circle, Triangle, Square}