// ==UserScript==
// @name        Structure
// @namespace   Structure
// @description Structure
// @include     https://duckduckgo.com/*
// @version     1
// @require     ../lib/structure.js
// @grant       none
// ==/UserScript==

function callback() {
  alert('hi again');
}

var element = document.getElementById('content_homepage'),
    structure = makeStructure({
      'div': [
        {'div': {
          'h3': {
            'attrs': {'id': 'title_1'},
            'text': 'A title'},
          'pre': {'text': 'Verbatim text.'},
          'ul': [
            {'li': {'text': 'one'}},
            {'li': {'text': 'two'}},
            {'li': {'text': 'three'}}],
          'a': {
            'attrs': {'href': 'https://fixedpoint.nl'},
            'text': 'some link'}}},
        {'div': {
          'h3': {
            'attrs': {'id': 'title_2'},
            'text': 'Another title'},
          'button': {
            'attrs': {'onclick': 'alert("hi");'},
            'text': 'Click me'}}},
        {'div': {
          'h3': {
            'attrs': {'id': 'title_3'},
            'text': 'Yet another title'},
          'button': {
            'event': {'type': 'click', 'listener': callback},
            'text': 'Click me too'}}}]});

element.appendChild(structure);
