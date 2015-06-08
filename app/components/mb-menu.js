import Ember from 'ember';

var Wrapper = Ember.Object.extend({
  content: null,
  list:    null,

  isSelected: Ember.computed("list.selected.[]", "list.multiple", function() {
    if (this.get("list.multiple")) {
      return (this.get("list.selected") || []).contains(this.get("content"));
    } else {
      return this.get("list.selected") === this.get("content");
    }
  })
});

export default Ember.Component.extend({
  tagName: "ul",
  classNames: "menu",
  classNameBindings: "typeClass",

  typeClass: Ember.computed("multiple", function() {
    if (this.get("multiple")) {
      return "menu--multiple";
    } else {
      return "menu--single";
    }
  }),

  items:     null,
  selected:  null,
  clearText: "Clear",
  multiple:  false,
  object:   null, // optional object to send up in-case there are multiple of these on a page

  wrapped: Ember.computed("items.[]", function() {
    return this.get("items").map(item => {
      return Wrapper.create({
        content: item,
        list:    this
      });
    });
  }),

  actions: {
    select: function(wrapped) {
      var item = wrapped.get("content");
      if (wrapped.get("isSelected")) {
        this.sendAction("deselect", item, this.get("object"));
      } else {
        this.sendAction("select", item, this.get("object"));
      }
    },
    clear: function() {
      this.sendAction("clear", this.get("object"));
    }
  }
});