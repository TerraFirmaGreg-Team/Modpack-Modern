// priority: 0
"use strict";

function removeTFCRecipes(event) {

	// Удаление рецептов руд TFC
	event.remove({ id: /tfc:heating\/ore\/poor_*/ })
	event.remove({ id: /tfc:heating\/ore\/normal_*/ })
	event.remove({ id: /tfc:heating\/ore\/rich_*/ })

	// Удаление рецептов блоков
	event.remove({ id: /tfc:crafting\/metal\/block\/*/ })
	event.remove({ id: /tfc:heating\/metal\/*_block/ })

	// Удаление рецептов ступеней
	event.remove({ id: /tfc:crafting\/metal\/block\/*_stairs/ })
	event.remove({ id: /tfc:heating\/metal\/*_block_stairs/ })

	// Удалание рецептов полублоков
	event.remove({ id: /tfc:crafting\/metal\/block\/*_slab/ })
	event.remove({ id: /tfc:heating\/metal\/*_block_slab/ })

	//#region Удаление рецептов для предметов из Cast Iron

	// Блок
	event.remove({ id: `tfc:crafting/metal/block/cast_iron` })
	event.remove({ id: `tfc:heating/metal/cast_iron_block` })

	// Ступень
	event.remove({ id: `tfc:crafting/metal/block/cast_iron_stairs` })
	event.remove({ id: `tfc:heating/metal/cast_iron_block_stairs` })

	// Полублок
	event.remove({ id: `tfc:crafting/metal/block/cast_iron_slab` })
	event.remove({ id: `tfc:heating/metal/cast_iron_block_slab` })

	// Слиток
	event.remove({ id: `tfc:casting/cast_iron_ingot` })
	event.remove({ id: `tfc:casting/cast_iron_fire_ingot` })
	event.remove({ id: `tfc:heating/metal/cast_iron_ingot` })
	event.remove({ id: `tfc:welding/cast_iron_double_ingot` })
	event.remove({ id: `tfc:anvil/cast_iron_rod` })

	// Двойной слиток
	event.remove({ id: `tfc:heating/metal/cast_iron_double_ingot` })
	event.remove({ id: `tfc:anvil/cast_iron_sheet` })

	// Пластина
	event.remove({ id: `tfc:heating/metal/cast_iron_sheet` })
	event.remove({ id: `tfc:welding/cast_iron_double_sheet` })

	// Двойная пластина
	event.remove({ id: `tfc:heating/metal/cast_iron_double_sheet` })

	// Стержень
	event.remove({ id: `tfc:heating/metal/cast_iron_rod` })

	//#endregion


	// #region Удаление рецептов
	event.remove({ id: 'tfc:quern/amethyst' })
	event.remove({ id: 'tfc:quern/amethyst_cut' })
	event.remove({ id: 'tfc:quern/blaze_rod' })
	event.remove({ id: 'tfc:quern/borax' })
	event.remove({ id: 'tfc:quern/charcoal' })
	event.remove({ id: 'tfc:quern/cinnabar' })
	event.remove({ id: 'tfc:quern/cryolite' })
	event.remove({ id: 'tfc:quern/diamond' })
	event.remove({ id: 'tfc:quern/diamond_cut' })
	event.remove({ id: 'tfc:quern/emerald' })
	event.remove({ id: 'tfc:quern/emerald_cut' })
	event.remove({ id: 'tfc:quern/graphite' })
	event.remove({ id: 'tfc:quern/lapis_lazuli' })
	event.remove({ id: 'tfc:quern/lapis_lazuli_cut' })
	event.remove({ id: 'tfc:quern/normal_bismuthinite' })
	event.remove({ id: 'tfc:quern/normal_cassiterite' })
	event.remove({ id: 'tfc:quern/normal_garnierite' })
	event.remove({ id: 'tfc:quern/normal_hematite' })
	event.remove({ id: 'tfc:quern/normal_limonite' })
	event.remove({ id: 'tfc:quern/normal_magnetite' })
	event.remove({ id: 'tfc:quern/normal_malachite' })
	event.remove({ id: 'tfc:quern/normal_native_copper' })
	event.remove({ id: 'tfc:quern/normal_native_gold' })
	event.remove({ id: 'tfc:quern/normal_native_silver' })
	event.remove({ id: 'tfc:quern/normal_sphalerite' })
	event.remove({ id: 'tfc:quern/normal_tetrahedrite' })
	event.remove({ id: 'tfc:quern/opal' })
	event.remove({ id: 'tfc:quern/opal_cut' })
	event.remove({ id: 'tfc:quern/poor_bismuthinite' })
	event.remove({ id: 'tfc:quern/poor_cassiterite' })
	event.remove({ id: 'tfc:quern/poor_garnierite' })
	event.remove({ id: 'tfc:quern/poor_hematite' })
	event.remove({ id: 'tfc:quern/poor_limonite' })
	event.remove({ id: 'tfc:quern/poor_magnetite' })
	event.remove({ id: 'tfc:quern/poor_malachite' })
	event.remove({ id: 'tfc:quern/poor_native_copper' })
	event.remove({ id: 'tfc:quern/poor_native_gold' })
	event.remove({ id: 'tfc:quern/poor_native_silver' })
	event.remove({ id: 'tfc:quern/poor_sphalerite' })
	event.remove({ id: 'tfc:quern/poor_tetrahedrite' })
	event.remove({ id: 'tfc:quern/pyrite' })
	event.remove({ id: 'tfc:quern/pyrite_cut' })
	event.remove({ id: 'tfc:quern/raw_limestone' })
	event.remove({ id: 'tfc:quern/rich_bismuthinite' })
	event.remove({ id: 'tfc:quern/rich_cassiterite' })
	event.remove({ id: 'tfc:quern/rich_garnierite' })
	event.remove({ id: 'tfc:quern/rich_hematite' })
	event.remove({ id: 'tfc:quern/rich_limonite' })
	event.remove({ id: 'tfc:quern/rich_magnetite' })
	event.remove({ id: 'tfc:quern/rich_malachite' })
	event.remove({ id: 'tfc:quern/rich_native_copper' })
	event.remove({ id: 'tfc:quern/rich_native_gold' })
	event.remove({ id: 'tfc:quern/rich_native_silver' })
	event.remove({ id: 'tfc:quern/rich_sphalerite' })
	event.remove({ id: 'tfc:quern/rich_tetrahedrite' })
	event.remove({ id: 'tfc:quern/ruby' })
	event.remove({ id: 'tfc:quern/ruby_cut' })
	event.remove({ id: 'tfc:quern/salt' })
	event.remove({ id: 'tfc:quern/saltpeter' })
	event.remove({ id: 'tfc:quern/sapphire' })
	event.remove({ id: 'tfc:quern/sapphire_cut' })
	event.remove({ id: 'tfc:quern/sulfur' })
	event.remove({ id: 'tfc:quern/topaz' })
	event.remove({ id: 'tfc:quern/topaz_cut' })
	//#endregion

	//#region Удаление рецептов лопастей ветряной мельницы

	event.remove({ id: `tfc:crafting/windmill_blade` })
	event.remove({ id: `tfc:barrel/dye/bleach_windmill_blades` })
	event.remove({ id: 'tfc:barrel/fresh_to_salt_water' })

	global.MINECRAFT_DYE_NAMES.forEach(dye => {
		event.remove({ id: `tfc:barrel/dye/${dye}_windmill_blade` })
	})

	//#endregion

	// Другое
	event.remove({ id: `tfc:crafting/trip_hammer` })
	event.remove({ id: `tfc:anvil/steel_pump` })
	event.remove({ id: `tfc:anvil/brass_mechanisms` })
	event.remove({ id: `tfc:crafting/steel_pump` })
	event.remove({ id: `tfc:crafting/crankshaft` })
	event.remove({ id: 'tfc:crafting/sandpaper' })
	event.remove({ id: 'tfc:crafting/vanilla/redstone/observer' })

	event.remove({ id: 'tfc:crafting/vanilla/redstone/steel_minecart' })
	event.remove({ id: 'tfc:crafting/vanilla/redstone/minecart' })
	event.remove({ id: 'tfc:crafting/cake' })
	event.remove({ id: 'tfc:crafting/pumpkin_chunks' })
	event.remove({ id: 'tfc:crafting/alabaster_brick' })

	event.remove({ id: /^tfc:crafting\/dough\/.*/ })
	event.remove({ id: 'tfc:heating/destroy_bread' })

	event.remove({ id: 'tfc:crafting/gunpowder_graphite' })
	event.remove({ id: 'tfc:crafting/gunpowder' })
	
	event.remove({ output: 'tfc:rustic_windmill_blade'})
	event.remove({ output: 'tfc:lattice_windmill_blade'})
	event.remove({ id: 'tfchotornot:heating/insulating_items'})
}
