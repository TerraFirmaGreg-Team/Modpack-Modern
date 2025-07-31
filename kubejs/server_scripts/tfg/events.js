"use strict";

//#region Medicine

    //Pills & Tablets
    const pill_event = [
        'haste',
        'luck',
        'night_vision',
        'poison',
        'regeneration',
        'slowness',
        'speed',
        'water_breathing',
        'weakness',
    ];

    pill_event.forEach(pill_event => {

        ItemEvents.rightClicked(event => {
            const {item,server,player,player:{x,y,z}} = event
            if (item.id !== `tfg:${pill_event}_pill`) return
            item.count--
            player.addItemCooldown(item, 100)
            server.runCommandSilent(`effect give ${player.username} minecraft:${pill_event} 480 0 true`)
            server.runCommandSilent(`playsound minecraft:item.honey_bottle.drink player ${player.username} ${x} ${y} ${z} 10 1.5 1`)
        });

        ItemEvents.rightClicked(event => {
            const {item,server,player,player:{x,y,z}} = event
            if (item.id !== `tfg:${pill_event}_tablet`) return
            item.count--
            player.addItemCooldown(item, 100)
            server.runCommandSilent(`effect give ${player.username} minecraft:${pill_event} 1800 0 true`)
            server.runCommandSilent(`playsound minecraft:item.honey_bottle.drink player ${player.username} ${x} ${y} ${z} 10 1.5 1`)
        });
    });

    ItemEvents.rightClicked(event => {
        const {item,server,player,player:{x,y,z}} = event
        if (item.id !== `tfg:antipoison_pill`) return
        item.count--
        player.addItemCooldown(item, 50)
        event.player.removeEffect('minecraft:poison')
        server.runCommandSilent(`playsound minecraft:item.honey_bottle.drink player ${player.username} ${x} ${y} ${z} 10 1.5 1`)
    });

    ItemEvents.rightClicked(event => {
        const {item,server,player,player:{x,y,z}} = event
        if (item.id !== `tfg:antipoison_tablet`) return
        item.count--
        player.addItemCooldown(item, 50)
        event.player.removeEffect('minecraft:poison')
        event.player.removeEffect('minecraft:wither')
        event.player.removeEffect('minecraft:weakness')
        event.player.removeEffect('minecraft:slowness')
        event.player.removeEffect('minecraft:mining_fatigue')
        event.player.removeEffect('minecraft:nausea')
        event.player.removeEffect('minecraft:blindness')
        event.player.removeEffect('minecraft:hunger')
        event.player.removeEffect('minecraft:bad_omen')
        event.player.removeEffect('minecraft:darkness')
        event.player.removeEffect('minecraft:unluck')
        server.runCommandSilent(`playsound minecraft:item.honey_bottle.drink player ${player.username} ${x} ${y} ${z} 10 1.5 1`)
    });

    //salvos
    const salvo_event = [
        'fire_resistance',
        'invisibility',
        'luck',
        'resistance',
    ];

    salvo_event.forEach(salvo_event => {

        ItemEvents.rightClicked(event => {
            const {item,server,player,player:{x,y,z}} = event
            if (item.id !== `tfg:${salvo_event}_salvo`) return
            item.count--
            player.addItemCooldown(item, 100)
            server.runCommandSilent(`effect give ${player.username} minecraft:${salvo_event} 480 0 true`)
            server.runCommandSilent(`playsound minecraft:item.glow_ink_sac.use player ${player.username} ${x} ${y} ${z} 10 2 1`)
        });
    });

ItemEvents.rightClicked(event => {
    const {item,server,player,player:{x,y,z}} = event
    if (item.id !== `tfg:absorption_salvo`) return
    item.count--
    player.addItemCooldown(item, 200)
    server.runCommandSilent(`effect give ${player.username} minecraft:absorption 480 4 true`)
    server.runCommandSilent(`playsound minecraft:item.glow_ink_sac.use player ${player.username} ${x} ${y} ${z} 10 2 1`)
});

