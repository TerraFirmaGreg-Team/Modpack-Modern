// priority: 0
"use strict";

function registerTFCScrapingKnivesRecipes(event) {
	event.remove({ mod: 'tfcscraping', type: 'tfc:anvil' });
	event.remove({ mod: 'tfcscraping', type: 'tfc:heating', not: [
		{ id: "tfcscraping:heating/scraping_knife_blade_mold" }
	]});
	event.remove({ mod: 'tfcscraping', type: 'tfc:casting' });
}