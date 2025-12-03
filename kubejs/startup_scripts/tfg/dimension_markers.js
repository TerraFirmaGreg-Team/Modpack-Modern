// priority: 0
"use strict";


function registerTFGDimensionMarkerItems(event) {
	event.create('tfg:marker/earth_orbit').tag('c:hidden_from_recipe_viewers')
	event.create('tfg:marker/moon_orbit').tag('c:hidden_from_recipe_viewers')
	event.create('tfg:marker/mars_orbit').tag('c:hidden_from_recipe_viewers')
	event.create('tfg:marker/venus_orbit').tag('c:hidden_from_recipe_viewers')
	event.create('tfg:marker/mercury_orbit').tag('c:hidden_from_recipe_viewers')
	event.create('tfg:marker/glacio_orbit').tag('c:hidden_from_recipe_viewers')
}

function registerTFGDimensionMarkerBlocks(event) {
	
	event.create('tfg:marker/moon')
		.stoneSoundType()
		.item(item => {
			item.modelJson({ parent: 'tfg:block/marker/moon' })
		})
		.tagBlock('c:hidden_from_recipe_viewers')
		.fullBlock(true)
		.opaque(true)

	event.create('tfg:marker/mars')
		.stoneSoundType()
		.item(item => {
			item.modelJson({ parent: 'tfg:block/marker/mars' })
		})
		.tagBlock('c:hidden_from_recipe_viewers')
		.fullBlock(true)
		.opaque(true)

	event.create('tfg:marker/venus')
		.stoneSoundType()
		.item(item => {
			item.modelJson({ parent: 'tfg:block/marker/venus' })
		})
		.tagBlock('c:hidden_from_recipe_viewers')
		.fullBlock(true)
		.opaque(true)

	event.create('tfg:marker/mercury')
		.stoneSoundType()
		.item(item => {
			item.modelJson({ parent: 'tfg:block/marker/mercury' })
		})
		.tagBlock('c:hidden_from_recipe_viewers')
		.fullBlock(true)
		.opaque(true)

	event.create('tfg:marker/glacio')
		.stoneSoundType()
		.item(item => {
			item.modelJson({ parent: 'tfg:block/marker/glacio' })
		})
		.tagBlock('c:hidden_from_recipe_viewers')
		.fullBlock(true)
		.opaque(true)
}

function registerTFGDimensionMarkers(event) {

    event.create('ad_astra:earth_orbit')
        .iconSupplier(() => Item.of('tfg:marker/earth_orbit').getItem())
        .tier(1)
        .overrideName('Earth Orbit')

    event.create('ad_astra:moon')
        .iconSupplier(() => Item.of('tfg:marker/moon').getItem())
        .tier(1)
        .overrideName('The Moon')

    event.create('ad_astra:moon_orbit')
        .iconSupplier(() => Item.of('tfg:marker/moon_orbit').getItem())
        .tier(1)
        .overrideName('Moon Orbit')

    event.create('ad_astra:mars')
        .iconSupplier(() => Item.of('tfg:marker/mars').getItem())
        .tier(2)
        .overrideName('Mars')

    event.create('ad_astra:mars_orbit')
        .iconSupplier(() => Item.of('tfg:marker/mars_orbit').getItem())
        .tier(2)
        .overrideName('Mars Orbit')

    event.create('ad_astra:venus')
        .iconSupplier(() => Item.of('tfg:marker/venus').getItem())
        .tier(3)
        .overrideName('Venus')

    event.create('ad_astra:venus_orbit')
        .iconSupplier(() => Item.of('tfg:marker/venus_orbit').getItem())
        .tier(3)
        .overrideName('Martian Orbit')

    event.create('ad_astra:mercury')
        .iconSupplier(() => Item.of('tfg:marker/mercury').getItem())
        .tier(3)
        .overrideName('Mercury')

    event.create('ad_astra:mercury_orbit')
        .iconSupplier(() => Item.of('tfg:marker/mercury_orbit').getItem())
        .tier(3)
        .overrideName('Mercury Orbit')

    event.create('ad_astra:glacio')
        .iconSupplier(() => Item.of('tfg:marker/glacio').getItem())
        .tier(3)
        .overrideName('Europa')

    event.create('ad_astra:glacio_orbit')
        .iconSupplier(() => Item.of('tfg:marker/glacio_orbit').getItem())
        .tier(3)
        .overrideName('Europa Orbit')
}