ItemEvents.rightClicked(event => {
    const {item,server,player,player:{x,y,z}} = event
    if (item.id !== `tfg:instant_health_salvo`) return
    item.count--
    player.addItemCooldown(item, 100)
    server.runCommandSilent(`effect give ${player.username} minecraft:instant_health 1 1 true`)
    server.runCommandSilent(`playsound minecraft:item.glow_ink_sac.use player ${player.username} ${x} ${y} ${z} 10 2 1`)
});

//#endregion

// Vase Sounds
global.MINECRAFT_DYE_NAMES.forEach(color => {
    BlockEvents.rightClicked(event => {
        const {block,server,player} = event
        if (block.id !== `tfg:decorative_vase/${color}`) return
        server.runCommandSilent(`playsound tfc:block.quern.drag block ${player.username} ${block.x} ${block.y} ${block.z} 0.3 2.0 0.1`)
    
})
});


BlockEvents.rightClicked(event => {
    const {block,server,player} = event
    if (block.id !== 'tfg:decorative_vase') return
    server.runCommandSilent(`playsound tfc:block.quern.drag block ${player.username} ${block.x} ${block.y} ${block.z} 0.3 2.0 0.1`)
});
//#endregion

BlockEvents.rightClicked(event => {
    let item = event.item
    if (item.id !== 'tfg:armor_stand_arms') return
    let mob = event.block[event.facing].createEntity('minecraft:armor_stand')
    mob.mergeNbt('{ShowArms:1b}')
    mob.setPos(mob.x + 0.5, mob.y, mob.z + 0.5)
    mob.setYaw(event.player.yaw + 180)
    mob.spawn()
    if (event.player.isCreative() === false){
        item.shrink(1)
    }
})

/**
 *
 * @param {Internal.Player} player
 * @returns {Internal.CompoundTag}
 */
function getTFGPersistentDataRoot(player) {
    if (!player.persistentData.contains("tfg:custom_data")) {
        player.persistentData.put("tfg:custom_data", {});
    }
    return player.persistentData.getCompound("tfg:custom_data")
}

//#region Fishing Net
    const fish = [
        'cod',
        'crappie',
        'jellyfish',
        'lake_trout',
        'largemouth_bass',
        'rainbow_trout',
        'salmon',
        'smallmouth_bass',
        'tropical_fish',
        'bluegill'
    ];

    const shellfish = [
        'lobster',
        'isopod',
        'crayfish'
    ];

    //tags wont work here (or at least I couldnt get it to work) so we need to manually declare each net tier.
    const tiers = [
        'wood',
        'brass',
        'rose_gold',
        'sterling_silver',
        'invar',
        'tin_alloy',
        'cupronickel',
        'magnalium'
    ];

    //Event detects if fish is right clicked with fishing net and then teleports the mob into the void, plays some actions and gives the player the proper item.
    tiers.forEach(tier => {
        fish.forEach(fish => {
            ItemEvents.entityInteracted(`tfg:fishing_net/${tier}`, (event) => {
                const {item, player, server, target} = event;

                if (target.type !== `tfc:${fish}`) return
                    server.runCommandSilent(`particle minecraft:bubble_pop ${target.x} ${target.y} ${target.z} 0.5 0.5 0.5 0.00001 10`)
                    server.runCommandSilent(`playsound minecraft:entity.player.splash player ${player.username} ${target.x} ${target.y} ${target.z} 2 2 1`)
                    server.runCommandSilent(`tp ${target.uuid} ${target.x} ${target.y - 382} ${target.z}`)
                    event.player.give(`tfc:food/${fish}`)
                    player.swing()
                    if (player.isCreative() === false){
                        item.damageValue++
                        if (item.damageValue >= item.maxDamage) {
                            server.runCommandSilent(`playsound minecraft:item.shield.break player ${player.username} ${player.x} ${player.y} ${player.z} 1 1 1`)
                            item.count--
                        }
                    }
            })
        })

        //Shellfish Exception
        shellfish.forEach(shellfish => {
            ItemEvents.entityInteracted(`tfg:fishing_net/${tier}`, (event) => {
                const {item, player, server, target} = event;

                if (target.type !== `tfc:${shellfish}`) return
                    server.runCommandSilent(`particle minecraft:bubble_pop ${target.x} ${target.y} ${target.z} 0.5 0.5 0.5 0.00001 10`)
                    server.runCommandSilent(`playsound minecraft:entity.player.splash player ${player.username} ${target.x} ${target.y} ${target.z} 2 2 1`)
                    server.runCommandSilent(`tp ${target.uuid} ${target.x} ${target.y - 382} ${target.z}`)
                    event.player.give('tfc:food/shellfish')
                    player.swing()
                    if (player.isCreative() === false){
                        item.damageValue++
                        if (item.damageValue >= item.maxDamage) {
                            server.runCommandSilent(`playsound minecraft:item.shield.break player ${player.username} ${player.x} ${player.y} ${player.z} 1 1 1`)
                            item.count--
                        }
                    }
            })
        })

        //Pufferfish Exception
        ItemEvents.entityInteracted(`tfg:fishing_net/${tier}`, (event) => {
            const {item, player, server, target} = event;

            if (target.type !== 'tfc:pufferfish') return
                server.runCommandSilent(`particle minecraft:bubble_pop ${target.x} ${target.y} ${target.z} 0.5 0.5 0.5 0.00001 10`)
                server.runCommandSilent(`playsound minecraft:entity.player.splash player ${player.username} ${target.x} ${target.y} ${target.z} 2 2 1`)
                server.runCommandSilent(`tp ${target.uuid} ${target.x} ${target.y - 382} ${target.z}`)
                event.player.give('minecraft:pufferfish')
                player.swing()
                if (player.isCreative() === false){
                    item.damageValue++
                    if (item.damageValue >= item.maxDamage) {
                        server.runCommandSilent(`playsound minecraft:item.shield.break player ${player.username} ${player.x} ${player.y} ${player.z} 1 1 1`)
                        item.count--
                    }
                }
        })
    })
