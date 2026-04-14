"use strict";

function registerTFGNewWoodBlocks(event) {
    global.TFG_NEW_WOOD_TYPES.forEach(wood => {
        TFGWoodRegistry(event, wood)
    })

    function TFGWoodRegistry(event, wood) {
        // Leaves, Fallen Leaves
        event.create(`tfg:wood/leaves/${wood.name}`, 'tfc:leaves')
		    .soundType(`${wood.leafSound}`)
		    .tagBlock('minecraft:mineable/hoe')
		    .mapColor(`${wood.leafColor}`)
		    .seasonalColors(false)
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

        // Saplings
        event.create(`tfg:wood/sapling/${wood.name}`, 'tfc:sapling')
            .features(`tfg:tree/${wood.name}`)
		    .tagBoth('minecraft:saplings')
		    .tagBlock('tfc:can_be_snow_piled')
		    .growthDays(wood.daysToGrow)
		    .defaultCutout()
		    .noCollision()
		    .mapColor(`${wood.leafColor}`)

        // Vertical Support / Horizontal Support
        event.create(`tfg:wood/support/${wood.name}`, 'tfc:support')
		    .textureAll(`tfg:block/wood/stripped_log/${wood.name}`)
		    .horizontal(horizontal => {
			    horizontal.textureAll(`tfg:block/wood/stripped_log/${wood.name}`)
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