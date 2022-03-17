"use strict";
import Figure from './Figure.js';
import Circle from './Circle.js';
import Rectangle from './Rectangle.js';
//import Square from './Square.js';
let htmlString = '';

const form = {
    changeSelect(e) {
        htmlString = '';
        let chosenFigure = document.getElementById("select").value;
        console.log(chosenFigure);
        if(chosenFigure == 'circle'){
            form.inputElementsWithLabel('Radius', 'radius');
        }else if(chosenFigure == 'rectangle'){
            form.inputElementsWithLabel('Width', 'width');
            form.inputElementsWithLabel('Height', 'height');
        }else if(chosenFigure == 'square'){
            form.inputElementsWithLabel('Size', 'size');
        }
    },
    init() {
        console.log('Form init!');
        document.getElementById('select').addEventListener('change', this.changeSelect);
        document.getElementById('form').addEventListener('submit', this.submitForm);
    },
    inputElementsWithLabel(label, id) {
        htmlString += '<label>' + label + '<input id="' + id + '" type="number"></label>';
        document.getElementById('otherInputs').innerHTML = htmlString;
    },
    submitForm(e) {

    }
};

form.init();