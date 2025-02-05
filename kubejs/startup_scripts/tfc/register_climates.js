TFCEvents.registerClimateModel(event => {
	
	event.registerClimateModel('tfg:orbit_climate', model => {

		model.setCurrentTemperatureCalculation((level, pos, calendarTicks, daysInMonth) => {
			return 5
		})
		model.setAverageTemperatureCalculation((level, pos) => {
			return -270
		})
		model.setAverageRainfallCalculation((level, pos) => {
			return 0
		})
		model.setAirFog((level, pos, calendarTicks) => {
			return 0
		})
		model.setWaterFog((level, pos, calendarTicks) => {
			return 0.25
		})
		model.setWindVector((block, calendarTicks) => {
			return event.newVec2(0, 0)
		})
	})

	event.registerClimateModel('tfg:moon_climate', model => {

		// Technically it can be between -183 to 106C, but I think it's safe to assume the player
		// will be inside a nice comfy space suit the whole time

		model.setCurrentTemperatureCalculation((level, pos, calendarTicks, daysInMonth) => {
			// This will be fighting between TFC, which wants to melt everything when the average
			// temp is above 0, and Ad Astra, which wants to freeze everything that isn't in an
			// oxygenated bubble.
			// Is there a way to disable TFC's system here?
			return 5
		})
		model.setAverageTemperatureCalculation((level, pos) => {
			// Average for the whole moon
			return -38.5
		})
		model.setAverageRainfallCalculation((level, pos) => {
			return 0
		})
		model.setAirFog((level, pos, calendarTicks) => {
			return 0
		})
		model.setWaterFog((level, pos, calendarTicks) => {
			return 0.25
		})
		model.setWindVector((block, calendarTicks) => {
			return event.newVec2(0, 0)
		})
	})

	event.registerClimateModel('tfg:mars_climate', model => {

		// TODO

		model.setCurrentTemperatureCalculation((level, pos, calendarTicks, daysInMonth) => {
			// TODO: Have this detect biome and keep it below zero if we're in one of the snowy ones
			return 5
		})
		model.setAverageTemperatureCalculation((level, pos) => {
			return -66.5
		})
		model.setAverageRainfallCalculation((level, pos) => {
			return 0
		})
		model.setAirFog((level, pos, calendarTicks) => {
			return 0
		})
		model.setWaterFog((level, pos, calendarTicks) => {
			return 0.25
		})
		model.setWindVector((block, calendarTicks) => {
			return event.newVec2(0.5, 0.5)
		})
	})
})
