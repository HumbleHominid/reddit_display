import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['highlight:post-highlight:post'],

  highlight: false,

  mouseEnter() {
    this.set('highlight', !this.get('highlight'));
  },
  mouseLeave() {
    this.set('highlight', !this.get('highlight'));
  },
  click() {
    this.get('action');
  }
});
