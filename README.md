# MB-Menu

Simple menu - [demo](http://minutebase.github.io/mb-menu).

## Installing

```
ember install ember-mb-menu
```

## Basic Usage

```handlebars
{{#mb-menu items=items selected=selected on-select="selected" as |item|}}
  {{item}}
{{/mb-menu}}
```

`selected` can either be a single item or an array for multiple-selection.

## Actions

* `on-select` - sent when item is selected
* `on-deselect` - sent when item is de-selected
* `on-toggle` - sent when item is selected or deselected

## Styling

* `class` - the class of the menu (standard Ember)
* `item-class` - the class for each item
* `selected-class` - the class to give to selected items

## Event Bubbling

If you want to prevent click events from bubbling, pass `bubbles=false` and they will be swallowed.

# Developing

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
