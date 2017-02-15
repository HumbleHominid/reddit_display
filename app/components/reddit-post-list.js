import Ember from 'ember';

export default Ember.Component.extend({

  //Boolean for if the post should be blown up on the screen or not

  doPostBlowUp: false,

  //Contains the details of the post that is to be blown up on the screen
  // defaulted to null

  postBlowUpData: null,

  actions: {
    postBlowUp(data) {
      
      //Sets ######## to not ########
      
      this.set('doPostBlowUp', !this.get('doPostBlowUp'));
      
      //Sets ######## to what was passed into the action
      
      this.set('postBlowUpData', data);
    }
  }
});
