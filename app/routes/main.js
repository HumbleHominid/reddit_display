import Ember from 'ember';

export default Ember.Route.extend({
  doDarkenContent: false,

  model() {
    return Ember.$.getJSON('https://www.reddit.com/r/pcmasterrace+rarepuppers+watches+me_irl/.json');
  },
  actions: {
    darkenContent() {
      this.set('doDarkenContent', !this.get('doDarkenContent'));
      console.log(this.get('doDarkenContent'));
    }
  }
});
