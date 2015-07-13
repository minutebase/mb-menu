import Ember from 'ember';

const Wrapper = Ember.Object.extend({
  content: null,
  list:    null,

  unwrappedContent: Ember.computed("content", "list.by", {
    get() {
      const content = this.get("content");
      const by      = this.get("list.by");

      if (!content || !by) {
        return content;
      }

      return content.get(by);
    }
  }),

  unwrappedSelected: Ember.computed("list.by", "list.selected.[]", {
    get() {
      const selected = this.get("list.selected");
      const by       = this.get("list.by");

      if (!selected || !by) {
        return selected;
      }

      if (Ember.isArray(selected)) {
        return Ember.A(selected).mapBy(by);
      } else {
        return selected.get(by);
      }
    }
  }),

  isSelected: Ember.computed("unwrappedSelected.[]", {
    get() {
      const selected = this.get("unwrappedSelected");
      const content  = this.get("unwrappedContent");

      if (Ember.isArray(selected)) {
        return selected.contains(content);
      } else {
        return selected === content;
      }
    }
  })
});

export default Ember.Component.extend({
  tagName:   "ul",
  items:     null,
  selected:  null,

  'item-class':      null,
  'selected-class': 'selected',

  // if you want to compare against a property instead of the whole object
  // useful if the object identities are different, so test against ID or something
  by: null,

  // optional object to send up in-case there are multiple of these on a page
  // TODO - deprecate this when new actions land as you can curry options
  object: null,

  // whether to bubble click events
  // TODO - deprecate this when new actions land as it will no longer be needed
  bubbles: true,

  wrapped: Ember.computed("items.[]", {
    get() {
      return Ember.A((this.get("items") || []).map(item => {
        return Wrapper.create({
          content: item,
          list:    this
        });
      }));
    }
  }),

  clicked: Ember.on("click", function(e) {
    // false can come in as a string from the component
    if (!this.get("bubbles") || this.get("bubbles") === "false") {
      e.preventDefault();
      e.stopImmediatePropagation();
    }
  }),

  actions: {
    select(wrapped) {
      const item   = wrapped.get("content");
      const object = this.get("object");

      if (wrapped.get("isSelected")) {
        this.sendAction("on-deselect", item, object);
      } else {
        this.sendAction("on-select", item, object);
      }
      this.sendAction("on-toggle", item, object);
    }
  }
});