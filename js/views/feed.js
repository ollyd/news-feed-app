/*global define*/
define([
    'jquery',
    'underscore',
    'backbone',
    'collections/feeds',  
    'text!templates/feed.html',
], function ($, _, Backbone, Feeds, feedTemplate, Data) {
    'use strict';

    // This view renders a list of feed articles. The articles 
    // returned depends on the options that were specified in parent view.
    var FeedView = Backbone.View.extend({
        el:  '#feed-container',
        template: _.template(feedTemplate),

        render () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },
    });

    return FeedView;
});