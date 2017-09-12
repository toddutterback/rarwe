import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
    edit: function() {
      this.set('isEditing', true);
    },
    save: function() {
      this.set('isEditing', false);
    }
  }
});
