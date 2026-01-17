// priority: 0
"use strict";

function registerTFCScrapingKnivesRecipes(event) {
	event.remove({ mod: 'tfcscraping', type: 'tfc:anvil' });
	event.remove({ mod: 'tfcscraping', type: 'tfc:heating' });
	event.remove({ mod: 'tfcscraping', type: 'tfc:casting' });
}