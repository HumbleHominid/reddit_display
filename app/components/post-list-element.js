import Ember from 'ember';

export default Ember.Component.extend({
  // Sets the class of the component to be post-list-element when doHighlight is false,
  // and post-list-element when doHighlightis true
  classNameBindings: ['doHighlight:post-list-element-highlight:post-list-element'],

  // Boolean for whether the element should be highlighted or not
  doHighlight: false,

  // ** EVENT HANDLERS **
  // Mouse enters the component
  mouseEnter() {
    this.set('doHighlight', true);
  },
  // Mouse leaves the component
  mouseLeave() {
    this.set('doHighlight', false);
  },
  // Component is clicked on
  click() {
    this.get('selectCallback')(this, this.get('postData'));
  }
});
