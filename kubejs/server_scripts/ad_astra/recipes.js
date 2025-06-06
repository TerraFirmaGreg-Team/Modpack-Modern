// priority: 0

const registerAdAstraRecipes = (event) => {

	event.remove({ mod: 'ad_astra' })
	event.remove({ mod: 'ad_astra_giselle_addon' })

	//#region Rocket parts

	event.shaped('ad_astra:launch_pad', [
		'BAB',
		'AAA',
		'BAB'
	], {
		A: '#forge:plates/steel',
		B: '#forge:rods/steel'
	}).id('tfg:launch_pad')

	//#region Tier 1 rocket

	event.recipes.gtceu.assembler('tfg:rocket_nose_cone_t1')
		.itemInputs(
			'gtceu:hv_emitter',
			'gtceu:dense_rocket_alloy_t1_plate',
			'3x gtceu:double_stainless_steel_plate')
		.inputFluids(Fluid.of('gtceu:polyethylene', 144 * 16))
		.itemOutputs('ad_astra:rocket_nose_cone')
		.duration(1200)
		.EUt(480)


	event.recipes.gtceu.pyrolyse_oven('tfg:pyrolose_vitrified_asbestos_dust')
		.inputFluids(Fluid.of('gtceu:nitrogen', 100))
		.itemInputs('gtceu:asbestos_dust')
		.itemOutputs('gtceu:vitrified_asbestos_dust')
		.duration(80)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.mixer('tfg:rocket_alloy_t1')
		.itemInputs('6x #forge:dusts/aluminium', '2x #forge:dusts/stainless_steel')
		.inputFluids(Fluid.of('gtceu:red_steel', 144))
		.itemOutputs('9x #forge:dusts/rocket_alloy_t1')
		.duration(580)
		.EUt(480)

	event.recipes.gtceu.chemical_bath('tfg:rocket_alloy_cool_down_water')
		.itemInputs('#forge:hot_ingots/rocket_alloy_t1')
		.inputFluids(Fluid.of('minecraft:water', 100))
		.itemOutputs('#forge:ingots/rocket_alloy_t1')
		.duration(400)
		.EUt(120)

	event.recipes.gtceu.chemical_bath('tfg:rocket_alloy_cool_down_distilled_water')
		.itemInputs('#forge:hot_ingots/rocket_alloy_t1')
		.inputFluids(Fluid.of('gtceu:distilled_water', 100))
		.itemOutputs('#forge:ingots/rocket_alloy_t1')
		.duration(250)
		.EUt(120)

	event.recipes.gtceu.assembler(`tfg:rocket_fin_t1`)
		.itemInputs('#forge:plates/rocket_alloy_t1', '#forge:double_plates/stainless_steel')
		.itemOutputs('ad_astra:rocket_fin')
		.duration(150)
		.EUt(GTValues.VA[GTValues.HV])


	event.recipes.gtceu.assembler('tfg:rocket_steel_engine')
		.itemInputs(
			'2x #forge:double_plates/stainless_steel',
			'2x #gtceu:circuits/hv',
			'gtceu:hv_electric_pump',
			'2x gtceu:power_thruster',
			'#forge:rotors/stainless_steel')
		.inputFluids(Fluid.of('gtceu:blue_steel', 144 * 8))
		.itemOutputs('ad_astra:steel_engine')
		.duration(600)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.assembler('ad_astra:assembler_tier_1_rocket')
		.itemInputs(
			'8x #forge:dense_plates/rocket_alloy_t1',
			'4x ad_astra:rocket_fin',
			'1x ad_astra:steel_engine',
			'1x ad_astra:rocket_nose_cone',
			'16x #forge:insulation_t1'
		)
		.inputFluids(Fluid.of('gtceu:silicon', 144 * 16))
		.itemOutputs('ad_astra:tier_1_rocket')
		.duration(1200)
		.EUt(GTValues.VA[GTValues.HV])

	//#endregion

	//#endregion


	//#region space suits

	event.shaped('ad_astra:space_helmet', [
		'AAA',
		'ADA',
		'BCB'
	], {
		A: 'gtceu:tempered_glass',
		B: 'gtceu:carbon_fiber_plate',
		C: 'tfg:polycaprolactam_fabric',
		D: '#forge:small_fluid_pipes/polyethylene'
	}).id('tfg:space_helmet')

	event.shaped('ad_astra:netherite_space_helmet', [
		'AAA',
		'ADA',
		'BCB'
	], {
		A: 'gtceu:laminated_glass',
		B: '#forge:plates/titanium_tungsten_carbide',
		C: '#forge:plates/polyphenylene_sulfide',
		D: '#forge:small_fluid_pipes/polytetrafluoroethylene'
	}).id('tfg:netherite_space_helmet')


	event.shaped('ad_astra:space_suit', [
		'B B',
		'ADA',
		'BCB'
	], {
		A: 'ad_astra_giselle_addon:oxygen_can',
		B: 'gtceu:carbon_fiber_plate',
		C: 'tfg:polycaprolactam_fabric',
		D: 'ad_astra:oxygen_gear'
	}).id('tfg:space_suit')

	event.shaped('ad_astra:netherite_space_suit', [
		'B B',
		'ADA',
		'BCB'
	], {
		A: 'ad_astra_giselle_addon:netherite_oxygen_can',
		B: '#forge:plates/titanium_tungsten_carbide',
		C: '#forge:plates/polyphenylene_sulfide',
		D: 'ad_astra:oxygen_gear'
	}).id('tfg:netherite_space_suit')


	event.shaped('ad_astra:space_pants', [
		'BAB',
		'C C',
		'B B'
	], {
		A: 'gtceu:hv_electric_motor',
		B: 'gtceu:carbon_fiber_plate',
		C: 'tfg:polycaprolactam_fabric'
	}).id('tfg:space_pants')

	event.shaped('ad_astra:netherite_space_pants', [
		'BAB',
		'C C',
		'B B'
	], {
		A: 'gtceu:ev_electric_motor',
		B: '#forge:plates/titanium_tungsten_carbide',
		C: '#forge:plates/polyphenylene_sulfide'
	}).id('tfg:netherite_space_pants')


	event.shaped('ad_astra:space_boots', [
		'   ',
		'C C',
		'B B'
	], {
		B: 'gtceu:carbon_fiber_plate',
		C: 'tfg:polycaprolactam_fabric'
	}).id('tfg:space_boots')

	event.shaped('ad_astra:netherite_space_boots', [
		'   ',
		'C C',
		'B B'
	], {
		B: '#forge:plates/titanium_tungsten_carbide',
		C: '#forge:plates/polyphenylene_sulfide'
	}).id('tfg:netherite_space_boots')


	event.shaped('ad_astra:oxygen_gear', [
		' A ',
		'BCB',
		'BDB'
	], {
		A: '#forge:small_fluid_pipes/stainless_steel',
		B: '#forge:tiny_fluid_pipes/stainless_steel',
		C: 'gtceu:hv_electric_pump',
		D: 'gtceu:fluid_detector_cover'
	}).id('tfg:oxygen_gear')

	//#endregion

	//#region Gas tanks

	event.shaped('ad_astra:gas_tank', [
		'ABA',
		'ACA',
		'AAA'
	], {
		A: '#forge:foils/polyphenylene',
		B: '#forge:tiny_fluid_pipes/polyethylene',
		C: 'gtceu:aluminium_fluid_cell'
	}).id('tfg:gas_tank')

	event.shaped('ad_astra:large_gas_tank', [
		'ABA',
		'ACA',
		'AAA'
	], {
		A: '#forge:sheets/polyphenylene',
		B: '#forge:small_fluid_pipes/polyethylene',
		C: 'gtceu:stainless_steel_fluid_cell'
	}).id('tfg:large_gas_tank')


	event.shapeless('ad_astra_giselle_addon:oxygen_can', ['#forge:tiny_fluid_pipes/polyethylene', 'ad_astra:gas_tank'])
		.id('tfg:oxygen_can')

	event.shaped('ad_astra_giselle_addon:netherite_oxygen_can', [
		'DBD',
		'ACA',
		'AAA'
	], {
		A: '#forge:plates/titanium_tungsten_carbide',
		B: '#forge:tiny_fluid_pipes/titanium',
		C: 'gtceu:titanium_fluid_cell',
		D: '#forge:plates/polyphenylene_sulfide'
	}).id('tfg:netherite_oxygen_can')

	//#endregion

	//#region Machines
	event.shaped('ad_astra:oxygen_distributor', [
		'DBD',
		'ACA',
		'DBD'
	], {
		A: '#forge:plates/stainless_steel',
		B: '#gtceu:circuits/hv',
		C: 'gtceu:hv_machine_hull',
		D: 'gtceu:filter_casing'
	}).id('tfg:oxygen_distributor')

	event.shaped('ad_astra:gravity_normalizer', [
		'A A',
		'CBC',
		'ADA'
	], {
		A: '#forge:rods/magnetic_neodymium',
		B: 'gtceu:ev_field_generator',
		C: '#forge:plates/titanium',
		D: 'gtceu:ev_polarizer',
	}).id('tfg:gravity_normalizer')

	event.shaped('ad_astra:oxygen_sensor', [
		'AAA',
		'ABA',
		'ACA'
	], {
		A: '#forge:plates/red_alloy',
		B: 'gtceu:activity_detector_cover',
		C: 'gtceu:fluid_detector_cover',
	}).id('tfg:oxygen_sensor')

	event.shaped('ad_astra:solar_panel', [
		'AAA',
		'BCE',
		' F '
	], {
		A: 'gtceu:solar_panel',
		B: 'minecraft:daylight_detector',
		C: '#forge:rods/long/aluminium',
		E: '#gtceu:circuits/mv',
		F: 'gtceu:mv_machine_hull'
	}).id('tfg:solar_panel')

	//#endregion

	//#region TI-69 (ручной детектор кислорода хз)

	event.shaped('ad_astra:ti_69', [
		'DBC',
		'AE '
	], {
		A: '#forge:tools/screwdrivers',
		B: '#forge:plates/steel',
		C: 'gtceu:lv_sensor',
		D: 'gtceu:computer_monitor_cover',
		E: '#gtceu:batteries/lv'
	}).id('tfg:ti_69')

	//#endregion

	//#region Радио

	event.shaped('ad_astra:radio', [
		'AB ',
		'CDC',
		'CCC'
	], {
		A: 'gtceu:lv_sensor',
		B: '#forge:tools/screwdrivers',
		C: '#forge:plates/iron',
		D: '#gtceu:circuits/lv'
	}).id('tfg:radio')

	//#endregion

	//#region Rover

	event.shaped('ad_astra:wheel', [
		' A ',
		'ABA',
		' A '
	], {
		A: '#forge:plates/polyphenylene_sulfide',
		B: '#forge:rings/stainless_steel',
	}).id('tfg:ad_astra_wheel')

	event.recipes.gtceu.assembler('tfg:tier_1_rover')
		.itemInputs(
			'gtceu:mv_sensor',
			'ad_astra:radio',
			'ad_astra:gas_tank',
			'4x ad_astra:wheel',
			'2x gtceu:hv_electric_motor',
			'4x #forge:plates/stainless_steel',
			'4x #forge:frames/stainless_steel')
		.itemOutputs('ad_astra:tier_1_rover')
		.duration(400)
		.EUt(GTValues.VA[GTValues.HV])

	//#endregion


	//#region Стальной FE кабель т1

	event.recipes.gtceu.assembler('tfg:ad_astra_steel_cable')
		.itemInputs('4x #forge:single_wires/manganese_phosphide', '#forge:plates/steel')
		.inputFluids(Fluid.of('gtceu:polyethylene', 36))
		.itemOutputs('4x ad_astra:steel_cable')
		.duration(60)
		.EUt(120)

	//#endregion

	//#region FE кабель т2

	event.recipes.gtceu.assembler('tfg:ad_astra_desh_cable')
		.itemInputs('4x #forge:single_wires/magnesium_diboride', '#forge:plates/desh')
		.inputFluids(Fluid.of('gtceu:polyethylene', 72))
		.itemOutputs('4x ad_astra:desh_cable')
		.duration(60)
		.EUt(480)

	//#endregion

	//#region Колесо

	event.shaped('ad_astra:white_flag', [
		'ABB',
		'ABB',
		'A  '
	], {
		A: '#forge:rods/long/steel',
		B: '#tfc:high_quality_cloth',
	}).id('tfg:white_flag')

	event.recipes.gtceu.chemical_bath(`tfg:ad_astra_flag_bleaching`)
		.itemInputs('#ad_astra:flags')
		.inputFluids(Fluid.of(`gtceu:chlorine`, 36))
		.itemOutputs(`ad_astra:white_flag`)
		.duration(150)
		.EUt(4)
		.category(GTRecipeCategories.CHEM_DYES)

	global.MINECRAFT_DYE_NAMES.forEach(color => {
		event.recipes.gtceu.chemical_bath(`tfg:ad_astra_${color}_flag`)
			.itemInputs('ad_astra:white_flag')
			.inputFluids(Fluid.of(`tfc:${color}_dye`, 36))
			.itemOutputs(`ad_astra:${color}_flag`)
			.duration(150)
			.EUt(4)
			.category(GTRecipeCategories.CHEM_DYES)
	})

	//#endregion

	//#region Воздушный пистолет

	event.shaped('ad_astra:zip_gun', [
		'ACC',
		'DB ',
		'   '
	], {
		A: 'gtceu:lv_electric_pump',
		B: '#forge:bolts/steel',
		C: '#forge:tiny_fluid_pipes/steel',
		D: 'ad_astra:gas_tank',
	}).id('tfg:zip_gun')

	//#endregion

	//#region Космо картина

	event.shaped('ad_astra:space_painting', [
		'ABA',
		'BCB',
		'ABA'
	], {
		A: '#forge:nuggets/desh',
		B: '#forge:ingots/desh',
		C: '#tfc:high_quality_cloth',
	}).id('tfg:space_painting')

	//#endregion

	//#region Convert whatever fluids we want into the breathable gas needed for the Oxygen Distributor

	event.custom({
		type: 'ad_astra:oxygen_loading',
		cookingtime: 1,
		energy: 30,
		input: {
			ingredient: {
				fluid: 'gtceu:air'
			},
			millibuckets: 2
		},
		result: {
			fluid: 'ad_astra:oxygen',
			millibuckets: 100
		}
	}).id('ad_astra:oxygen_loading/air_from_air')

	event.custom({
		type: 'ad_astra:oxygen_loading',
		cookingtime: 1,
		energy: 30,
		input: {
			ingredient: {
				fluid: 'gtceu:oxygen'
			},
			millibuckets: 1
		},
		result: {
			fluid: 'ad_astra:oxygen',
			millibuckets: 100
		}
	}).id('ad_astra:oxygen_loading/air_from_oxygen_gas')

	//#endregion

	//#region Misc blocks

	event.shaped('ad_astra:vent', [
		' B ',
		'BAB',
		' B '
	], {
		A: 'gtceu:steel_frame',
		B: '#tfg:metal_bars'
	}).id('tfg:shaped/ad_astra_vent')

	event.shaped('ad_astra:airlock', [
		'AB',
		'CD',
	], {
		A: '#forge:tools/wrenches',
		B: 'gtceu:activity_detector_cover',
		C: 'gtceu:fluid_detector_cover',
		D: 'gtceu:filter_casing'
	}).id('tfg:shaped/airlock')

	event.recipes.gtceu.assembler('ad_astra:airlock')
		.itemInputs('gtceu:filter_casing', 'gtceu:fluid_detector_cover', 'gtceu:activity_detector_cover')
		.itemOutputs('ad_astra:airlock')
		.duration(100)
		.EUt(GTValues.VA[GTValues.LV])

	//#endregion

	//#region Decoration blocks

	global.MINECRAFT_DYE_NAMES.forEach(color => {
		event.shaped(`ad_astra:${color}_industrial_lamp`, [
			' N ',
			'DTD',
			' P '
		], {
			N: '#forge:rods/steel',
			T: 'minecraft:glowstone',
			D: `minecraft:${color}_stained_glass_pane`,
			P: '#forge:plates/steel'
		})
		.id(`tfg:shaped/ad_astra_${color}_industrial_lamp`);

		event.shaped(`ad_astra:small_${color}_industrial_lamp`, [
			' N ',
			'DTD',
			' P '
		], {
			N: '#forge:nuggets/steel',
			T: 'minecraft:glowstone',
			D: `minecraft:${color}_stained_glass_pane`,
			P: '#forge:rods/steel'
		})
		.id(`tfg:shaped/ad_astra_small_${color}_industrial_lamp`);
	})

	const DECO_BLOCKS = [
		{ type: 'iron', material: 'wrought_iron' },
		{ type: 'steel', material: 'steel' },
		{ type: 'desh', material: 'desh' },
		{ type: 'calorite', material: 'calorite' },
		{ type: 'ostrum', material: 'ostrum' }
	]

	DECO_BLOCKS.forEach(x => {

		event.recipes.gtceu.assembler(`tfg:ad_astra_${x.type}_plating`)
			.itemInputs(`#forge:storage_blocks/${x.material}`)
			.inputFluids(Fluid.of('gtceu:polyethylene', 36))
			.itemOutputs(`16x ad_astra:${x.type}_plating`)
			.duration(100)
			.EUt(GTValues.VA[GTValues.LV])
			.circuit(17)

		event.recipes.gtceu.chemical_bath(`tfg:ad_astra_glowing_${x.type}_pillar`)
			.itemInputs(`ad_astra:${x.type}_pillar`)
			.inputFluids(Fluid.of('gtceu:glowstone', 72))
			.itemOutputs(`ad_astra:glowing_${x.type}_pillar`)
			.duration(100)
			.EUt(GTValues.VA[GTValues.LV])

		// TODO: tags for these
		event.stonecutting(`ad_astra:${x.type}_factory_block`, `#tfg:ad_astra_${x.type}_blocks`)
		event.stonecutting(`ad_astra:${x.type}_plating`, `#tfg:ad_astra_${x.type}_blocks`)
		event.stonecutting(`ad_astra:${x.type}_panel`, `#tfg:ad_astra_${x.type}_blocks`)
		event.stonecutting(`ad_astra:${x.type}_pillar`, `#tfg:ad_astra_${x.type}_blocks`)
		event.stonecutting(`ad_astra:${x.type}_plateblock`, `#tfg:ad_astra_${x.type}_blocks`)
		event.stonecutting(`ad_astra:encased_${x.type}_block`, `#tfg:ad_astra_${x.type}_blocks`)

		event.stonecutting(`ad_astra:${x.type}_plating_stairs`, `tfg:ad_astra_${x.type}_plating`)
		event.stonecutting(`2x ad_astra:${x.type}_plating_slab`, `tfg:ad_astra_${x.type}_plating`)

		// Pressure plates
		event.shaped(`ad_astra:${x.type}_plating_pressure_plate`, [
			' B ',
			'CDC',
			' E '
		], {
			B: '#tfc:hammers',
			C: `ad_astra:${x.type}_plating_slab`,
			D: '#forge:small_springs',
			E: '#forge:tools/screwdrivers'
		}).id(`tfg:shaped/ad_astra_${x.type}_pressure_plate`)

		event.recipes.gtceu.assembler(`tfg:ad_astra_${x.type}_pressure_plate`)
			.itemInputs('#forge:small_springs', `2x ad_astra:${x.type}_plating_slab`)
			.itemOutputs(`2x ad_astra:${x.type}_plating_pressure_plate`)
			.duration(50)
			.EUt(2)

		// Buttons
		generateCutterRecipe(event, `ad_astra:${x.type}_plating_pressure_plate`, `6x ad_astra:${x.type}_plating_button`, 50, 7, `ad_astra_${x.type}_button`)

		// Doors
		event.recipes.gtceu.assembler(`tfg:ad_astra_${x.type}_sliding_door`)
			.itemInputs(`9x #tfg:ad_astra_${x.type}_blocks`)
			.inputFluids(Fluid.of('gtceu:polyethylene', 36))
			.itemOutputs(`ad_astra:${x.type}_sliding_door`)
			.duration(100)
			.EUt(GTValues.VA[GTValues.LV])
			.circuit(1)
	})

	event.shapeless('ad_astra:marked_iron_pillar', ['ad_astra:iron_pillar', '#forge:dyes/yellow', '#forge:dyes/black'])
		.id('tfg:shapeless/marked_iron_pillar')

	event.recipes.gtceu.assembler(`tfg:ad_astra_reinforced_door`)
		.itemInputs(`9x #tfg:ad_astra_${x.type}_blocks`, 'gtceu:dense_obsidian_plate')
		.inputFluids(Fluid.of('gtceu:polyethylene', 36))
		.itemOutputs(`tfg:ad_astra_reinforced_door`)
		.duration(100)
		.EUt(GTValues.VA[GTValues.LV])
		.circuit(2)

	event.recipes.gtceu.assembler(`tfg:ad_astra_steel_door`)
		.itemInputs('createdeco:industrial_iron_door')
		.inputFluids(Fluid.of('gtceu:polyethylene', 36))
		.itemOutputs('ad_astra:steel_door')
		.duration(100)
		.EUt(GTValues.VA[GTValues.LV])

	// Etrium only has factory block, encased block, plateblock, panel, and (storage) block

	event.recipes.gtceu.assembler('tfg:ad_astra_etrium_panel')
		.itemInputs('#forge:storage_blocks/etrium')
		.inputFluids(Fluid.of('gtceu:polyethylene', 36))
		.itemOutputs('16x ad_astra:etrium_panel')
		.duration(100)
		.EUt(GTValues.VA[GTValues.LV])

	event.stonecutting('ad_astra:etrium_panel', '#tfg:ad_astra_etrium_blocks')
	event.stonecutting('ad_astra:etrium_factory_block', '#tfg:ad_astra_etrium_blocks')
	event.stonecutting('ad_astra:encased_etrium_block', '#tfg:ad_astra_etrium_blocks')
	event.stonecutting('ad_astra:etrium_plateblock', '#tfg:ad_astra_etrium_blocks')

	//#endregion
}
