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

**Showed in [regx.js](regx.js#L1)**

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

Example in [regx.js](regx.js#L13-L14)

<hr>

## The /i Flag (Insensitive)

The /i flag makes a match case-insensitive. /abc/i matches "abc", "AbC", "ABC".

Example in [regx.js](regx.js#L4)

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

Also in [regx.js](regx.js#L17-L18)

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

Also in [regx.js](regx.js#L21-L23)

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

Also in [regx.js](regx.js#L25-L27)

<hr/>

## Regular Expression Assertions

```js
// Match beginning of string
const pattern = /^W3Schools/;

// Match end of string
const pattern = /W3Schools$/;
```

**Assertions** matches **Boundaries** and **Lookarounds**:

String Boundaries and Word Boundaries.

Lookarounds: Lookaheads and Lookbehinds.

These are the most common:

| Syntax   | Name            | Description                            |
| -------- | --------------- | -------------------------------------- |
| ^        | String Boundary | Matches the beginning of a string      |
| $        | String Boundary | Matches the end of string              |
| \b       | Word Boundary   | Matches the beginning or end of a word |
| (?=...)  | Lookahead       | Matches the subsequent string          |
| (?<=...) | Lookbehind      | Matches the previous string            |

<hr/>

## RegExp ^ Metacharacter

The ^ metacharacter matches the beginning of a string

## Example

Test if a string starts with W3Schools:

```js
const pattern = /^W3Schools/;
let text = 'W3Schools Tutorial';

let result = pattern.test(text); // true
```

returnig false..

```js
const pattern = /^W3Schools/;
let text = 'Hello W3Schools';

let result = pattern.test(text); // false
```

[regx.js](regx.js#L29-L32)

---

## RegExp $ Metacharacter

The $ mettacharacter matches the end of a string.

Test if a string ends with Coding:

```js
const pattern = /Coding$/;
let text = 'Vibe Coding';

let result = pattern.test(text); // true
```

returning false..

```js
const pattern = /Coding$/;
let text = 'Coding is fun..';

let result = pattern.test(text); // false
```

## [regx.js](regx.js#L38-L48)

## JavaScript RegExp Character Classes

```js
// Match Digits
const pattern = /[0-9];
```

**Character Classes** are characters enclosed in square brackets[].

A character class matches any character from a set within brackets.

These are the most common:

| Class | Description                                     |
| ----- | ----------------------------------------------- |
| [a]   | Matches the character between the brackets      |
| [abc] | Matches all characters between the brackets     |
| [a-z] | Matches all characters in the range from a to z |
| [0-9] | Matches all characters in the range from 0 to 9 |

## Example [0-9]

A global search for the characters "0" to "9" in a string:

```js
let text = 'More than 1000 times';
const pattern = /[0-9]/g;

let result = text.match(pattern);
```

[regx.js](regx.js#L)

---

### For more info about RegExp, Visit _<ins>[W3Schools](https://w3schools.com)</ins>_
