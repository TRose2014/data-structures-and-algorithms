'use strict';

let leftJoin = (htLeft, htRight) => {

  if( !htLeft.buckets || !htRight.buckets) throw new Error;


  let resultLeft = [];


  htLeft.buckets.forEach(element => {
    let content = [];
    content.push(element.values()[0][0]);

    content.push(element.values()[0][1]);
    
    //compares ht left keys to ht right keys
    content.push(htRight.get(element.values()[0][0]));


    resultLeft.push(content);
  });

  let resultRight = [];
  htRight.buckets.forEach(element => {
    let content = [];
    content.push(element.values()[0][0]);


    resultRight.push(content);
    
    console.log('in left result', resultLeft);
    console.log('in right result', resultRight);

  });

  return resultLeft;
};

module.exports = leftJoin;