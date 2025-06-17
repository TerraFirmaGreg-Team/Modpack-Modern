function registerTFGSpaceBlocks(event) {

	// Dimension markers

	event.create('tfg:marker/moon')
		.stoneSoundType()
		.item(item => {
			item.modelJson({ parent: 'tfg:block/marker/moon' })
		})
		.tagBlock('minecraft:mineable/pickaxe')
		.fullBlock(true)
		.opaque(true)

	event.create('tfg:marker/mars')
		.stoneSoundType()
		.item(item => {
			item.modelJson({ parent: 'tfg:block/marker/mars' })
		})
		.tagBlock('minecraft:mineable/pickaxe')
		.fullBlock(true)
		.opaque(true)

	event.create('tfg:marker/venus')
		.stoneSoundType()
		.item(item => {
			item.modelJson({ parent: 'tfg:block/marker/venus' })
		})
		.tagBlock('minecraft:mineable/pickaxe')
		.fullBlock(true)
		.opaque(true)

	event.create('tfg:marker/mercury')
		.stoneSoundType()
		.item(item => {
			item.modelJson({ parent: 'tfg:block/marker/mercury' })
		})
		.tagBlock('minecraft:mineable/pickaxe')
		.fullBlock(true)
		.opaque(true)

	// Hardened stones

	event.create('tfg:rock/hardened_moon_stone')
		.stoneSoundType()
		.requiresTool(true)
		.item(item => {
			item.modelJson({ parent: 'ad_astra:item/moon_stone' })
		})
		.tagBlock('tfc:can_carve')
		.tagBoth('forge:stone')
		.tagBoth('tfc:rock/hardened')
		.tagBlock('minecraft:mineable/pickaxe')
		.mapColor('terracotta_cyan')
		.fullBlock(true)
		.opaque(true)

	event.create('tfg:rock/hardened_moon_deepslate')
		.soundType('deepslate')
		.requiresTool(true)
		.item(item => {
			item.modelJson({ parent: 'ad_astra:item/moon_deepslate' })
		})
		.tagBlock('tfc:can_carve')
		.tagBoth('forge:stone')
		.tagBoth('tfc:rock/hardened')
		.tagBlock('minecraft:mineable/pickaxe')
		.mapColor('terracotta_blue')
		.fullBlock(true)
		.opaque(true)

	event.create('tfg:rock/hardened_mars_stone')
		.stoneSoundType()
		.requiresTool(true)
		.item(item => {
			item.modelJson({ parent: 'ad_astra:item/mars_stone' })
		})
		.tagBlock('tfc:can_carve')
		.tagBoth('forge:stone')
		.tagBoth('tfc:rock/hardened')
		.tagBlock('minecraft:mineable/pickaxe')
		.mapColor('terracotta_orange')
		.fullBlock(true)
		.opaque(true)

	event.create('tfg:rock/hardened_venus_stone')
		.stoneSoundType()
		.requiresTool(true)
		.item(item => {
			item.modelJson({ parent: 'ad_astra:item/venus_stone' })
		})
		.tagBlock('tfc:can_carve')
		.tagBoth('forge:stone')
		.tagBoth('tfc:rock/hardened')
		.tagBlock('minecraft:mineable/pickaxe')
		.mapColor('terracotta_yellow')
		.fullBlock(true)
		.opaque(true)

	event.create('tfg:rock/hardened_mercury_stone')
		.stoneSoundType()
		.requiresTool(true)
		.item(item => {
			item.modelJson({ parent: 'ad_astra:item/mercury_stone' })
		})
		.tagBlock('tfc:can_carve')
		.tagBoth('forge:stone')
		.tagBoth('tfc:rock/hardened')
		.tagBlock('minecraft:mineable/pickaxe')
		.mapColor('terracotta_purple')
		.fullBlock(true)
		.opaque(true)

	event.create('tfg:rock/hardened_glacio_stone')
		.stoneSoundType()
		.requiresTool(true)
		.item(item => {
			item.modelJson({ parent: 'ad_astra:item/glacio_stone' })
		})
		.tagBlock('tfc:can_carve')
		.tagBoth('forge:stone')
		.tagBoth('tfc:rock/hardened')
		.tagBlock('minecraft:mineable/pickaxe')
		.mapColor('terracotta_light_blue')
		.fullBlock(true)
		.opaque(true)

	// Loose stones

	event.create('tfg:loose/moon_stone', 'tfc:loose_rock')
		.stoneSoundType()
		.itemTexture('tfg:item/loose/moon_stone')
		.tagBlock('tfc:loose_rocks')
		.tagItem('tfc:any_knapping')
		.tagItem('tfc:rock_knapping')
		.tagItem('tfc:igneous_intrusive_rock')

	event.create('tfg:loose/moon_deepslate', 'tfc:loose_rock')
		.soundType('deepslate')
		.itemTexture('tfg:item/loose/moon_deepslate')
		.tagBlock('tfc:loose_rocks')
		.tagItem('tfc:any_knapping')
		.tagItem('tfc:rock_knapping')
		.tagItem('tfc:igneous_intrusive_rock')

	event.create('tfg:loose/mars_stone', 'tfc:loose_rock')
		.stoneSoundType()
		.itemTexture('tfg:item/loose/mars_stone')
		.tagBlock('tfc:loose_rocks')
		.tagItem('tfc:any_knapping')
		.tagItem('tfc:rock_knapping')
		.tagItem('tfc:sedimentary_rock')

	event.create('tfg:loose/venus_stone', 'tfc:loose_rock')
		.stoneSoundType()
		.itemTexture('tfg:item/loose/venus_stone')
		.tagBlock('tfc:loose_rocks')
		.tagItem('tfc:any_knapping')
		.tagItem('tfc:rock_knapping')
		.tagItem('tfc:igneous_extrusive_rock')

	event.create('tfg:loose/mercury_stone', 'tfc:loose_rock')
		.stoneSoundType()
		.itemTexture('tfg:item/loose/mercury_stone')
		.tagBlock('tfc:loose_rocks')
		.tagItem('tfc:any_knapping')
		.tagItem('tfc:rock_knapping')
		.tagItem('tfc:igneous_intrusive_rock')

	event.create('tfg:loose/glacio_stone', 'tfc:loose_rock')
		.stoneSoundType()
		.itemTexture('tfg:item/loose/glacio_stone')
		.tagBlock('tfc:loose_rocks')
		.tagItem('tfc:any_knapping')
		.tagItem('tfc:rock_knapping')
		.tagItem('tfc:igneous_extrusive_rock')

	event.create('tfg:loose/permafrost', 'tfc:loose_rock')
		.stoneSoundType()
		.itemTexture('tfg:item/loose/permafrost')
		.tagBlock('tfc:loose_rocks')
		.tagItem('tfc:any_knapping')
		.tagItem('tfc:rock_knapping')
		.tagItem('tfc:metamorphic_rock')

	// Spikes

	event.create('tfg:spike/moon_stone_spike', 'tfc:rock_spike')
		.stoneSoundType()
		.noItem()

	event.create('tfg:spike/moon_deepslate_spike', 'tfc:rock_spike')
		.soundType('deepslate')
		.noItem()

	event.create('tfg:spike/mars_stone_spike', 'tfc:rock_spike')
		.stoneSoundType()
		.noItem()

	event.create('tfg:spike/venus_stone_spike', 'tfc:rock_spike')
		.stoneSoundType()
		.noItem()

	event.create('tfg:spike/mercury_stone_spike', 'tfc:rock_spike')
		.stoneSoundType()
		.noItem()

	event.create('tfg:spike/glacio_stone_spike', 'tfc:rock_spike')
		.stoneSoundType()
		.noItem()

	event.create('tfg:spike/permafrost_spike', 'tfc:rock_spike')
		.stoneSoundType()
		.noItem()
}