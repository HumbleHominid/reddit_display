import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.$.getJSON('https://www.reddit.com/r/pcmasterrace+rarepuppers+buildapc+watches+me_irl/.json');
  }
});