//#endregion

//#region Block Interactions

/**
 * @typedef {Object} BrickVariant
 * @property {string} brick_type - The name of the brick variant.
 * @property {string|null} brick - Main brick block ID.
 * @property {string|null} brick_stairs - Brick stairs block ID.
 * @property {string|null} brick_slab - Brick slab block ID.
 * @property {string|null} brick_wall - Brick wall block ID.
 * @property {string|null} cracked_brick - Cracked brick block ID.
 * @property {string|null} cracked_stairs - Cracked brick stairs block ID.
 * @property {string|null} cracked_slab - Cracked brick slab block ID.
 * @property {string|null} cracked_wall - Cracked brick wall block ID.
 * @property {string|null} mossy_brick - Mossy brick block ID.
 * @property {string|null} mossy_stairs - Mossy brick stairs block ID.
 * @property {string|null} mossy_slab - Mossy brick slab block ID.
 * @property {string|null} mossy_wall - Mossy brick wall block ID.
 * @property {string|null} smooth_brick - Smooth brick block ID.
 * @property {string|null} smooth_stairs - Smooth brick stairs block ID.
 * @property {string|null} smooth_slab - Smooth brick slab block ID.
 * @property {string|null} smooth_wall - Smooth brick wall block ID.
 * @property {string|null} chiseled_brick - Chiseled brick block ID.
 */

