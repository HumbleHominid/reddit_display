import Ember from 'ember';

export default Ember.Component.extend({
  // Component's class is post-overlay
  classNames: ['post-overlay'],

  actions: {
    // Action for when the close button is pressed
    onCloseButtonPress() {
      this.get('closeCallback')();
    },
  }
});
