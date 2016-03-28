/*global define*/
define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/feeds.html',
], function ($, _, Backbone, feedsTemplate) {
	'use strict';

	// This view renders a list of feed articles. The articles 
	// returned depends on the options that were specified in parent view.
	var FeedsView = Backbone.View.extend({
		tagName:  'li',
		template: _.template(feedsTemplate),

		render () {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		},
	});

	return FeedsView;
});
