// priority: 0

function registerTFGDimensionMarkers(event) {

    // TODO
	event.create('ad_astra:earth_orbit')
        .iconSupplier(() => Item.of('ad_astra:earth_globe').getItem())
        .tier(1)
        .overrideName('Earth Orbit')

    event.create('ad_astra:moon')
        .iconSupplier(() => Item.of('tfg:marker/moon').getItem())
        .tier(1)
        .overrideName('The Moon')

    event.create('ad_astra:mars')
        .iconSupplier(() => Item.of('tfg:marker/mars').getItem())
        .tier(2)
        .overrideName('Mars')

    event.create('ad_astra:venus')
        .iconSupplier(() => Item.of('tfg:marker/venus').getItem())
        .tier(3)
        .overrideName('Venus')

    event.create('ad_astra:mercury')
        .iconSupplier(() => Item.of('tfg:marker/mercury').getItem())
        .tier(3)
        .overrideName('Mercury')
}