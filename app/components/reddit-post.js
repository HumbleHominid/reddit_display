import Ember from 'ember';

export default Ember.Component.extend({
  
  //Sets the class of the component to be post-highlight if doHighlight
  // is set to true, otherwise sets class to post
  
  classNameBindings: ['doHighlight:post-highlight:post'],

  //boolean for if the post should be highlighted or not
  
  doHighlight: false,

  //captures the event when the mouse enters the component
  
  mouseEnter() {
    
    //sets doHighlight to not doHighlight
    
    this.set('doHighlight', !this.get('doHighlight'));
  },
  
  //captures the event when the mouse leave the component
  
  mouseLeave() {
    
    //sets doHighlight to not doHighlight
    
    this.set('doHighlight', !this.get('doHighlight'));
  },
  
  //captures the event when a component is clicked on
  
  click() {
    
    //sends the default action on this component to its parent
    
    this.sendAction();
  }
});
