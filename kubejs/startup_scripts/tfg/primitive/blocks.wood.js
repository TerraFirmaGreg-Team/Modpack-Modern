"use strict";

function registerTFGNewWoodBlocks(event) {
    global.TFG_NEW_WOOD_TYPES.forEach(wood => {
        TFGWoodLeavesRegistry(event, wood)
		TFGWoodSaplingRegistry(event, wood)
		TFGWoodSupportRegistry(event, wood, `tfg:block/wood/stripped_log/${wood.name}`)
    })

	global.WAB_WOOD.forEach(wood => {
		TFGWoodLeavesRegistry(event, wood)
		TFGWoodSaplingRegistry(event, wood)
		TFGWoodSupportRegistry(event, wood, `wan_ancient_beasts:block/stripped_${wood.name}_log`)
	})

    function TFGWoodLeavesRegistry(event, wood) {
        event.create(`tfg:wood/leaves/${wood.name}`, 'tfc:leaves')
		    .soundType(`${wood.leafSound}`)
		    .tagBlock('minecraft:mineable/hoe')
		    .tagBoth('minecraft:leaves')
			.defaultCutout()
		    .noDynamicTinting()
			.twig(`tfg:wood/twig/${wood.name}`)
		    .fallenLeaves(leaves => {
			    leaves.noCollision()
			    leaves.notSolid()
			    leaves.defaultCutout()
			    leaves.soundType(`${wood.leafSound}`)
			    leaves.tagBlock('minecraft:mineable/hoe')
			    leaves.tagBlock('minecraft:replaceable')
			    leaves.noDynamicTinting()
			    leaves.models((modelType, generator) => {
				if (modelType.layers != 8) {
					generator.parent(`tfc:block/groundcover/fallen_leaves_height${modelType.height}`)
					generator.texture("all", `tfg:block/wood/leaves/${wood.name}`);
				} else {
					generator.parent(`tfg:block/wood/leaves/${wood.name}`);
				}
			})
		})
	}

	function TFGWoodSaplingRegistry(event, wood) {
        event.create(`tfg:wood/sapling/${wood.name}`, 'tfc:sapling')
			.soundType(`${wood.leafSound}`)
            .features(`tfg:${wood.location}/tree/${wood.name}_mini`)
		    .tagBoth('minecraft:saplings')
		    .tagBlock('tfc:can_be_snow_piled')
		    .growthDays(wood.daysToGrow)
		    .defaultCutout()
		    .noCollision()
		    .mapColor(`${wood.leafColor}`)
	}

    function TFGWoodSupportRegistry(event, wood, stripped_log) {
		event.create(`tfg:wood/support/${wood.name}`, 'tfc:support')
		    .textureAll(`${stripped_log}`)
		    .horizontal(horizontal => {
			    horizontal.textureAll(`${stripped_log}`)
                horizontal.soundType(`${wood.woodSound}`)
			    horizontal.hardness(2)
			    horizontal.resistance(2)
			    horizontal.mapColor(`${wood.woodColor}`)
			    horizontal.tagBlock('minecraft:mineable/axe')
			    horizontal.requiresTool(false)
                })
            .soundType(`${wood.woodSound}`)
		    .hardness(2)
		    .resistance(2)
		    .mapColor(`${wood.woodColor}`)
		    .tagBlock('minecraft:mineable/axe')
		    .requiresTool(false)
	}
}