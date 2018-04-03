/** - will these libs be available?

	var utils = require('../utils.js');
	var adloader = require('../adloader.js');
	var bidmanager = require('../bidmanager.js');
	var bidfactory = require('../bidfactory.js');

/** - prebid adapter: https://github.com/tiffwu/Prebid.js/blob/master/src/adapters/triplelift.js


var AufBid = window.AufBid || {};

AufBid.TripleLiftAdapter = (function() {
	// Private variables & methods
	var ENDPOINT = '---';

	return extend(AufBid.AufAdapter, {
		requestBids: function() {
			if (this.placements) {
				this.placements.forEach(function(placement) {
					var query = {
						inv_code	: placement.tag,
						callback  : getBidsFromResponse,
						referrer  : window.location.hostname,
						size   		: placement.size
						callbackID: placement.id
					};
					var src = ENDPOINT + '?' + this.manager.utils.getQueryString(query);
						this.manager.utils.loadScript(src);
				}, this);
			}
		},

		getBidsFromResponse: function(response) {
			var bid = response;
				if (!bid || bid.status=="no_bid") {
					this.log('No bid');
					return;
				}
				this.manager.addBid({
					placementId:bid.callback_id
					placementSize: bid.width + 'x' + bid.height,
					imageUrl: bid.iurl,
					cpm: bid.cpm
				},
				{
					creativeHTML: bid.ad
				})
		}
	});
})();
