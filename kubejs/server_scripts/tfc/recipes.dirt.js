// priority: 0
"use strict";

function registerTFCDirtRecipes(event) {

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
	
		event.smelting(`tfc:dirt/${mud}`, `tfc:mud/${mud}`)
			.id(`tfg:smelting/${mud}_mud_to_grass`)
	

		// Dirt -> Mud
		event.recipes.gtceu.mixer(`${mud}_grass_to_mud`)
			.itemInputs(`tfc:dirt/${mud}`)
			.inputFluids("#tfc:any_water 100")
			.circuit(2)
			.itemOutputs(`tfc:mud/${mud}`)
			.duration(200)
			.EUt(16)

		//AE Transform Mud
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

		// Mud bricks

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
			'AA',
			'AA'
		], {
			A: `tfc:mud_brick/${mud}`
		}).id(`tfc:crafting/soil/${mud}_mud_bricks`)

		event.shaped(`tfc:mud_bricks/${mud}_stairs`, [
			'A ',
			'AA'
		], {
			A: `tfc:mud_brick/${mud}`
		}).id(`tfc:crafting/soil/${mud}_mud_bricks_stairs`)

		event.shaped(`tfc:mud_bricks/${mud}_slab`, [
			'AA'
		], {
			A: `tfc:mud_brick/${mud}`
		}).id(`tfc:crafting/soil/${mud}_mud_bricks_slab`)

		event.shaped(`tfc:mud_bricks/${mud}_wall`, [
			'A',
			'A'
		], {
			A: `tfc:mud_brick/${mud}`
		}).id(`tfc:crafting/soil/${mud}_mud_bricks_wall`)

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

		// Grass blocks

		event.shapeless(`tfc:grass/${mud}`, [`tfc:dirt/${mud}`, 'minecraft:bone_meal', '#forge:seeds'])
			.id(`tfg:shapeless/${mud}_grass_bonemeal`)

		event.shapeless(`tfc:grass/${mud}`, [`tfc:dirt/${mud}`, 'gtceu:fertilizer', '#forge:seeds'])
			.id(`tfg:shapeless/${mud}_grass_fertilizer`)
	})


	// #region Wattle and daub
	// TODO: Workaround for not being able to stain wattle and daub with normal dyes
	// See https://github.com/TerraFirmaGreg-Team/Modpack-Modern/issues/910

	event.shaped('tfc:wattle/unstained', [
		'AB',
		'CC'
	], {
		A: 'tfc:wattle',
		B: 'tfc:daub',
		C: '#forge:rods/wood'
	})
	.id('tfg:shapeless/unstained_wattle')
	
	global.MINECRAFT_DYE_NAMES.forEach(color => {
		event.shapeless(`tfc:wattle/${color}`, ['tfc:wattle/unstained', `#forge:dyes/${color}`])
			.id(`tfg:shapeless/wattle/${color}`)
	})

	// #endregion
}