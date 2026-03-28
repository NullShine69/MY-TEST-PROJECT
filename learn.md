## Regular Expression

---

A <b> Regular Expression </b> is a sequence of characters that forms a <b> search pattern.</b>

Regex is a common shorthand for a regular expression.

JavaScript <b>RegExp</b> is an <b>Object</b> for handilg Regular Expressions.

RegExp are be used for.

- Text searching
- Text replacing
- Text validation

## Example Explained

---

(src: W3Schools)..

/w3schools/i is a regular expression

w3schools is a pattern (to be used in a search).

i is a modifier (modifies the search to be case-insensitive).

## Regular Expression Syntax

---

```
/pattern/modifier flags;
```

## String Methods

| Method  | Description                          |
| ------- | ------------------------------------ |
| search  | Returns the index of the first match |
| replace | Returns a new String                 |
| match   | Returns an Array of results          |

**Showed in [regx.js](regx.js#1)**

---

## JavaScript Regex Flags

```
/pattern/flags
```

Regular expression flags are parameters that can modify how a pattern is used, such as making it case-insensitive or global..

These are the most common:

| Flag | Description                         |
| ---- | ----------------------------------- |
| /g   | Performs a global match (find all)  |
| /i   | Performs case-insensitive matching  |
| /u   | Enables Unicode support (new 2015 ) |

<hr>

## The /g Flag (Global)

The **/g** flag matches all occurrences of the pattern, rather than just the first one.

Example in [regx.js](regx.js#13)

<hr>

## The /i Flag (Insensitive)

The /i flag makes a match case-insensitive. /abc/i matches "abc", "AbC", "ABC".

Example in [regx.js](regx.js#4)

<hr>

## RexExp Metacharacters

```js
//Match words
const pattern = /\w/;
```

**Metaharacters** are characters with a special meanig.

They can be used to match digits, words, spaces, and more.

These are the most common.

| Meta | Description    |
| ---- | -------------- |
| \d   | Matches Digits |
| \w   | Matches Words  |
| \s   | Matches Spaces |

<hr>

## RegExp \d (digits) Metacharacters

The \d metacharacter matches digits.

Its search for a single digits and console them one by one..

## Example

A global search for digits in a string:

```js
let text = 'Give 100%';
const pattern = /\d/g;

let result = text.match(pattern);
```

Also in [regx.js](regx.js#17)

<hr>

## RegExp \w (word) Metacharacter

The \w metacharacter matches words characters.

Its search for a single character and show the output separatly..

A word character is a character a-z, A-Z, 0-9, including \_(underscore).

## Example

A global search for word characters:

```js
let text = 'Give 100%';
const pattern = /\w/g;

let result = text.match(pattern);
```

Also in [regx.js](regx.js#21)

<hr>

## JavaScript RegExp Quantifiers

```js
// Match at least one zero
const pattern = /0+/;
```

**Quantifiers** define the numbers of characters or expression to match.

These are the most common:

| Code | Description                          |
| ---- | ------------------------------------ |
| x\*  | Matches zero or more ocurrences of x |
| x?   | Matches zero or one occurrences of x |
| x(n) | Matches n occurrences of x           |

---

## The ? Quantifier

**x?** matches zero or one occurrences of x

## Example

A global search for "1", followed by zero or one "0" characters:

```js
let text = '1, 100 or 1000?';
const pattern = /10?/g;

let result = text.match(pattern);
```

Also in [regx.js](regx.js#)




































































































































































































































































































































































































































































