/**
 * Function for replacing a block with another block by crouch-right-clicking with a tool.
 *
 * If input and output is null recipe will just return.
 *
 * @param {*} event
 * @param {string} inputBlock -Block ID to be replaced. Accepts a Tag, but not recommended.
 * @param {string} outputBlock -Block ID of the replacement.
 * @param {string} toolId -Item ID of the tool.
 * @param {boolean} damageTool -Sets wether the tool should be damaged on use.
 * @param {string} soundId -Sound ID to be used as the flair sound effect. Can be null.
 * @param {string} particleId -SimpleParticleType ID to be used as the flair particle. Can be null.
 * @param {boolean} copyBlockstate - Sets wether the blockstate should be copied from the input block to the output block.
 */
function transformBlockWithTool(event, inputBlock, outputBlock, toolId, damageTool, soundId, particleId, copyBlockstate) {
	const { server, item, player, block } = event;

	if (!inputBlock || !outputBlock) return;

	if (inputBlock.startsWith('#')) {
		if (!block.hasTag(inputBlock.substring(1))) return;
	} else {
		if (block.id.toString() !== inputBlock) return;
	}

	if (toolId.startsWith('#')) {
		if (item.isEmpty() || !player.mainHandItem.hasTag(toolId.substring(1))) return;
	} else {
		if (item.isEmpty() || player.mainHandItem.id !== toolId) return;
	}

	if (!player.crouching) return;

	let state = block.getBlockState().toString();
	if (state.includes('[') && copyBlockstate === true) {
		state = state.substring(state.indexOf('['));
	} else {
		state = '';
	}

	if (soundId) {
		server.runCommandSilent(`playsound ${soundId} player ${player.username} ${player.x} ${player.y} ${player.z} 1 2 1`)
	}
	if (particleId) {
		server.runCommandSilent(`particle ${particleId} ${block.x} ${block.y + 0.8} ${block.z} 0.1 0.1 0.1 0.6 10`)
	}
	player.swing();

	if (!player.isCreative() && damageTool) {
		item.damageValue++;
		if (item.damageValue >= item.maxDamage) {
			server.runCommandSilent(`playsound minecraft:item.shield.break player ${player.username} ${player.x} ${player.y} ${player.z} 1 1 1`);
			item.count--;
		}
	}

	const dim = block.level.name.getString();
	server.runCommandSilent(`execute in ${dim} run fill ${block.x} ${block.y} ${block.z} ${block.x} ${block.y} ${block.z} air`);
	server.runCommandSilent(`execute in ${dim} run setblock ${block.x} ${block.y} ${block.z} ${outputBlock}${state}`);
};

/**
 * Function for replacing a block with another block by crouch-right-clicking with a tool and receiving an item.
 *
 * If input and output is null recipe will just return.
 *
 * @param {*} event
 * @param {string} inputBlock -Block ID to be replaced. Accepts a Tag, but not recommended.
 * @param {string} outputBlock -Block ID of the replacement.
 * @param {string} outputItem -Item ID of item to receive
 * @param {number} outputCount -Number of items to be returned
 * @param {string} toolId -Item ID of the tool.
 * @param {boolean} damageTool -Sets wether the tool should be damaged on use.
 * @param {string} soundId -Sound ID to be used as the flair sound effect. Can be null.
 * @param {string} particleId -SimpleParticleType ID to be used as the flair particle. Can be null.
 * @param {boolean} copyBlockstate - Sets wether the blockstate should be copied from the input block to the output block.
 */
