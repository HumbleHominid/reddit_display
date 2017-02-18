import Ember from 'ember';

export default Ember.Component.extend({
  // Contains the details of the post that is to be shown in the overlay
  // if no post should be shown, this is null
  postOverlayData: null,

  actions: {
    // Sets postOverlayData to null, closing the overlay
    closePostOverlay() {
      this.set('postOverlayData', null);
    },

    // Callback for when an element in the list has been selected
    // sender: the element that was selected
    // data: the post data that the element was passed
    elementSelected(sender, data) {
      this.set('postOverlayData', data);
    }
  }
});
