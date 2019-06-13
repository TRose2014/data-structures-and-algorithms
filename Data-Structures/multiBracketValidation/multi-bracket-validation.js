'use strict';

const stack = require('./stack');
const newStack = stack;
const openingBracket = '[{(';
const closingBracket = ']})';


multiBracketValidation(input) {
  for(let i = 0; i < input.length; i++){
    let char = input[i];
    if(openingBracket === char){
      newStack.push(char);
    }
    if(closingBracket )
  }

}


module.exports = multiBracketValidation(input);