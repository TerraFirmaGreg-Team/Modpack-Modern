// priority: 0

function registerGreateConvertingRecipes(event) {

	event.shapeless('greate:steel_cogwheel', ['create:cogwheel', '#forge:tools/files'])
		.id('tfg:shapeless/cogwheel_converting')

	event.shapeless('greate:large_steel_cogwheel', ['create:large_cogwheel', '#forge:tools/files'])
		.id('tfg:shapeless/large_cogwheel_converting')

	event.shapeless('greate:steel_shaft', ['create:shaft', '#forge:tools/files'])
		.id('tfg:shapeless/shaft_converting')

	event.shapeless('greate:steel_crushing_wheel', ['create:crushing_wheel', '#forge:tools/files'])
		.id('tfg:shapeless/crushing_wheel_converting')

	event.shapeless('greate:steel_encased_fan', ['create:encased_fan', '#forge:tools/files'])
		.id('tfg:shapeless/encased_fan_converting')

	event.shapeless('greate:steel_gearbox', ['create:gearbox', '#forge:tools/files'])
		.id('tfg:shapeless/gearbox_converting')

	event.shapeless('greate:steel_mechanical_mixer', ['create:mechanical_mixer', '#forge:tools/files'])
		.id('tfg:shapeless/mixer_converting')

	event.shapeless('greate:steel_mechanical_saw', ['create:mechanical_saw', '#forge:tools/files'])
		.id('tfg:shapeless/saw_converting')

	event.shapeless('greate:steel_mechanical_pump', ['create:mechanical_pump', '#forge:tools/files'])
		.id('tfg:shapeless/pump_converting')

	event.shapeless('greate:rubber_belt_connector', ['create:belt_connector', '#forge:tools/files'])
		.id('tfg:shapeless/belt_converting')

	event.shapeless('greate:steel_vertical_gearbox', ['create:vertical_gearbox', '#forge:tools/files'])
		.id('tfg:shapeless/vertical_gearbox_converting')
}