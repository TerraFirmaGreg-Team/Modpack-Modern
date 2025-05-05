// priority: 0

function registerAdAstraDimensionMarkers(event) {

	event.create('ad_astra:earth_orbit')
        .iconSupplier(() => Item.of('ad_astra:earth_globe').getItem())
        .tier(1)
        .overrideName('Earth Orbit')

    event.create('ad_astra:moon')
        .iconSupplier(() => Item.of('ad_astra:moon_globe').getItem())
        .tier(1)
        .overrideName('The Moon')

    event.create('ad_astra:mars')
        .iconSupplier(() => Item.of('ad_astra:mars_globe').getItem())
        .tier(2)
        .overrideName('Mars')

    event.create('ad_astra:venus')
        .iconSupplier(() => Item.of('ad_astra:venus_globe').getItem())
        .tier(3)
        .overrideName('Venus')

    event.create('ad_astra:mercury')
        .iconSupplier(() => Item.of('ad_astra:mercury_globe').getItem())
        .tier(3)
        .overrideName('Mercury')
}