/** @type {BrickVariant[]} */
global.BRICK_INDEX = (global.TFC_STONE_TYPES ? global.TFC_STONE_TYPES : []).map(tfc_stone => ({
	brick_type: tfc_stone,
	brick: `tfc:rock/bricks/${tfc_stone}`, brick_stairs: `tfc:rock/bricks/${tfc_stone}_stairs`, brick_slab: `tfc:rock/bricks/${tfc_stone}_slab`, brick_wall: `tfc:rock/bricks/${tfc_stone}_wall`, 
	cracked_brick: `tfc:rock/cracked_bricks/${tfc_stone}`, cracked_stairs: `tfc:rock/cracked_bricks/${tfc_stone}_stairs`, cracked_slab: `tfc:rock/cracked_bricks/${tfc_stone}_slab`, cracked_wall: `tfc:rock/cracked_bricks/${tfc_stone}_wall`, 
	mossy_brick: `tfc:rock/mossy_bricks/${tfc_stone}`, mossy_stairs: `tfc:rock/mossy_bricks/${tfc_stone}_stairs`, mossy_slab: `tfc:rock/mossy_bricks/${tfc_stone}_slab`, mossy_wall: `tfc:rock/mossy_bricks/${tfc_stone}_wall`,
	smooth_brick: `tfc:rock/smooth/${tfc_stone}`, smooth_stairs: `tfc:rock/smooth/${tfc_stone}_stairs`, smooth_slab: `tfc:rock/smooth/${tfc_stone}_slab`, smooth_wall: `tfc:rock/smooth/${tfc_stone}_wall`, 
	chiseled_brick: `tfc:rock/chiseled/${tfc_stone}`
}));
(global.CREATE_DECO_BRICK_TYPES ? global.CREATE_DECO_BRICK_TYPES : []).slice(0, -1).forEach(create_brick => {
  global.BRICK_INDEX.push({
		brick_type: create_brick,
		brick: `createdeco:${create_brick}_bricks`, brick_stairs: `createdeco:${create_brick}_brick_stairs`, brick_slab: `createdeco:${create_brick}_brick_slab`, brick_wall: `createdeco:${create_brick}_brick_wall`,	
		cracked_brick: `createdeco:cracked_${create_brick}_bricks`, cracked_stairs: `createdeco:cracked_${create_brick}_brick_stairs`, cracked_slab: `createdeco:cracked_${create_brick}_brick_slab`, cracked_wall: `createdeco:cracked_${create_brick}_brick_wall`, 
		mossy_brick: `createdeco:mossy_${create_brick}_bricks`, mossy_stairs: `createdeco:mossy_${create_brick}_brick_stairs`, mossy_slab: `createdeco:mossy_${create_brick}_brick_slab`, mossy_wall: `createdeco:mossy_${create_brick}_brick_wall`,
		smooth_brick: `createdeco:corner_${create_brick}_bricks`, smooth_stairs: `createdeco:corner_${create_brick}_brick_stairs`, smooth_slab: `createdeco:corner_${create_brick}_brick_slab`, smooth_wall: `createdeco:corner_${create_brick}_brick_wall`,
		chiseled_brick: `createdeco:tiled_${create_brick}_bricks`
	})
});
global.BRICK_INDEX = global.BRICK_INDEX.concat([
	// {
	// brick_type: '',
	// brick: '', brick_stairs: '', brick_slab: '', brick_wall: '',
	// cracked_brick: '', cracked_stairs: '', cracked_slab: '', cracked_wall: '', 
	// mossy_brick: '', mossy_stairs: '', mossy_slab: '', mossy_wallL: '',
	// smooth_brick: '', smooth_stairs: '', smooth_slab: '', smooth_wall: '',
	// chiseled_brick: ''
	// },
	{
	brick_type: 'red',
	brick: 'minecraft:bricks', brick_stairs: 'minecraft:brick_stairs', brick_slab: 'minecraft:brick_slab', brick_wall: 'minecraft:brick_wall',
	cracked_brick: 'createdeco:cracked_red_bricks', cracked_stairs: 'createdeco:cracked_red_brick_stairs', cracked_slab: 'createdeco:cracked_red_brick_slab', cracked_wall: 'createdeco:cracked_red_brick_wall', 
	mossy_brick: 'createdeco:mossy_red_bricks', mossy_stairs: 'createdeco:mossy_red_brick_stairs', mossy_slab: 'createdeco:mossy_red_brick_slab', mossy_wall: 'createdeco:mossy_red_brick_wall',
	smooth_brick: 'createdeco:corner_red_bricks', smooth_stairs: 'createdeco:corner_red_brick_stairs', smooth_slab: 'createdeco:corner_red_brick_slab', smooth_wall: 'createdeco:corner_red_brick_wall',
	chiseled_brick: 'createdeco:tiled_red_bricks'
	},
	{
	brick_type: 'light_concrete',
	brick: 'gtceu:light_concrete_bricks', brick_stairs: null, brick_slab: null, brick_wall: null,
	cracked_brick: 'gtceu:cracked_light_concrete_bricks', cracked_stairs: null, cracked_slab: null, cracked_wall: null, 
	mossy_brick: 'gtceu:mossy_light_concrete_bricks', mossy_stairs: null, mossy_slab: null, mossy_wall: null,
	smooth_brick: 'gtceu:polished_light_concrete', smooth_stairs: null, smooth_slab: null, smooth_wall: null,
	chiseled_brick: 'gtceu:chiseled_light_concrete'
	},
	{
	brick_type: 'dark_concrete',
	brick: 'gtceu:dark_concrete_bricks', brick_stairs: null, brick_slab: null, brick_wall: null,
	cracked_brick: 'gtceu:cracked_dark_concrete_bricks', cracked_stairs: null, cracked_slab: null, cracked_wall: null, 
	mossy_brick: 'gtceu:mossy_dark_concrete_bricks', mossy_stairs: null, mossy_slab: null, mossy_wall: null,
	smooth_brick: 'gtceu:polished_dark_concrete', smooth_stairs: null, smooth_slab: null, smooth_wall: null,
	chiseled_brick: 'gtceu:chiseled_dark_concrete'
	},
	{
	brick_type: 'red_granite',
	brick: 'gtceu:red_granite_bricks', brick_stairs: null, brick_slab: null, brick_wall: null,
	cracked_brick: 'gtceu:cracked_red_granite_bricks', cracked_stairs: null, cracked_slab: null, cracked_wall: null, 
	mossy_brick: 'gtceu:mossy_red_granite_bricks', mossy_stairs: null, mossy_slab: null, mossy_wall: null,
	smooth_brick: 'gtceu:polished_red_granite', smooth_stairs: null, smooth_slab: null, smooth_wall: null,
	chiseled_brick: 'gtceu:chiseled_red_granite'
	}
]);

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
        if (state.includes('[') && copyBlockstate === true){
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

// Declare Events
BlockEvents.rightClicked(event => {
    //Brick index events
    for (const b of global.BRICK_INDEX) {
        //brick -> cracked
        transformBlockWithTool(event, b.brick, b.cracked_brick, '#forge:tools/hammers',true, 'minecraft:block.copper.hit', 'minecraft:crit', true);
        transformBlockWithTool(event, b.brick_stairs, b.cracked_stairs, '#forge:tools/hammers',true, 'minecraft:block.copper.hit', 'minecraft:crit', true);
        transformBlockWithTool(event, b.brick_slab, b.cracked_slab, '#forge:tools/hammers', true, 'minecraft:block.copper.hit', 'minecraft:crit', true);
        transformBlockWithTool(event, b.brick_wall, b.cracked_wall, '#forge:tools/hammers',true, 'minecraft:block.copper.hit', 'minecraft:crit', true);
        //brick -> mossy
        transformBlockWithItem(event, b.brick, b.mossy_brick, '#tfc:compost_greens_low', true, 1, 'minecraft:block.moss.hit', 'minecraft:item_slime', true);
        transformBlockWithItem(event, b.brick, b.mossy_brick, 'gtceu:plant_ball', true, 1, 'minecraft:block.moss.hit', 'minecraft:item_slime', true);
        transformBlockWithItem(event, b.brick_stairs, b.mossy_stairs, '#tfc:compost_greens_low', true, 1, 'minecraft:block.moss.hit', 'minecraft:item_slime', true);
        transformBlockWithItem(event, b.brick_stairs, b.mossy_stairs, 'gtceu:plant_ball', true, 1, 'minecraft:block.moss.hit', 'minecraft:item_slime', true);
        transformBlockWithItem(event, b.brick_slab, b.mossy_slab, '#tfc:compost_greens_low', true, 1, 'minecraft:block.moss.hit', 'minecraft:item_slime', true);
        transformBlockWithItem(event, b.brick_slab, b.mossy_slab, 'gtceu:plant_ball', true, 1, 'minecraft:block.moss.hit', 'minecraft:item_slime', true);
        transformBlockWithItem(event, b.brick_wall, b.mossy_wall, '#tfc:compost_greens_low', true, 1, 'minecraft:block.moss.hit', 'minecraft:item_slime', true);
        transformBlockWithItem(event, b.brick_wall, b.mossy_wall, 'gtceu:plant_ball', true, 1, 'minecraft:block.moss.hit', 'minecraft:item_slime', true);
        //cracked -> mossy
        transformBlockWithItem(event, b.cracked_brick, b.mossy_brick, '#tfc:compost_greens_low', true, 1, 'minecraft:block.moss.hit', 'minecraft:item_slime', true);
        transformBlockWithItem(event, b.cracked_brick, b.mossy_brick, 'gtceu:plant_ball', true, 1, 'minecraft:block.moss.hit', 'minecraft:item_slime', true);
        transformBlockWithItem(event, b.cracked_stairs, b.mossy_stairs, '#tfc:compost_greens_low', true, 1, 'minecraft:block.moss.hit', 'minecraft:item_slime', true);
        transformBlockWithItem(event, b.cracked_stairs, b.mossy_stairs, 'gtceu:plant_ball', true, 1, 'minecraft:block.moss.hit', 'minecraft:item_slime', true);
        transformBlockWithItem(event, b.cracked_slab, b.mossy_slab, '#tfc:compost_greens_low', true, 1, 'minecraft:block.moss.hit', 'minecraft:item_slime', true);
        transformBlockWithItem(event, b.cracked_slab, b.mossy_slab, 'gtceu:plant_ball', true, 1, 'minecraft:block.moss.hit', 'minecraft:item_slime', true);
        transformBlockWithItem(event, b.cracked_wall, b.mossy_wall, '#tfc:compost_greens_low', true, 1, 'minecraft:block.moss.hit', 'minecraft:item_slime', true);
        transformBlockWithItem(event, b.cracked_wall, b.mossy_wall, 'gtceu:plant_ball', true, 1, 'minecraft:block.moss.hit', 'minecraft:item_slime', true);
        //mossy -> cracked
        transformBlockWithTool(event, b.mossy_brick, b.cracked_brick, '#forge:tools/hammers', true, 'minecraft:block.copper.hit', 'minecraft:crit', true);
        transformBlockWithTool(event, b.mossy_stairs, b.cracked_stairs, '#forge:tools/hammers', true, 'minecraft:block.copper.hit', 'minecraft:crit', true);
        transformBlockWithTool(event, b.mossy_slab, b.cracked_slab, '#forge:tools/hammers', true, 'minecraft:block.copper.hit', 'minecraft:crit', true);
        transformBlockWithTool(event, b.mossy_wall, b.cracked_wall, '#forge:tools/hammers', true, 'minecraft:block.copper.hit', 'minecraft:crit', true);
        //mossy -> brick
        transformBlockWithTool(event, b.mossy_brick, b.brick, '#forge:tools/knives', true, 'minecraft:item.axe.wax_off', 'minecraft:item_slime', true);
        transformBlockWithItem(event, b.mossy_brick, b.brick, 'tfc:groundcover/pumice', true, 1, 'minecraft:item.axe.wax_off', 'minecraft:item_slime', true);
        transformBlockWithTool(event, b.mossy_stairs, b.brick_stairs, '#forge:tools/knives', true, 'minecraft:item.axe.wax_off', 'minecraft:item_slime', true);
        transformBlockWithItem(event, b.mossy_stairs, b.brick_stairs, 'tfc:groundcover/pumice', true, 1, 'minecraft:item.axe.wax_off', 'minecraft:item_slime', true);
        transformBlockWithTool(event, b.mossy_slab, b.brick_slab, '#forge:tools/knives', true, 'minecraft:item.axe.wax_off', 'minecraft:item_slime', true);
        transformBlockWithItem(event, b.mossy_slab, b.brick_slab, 'tfc:groundcover/pumice', true, 1, 'minecraft:item.axe.wax_off', 'minecraft:item_slime', true);
        transformBlockWithTool(event, b.mossy_wall, b.brick_wall, '#forge:tools/knives', true, 'minecraft:item.axe.wax_off', 'minecraft:item_slime', true);
        transformBlockWithItem(event, b.mossy_wall, b.mossy_wall, 'tfc:groundcover/pumice', true, 1, 'minecraft:item.axe.wax_off', 'minecraft:item_slime', true);
        //cracked -> brick
        transformBlockWithItem(event, b.cracked_brick, b.brick, 'tfc:mortar', true, 1, 'minecraft:item.ink_sac.use', 'minecraft:effect', true);
        transformBlockWithItem(event, b.cracked_stairs, b.brick_stairs, 'tfc:mortar', true, 1, 'minecraft:item.ink_sac.use', 'minecraft:effect', true);
        transformBlockWithItem(event, b.cracked_slab, b.brick_slab, 'tfc:mortar', true, 1, 'minecraft:item.ink_sac.use', 'minecraft:effect', true);
        transformBlockWithItem(event, b.cracked_wall, b.brick_wall, 'tfc:mortar', true, 1, 'minecraft:item.ink_sac.use', 'minecraft:effect', true);
        // -> smooth
        transformBlockWithTool(event, b.brick, b.smooth_brick, '#create:sandpaper', true, 'create:sanding_short', 'minecraft:crit', true);
        transformBlockWithTool(event, b.mossy_brick, b.smooth_brick, '#create:sandpaper', true, 'create:sanding_short', 'minecraft:crit', true);
        transformBlockWithTool(event, b.cracked_brick, b.smooth_brick, '#create:sandpaper', true, 'create:sanding_short', 'minecraft:crit', true);
        // smooth ->
        transformBlockWithTool(event, b.smooth_brick, b.cracked_brick, '#forge:tools/hammers',true, 'minecraft:block.copper.hit', 'minecraft:crit', true);
        transformBlockWithItem(event, b.smooth_brick, b.mossy_brick, '#tfc:compost_greens_low', true, 1, 'minecraft:block.moss.hit', 'minecraft:item_slime', true);
        transformBlockWithItem(event, b.smooth_brick, b.mossy_brick, 'gtceu:plant_ball', true, 1, 'minecraft:block.moss.hit', 'minecraft:item_slime', true);
        transformBlockWithTool(event, b.smooth_brick, b.brick, '#forge:tools/files', true, 'minecraft:block.beehive.shear', 'minecraft:crit', true);
    }
    //Other TFC Blocks
    global.TFC_STONE_TYPES.forEach(stone => {
        //cobble -> mossy
        transformBlockWithItem(event, `tfc:rock/cobble/${stone}`, `tfc:rock/mossy_cobble/${stone}`, '#tfc:compost_greens_low', true, 1, 'minecraft:block.moss.hit', 'minecraft:item_slime', true);
        transformBlockWithItem(event, `tfc:rock/cobble/${stone}`, `tfc:rock/mossy_cobble/${stone}`, 'gtceu:plant_ball', true, 1, 'minecraft:block.moss.hit', 'minecraft:item_slime', true);
        transformBlockWithItem(event, `tfc:rock/cobble/${stone}_stairs`, `tfc:rock/mossy_cobble/${stone}_stairs`, '#tfc:compost_greens_low', true, 1, 'minecraft:block.moss.hit', 'minecraft:item_slime', true);
        transformBlockWithItem(event, `tfc:rock/cobble/${stone}_stairs`, `tfc:rock/mossy_cobble/${stone}_stairs`, 'gtceu:plant_ball', true, 1, 'minecraft:block.moss.hit', 'minecraft:item_slime', true);
        transformBlockWithItem(event, `tfc:rock/cobble/${stone}_slab`, `tfc:rock/mossy_cobble/${stone}_slab`, '#tfc:compost_greens_low', true, 1, 'minecraft:block.moss.hit', 'minecraft:item_slime', true);
        transformBlockWithItem(event, `tfc:rock/cobble/${stone}_slab`, `tfc:rock/mossy_cobble/${stone}_slab`, 'gtceu:plant_ball', true, 1, 'minecraft:block.moss.hit', 'minecraft:item_slime', true);
        transformBlockWithItem(event, `tfc:rock/cobble/${stone}_wall`, `tfc:rock/mossy_cobble/${stone}_wall`, '#tfc:compost_greens_low', true, 1, 'minecraft:block.moss.hit', 'minecraft:item_slime', true);
        transformBlockWithItem(event, `tfc:rock/cobble/${stone}_wall`, `tfc:rock/mossy_cobble/${stone}_wall`, 'gtceu:plant_ball', true, 1, 'minecraft:block.moss.hit', 'minecraft:item_slime', true);
        //mossy -> cobble
        transformBlockWithTool(event, `tfc:rock/mossy_cobble/${stone}`, `tfc:rock/cobble/${stone}`, '#forge:tools/knives', true, 'minecraft:item.axe.wax_off', 'minecraft:item_slime', true);
        transformBlockWithItem(event, `tfc:rock/mossy_cobble/${stone}`, `tfc:rock/cobble/${stone}`, 'tfc:groundcover/pumice', true, 1, 'minecraft:item.axe.wax_off', 'minecraft:item_slime', true);
        transformBlockWithTool(event, `tfc:rock/mossy_cobble/${stone}_stairs`, `tfc:rock/cobble/${stone}_stairs`, '#forge:tools/knives', true, 'minecraft:item.axe.wax_off', 'minecraft:item_slime', true);
        transformBlockWithItem(event, `tfc:rock/mossy_cobble/${stone}_stairs`, `tfc:rock/cobble/${stone}_stairs`, 'tfc:groundcover/pumice', true, 1, 'minecraft:item.axe.wax_off', 'minecraft:item_slime', true);
        transformBlockWithTool(event, `tfc:rock/mossy_cobble/${stone}_slab`, `tfc:rock/cobble/${stone}_slab`, '#forge:tools/knives', true, 'minecraft:item.axe.wax_off', 'minecraft:item_slime', true);
        transformBlockWithItem(event, `tfc:rock/mossy_cobble/${stone}_slab`, `tfc:rock/cobble/${stone}_slab`, 'tfc:groundcover/pumice', true, 1, 'minecraft:item.axe.wax_off', 'minecraft:item_slime', true);
        transformBlockWithTool(event, `tfc:rock/mossy_cobble/${stone}_wall`, `tfc:rock/cobble/${stone}_wall`, '#forge:tools/knives', true, 'minecraft:item.axe.wax_off', 'minecraft:item_slime', true);
        transformBlockWithItem(event, `tfc:rock/mossy_cobble/${stone}_wall`, `tfc:rock/cobble/${stone}_wall`, 'tfc:groundcover/pumice', true, 1, 'minecraft:item.axe.wax_off', 'minecraft:item_slime', true);
    });
});

// Makes scythes, hoes, and knives take damage when cutting grass
BlockEvents.broken('tfc:mineable_with_sharp_tool', event => {
    let player = event.player;
    let toolUsed = player.mainHandItem;

    if (!toolUsed.hasTag('tfc:sharp_tools')) {
        return;
    }

    if (!player.isCreative()) {
        toolUsed.damageValue++;
        if (toolUsed.damageValue >= toolUsed.maxDamage) {
            event.server.runCommandSilent(`playsound minecraft:item.shield.break player ${player.username} ${player.x} ${player.y} ${player.z} 1 1 1`);
            toolUsed.count--;
        }
    }
});

//#endregion
// TODO
TFCEvents.startFire(event => {
    let player = event.player
    const item = player.mainHandItem
    // player.tell(item)
    if (item.id.toString() === 'gtceu:matchbox') {
        player.tell('holding matchbox')
        player.tell(item.nbt.getInt('usesLeft'))

        if (!item.nbt.contains('usesLeft')) {
            player.tell('matchbox unused')
            item.nbt.merge({usesLeft:15})
            return;

        } else if (item.nbt.getInt('usesLeft') <= 1) {
            player.tell('???')
            event.server.runCommandSilent(`playsound item.flintandsteel.use player ${player.username} ${player.x} ${player.y} ${player.z} 1 1 1`);
            item.count--
            event.server.runCommandSilent(`give ${player.username} minecraft:paper`)

        } else {
            let oldUses = item.nbt.getInt('usesLeft')
            item.nbt.merge({usesLeft : oldUses - 1})
            return;
        }
    }
    
    

})