import Figure from './Figure.js';

export default class Circle extends Figure{
    constructor(radius){
        super('circle');
        this._radius = radius
    }
    get diameter(){
        return this._radius * 2
    }
    get area(){
        return Math.PI * this._radius * this._radius
    }
    get circumference(){
        return Math.pi * 2 * this._radius
    }
    get htmlString(){
        let htmlString = '<div class="result"><div class="figure circle" style="width:' + this.diameter + 'px; height: ' + this.diameter + 'px;"></div><div class="infoBox"><h3>Circle</h3><dl><dt>Radius</dt><dd>' + this._radius + 'px</dd><dt>Diameter</dt><dd>' + this.diameter + 'px</dd><dt>Area</dt><dd>' + this.area + 'px</dd><dt>Circumference</dt><dd>' + this.diameter + 'px</dd></dl></div></div>';
        console.log(htmlString);
        return htmlString;
    }
}

const circle1 = new Circle(5);
console.log(circle1.htmlString);