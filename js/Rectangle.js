import Figure from './Figure.js';

export default class Rectangle extends Figure{
    constructor(width, height){
        super('rectangle');
        this._width = width
        this._height = height
    }
    get area(){
        return this._width * this._height
    }
    get circumference(){
        return this._width * 2 + this._height * 2
    }
    get htmlString(){
        let htmlString = '<div class="result"><div class="figure rectangle" style="width:'+ this._width + 'px; height: ' + this._height + 'px;"></div><div class="infoBox"><h3>${this.name}</h3><dl><dt>Height</dt><dd>'+ this._height + 'px</dd><dt>Width</dt><dd>'+ this._height + 'px</dd><dt>Area</dt><dd>' + this.area + 'px</dd><dt>Circumference</dt><dd>' + this.circumference + 'px</dd></dl></div></div>';
        return htmlString
    }
}

const rectangle1 = new Rectangle(6,4);
console.log(rectangle1.area);
console.log(rectangle1.htmlString);