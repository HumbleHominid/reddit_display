import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['doHighlight:post-highlight:post'],

  doHighlight: false,

  mouseEnter() {
    this.set('doHighlight', !this.get('doHighlight'));
  },
  mouseLeave() {
    this.set('doHighlight', !this.get('doHighlight'));
  },
  click() {
    this.sendAction();
  }
});
