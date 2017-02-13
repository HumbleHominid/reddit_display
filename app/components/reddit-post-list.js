import Ember from 'ember';

export default Ember.Component.extend({

  doPostBlowUp: false,
  postBlowUpData: null,

  actions: {
    postBlowUp(data) {
      this.set('doPostBlowUp', !this.get('doPostBlowUp'));
      this.set('postBlowUpData', data);
    }
  }
});
