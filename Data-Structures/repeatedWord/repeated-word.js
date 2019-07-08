'use strict';

const Hashtable = require('./hashtable/hashtable').HashTable;

const _split = (string) =>{
  let regex = /\b(\w+)\b/g;
  return string.match(regex);
};

const repeatedWord = (string) => {
  if(typeof string !== 'string') throw new Error();
  let hashtable = new Hashtable();
  let arrayWords = _split(string);
  for(let i = 0; i < arrayWords.length; i++){

    let key = arrayWords[i];
    if(hashtable.contains(arrayWords[i])){
      return arrayWords[i];
    }
    hashtable.add(key, arrayWords[i]);
  }

  return 'No words found';

};

module.exports = {repeatedWord, _split};

const test = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only';

console.log(repeatedWord(test));
