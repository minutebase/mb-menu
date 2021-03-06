import Ember from 'ember';

export default Ember.Controller.extend({
  items: ["One", "Two", "Three"],

  singleSelected: null,
  multiSelected: [],

  actions: {
    selectSingle: function(item) {
      this.set("singleSelected", item);
    },

    selectMulti: function(item) {
      this.get("multiSelected").pushObject(item);
    },

    deselectMulti: function(item) {
      this.get("multiSelected").removeObject(item);
    }
  }
});