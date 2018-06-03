// ==UserScript==
// @name        JSO-DOM example
// @namespace   JSO-DOM
// @description Add a section to the DuckDuckGo website.
// @include     https://duckduckgo.com/*
// @version     0.0.1
// @require     https://github.com/jfjlaros/jso-dom/raw/master/src/jso_dom.js
// @grant       none
// ==/UserScript==

function callback() {
  alert("Hi again.");
}

var element = document.getElementById("content_homepage"),
    tree = JSOToDOM({
      "div": [
        {"div": {
          "h3": {
              "attrs": {"id": "title_1"},
            "text": "A title"},
          "pre": {"text": "Verbatim text."},
          "ul": [
            {"li": {"text": "one"}},
            {"li": {"text": "two"}},
            {"li": {"text": "three"}}],
          "a": {
              "attrs": {"href": "https://github.com/jfjlaros/jso-dom"},
            "text": "some link"}}},
        {"div": {
          "h3": {
              "attrs": {"id": "title_2"},
            "text": "Another title"},
          "button": {
              "attrs": {"onclick": "alert("Hi there.");"},
            "text": "Click me"}}},
        {"div": {
          "h3": {
              "attrs": {"id": "title_3"},
            "text": "Yet another title"},
          "button": {
              "event": {"type": "click", "listener": callback},
            "text": "Click me too"}}}]});

element.appendChild(tree);
