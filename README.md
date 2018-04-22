# Structure
This library is designed to make the creation of a part of a DOM tree easier.

A motivating example. Suppose we want to add a section containing a title with
an id, some verbatim text and a list. The following code would be required.

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

```javascript
var r, t, p, c;

r = document.createElement('div');
p = document.createElement('h3');
p.setAttribute('id', 'title_1');
c = document.createTextNode('A title');
p.appendChild(c);
r.appendChild(p);

p = document.createElement('pre');
c = document.createTextNode('Verbatim text.');
p.appendChild(c);
r.appendChild(p);

t = document.createElement('ul');
p = document.createElement('li');
c = document.createTextNode('one');
p.appendChild(c);
t.appendChild(p);

p = document.createElement('li');
c = document.createTextNode('two');
p.appendChild(c);
t.appendChild(p);

p = document.createElement('li');
c = document.createTextNode('three');
p.appendChild(c);
t.appendChild(p);
r.appendChild(t);
```

Drawbacks:

- We need to keep track of quite a number of variables.
- Since inherent nested structure of the created object is not apparent, it is
  difficult to see the hierarchical structure.
- We need quite a lot of code to make a simple structure.

```javascript
s = makeStructure({
  'div': {
    'h3': {'attrs': {'id': 'title_1'}, 'text': 'A title'},
    'pre': {'text': 'Verbatim text.'},
    'ul': [
      {'li': {'text': 'one'}},
      {'li': {'text': 'two'}},
      {'li': {'text': 'three'}}]}});
```
