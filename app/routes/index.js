import Ember from 'ember';

export default Ember.Route.extend({
    beforeModel() {

        //This will replace the default route with the main route.
        this.replaceWith('main');
    }
});
