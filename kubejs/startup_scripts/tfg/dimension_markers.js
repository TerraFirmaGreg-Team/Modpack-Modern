// priority: 0
"use strict";

/** @type {String[]} List of dimension marker names */
const markerDimensions = [
	'earth',
	'moon',
	'mars',
	'venus',
	'mercury',
	'glacio'
];

function registerTFGDimensionMarkerItems(event) {

	// Orbit Marker Items
	markerDimensions.forEach(dimension => {
		event.create(`tfg:marker/${dimension}_orbit`).tag('c:hidden_from_recipe_viewers');
	});
};

function registerTFGDimensionMarkerBlocks(event) {

	// Marker Blocks
	markerDimensions.forEach(dimension => {
		event.create(`tfg:marker/${dimension}`)
			.stoneSoundType()
			.item(item => {
				item.modelJson({ parent: `tfg:block/marker/${dimension}` })
			})
			.tagBlock('c:hidden_from_recipe_viewers')
			.fullBlock(false)
			.defaultCutout();
	});

	// TFG Logo Block
	event.create('tfg:marker/tfg')
		.stoneSoundType()
		.item(item => {
			item.modelJson({ parent: 'tfg:block/marker/tfg' })
		})
		.tagBlock('c:hidden_from_recipe_viewers')
		.fullBlock(false)
		.defaultCutout();
};

function registerTFGDimensionMarkers(event) {

	markerDimensions.forEach(dimension => {

		// Orbit Dimension
		event.create(`ad_astra:${dimension}_orbit`)
			.iconSupplier(() => Item.of(`tfg:marker/${dimension}_orbit`).getItem())
			.tier(1)
			.overrideName(`${dimension.replace(/^./, firstLetter => firstLetter.toUpperCase())} Orbit`);

		// Main Dimensions
		if (dimension === 'moon') {
			// Moon has a different override name.
			event.create('ad_astra:moon')
				.iconSupplier(() => Item.of('tfg:marker/moon').getItem())
				.tier(1)
				.overrideName('The Moon');
		} else {
			event.create(`ad_astra:${dimension}`)
				.iconSupplier(() => Item.of(`tfg:marker/${dimension}`).getItem())
				.tier(2)
				.overrideName(dimension.replace(/^./, firstLetter => firstLetter.toUpperCase()));
		};
	});

};