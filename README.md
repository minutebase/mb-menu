# MB-Menu

Simple menu

## Single Selection

```handlebars
<mb-menu items={{items}} select="selected" as |item|>
  {{item}}
</mb-menu>
```

## Multiple Selection

```handlebars
<mb-menu items={{items}} multiple="true" select="selected" deselected="deselected" as |item|>
{{item}}
</mb-menu>
```

## Clear Selection

```handlebars
<mb-menu items={{items}} multiple="true" select="selected" deselected="deselected" clear="clear" as |item|>
{{item}}
</mb-menu>
```

Pass `clearText` to specify the value of the clear button.

## Actions

* select - sent when item is selected
* deselect - sent when item is de-selected
* clear - sent when items are to be cleared

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