function transformBlockWithToolReturn(event, inputBlock, outputBlock, outputItem, outputCount, toolId, damageTool, soundId, particleId, copyBlockstate) {
	const { server, item, player, block } = event;

	if (!inputBlock || !outputBlock) return;

	if (inputBlock.startsWith('#')) {
		if (!block.hasTag(inputBlock.substring(1))) return;
	} else {
		if (block.id.toString() !== inputBlock) return;
	}
	if (!player.crouching) return;

	if (toolId.startsWith('#')) {
		if (item.isEmpty() || !player.mainHandItem.hasTag(toolId.substring(1))) return;
	} else {
		if (item.isEmpty() || player.mainHandItem.id !== toolId) return;
	}

	transformBlockWithTool(event, inputBlock, outputBlock, toolId, damageTool, soundId, particleId, copyBlockstate)
	
	const dim = block.level.name.getString();
	server.runCommandSilent(`execute in ${dim} run summon item ${player.x} ${player.y} ${player.z} {Item:{id:'${outputItem}', Count:${outputCount}b}}`);

}
/**
 * Function for replacing a block with another block by crouch-right-clicking with an item.
 *
 * If input and output is null recipe will just return.
 *
 * @param {*} event
 * @param {string} inputBlock -Block ID to be replaced. Accepts a Tag, but not recommended.
 * @param {string} outputBlock -Block ID of the replacement.
 * @param {string} itemId -Item ID of the consumed item. Accepts Tags.
 * @param {boolean} consumeItem -Sets wether the item should be comsumed or not.
 * @param {number} consumeAmount -Number of items to consume, can't be greater than stacksize.
 * @param {string} soundId -Sound ID to be used as the flair sound effect. Can be null.
 * @param {string} particleId -SimpleParticleType ID to be used as the flair particle. Can be null.
 * @param {boolean} copyBlockstate - Sets wether the blockstate should be copied from the input block to the output block.
 */
function transformBlockWithItem(event, inputBlock, outputBlock, itemId, consumeItem, consumeAmount, soundId, particleId, copyBlockstate) {
	const { server, item, player, block } = event;

	if (!inputBlock || !outputBlock) return;

	if (inputBlock.startsWith('#')) {
		if (!block.hasTag(inputBlock.substring(1))) return;
	} else {
		if (block.id.toString() !== inputBlock) return;
	}

	if (itemId.startsWith('#')) {
		if (item.isEmpty() || !player.mainHandItem.hasTag(itemId.substring(1))) return;
	} else {
		if (item.isEmpty() || player.mainHandItem.id !== itemId) return;
	}
	if (!player.crouching) return;

	let state = block.getBlockState().toString()
	if (state.includes('[') && copyBlockstate === true) {
		state = state.substring(block.getBlockState().toString().indexOf('['));
	} else {
		state = ''
	}

	if (!player.isCreative() && consumeItem === true) {
		if (item.count < consumeAmount) {
			player.tell(`Item count is too low. Held amount = ${item.count}, required amount = ${consumeAmount}`)
			return;
		}
		item.count -= consumeAmount;
	}
	if (soundId) {
		server.runCommandSilent(`playsound ${soundId} player ${player.username} ${player.x} ${player.y} ${player.z} 1 2 1`)
	}
	if (particleId) {
		server.runCommandSilent(`particle ${particleId} ${block.x} ${block.y + 0.8} ${block.z} 0.1 0.1 0.1 0.6 10`)
	}
	player.swing()
	event.server.runCommandSilent(`execute in ${event.block.level.name.getString()} run fill ${block.x} ${block.y} ${block.z} ${block.x} ${block.y} ${block.z} air`)
	event.server.runCommandSilent(`execute in ${event.block.level.name.getString()} run setblock ${block.x} ${block.y} ${block.z} ${outputBlock}${state}`)
};

// ================================================
// Looking to add a recipe to JEI? It's in TFG-Core
// ================================================

