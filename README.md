# JavaScript Object to DOM
This library aims to make the creation of (part of) a DOM tree easier. The main
use case is in [Greasemonkey](https://www.greasespot.net/) user scripts.


## Background
Suppose we want to add a section containing a title with an id, some verbatim
text and a list to a website. This requires the following code:

```javascript
var root, temp, parent, child;

root = document.createElement('div');
parent = document.createElement('h3');
parent.setAttribute('id', 'title_1');
child = document.createTextNode('A title');
parent.appendChild(child);
root.appendChild(parent);

parent = document.createElement('pre');
child = document.createTextNode('Verbatim text.');
parent.appendChild(child);
root.appendChild(parent);

temp = document.createElement('ul');
parent = document.createElement('li');
child = document.createTextNode('one');
parent.appendChild(child);
temp.appendChild(parent);

parent = document.createElement('li');
child = document.createTextNode('two');
parent.appendChild(child);
temp.appendChild(parent);

parent = document.createElement('li');
child = document.createTextNode('three');
parent.appendChild(child);
temp.appendChild(parent);
root.appendChild(temp);
```

Resulting in the following HTML tree:

```html
<div>
  <h3 id="title_1">A title</h3>
  <pre>Verbatim text.</pre>
  <ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
  </ul>
</div>
```

As we can see, quite some code is required to create the HTML tree. Other
drawbacks of this method are:

- The need to keep track of quite a number of variables.
- The nested structure of HTML tree is not apparent, making code maintenance
  difficult.

To address these problems, this library offers the `JSOToDOM` function which
takes a nested JavaScript Object as input and output a DOM. In our example, the
code required using this function is as follows:

```javascript
var root = JSOToDOM({
  'div': {
    'h3': {'attrs': {'id': 'title_1'}, 'text': 'A title'},
    'pre': {'text': 'Verbatim text.'},
    'ul': [
      {'li': {'text': 'one'}},
      {'li': {'text': 'two'}},
      {'li': {'text': 'three'}}]}});
```


## Installation
In a Greasemonkey user script, add the folowing line to the `UserScript`
header:

```javascript
// @require     https://github.com/jfjlaros/jso-dom/raw/master/src/jso_dom.js
```


## Usage
TODO.

### `attrs`
### `text`
### `event`
### Lists
