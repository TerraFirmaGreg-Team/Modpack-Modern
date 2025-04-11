// priority: 0

function registerTFCDirtRecipes(event) {

	//#region Земля

	// Loam + Silt -> Silty Loam (Миксер)
	event.recipes.gtceu.mixer('silty_loam_dirt')
		.itemInputs('tfc:dirt/loam', 'tfc:dirt/silt')
		.itemOutputs('tfc:dirt/silty_loam')
		.duration(200)
		.EUt(16)

	// Loam + Sand -> Sandy Loam (Миксер)
	event.recipes.gtceu.mixer('sandy_loam_dirt')
		.itemInputs('tfc:dirt/loam', '#forge:sand')
		.circuit(3)
		.itemOutputs('tfc:dirt/sandy_loam')
		.duration(200)
		.EUt(16)

	// Dirt + Sticks -> Rooted Dirt
	global.TFC_MUD_TYPES.forEach(mud => {
		event.recipes.gtceu.mixer(`${mud}_to_rooted`)
			.itemInputs(`tfc:dirt/${mud}`, "#tfc:can_be_lit_on_torch")
			.itemOutputs(`tfc:rooted_dirt/${mud}`)
			.duration(200)
			.EUt(16)
	})

	global.TFC_MUD_TYPES.forEach(mud => {
		event.smelting(`tfc:dirt/${mud}`, `tfc:mud/${mud}`)
			.id(`tfg:smelting/${mud}_mud_to_grass`)
	})

	//#endregion

	//#region Грязь

	global.TFC_MUD_TYPES.forEach(mud => {
		// Dirt -> Mud
		event.recipes.gtceu.mixer(`${mud}_grass_to_mud`)
			.itemInputs(`tfc:dirt/${mud}`)
			.inputFluids(Fluid.of('minecraft:water', 100))
			.circuit(2)
			.itemOutputs(`tfc:mud/${mud}`)
			.duration(200)
			.EUt(16)
	})

	//#endregion

	//AE Transform Mud
	global.TFC_MUD_TYPES.forEach(mud => {
		event.custom({
			type: "ae2:transform",
			circumstance: {
				type: "fluid",
				tag: "tfc:water"
			},
			ingredients: [
				{item: `tfc:dirt/${mud}`}],
			result: {item: `tfc:mud/${mud}`}
		}).id(`tfg:ae_transform/${mud}_to_mud`)
	})


	//#region Грязь кирпичи

	global.TFC_MUD_TYPES.forEach(mud => {

		// Влажный кирпич -> Кирпич
		event.smelting(`tfc:mud_brick/${mud}`, `tfc:drying_bricks/${mud}`)
			.id(`tfg:smelting/${mud}_drying_brick_to_brick`)

		event.custom({
			type: "firmalife:drying",
			ingredient: {
				item: `tfc:drying_bricks/${mud}`
			},
			result: {
				item: `tfc:mud_brick/${mud}`
			}
		}).id(`tfg:drying/${mud}_drying_brick_to_brick`)

		// Кирпич -> Блок кирпичей
		event.shaped(`tfc:mud_bricks/${mud}`, [
			'ABA',
			'BAB',
			'ABA'
		], {
			A: `tfc:mud_brick/${mud}`,
			B: '#tfc:mortar'
		}).id(`tfc:crafting/soil/${mud}_mud_bricks`)

		event.recipes.gtceu.assembler(`mud_bricks_${mud}`)
			.itemInputs(`5x tfc:mud_brick/${mud}`)
			.inputFluids(Fluid.of('gtceu:concrete', 72))
			.itemOutputs(`4x tfc:mud_bricks/${mud}`)
			.duration(50)
			.EUt(2)

		// Блок кирпичей -> Ступени
		event.remove({ id: `tfc:crafting/soil/${mud}_mud_bricks_stairs` })

		event.stonecutting(`tfc:mud_bricks/${mud}_stairs`, `tfc:mud_bricks/${mud}`)
			.id(`tfc:stonecutting/soil/${mud}_mud_bricks_stairs`)

		// Блок кирпичей -> Плиты
		event.remove({ id: `tfc:crafting/soil/${mud}_mud_bricks_slab` })

		event.stonecutting(`2x tfc:mud_bricks/${mud}_slab`, `tfc:mud_bricks/${mud}`)
			.id(`tfc:stonecutting/soil/${mud}_mud_bricks_slab`)

		// Блок кирпичей -> Стена
		event.remove({ id: `tfc:crafting/soil/${mud}_mud_bricks_wall` })

		event.stonecutting(`tfc:mud_bricks/${mud}_wall`, `tfc:mud_bricks/${mud}`)
			.id(`tfc:stonecutting/soil/${mud}_mud_bricks_wall`)

	})

	//#endregion
}