// Declare Events
BlockEvents.rightClicked(event => {
	//Brick index events
	for (let [rockId, rock] of Object.entries(global.BIG_ROCK_TABLE)) {
		if (rock.bricks != null) {
			if (rock.bricks.cracked != null) {
				//brick -> cracked
				transformBlockWithTool(event, rock.bricks.block, rock.bricks.cracked.block, '#forge:tools/hammers', true, 'minecraft:block.copper.hit', 'minecraft:crit', true);
				transformBlockWithTool(event, rock.bricks.stair, rock.bricks.cracked.stair, '#forge:tools/hammers', true, 'minecraft:block.copper.hit', 'minecraft:crit', true);
				transformBlockWithTool(event, rock.bricks.slab, rock.bricks.cracked.slab, '#forge:tools/hammers', true, 'minecraft:block.copper.hit', 'minecraft:crit', true);
				transformBlockWithTool(event, rock.bricks.wall, rock.bricks.cracked.wall, '#forge:tools/hammers', true, 'minecraft:block.copper.hit', 'minecraft:crit', true);
				//cracked -> brick
				transformBlockWithItem(event, rock.bricks.cracked.block, rock.bricks.block, 'tfc:mortar', true, 1, 'minecraft:item.ink_sac.use', 'minecraft:effect', true);
				transformBlockWithItem(event, rock.bricks.cracked.stair, rock.bricks.stair, 'tfc:mortar', true, 1, 'minecraft:item.ink_sac.use', 'minecraft:effect', true);
				transformBlockWithItem(event, rock.bricks.cracked.slab, rock.bricks.slab, 'tfc:mortar', true, 1, 'minecraft:item.ink_sac.use', 'minecraft:effect', true);
				transformBlockWithItem(event, rock.bricks.cracked.wall, rock.bricks.wall, 'tfc:mortar', true, 1, 'minecraft:item.ink_sac.use', 'minecraft:effect', true);
			}
			if (rock.bricks.mossy != null) {
				//brick -> mossy
				transformBlockWithItem(event, rock.bricks.block, rock.bricks.mossy.block, '#tfc:compost_greens_low', true, 1, 'minecraft:block.moss.hit', 'minecraft:item_slime', true);
				transformBlockWithItem(event, rock.bricks.stair, rock.bricks.mossy.stair, '#tfc:compost_greens_low', true, 1, 'minecraft:block.moss.hit', 'minecraft:item_slime', true);
				transformBlockWithItem(event, rock.bricks.slab, rock.bricks.mossy.slab, '#tfc:compost_greens_low', true, 1, 'minecraft:block.moss.hit', 'minecraft:item_slime', true);
				transformBlockWithItem(event, rock.bricks.wall, rock.bricks.mossy.wall, '#tfc:compost_greens_low', true, 1, 'minecraft:block.moss.hit', 'minecraft:item_slime', true);
				//mossy -> brick
				transformBlockWithTool(event, rock.bricks.mossy.block, rock.bricks.block, '#forge:tools/knives', true, 'minecraft:item.axe.wax_off', 'minecraft:item_slime', true);
				transformBlockWithItem(event, rock.bricks.mossy.block, rock.bricks.block, 'tfc:groundcover/pumice', true, 1, 'minecraft:item.axe.wax_off', 'minecraft:item_slime', true);
				transformBlockWithTool(event, rock.bricks.mossy.stair, rock.bricks.stair, '#forge:tools/knives', true, 'minecraft:item.axe.wax_off', 'minecraft:item_slime', true);
				transformBlockWithItem(event, rock.bricks.mossy.stair, rock.bricks.stair, 'tfc:groundcover/pumice', true, 1, 'minecraft:item.axe.wax_off', 'minecraft:item_slime', true);
				transformBlockWithTool(event, rock.bricks.mossy.slab, rock.bricks.slab, '#forge:tools/knives', true, 'minecraft:item.axe.wax_off', 'minecraft:item_slime', true);
				transformBlockWithItem(event, rock.bricks.mossy.slab, rock.bricks.slab, 'tfc:groundcover/pumice', true, 1, 'minecraft:item.axe.wax_off', 'minecraft:item_slime', true);
				transformBlockWithTool(event, rock.bricks.mossy.wall, rock.bricks.wall, '#forge:tools/knives', true, 'minecraft:item.axe.wax_off', 'minecraft:item_slime', true);
				transformBlockWithItem(event, rock.bricks.mossy.wall, rock.bricks.wall, 'tfc:groundcover/pumice', true, 1, 'minecraft:item.axe.wax_off', 'minecraft:item_slime', true);
			}
			if (rock.bricks.cracked != null && rock.bricks.mossy != null) {
				//cracked -> mossy
				transformBlockWithItem(event, rock.bricks.cracked.block, rock.bricks.mossy.block, '#tfc:compost_greens_low', true, 1, 'minecraft:block.moss.hit', 'minecraft:item_slime', true);
				transformBlockWithItem(event, rock.bricks.cracked.stair, rock.bricks.mossy.stair, '#tfc:compost_greens_low', true, 1, 'minecraft:block.moss.hit', 'minecraft:item_slime', true);
				transformBlockWithItem(event, rock.bricks.cracked.slab, rock.bricks.mossy.slab, '#tfc:compost_greens_low', true, 1, 'minecraft:block.moss.hit', 'minecraft:item_slime', true);
				transformBlockWithItem(event, rock.bricks.cracked.wall, rock.bricks.mossy.wall, '#tfc:compost_greens_low', true, 1, 'minecraft:block.moss.hit', 'minecraft:item_slime', true);
				//mossy -> cracked
				transformBlockWithTool(event, rock.bricks.mossy.block, rock.bricks.cracked.block, '#forge:tools/hammers', true, 'minecraft:block.copper.hit', 'minecraft:crit', true);
				transformBlockWithTool(event, rock.bricks.mossy.stair, rock.bricks.cracked.stair, '#forge:tools/hammers', true, 'minecraft:block.copper.hit', 'minecraft:crit', true);
				transformBlockWithTool(event, rock.bricks.mossy.slab, rock.bricks.cracked.slab, '#forge:tools/hammers', true, 'minecraft:block.copper.hit', 'minecraft:crit', true);
				transformBlockWithTool(event, rock.bricks.mossy.wall, rock.bricks.cracked.wall, '#forge:tools/hammers', true, 'minecraft:block.copper.hit', 'minecraft:crit', true);
			}
			if (rock.polished != null) {
				// brick -> smooth
				transformBlockWithTool(event, rock.bricks.block, rock.polished.block, '#create:sandpaper', true, 'create:sanding_short', 'minecraft:crit', true);
				if (rock.bricks.mossy != null) {
					transformBlockWithTool(event, rock.bricks.mossy.block, rock.polished.block, '#create:sandpaper', true, 'create:sanding_short', 'minecraft:crit', true);
				}
				if (rock.bricks.cracked != null) {
					transformBlockWithTool(event, rock.bricks.cracked.block, rock.polished.block, '#create:sandpaper', true, 'create:sanding_short', 'minecraft:crit', true);
				}
			}
		}
		if (rock.cobble != null && rock.cobble.mossy) {
			//cobble -> mossy
			transformBlockWithItem(event, rock.cobble.block, rock.cobble.mossy.block, '#tfc:compost_greens_low', true, 1, 'minecraft:block.moss.hit', 'minecraft:item_slime', true);
			transformBlockWithItem(event, rock.cobble.stair, rock.cobble.mossy.stair, '#tfc:compost_greens_low', true, 1, 'minecraft:block.moss.hit', 'minecraft:item_slime', true);
			transformBlockWithItem(event, rock.cobble.slab, rock.cobble.mossy.slab, '#tfc:compost_greens_low', true, 1, 'minecraft:block.moss.hit', 'minecraft:item_slime', true);
			transformBlockWithItem(event, rock.cobble.wall, rock.cobble.mossy.wall, '#tfc:compost_greens_low', true, 1, 'minecraft:block.moss.hit', 'minecraft:item_slime', true);
			//mossy -> cobble
			transformBlockWithTool(event, rock.cobble.mossy.block, rock.cobble.block, '#forge:tools/knives', true, 'minecraft:item.axe.wax_off', 'minecraft:item_slime', true);
			transformBlockWithItem(event, rock.cobble.mossy.block, rock.cobble.block, 'tfc:groundcover/pumice', true, 1, 'minecraft:item.axe.wax_off', 'minecraft:item_slime', true);
			transformBlockWithTool(event, rock.cobble.mossy.stair, rock.cobble.stair, '#forge:tools/knives', true, 'minecraft:item.axe.wax_off', 'minecraft:item_slime', true);
			transformBlockWithItem(event, rock.cobble.mossy.stair, rock.cobble.stair, 'tfc:groundcover/pumice', true, 1, 'minecraft:item.axe.wax_off', 'minecraft:item_slime', true);
			transformBlockWithTool(event, rock.cobble.mossy.slab, rock.cobble.slab, '#forge:tools/knives', true, 'minecraft:item.axe.wax_off', 'minecraft:item_slime', true);
			transformBlockWithItem(event, rock.cobble.mossy.slab, rock.cobble.slab, 'tfc:groundcover/pumice', true, 1, 'minecraft:item.axe.wax_off', 'minecraft:item_slime', true);
			transformBlockWithTool(event, rock.cobble.mossy.wall, rock.cobble.wall, '#forge:tools/knives', true, 'minecraft:item.axe.wax_off', 'minecraft:item_slime', true);
			transformBlockWithItem(event, rock.cobble.mossy.wall, rock.cobble.wall, 'tfc:groundcover/pumice', true, 1, 'minecraft:item.axe.wax_off', 'minecraft:item_slime', true);
		}
	}
		
	//Misc Events
	transformBlockWithItem(event, 'gtceu:incoloy_ma_956_frame', 'tfg:glacian_wool_frame', 'tfg:glacian_wool', true, 2, 'block.wool.place', 'minecraft:happy_villager', true);
	transformBlockWithToolReturn(event, 'tfg:glacian_wool_frame', 'gtceu:incoloy_ma_956_frame', 'tfg:glacian_wool', 2,'#forge:tools/wire_cutters', true, 'minecraft:block.beehive.shear', 'minecraft:crit', true);

	transformBlockWithItem(event, 'gtceu:incoloy_ma_956_frame', 'tfg:aes_insulation_frame', 'tfg:aes_insulation_roll', true, 1, 'block.wool.place', 'minecraft:happy_villager', true);
	transformBlockWithToolReturn(event, 'tfg:aes_insulation_frame', 'gtceu:incoloy_ma_956_frame', 'tfg:aes_insulation_roll', 1, '#forge:tools/wire_cutters', true, 'minecraft:block.beehive.shear', 'minecraft:crit', true);

	transformBlockWithItem(event, 'gtceu:incoloy_ma_956_frame', 'tfg:moderate_core_frame', 'tfg:graphite_moderator', true, 1, 'block.wool.place', 'minecraft:happy_villager', true);
	transformBlockWithToolReturn(event, 'tfg:moderate_core_frame', 'gtceu:incoloy_ma_956_frame', 'tfg:graphite_moderator', 1, '#forge:tools/wire_cutters', true, 'minecraft:block.beehive.shear', 'minecraft:crit', true);

	transformBlockWithItem(event, 'gtceu:incoloy_ma_956_frame', 'tfg:impure_moderate_core_frame', 'tfg:impure_graphite_moderator', true, 1, 'block.wool.place', 'minecraft:happy_villager', true);
	transformBlockWithToolReturn(event, 'tfg:impure_moderate_core_frame', 'gtceu:incoloy_ma_956_frame', 'tfg:impure_graphite_moderator', 1, '#forge:tools/wire_cutters', true, 'minecraft:block.beehive.shear', 'minecraft:crit', true);

	transformBlockWithItem(event, 'gtceu:incoloy_ma_956_frame', 'tfg:copper_sandy_frame', 'tfg:copper_sandy', true, 1, 'block.wool.place', 'minecraft:happy_villager', true);
	transformBlockWithToolReturn(event, 'tfg:copper_sandy_frame', 'gtceu:incoloy_ma_956_frame', 'tfg:copper_sandy', 1, '#forge:tools/wire_cutters', true, 'minecraft:block.beehive.shear', 'minecraft:crit', true);

	transformBlockWithItem(event, 'gtceu:incoloy_ma_956_frame', 'tfg:beryllium_sandy_frame', 'tfg:beryllium_sandy', true, 1, 'block.wool.place', 'minecraft:happy_villager', true);
	transformBlockWithToolReturn(event, 'tfg:beryllium_sandy_frame', 'gtceu:incoloy_ma_956_frame', 'tfg:beryllium_sandy', 1, '#forge:tools/wire_cutters', true, 'minecraft:block.beehive.shear', 'minecraft:crit', true);

});

// Makes scythes, hoes, and knives take damage when cutting grass
BlockEvents.broken(event => {
	const { server, item, player, block } = event;

	let toolUsed = player.mainHandItem;
	
	if (!block.hasTag('tfc:mineable_with_sharp_tool') || !toolUsed.hasTag('tfc:sharp_tools')) {
		return;
	}

	if (!player.isCreative()) {
		toolUsed.damageValue++;
		if (toolUsed.damageValue >= toolUsed.maxDamage) {
			server.runCommandSilent(`playsound minecraft:item.shield.break player ${player.username} ${player.x} ${player.y} ${player.z} 1 1 1`);
			toolUsed.count--;
		}
	}
});
