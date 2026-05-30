// priority: 0
"use strict";

function removeMinecraftRecipes(event) {
	
	// Everything in this array is stuff that we don't want, but needs to exist
	// for technical reasons, and causes problems if we remove through reliable remover
	global.MINECRAFT_HIDED_ITEMS.forEach(item => {
		event.remove({ input: item })
		event.remove({ output: item })
	})


	global.MINECRAFT_COPPER_BLOCKS_RECIPE_COMPONENTS.forEach(element => {
		const blockId = element.block.split(':')[1]
		const cuttedId = element.cutted.split(':')[1]
		const stairsId = element.stairs.split(':')[1]
		const slabsId = element.slabs.split(':')[1]

		event.remove({ id: `minecraft:${cuttedId}_from_${blockId}_stonecutting` })
		event.remove({ id: `minecraft:${stairsId}_from_${blockId}_stonecutting` })
		event.remove({ id: `minecraft:${slabsId}_from_${blockId}_stonecutting` })
	})

	event.remove({ id: 'gtceu:shaped/smithing_table' })
	event.remove({ id: 'gtceu:assembler/smithing_table' })

	event.remove({ id: 'gtceu:assembler/end_rod' })
		
	event.remove({ id: 'gtceu:shaped/comparator_quartzite' })
	event.remove({ id: 'gtceu:shaped/comparator_certus' })

	event.remove({ id: 'gtceu:assembler/tripwire_hook_wrought_iron' })
	event.remove({ id: 'gtceu:assembler/tripwire_hook_iron' })

	event.remove({ id: 'gtceu:assembler/furnace_minecart' })

	event.remove({ id: 'gtceu:shaped/saddle' })

	event.remove({ id: 'gtceu:bender/bucket' })
	event.remove({ id: 'gtceu:shaped/iron_bucket' })

	event.remove({ id: 'gtceu:assembler/hopper_iron' })

	event.remove({ id: 'gtceu:shaped/piston_titanium' })
	event.remove({ id: 'gtceu:shaped/piston_steel' })
	event.remove({ id: 'gtceu:shaped/piston_bronze' })
	event.remove({ id: 'gtceu:shaped/piston_aluminium' })

	event.remove({ id: 'gtceu:assembler/piston_titanium' })
	event.remove({ id: 'gtceu:assembler/piston_steel' })
	event.remove({ id: 'gtceu:assembler/piston_iron' })
	event.remove({ id: 'gtceu:assembler/piston_bronze' })
	event.remove({ id: 'gtceu:assembler/piston_aluminium' })

	event.remove({ id: 'gtceu:assembler/lead' })
	event.remove({ id: 'gtceu:shaped/torch_creosote' })

	event.remove({ id: "gtceu:assembler/iron_trapdoor" })
	event.remove({ id: "gtceu:compressor/purpur_block" })
	event.remove({ id: "gtceu:shaped/purpur_slab_saw" })
}
