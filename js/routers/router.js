/*global define*/
define([
	'jquery',
	'backbone',
	'collections/feeds',
	'views/app',
	'views/feed',
    '../../data/feeds.json',
], function ($, Backbone, Feeds, AppView, FeedView, Data) {
	'use strict';

	var FeedRouter = Backbone.Router.extend({
		routes: {
    		'articles':     'articles',
    		'articles/:id': 'getArticle',
			'*action':      'defaultRoute'
		},
	});

	// Init router and start Backbone.history()
	window.app_router = new FeedRouter();

	app_router.on('route:articles', function () {
		var view = new AppView({collection:Feeds});
	});

	app_router.on('route:getArticle', function (id) {
        var collection = Feeds;
        collection.add(Data);
        var model = collection.get(id);
		var view = new FeedView({model:model});
		view.render();
	});

	app_router.on('route:defaultRoute', function () {
	    Backbone.history.navigate('//articles', true);   
	});

	// Bookmarkable URLs
	Backbone.history.start();

	return FeedRouter;
});
