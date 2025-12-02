// priority: 0
"use strict";

function registerTFGMedicineItems(event) {
	const pill = [
		'haste',
		'night_vision',
		'poison',
		'regeneration',
		'slowness',
		'speed',
		'water_breathing',
		'weakness'
	]

	const pill_names = [
		'Haste',
		'Night Vision',
		'Poison',
		'Regeneration',
		'Slowness',
		'Speed',
		'Water Breathing',
		'Weakness'
	]

	pill.forEach((pill_array, index) => {
		const pill_names_array = pill_names[index];

		event.create(`tfg:${pill_array}_pill`)
			.tooltip(`§9${pill_names_array} (08:00)`)

		event.create(`tfg:${pill_array}_tablet`)
			.tooltip(`§9${pill_names_array} (30:00)`)
	})

	event.create(`tfg:antipoison_pill`)
		.tooltip(`§9Cures Poison`)

	event.create(`tfg:antipoison_tablet`)
		.tooltip(`§9Cures All Harmful Effects`)

	//salvos

	const salvo = [
		'absorption',
		'fire_resistance',
		'invisibility',
		'luck',
		'resistance'
	]
	const salvo_names = [
		'Absorption',
		'Fire Resistance',
		'Invisibility',
		'Luck',
		'Resistance'
	]

	salvo.forEach((salvo_array, index) => {
		const salvo_names_array = salvo_names[index];

		event.create(`tfg:${salvo_array}_salvo`)
			.tooltip(`§9${salvo_names_array} (08:00)`)
	})

	event.create(`tfg:instant_health_salvo`)
		.tooltip(`§9Instant Health II`)
}