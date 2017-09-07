import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		updateRating: function() {
			var song = params.item, 
				rating = params.rating;

			song.set('rating', rating);
		}
	}
});
