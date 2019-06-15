'use strict';

function multiBracketValidation(input){
  if (typeof input !== 'string') return 'Not a valid data type';

  let array = input.split('');
  let compareArray = [];
  let curlArray = ['(',')','[',']','{','}'];
  let size = array.length;

  for(let i = 0; i < size; i++){
    let shift = array.shift();
    if(curlArray.includes(shift)){
      if(shift === '(' || shift === '[' || shift === '{'){
        compareArray.push(shift);
      }else{
        if(shift === ')' && compareArray.pop() !== '('){
          return false;
        }else if(shift === ']' && compareArray.pop() !== '['){
          return false;
        }else if(shift === '}' && compareArray.pop() !== '{'){
          return false;
        }
      }
    }
  }
  return array.length === 0;
}

module.exports = multiBracketValidation;