// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

const { Circle, Triangle, Square } = require('../shapes');

describe('Circle', () => {
    it('should render a circle SVG', () => {
        const circle = new Circle();
        const renderedSvg = circle.render();

        expect(renderedSvg).toContain('<circle');
        expect(renderedSvg).toContain('cx="');
        expect(renderedSvg).toContain('cy="');
        expect(renderedSvg).toContain('r="');
        expect(renderedSvg).toContain('fill="');
    });

    it('should apply the provided color', () => {
        const circle = new Circle();
        circle.setColor('#FF0000');
        const renderedSvg = circle.render();

        expect(renderedSvg).toContain('fill="#FF0000"');
    });

});

describe('Triangle', () => {
    it('should render a triangle SVG', () => {
        const triangle = new Triangle();
        const renderedSvg = triangle.render();

        expect(renderedSvg).toContain('<polygon');
        expect(renderedSvg).toContain('points="');
    });

    it('should apply the provided color', () => {
        const triangle = new Triangle();
        triangle.setColor('#00FF00');
        const renderedSvg = triangle.render();

        expect(renderedSvg).toContain('fill="#00FF00"');
    });

});

describe('Square', () => {
    it('should render a square SVG', () => {
        const square = new Square();
        const renderedSvg = square.render();

        expect(renderedSvg).toContain('<rect');
        expect(renderedSvg).toContain('x="');
        expect(renderedSvg).toContain('y="');
        expect(renderedSvg).toContain('width="');
        expect(renderedSvg).toContain('height="');
    });

    it('should apply the provided color', () => {
        const square = new Square();
        square.setColor('#0000FF');
        const renderedSvg = square.render();

        expect(renderedSvg).toContain('fill="#0000FF"');
    });

});
