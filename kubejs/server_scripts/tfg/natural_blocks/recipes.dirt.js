// priority: 0
"use strict";

function registerTFGDirtRecipes(event) {
	
	// Dirt creation
	event.recipes.gtceu.macerator('dirt_from_bio_chaff')
		.itemInputs('gtceu:bio_chaff')
		.itemOutputs('tfc:dirt/loam')
		.duration(300)
		.EUt(4)

	// Loam + Silt -> Silty Loam (Миксер)
	event.recipes.gtceu.mixer('silty_loam_dirt')
		.itemInputs('tfc:dirt/loam', 'tfc:dirt/silt')
		.itemOutputs('2x tfc:dirt/silty_loam')
		.duration(200)
		.EUt(16)

	// Loam + Sand -> Sandy Loam (Миксер)
	event.recipes.gtceu.mixer('sandy_loam_dirt')
		.itemInputs('tfc:dirt/loam', '#forge:sand')
		.circuit(3)
		.itemOutputs('tfc:dirt/sandy_loam')
		.duration(200)
		.EUt(16)

	// Loam + Salt -> Silt
	event.recipes.gtceu.mixer('silty_dirt')
		.itemInputs('tfc:dirt/loam', 'tfc:powder/salt')
		.circuit(3)
		.itemOutputs('tfc:dirt/silt')
		.duration(200)
		.EUt(16)

	global.TFC_MUD_TYPES.forEach(dirtType => {
		// Dirt + Sticks -> Rooted Dirt
		event.recipes.gtceu.mixer(`${dirtType}_to_rooted`)
			.itemInputs(`tfc:dirt/${dirtType}`, "#forge:rods/wooden")
			.itemOutputs(`tfc:rooted_dirt/${dirtType}`)
			.duration(200)
			.EUt(16)
	
		event.smelting(`tfc:dirt/${dirtType}`, `tfc:mud/${dirtType}`)
			.id(`tfg:smelting/${dirtType}_mud_to_grass`)
	

		// Dirt -> Mud
		event.recipes.gtceu.mixer(`${dirtType}_grass_to_mud`)
			.itemInputs(`tfc:dirt/${dirtType}`)
			.inputFluids("#tfc:any_water 100")
			.circuit(2)
			.itemOutputs(`tfc:mud/${dirtType}`)
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
				{item: `tfc:dirt/${dirtType}`}],
			result: {item: `tfc:mud/${dirtType}`}
		}).id(`tfg:ae_transform/${dirtType}_to_mud`)

		// Mud bricks
		event.recipes.gtceu.extruder(`tfc:mud_bricks/${dirtType}`)
			.itemInputs(`tfc:mud/${dirtType}`)
			.notConsumable('gtceu:ingot_extruder_mold')
			.itemOutputs(`4x tfc:drying_bricks/${dirtType}`)
			.duration(100)
			.EUt(2)

		event.recipes.vintageimprovements.curving(`4x tfc:drying_bricks/${dirtType}`, `tfc:mud/${dirtType}`)
			.head('gtceu:ingot_extruder_mold')
			.id(`tfg:vi/curving/${dirtType}_bricks`)

		// Wet bricks to dry
		event.smelting(`tfc:mud_brick/${dirtType}`, `tfc:drying_bricks/${dirtType}`)
			.id(`tfg:smelting/${dirtType}_drying_brick_to_brick`)

		event.custom({
			type: "firmalife:drying",
			ingredient: {
				item: `tfc:drying_bricks/${dirtType}`
			},
			result: {
				item: `tfc:mud_brick/${dirtType}`
			}
		}).id(`tfg:drying/${dirtType}_drying_brick_to_brick`)

		// Mud brick blocks
		event.shaped(`tfc:mud_bricks/${dirtType}`, [
			'AA',
			'AA'
		], {
			A: `tfc:mud_brick/${dirtType}`
		}).id(`tfc:crafting/soil/${dirtType}_mud_bricks`)

		event.shaped(`tfc:mud_bricks/${dirtType}_stairs`, [
			'A ',
			'AA'
		], {
			A: `tfc:mud_brick/${dirtType}`
		}).id(`tfc:crafting/soil/${dirtType}_mud_bricks_stairs`)

		event.shaped(`tfc:mud_bricks/${dirtType}_slab`, [
			'AA'
		], {
			A: `tfc:mud_brick/${dirtType}`
		}).id(`tfc:crafting/soil/${dirtType}_mud_bricks_slab`)

		event.shaped(`tfc:mud_bricks/${dirtType}_wall`, [
			'A',
			'A'
		], {
			A: `tfc:mud_brick/${dirtType}`
		}).id(`tfc:crafting/soil/${dirtType}_mud_bricks_wall`)

		// Блок кирпичей -> Ступени
		event.remove({ id: `tfc:crafting/soil/${dirtType}_mud_bricks_stairs` })

		event.stonecutting(`tfc:mud_bricks/${dirtType}_stairs`, `tfc:mud_bricks/${dirtType}`)
			.id(`tfc:stonecutting/soil/${dirtType}_mud_bricks_stairs`)

		// Блок кирпичей -> Плиты
		event.remove({ id: `tfc:crafting/soil/${dirtType}_mud_bricks_slab` })

		event.stonecutting(`2x tfc:mud_bricks/${dirtType}_slab`, `tfc:mud_bricks/${dirtType}`)
			.id(`tfc:stonecutting/soil/${dirtType}_mud_bricks_slab`)

		// Блок кирпичей -> Стена
		event.remove({ id: `tfc:crafting/soil/${dirtType}_mud_bricks_wall` })

		event.stonecutting(`tfc:mud_bricks/${dirtType}_wall`, `tfc:mud_bricks/${dirtType}`)
			.id(`tfc:stonecutting/soil/${dirtType}_mud_bricks_wall`)

		// Grass blocks
		event.shapeless(`tfc:grass/${dirtType}`, [`tfc:dirt/${dirtType}`, 'minecraft:bone_meal', '#forge:seeds'])
			.id(`tfg:shapeless/${dirtType}_grass_bonemeal`)

		event.shapeless(`tfc:grass/${dirtType}`, [`tfc:dirt/${dirtType}`, 'gtceu:fertilizer', '#forge:seeds'])
			.id(`tfg:shapeless/${dirtType}_grass_fertilizer`)

		// Coarse dirt
		event.shapeless(`2x tfg:coarse_${dirtType}_dirt`, [`tfc:dirt/${dirtType}`, '#forge:gravel'])
			.id(`tfg:shapeless/create_coarse_${dirtType}_dirt`)

		event.shapeless(`tfc:dirt/${dirtType}`, [`tfg:coarse_${dirtType}_dirt`, '#minecraft:hoes'])
			.id(`tfg:shapeless/sift_coarse_${dirtType}_dirt`)

		// Duff
		event.shapeless(`tfg:${dirtType}_duff`, [`tfc:dirt/${dirtType}`, 'tfc:groundcover/humus'])
			.id(`tfg:shapeless/create_${dirtType}_duff`)
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