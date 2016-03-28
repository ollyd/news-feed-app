var should = require('should');
var _ = require('underscore');

describe('articleTags function', function() {

	it('should return matching tags specified by the user', function() {

		var tags = ["Football", "Google"];
		var matches = [];

		var feedData = [{
					        "id":1,
					        "tags": ["Football", "Leicester"]
					    },
					    {
						    "id":2,
						    "tags": ["Google", "Amazon"]
						},
						{
						    "id":2,
						    "tags": ["Tesla", "Cars"]
						}];

		var collection = feedData;

	   tags.forEach(tag => {
			collection.forEach(article => {
				if (_.contains(article['tags'], tag)) { matches.push(article) };
			});	
		}, this);

		(matches).length.should.equal(2);
        (matches[0]['id']).should.equal(1);
        (matches[1]['id']).should.equal(2);

	});
});