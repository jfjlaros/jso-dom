Usage
=====

The function ``JSOToDOM()`` converts a nested JSO to a DOM recursively. Since
the output is a tree, the top level of the JSO can only contain one element.

Apart from the exceptions described below, for every key in the JSO an element
is created, the type of which is determined by name of the key. For example,
the following call will create a single ``div`` element:

.. code:: javascript

    var root = JSOToDOM({"div": {}});

And a ``div`` within a ``div`` is created as follows:

.. code:: javascript

    var root = JSOToDOM({"div": {"div": {}}});


Lists
-----

Since a JSO can not have multiple keys with the same name, we use lists to
create multiple objects of the same type.

.. code:: javascript

    var root = JSOToDOM({
      "div": [
        {"div": {}},
        {"div": {}}]});

Of course mixing of element types is not forbidden:

.. code:: javascript

    var root = JSOToDOM({
      "div": [
        {"div": {}},
        {"pre": {}}]});

But can be written a bit easier because all key names are unique:

.. code:: javascript

    var root = JSOToDOM({
      "div": {
        "div": {},
        "pre": {}}});


The ``attrs`` key
-----------------

The ``attrs`` key indicates that its value is a set of key-value pairs that is
to be applied to the parent element.

In the following example, we create a section with id ``section_1`` and we set
the background colour of this section to blue.

.. code:: javascript

    var root = JSOToDOM({
      "div": {
          "attrs": {"id": "section_1", "style": "background-color: blue;"}}});

Note that we double indent the ``attrs`` key to emphasise that this key is not
a subelement, but rather a set of parameters. This improved readability is
shown in the following example:

.. code:: javascript

    var root = JSOToDOM({
      "div": {
          "attrs": {"id": "section_1"},
        "div": {}}});


The ``text`` key
----------------

The ``text`` key indicates that instead of a normal element, a text node should
be created. The content of the text node is given by the value of the key.

.. code:: javascript

    var root = JSOToDOM({"text": "Just some text."});

This can be combined with the ``attrs`` key:

.. code:: javascript

    var root = JSOToDOM({
      "div": {
          "attrs": {"style": "background-color: blue;"},
        "text": "Am I blue yet?"}});


The ``event`` key
-----------------

Callbacks for interactive elements can be implemented in two ways: via the
``onclick`` or related attributes, or by adding an event listener.

Using attributes, simple pieces of JavaScript code can be executed:

.. code:: javascript

    var root = JSOToDOM({
      "button": {
          "attrs": {"onclick": "alert(\"Hi there.\");"},
        "text": "Click me"}});

To make a proper callback function in Greasemonkey user scripts, an event
listener s needed.

.. code:: javascript

    function callback() {
      alert("Hi again.");
    }

    var root = JSOToDOM({
      "button": {
          "event": {"type": "click", "listener": callback},
        "text": "Click me too"}});
