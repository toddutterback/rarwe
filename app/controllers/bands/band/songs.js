import Ember from 'ember';

export default Ember.Controller.extend({
	songCreationStarted: false,

	noSongs: Ember.computed('model.songs.length', function() {
		return this.get('model.songs.length') === 0;
	}),

	canCreateSong: Ember.computed('songCreatedStarted', 'model.songs.length', function() {
		return this.get(;songCreationStarted) || this.get('model.songs.length');
	}),

	actions: {
		enableSongCreation: function() {
			this.set('songCreationStarted', true);
		},

		updateRating: function() {
			var song = params.item, 
				rating = params.rating;

			song.set('rating', rating);
		}
	},

	isAddButtonDisabled: Ember.computed('title', function() {
		return Ember.isEmpty(this.get('title'));
	})
});
