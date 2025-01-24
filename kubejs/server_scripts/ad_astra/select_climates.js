TFCEvents.selectClimateModel(event => {

	if (event.level.dimensionKey.location() == 'ad_astra:moon') {

		event.setModel('tfg:moon_climate')
	}
})