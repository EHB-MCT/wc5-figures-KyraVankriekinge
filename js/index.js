"use strict";
import Figure from './Figure.js';
import Circle from './Circle.js';
import Rectangle from './Rectangle.js';
//import Square from './Square.js';

const form = {
    changeSelect(e) {
        console.log(e);
        //let htmlString = '<label>' + e. + '<input id="' + YOUR INPUT ID + '" type="number"></label>'

    },
    init() {
        console.log('Form init!');
        document.getElementById('select').addEventListener('change', this.changeSelect);
        document.getElementById('form').addEventListener('submit', this.submitForm);
    },
    inputElementsWithLabel(label, id) {

    },
    submitForm(e) {

    }
};

form.init();