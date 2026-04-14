"use strict";

function registerTFGNewWoodBlocks(event) {
    global.TFG_NEW_WOOD_TYPES(wood => {
        TFGWoodRegistry(event, wood)
    })

    function TFGWoodRegistry(event, wood) {
        // Log
        event.create(`tfg:${wood.name}_log`, 'tfc:log')
		    .tagBoth('minecraft:logs')
            .tagItem('minecraft:logs_that_burn')
            .tagItem(`tfg:${wood.name}_logs`)
            .tagBlock('minecraft:mineable/axe')
		    .soundType(`${wood.woodSound}`)
		    .mapColor(`${wood.barkColor}`)
		    .stripped(stripped => {
			    stripped.tagBoth('minecraft:logs')
			        .tagBoth('minecraft:logs')
			        .tagItem('minecraft:logs_that_burn')
                    .tagItem(`tfg:${wood.name}_logs`)
			        .tagBlock('minecraft:mineable/axe')
			        .soundType(`${wood.woodSound}`)
		})
        
        // Wood
        event.create(`tfg:${wood.name}_wood`, 'tfc:log')
		    .tagBoth('minecraft:logs')
		    .tagItem('minecraft:logs_that_burn')
            .tagItem(`tfg:${wood.name}_logs`)
		    .tagBlock('minecraft:mineable/axe')
		    .soundType(`${wood.woodSound}`)
		    .mapColor(`${wood.barkColor}`)
		    .stripped(stripped => {
			    stripped.tagBoth('minecraft:logs')
                    .tagBoth('minecraft:logs')
			        .tagItem('minecraft:logs_that_burn')
                    .tagItem(`tfg:${wood.name}_logs`)
			        .tagBlock('minecraft:mineable/axe')
			        .soundType(`${wood.woodSound}`)
		})

        // Leaves, Fallen Leaves
        event.create(`tfg:wood/leaves/${wood.name}`, 'tfc:leaves')
		    .soundType(`${wood.leafSound}`)
		    .tagBlock('minecraft:mineable/hoe')
		    .mapColor(`${wood.leafColor}`)
		    .seasonalColors(false)
		    .fallenLeaves(leaves => {
			    leaves.noCollision()
			        .notSolid()
			        .defaultCutout()
			        .soundType(`${wood.leafSound}`)
			        .tagBlock('minecraft:mineable/hoe')
			        .tagBlock('minecraft:replaceable')
			        .noDynamicTinting()
			        .models((modelType, generator) => {
				if (modelType.layers != 8) {
					generator.parent(`tfc:block/groundcover/fallen_leaves_height${modelType.height}`)
					    .texture("all", `tfg:block/wood/leaves/${wood.name}`);
				} else {
					generator.parent(`tfg:block/wood/leaves/${wood.name}`);
				}
			})
		})

        // Saplings
        event.create(`tfg:wood/saplings/${wood.name}`, 'tfc:sapling')
            .features(`tfg:tree/${wood.name}`)
		    .tagBoth('minecraft:saplings')
		    .tagBlock('tfc:can_be_snow_piled')
		    .growthDays(wood.daysToGrow)
		    .defaultCutout()
		    .noCollision()
		    .mapColor(wood.leafColor)

        // Vertical Support / Horizontal Support
        event.create(`tfg:wood/support/${name}`, 'tfc:support')
		    .textureAll(`tfg:block/wood/stripped_log/${name}`)
		    .horizontal(horizontal => {
			    horizontal.textureAll(`tfg:block/wood/stripped_log/${name}`)
                    .soundType(`${wood.woodSound}`)
			        .hardness(2)
			        .resistance(2)
			        .mapColor(wood.woodColor)
			        .tagBlock('minecraft:mineable/axe')
			        .requiresTool(false)
                })
            .soundType(`${wood.woodSound}`)
		    .hardness(2)
		    .resistance(2)
		    .mapColor(`${wood.woodColor}`)
		    .tagBlock('minecraft:mineable/axe')
		    .requiresTool(false)
    }
}