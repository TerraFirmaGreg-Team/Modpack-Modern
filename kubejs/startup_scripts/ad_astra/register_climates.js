TFCEvents.registerClimateModel(event => {

	event.registerClimateModel('tfg:moon_climate', model => {

		// Technically it can be between -183 to 106C, but I think it's safe to assume the player
		// will be inside a nice comfy space suit the whole time

		model.setCurrentTemperatureCalculation((level, pos, calendarTicks, daysInMonth) => {
			return 10
		})
		model.setAverageTemperatureCalculation((level, pos) => {
			return -77
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
			return 10
		})
		model.setAverageTemperatureCalculation((level, pos) => {
			return -77
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
})
