function registerWoodStructBlocks(event)
{
    global.getWoodStructArray().forEach(woodType =>
    {
        if(woodType.tfg_data)
        {
            TFGWoodLeavesRegistry(event, woodType);
            TFGWoodSaplingRegistry(event, woodType);
            TFGWoodSupportRegistry(event, woodType, global.woodStructHelpers.resLocFormat(woodType.modName, "block/{0}", ResourceLocation.parse(woodType.tree_data[0].log_data.stripped_log).path)); //This parse is fucking stupid but whatever
        }
    });

    function TFGWoodLeavesRegistry(event, wood) {
		event.create(`tfg:wood/leaves/${wood.name}`, 'tfc:leaves')
			.soundType(`${wood.tfg_data.leafSound}`)
			.tagBlock('minecraft:mineable/hoe')
			.tagBoth('minecraft:leaves')
			.defaultCutout()
			.noDynamicTinting()
			.twig(`tfg:wood/twig/${wood.name}`)
			.mapColor('plant')
			.hardness(0.5)
			.fallenLeaves(leaves => {
				leaves.noCollision()
				leaves.notSolid()
				leaves.defaultCutout()
				leaves.soundType(`${wood.tfg_data.leafSound}`)
				leaves.tagBlock('minecraft:mineable/hoe')
				leaves.tagBlock('minecraft:replaceable')
				leaves.noDynamicTinting()
				leaves.models((modelType, generator) => {
					if (modelType.layers != 8) {
						generator.parent(`tfc:block/groundcover/fallen_leaves_height${modelType.height}`)
						generator.texture("particle", `tfg:block/wood/leaves/${wood.name}`);
						generator.texture("all", `tfg:block/wood/leaves/${wood.name}`);
					} else {
						generator.parent(`tfg:block/wood/leaves/${wood.name}`);
					}
				})
			})
	}

	function TFGWoodSaplingRegistry(event, wood) {
		event.create(`tfg:wood/sapling/${wood.name}`, 'tfc:sapling')
			.soundType(`${wood.tfg_data.leafSound}`)
			.features(`tfg:${wood.tfg_data.location}/tree/${wood.name}_mini`)
			.tagBoth('minecraft:saplings')
			.growthDays(wood.tfg_data.daysToGrow)
			.defaultCutout()
			.noCollision()
			.mapColor(`${wood.tfg_data.leafColor}`)
			.hardness(0)
	}

	function TFGWoodSupportRegistry(event, wood, stripped_log) {
		console.log(`PENIS: ${stripped_log}`);
		event.create(`tfg:wood/support/${wood.name}`, 'tfc:support')
			.textureAll(`${stripped_log}`)
			.horizontal(horizontal => {
				horizontal.textureAll(stripped_log)
				horizontal.soundType(`${wood.tfg_data.woodSound}`)
				horizontal.hardness(2)
				horizontal.resistance(2)
				horizontal.mapColor(`${wood.tfg_data.woodColor}`)
				horizontal.tagBlock('minecraft:mineable/axe')
				horizontal.requiresTool(false)
			})
			.soundType(`${wood.tfg_data.woodSound}`)
			.hardness(2)
			.resistance(2)
			.mapColor(`${wood.tfg_data.woodColor}`)
			.tagBlock('minecraft:mineable/axe')
			.requiresTool(false)
	}
}