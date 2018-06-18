Introduction
============

Suppose we want to add a section containing a title with an id, some verbatim
text and a list to a website, the following code would be required:

.. code:: javascript

    var root, temp, parent, child;

    root = document.createElement("div");
    parent = document.createElement("h3");
    parent.setAttribute("id", "title_1");
    child = document.createTextNode("A title");
    parent.appendChild(child);
    root.appendChild(parent);

    parent = document.createElement("pre");
    child = document.createTextNode("Verbatim text.");
    parent.appendChild(child);
    root.appendChild(parent);

    temp = document.createElement("ul");
    parent = document.createElement("li");
    child = document.createTextNode("one");
    parent.appendChild(child);
    temp.appendChild(parent);

    parent = document.createElement("li");
    child = document.createTextNode("two");
    parent.appendChild(child);
    temp.appendChild(parent);

    parent = document.createElement("li");
    child = document.createTextNode("three");
    parent.appendChild(child);
    temp.appendChild(parent);
    root.appendChild(temp);

Resulting in the following HTML tree:

.. code:: html

    <div>
      <h3 id="title_1">A title</h3>
      <pre>Verbatim text.</pre>
      <ul>
        <li>one</li>
        <li>two</li>
        <li>three</li>
      </ul>
    </div>

Some drawbacks of this manual creation are immediately apparent:

-  Quite some code is required to create a modestly sized HTML tree.
-  We need to keep track of quite a number of variables, this number grows as
   the depth of the tree increases.
-  The nested structure of HTML tree is not apparent which makes code
   maintenance difficult.

To address these problems, this library provides the function ``JSOToDOM()``
which takes a nested JSO as input and outputs a DOM. The following call to this
function creates the HTML tree from our example:

.. code:: javascript

    var root = JSOToDOM({
      "div": {
        "h3": {
            "attrs": {"id": "title_1"},
          "text": "A title"},
        "pre": {
          "text": "Verbatim text."},
        "ul": [
          {"li": {"text": "one"}},
          {"li": {"text": "two"}},
          {"li": {"text": "three"}}]}});

This code is a lot more compact than the original and arguably more readable
and therefore more maintainable.
