// priority: 0
"use strict";

function registerTFGDirtRecipes(event) {

	// Dirt creation
	event.recipes.gtceu.macerator('tfg:dirt_from_bio_chaff')
		.itemInputs('gtceu:bio_chaff')
		.itemOutputs('tfc:dirt/loam')
		.duration(300)
		.EUt(4)

	// Loam + Silt -> Silty Loam (Миксер)
	event.recipes.gtceu.mixer('tfg:silty_loam_dirt')
		.itemInputs('tfc:dirt/loam', 'tfc:dirt/silt')
		.itemOutputs('2x tfc:dirt/silty_loam')
		.duration(200)
		.EUt(16)

	// Loam + Sand -> Sandy Loam (Миксер)
	event.recipes.gtceu.mixer('tfg:sandy_loam_dirt')
		.itemInputs('tfc:dirt/loam', '#forge:sand')
		.circuit(3)
		.itemOutputs('tfc:dirt/sandy_loam')
		.duration(200)
		.EUt(16)

	// Loam + Salt -> Silt
	event.recipes.gtceu.mixer('tfg:silty_dirt')
		.itemInputs('tfc:dirt/loam', 'tfc:powder/salt')
		.circuit(3)
		.itemOutputs('tfc:dirt/silt')
		.duration(200)
		.EUt(16)

	// Alkaline dirt
	event.recipes.gtceu.mixer('tfg:alfisol')
		.itemInputs('tfc:dirt/loam', ['gtceu:tiny_calcium_dust', 'gtceu:tiny_sodium_dust', 'gtceu:tiny_magnesium_dust'])
		.circuit(3)
		.itemOutputs('tfg:dirt/alfisol')
		.duration(200)
		.EUt(16)

	// Volcanic dirt
	event.recipes.gtceu.mixer('tfg:mollisol')
		.itemInputs('tfc:dirt/loam', ['tfc:soot', 'tfc:powder/wood_ash', 'tfc:powder/charcoal'])
		.circuit(3)
		.itemOutputs('tfg:dirt/mollisol')
		.duration(200)
		.EUt(16)

	// Tropical
	event.recipes.gtceu.mixer('tfg:oxisol')
		.itemInputs('tfc:dirt/loam', ['tfc:powder/hematite', 'tfc:powder/limonite', 'tfc:powder/magnetite'])
		.circuit(3)
		.itemOutputs('tfg:dirt/oxisol')
		.duration(200)
		.EUt(16)

	// Layered
	event.recipes.gtceu.mixer('tfg:podzol')
		.itemInputs('tfc:dirt/loam', '#minecraft:leaves')
		.circuit(3)
		.itemOutputs('tfg:dirt/podzol')
		.duration(200)
		.EUt(16)

	// Mars dirt
	event.recipes.gtceu.mixer('tfg:mars_dirt')
		.itemInputs('#tfc:dirt')
		.inputFluids(Fluid.of('tfg:semiheavy_ammoniacal_water', 100))
		.circuit(3)
		.itemOutputs('tfg:grass/mars_dirt')
		.duration(200)
		.EUt(16)

	function registerMudExtensions(namespace, dirtType) {
		// Dirt + Sticks -> Rooted Dirt
		event.recipes.gtceu.mixer(`${dirtType}_to_rooted`)
			.itemInputs(`${namespace}:dirt/${dirtType}`, "#forge:rods/wooden")
			.itemOutputs(`${namespace}:rooted_dirt/${dirtType}`)
			.duration(200)
			.EUt(16)

		event.smelting(`${namespace}:dirt/${dirtType}`, `${namespace}:mud/${dirtType}`)
			.id(`tfg:smelting/${dirtType}_mud_to_grass`)


		// Dirt -> Mud
		event.recipes.gtceu.mixer(`${dirtType}_grass_to_mud`)
			.itemInputs(`${namespace}:dirt/${dirtType}`)
			.inputFluids("#tfc:any_water 100")
			.circuit(2)
			.itemOutputs(`${namespace}:mud/${dirtType}`)
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
				{ item: `${namespace}:dirt/${dirtType}` }],
			result: { item: `${namespace}:mud/${dirtType}` }
		}).id(`tfg:ae_transform/${dirtType}_to_mud`)

		// Mud bricks
		event.recipes.gtceu.extruder(`${namespace}:mud_bricks/${dirtType}`)
			.itemInputs(`${namespace}:mud/${dirtType}`)
			.notConsumable('gtceu:ingot_extruder_mold')
			.itemOutputs(`4x ${namespace}:drying_bricks/${dirtType}`)
			.duration(100)
			.EUt(2)

		event.recipes.vintageimprovements.curving(`4x ${namespace}:drying_bricks/${dirtType}`, `${namespace}:mud/${dirtType}`)
			.head('gtceu:ingot_extruder_mold')
			.id(`tfg:vi/curving/${dirtType}_bricks`)

		// Wet bricks to dry
		event.smelting(`${namespace}:mud_brick/${dirtType}`, `${namespace}:drying_bricks/${dirtType}`)
			.id(`tfg:smelting/${dirtType}_drying_brick_to_brick`)

		event.custom({
			type: "firmalife:drying",
			ingredient: {
				item: `${namespace}:drying_bricks/${dirtType}`
			},
			result: {
				item: `${namespace}:mud_brick/${dirtType}`
			}
		}).id(`tfg:drying/${dirtType}_drying_brick_to_brick`)
	}

	function registerMudStandards(namespace, dirtType) {
		// Mud brick blocks
		event.shaped(`${namespace}:mud_bricks/${dirtType}`, [
			'AA',
			'AA'
		], {
			A: `${namespace}:mud_brick/${dirtType}`
		}).id(`tfc:crafting/soil/${dirtType}_mud_bricks`)

		event.shaped(`${namespace}:mud_bricks/${dirtType}_stairs`, [
			'A ',
			'AA'
		], {
			A: `${namespace}:mud_brick/${dirtType}`
		}).id(`tfc:crafting/soil/${dirtType}_mud_bricks_stairs`)

		event.shaped(`${namespace}:mud_bricks/${dirtType}_slab`, [
			'AA'
		], {
			A: `${namespace}:mud_brick/${dirtType}`
		}).id(`tfc:crafting/soil/${dirtType}_mud_bricks_slab`)

		event.shaped(`${namespace}:mud_bricks/${dirtType}_wall`, [
			'A',
			'A'
		], {
			A: `${namespace}:mud_brick/${dirtType}`
		}).id(`tfc:crafting/soil/${dirtType}_mud_bricks_wall`)

		// Блок кирпичей -> Ступени
		event.remove({ id: `tfc:crafting/soil/${dirtType}_mud_bricks_stairs` })

		event.stonecutting(`${namespace}:mud_bricks/${dirtType}_stairs`, `${namespace}:mud_bricks/${dirtType}`)
			.id(`tfc:stonecutting/soil/${dirtType}_mud_bricks_stairs`)

		event.recipes.tfc.chisel(`${namespace}:mud_bricks/${dirtType}_stairs`, `${namespace}:mud_bricks/${dirtType}`, 'stair')
			.id(`tfg:chisel/${namespace}_soil/${dirtType}_mud_bricks_stairs`)

		// Блок кирпичей -> Плиты
		event.remove({ id: `tfc:crafting/soil/${dirtType}_mud_bricks_slab` })

		event.stonecutting(`2x ${namespace}:mud_bricks/${dirtType}_slab`, `${namespace}:mud_bricks/${dirtType}`)
			.id(`tfc:stonecutting/soil/${dirtType}_mud_bricks_slab`)

		event.recipes.tfc.chisel(`${namespace}:mud_bricks/${dirtType}_slab`, `${namespace}:mud_bricks/${dirtType}`, 'slab')
			.extraDrop(`${namespace}:mud_bricks/${dirtType}_slab`)
			.id(`tfg:chisel/${namespace}_soil/${dirtType}_mud_bricks_slab`)

		// Блок кирпичей -> Стена
		event.remove({ id: `tfc:crafting/soil/${dirtType}_mud_bricks_wall` })

		event.stonecutting(`${namespace}:mud_bricks/${dirtType}_wall`, `${namespace}:mud_bricks/${dirtType}`)
			.id(`tfc:stonecutting/soil/${dirtType}_mud_bricks_wall`)

		event.recipes.tfc.chisel(`${namespace}:mud_bricks/${dirtType}_wall`, `${namespace}:mud_bricks/${dirtType}_slab`, 'smooth')
			.id(`tfg:chisel/${namespace}_soil/${dirtType}_mud_bricks_wall`)

		// Grass blocks
		event.shapeless(`${namespace}:grass/${dirtType}`, [`${namespace}:dirt/${dirtType}`, 'minecraft:bone_meal', '#forge:seeds'])
			.id(`tfg:shapeless/${dirtType}_grass_bonemeal`)

		event.shapeless(`${namespace}:grass/${dirtType}`, [`${namespace}:dirt/${dirtType}`, 'gtceu:fertilizer', '#forge:seeds'])
			.id(`tfg:shapeless/${dirtType}_grass_fertilizer`)

		// Coarse dirt
		event.shapeless(`2x tfg:coarse_dirt/${dirtType}`, [`${namespace}:dirt/${dirtType}`, '#forge:gravel'])
			.id(`tfg:shapeless/create_coarse_${dirtType}_dirt`)

		event.shapeless(`${namespace}:dirt/${dirtType}`, [`tfg:coarse_dirt/${dirtType}`, '#minecraft:hoes'])
			.id(`tfg:shapeless/sift_coarse_${dirtType}_dirt`)

		// Duff
		event.shapeless(`tfg:duff/${dirtType}`, [`${namespace}:dirt/${dirtType}`, 'tfc:groundcover/humus'])
			.id(`tfg:shapeless/create_${dirtType}_duff`)
	}

	global.TFC_MUD_TYPES.forEach(dirtType => registerMudExtensions('tfc', dirtType));
	global.TFG_MUD_TYPES.forEach(dirtType => {
		registerMudExtensions('tfg', dirtType);
		registerMudStandards('tfg', dirtType);
		
		event.shapeless(`4x tfg:drying_bricks/${dirtType}`, [`tfg:mud/${dirtType}`, 'tfc:straw'])
			.id(`tfg:shapeless/drying_bricks_${dirtType}`);

		event.recipes.firmalife.drying(`tfg:dirt/${dirtType}`, `tfg:mud/${dirtType}`)
			.id(`tfg:drying/mud_${dirtType}`);

		event.shapeless(`tfg:muddy_roots/${dirtType}`, [`tfg:mud/${dirtType}`, 'tfc:tree_roots'])
			.id(`tfg:shapeless/muddy_roots_${dirtType}`);
	});


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