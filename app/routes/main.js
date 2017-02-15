import Ember from 'ember';

export default Ember.Route.extend({
  model() {

    //this fetches data from the subreddits below and sets it as the model for main.

    return Ember.$.getJSON('https://www.reddit.com/r/pcmasterrace+rarepuppers+buildapc+watches+me_irl/.json');
  }
});
