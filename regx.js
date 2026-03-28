var text = 'visit, w3school, learn, coding, enjoy, programming, 100, 45, 39';

// search text..
var s = text.search(/learn/i);

//replace text..
var r = text.replace(/learn/i, 'teach');

//match text & usage of RexExp OR..
var m = text.match(/learn|coding|visit/gi);

//usage of g(global search)
const g = /visit/g;
var global = text.match(g);

//RegExp \d
const d = /\d/g;
var digits = text.match(d);

//RegExp \w
const w = /\w/g;
var words = text.match(w);

//RegExp Quantifiers - The ? Quantifier
const q = /10?/g;
let quantifier = text.match(q);

console.log(
  'ans: ' + s,
  '\nr: ' + r,
  '\n' + 'm=' + m + '\nglobal = ' + global + '\ndigits: ',
  digits + '\nwords: ' + words,
  '\nquantifier: ' + quantifier
);
