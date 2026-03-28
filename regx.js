let text = 'Visit, W3School, Learn, Coding, Enjoy, Programming, 100, 45, 39';

let pattern;

let result;

// search text..
var s = text.search(/Learn/i);

//replace text..
var r = text.replace(/Learn/i, 'Teach');

//match text & usage of RexExp OR..
var m = text.match(/Learn|Coding|Visit/gi);

//usage of g(global search)
const g = /Visit/g;
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

// Regular Expression Assertions - RegExp ^ Metacharacter
const a = /^Visit/.test(text); // return true..

const a2 = /^W3Schools/.test(text); //return false

//RegExp $ Metacharacter
pattern = /Coding$/;
text = 'Vibe Coding';

//result = pattern.test(text); // true

// it will return false
pattern = /Coding$/;
text = 'Coding is fun..';

var result2 = pattern.test(text);

//global search for 0 to 9 digits
text = 'Give your 100%';
pattern = /[0-9]/g;

result = text.match(pattern);
