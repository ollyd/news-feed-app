/*global define*/
define([
	'jquery',
	'underscore',
	'backbone',
	'collections/feeds',
	'views/feed',
	'views/feeds',
	'../../data/feeds.json',
], function ($, _, Backbone, Feeds, FeedView, FeedsView, Data) {
	'use strict';

	var AppView = Backbone.View.extend({
		// Append this view to the container element
		el: '#feed-container',

		// Delegate events
		events: {
			'click .article-list a':	'showArticle',
		},

		// **** NEWS FEED OPTIONS **** // 
		category: 'Sport', // Accepts a string e.g. "Tech" or "Sport". An empty string returns all articles.
		tags: ['Apple', 'ASX', 'Google'], // Accepts an array of strings e.g. ["Apple", "Google"]. An empty array returns all articles.
		maxItems: Infinity, // Add an integer or Infinity for all items.
		sortBy: 'newest', // Either "newest" or "oldest".
		// *************************** //

		objs: [], // Where we'll store articles to update our collection
		remainingObjs: [], // Where we'll store remaining articles to prevent multiple collection iterations

		initialize () {
			this.collection = Feeds;
			this.collection.add(Data);
			this.listenTo(this.collection, 'reset', this.render); // Render the view when the collection gets reset
			this.$feedContainer = $('#feed-container');
			this.articleCategory();
		},

		articleCategory () {
			if (this.category) { // Filter by category if one was specfied
				this.collection.models.forEach(article => {
					_.find(article, function(obj) {
						if (obj['category']) {
							// Update the objs array if category matches, otherwise add to remainingObjs array.
					    	obj['category'] == this.category ? this.objs.push(obj) : this.remainingObjs.push(obj);
						}
					}, this);
				});
			} else {
				this.objs = Data; // If no category is specified, add all articles to our objs array
			}
			this.articleTags();
		},

		articleTags () {
			if (this.tags.length) {
				var arr = [];
				this.remainingObjs.length ? arr = this.remainingObjs : arr = this.objs;
				if (this.cateory == '') { this.objs = []; } // If no category was specified we want to reset the objs array
				this.tags.forEach(tag => {
					arr.forEach(article => {
						if (_.contains(article['tags'], tag)) { this.objs.push(article); }
					});	
				}, this);
			}
			this.sortArticles();
		},
		
		sortArticles () {
			// sortBy will return the oldest articles first.
			this.objs = _.sortBy(this.objs, function(obj) {
							return obj.published; 
						}, this);
			// Just reverse the objs array to filter articles by the latest.
			if (this.sortBy == 'newest') { 
				this.objs = this.objs.reverse(); 
			}
			this.articleLimit();
		},

		articleLimit () {
			// If the specified max number of articles is less than the number of articles in the 
			// objs array then let's remove those which aren't needed... 
			var count = this.objs.length
			if(this.maxItems < count) {
				var surplus = count - this.maxItems;
				this.objs.splice(-surplus);
			}
			// Update the collection
			this.collection.reset(this.objs);
		},

		render () {
			// Store the articles in a document fragment before appending in order 
			// to avoid multiple DOM reflows.
			var fragment = document.createDocumentFragment();
			// Iterate over the collection to get each article
			this.collection.models.forEach(article => {
				var view = new FeedsView({ model: article });
				fragment.appendChild(view.render().el);
			}, this);
			// Append the fragment
			this.$feedContainer.empty().append('<ul></ul>');
			$('#feed-container ul').append(fragment);

			return this;
		},

		showArticle (e) {
			e.preventDefault();
			var id = $(e.currentTarget).data('id');
			window.app_router.navigate('//articles/'+ id, true);
			return this;
		},
	});

	return AppView;
});
