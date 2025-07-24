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
            const {item,server,player,player:{x,y,z,username}} = event
            if (item.id != `tfg:${pill_event}_pill`) return
            item.count--
            player.addItemCooldown(item, 100)
            server.runCommandSilent(`effect give ${player.username} minecraft:${pill_event} 480 0 true`)
            server.runCommandSilent(`playsound minecraft:item.honey_bottle.drink player ${player.username} ${x} ${y} ${z} 10 1.5 1`)
        });

        ItemEvents.rightClicked(event => {
            const {item,server,player,player:{x,y,z,username}} = event
            if (item.id != `tfg:${pill_event}_tablet`) return
            item.count--
            player.addItemCooldown(item, 100)
            server.runCommandSilent(`effect give ${player.username} minecraft:${pill_event} 1800 0 true`)
            server.runCommandSilent(`playsound minecraft:item.honey_bottle.drink player ${player.username} ${x} ${y} ${z} 10 1.5 1`)
        });
    });

    ItemEvents.rightClicked(event => {
        const {item,server,player,player:{x,y,z,username}} = event
        if (item.id != `tfg:antipoison_pill`) return
        item.count--
        player.addItemCooldown(item, 50)
        event.player.removeEffect('minecraft:poison')
        server.runCommandSilent(`playsound minecraft:item.honey_bottle.drink player ${player.username} ${x} ${y} ${z} 10 1.5 1`)
    });

    ItemEvents.rightClicked(event => {
        const {item,server,player,player:{x,y,z,username}} = event
        if (item.id != `tfg:antipoison_tablet`) return
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
            const {item,server,player,player:{x,y,z,username}} = event
            if (item.id != `tfg:${salvo_event}_salvo`) return
            item.count--
            player.addItemCooldown(item, 100)
            server.runCommandSilent(`effect give ${player.username} minecraft:${salvo_event} 480 0 true`)
            server.runCommandSilent(`playsound minecraft:item.glow_ink_sac.use player ${player.username} ${x} ${y} ${z} 10 2 1`)
        });
    });

ItemEvents.rightClicked(event => {
    const {item,server,player,player:{x,y,z,username}} = event
    if (item.id != `tfg:absorption_salvo`) return
    item.count--
    player.addItemCooldown(item, 200)
    server.runCommandSilent(`effect give ${player.username} minecraft:absorption 480 4 true`)
    server.runCommandSilent(`playsound minecraft:item.glow_ink_sac.use player ${player.username} ${x} ${y} ${z} 10 2 1`)
});

ItemEvents.rightClicked(event => {
    const {item,server,player,player:{x,y,z,username}} = event
    if (item.id != `tfg:instant_health_salvo`) return
    item.count--
    player.addItemCooldown(item, 100)
    server.runCommandSilent(`effect give ${player.username} minecraft:instant_health 1 1 true`)
    server.runCommandSilent(`playsound minecraft:item.glow_ink_sac.use player ${player.username} ${x} ${y} ${z} 10 2 1`)
});

//#endregion

// Vase Sounds
global.MINECRAFT_DYE_NAMES.forEach(color => {
    BlockEvents.rightClicked(event => {
        const {block,server,player,player:{x,y,z,username}} = event
        if (block.id != `tfg:decorative_vase/${color}`) {return}{
        server.runCommandSilent(`playsound tfc:block.quern.drag block ${player.username} ${block.x} ${block.y} ${block.z} 0.3 2.0 0.1`)
    }})
});


BlockEvents.rightClicked(event => {
    const {block,server,player,player:{x,y,z,username}} = event
    if (block.id != 'tfg:decorative_vase') {return}{
    server.runCommandSilent(`playsound tfc:block.quern.drag block ${player.username} ${block.x} ${block.y} ${block.z} 0.3 2.0 0.1`)
}});
//#endregion

BlockEvents.rightClicked(event=>{
    let item = event.item
    if(item.id != 'tfg:armor_stand_arms') return
    let mob = event.block[event.facing].createEntity('minecraft:armor_stand')
    mob.mergeNbt('{ShowArms:1b}')
    mob.setPos(mob.x + 0.5, mob.y, mob.z + 0.5)
    mob.setYaw(event.player.yaw + 180)
    mob.spawn()
    if (event.player.isCreative() == false){
        item.shrink(1)
    }
})

/**
 *
 * @param {Internal.Player} player
 * @returns {Internal.CompoundTag}
 */
function getTFGPersistentDataRoot(player)
{
    if(!player.persistentData.contains("tfg:custom_data"))
    {
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

                if (target.type != `tfc:${fish}`) return
                    server.runCommandSilent(`particle minecraft:bubble_pop ${target.x} ${target.y} ${target.z} 0.5 0.5 0.5 0.00001 10`)
                    server.runCommandSilent(`playsound minecraft:entity.player.splash player ${player.username} ${target.x} ${target.y} ${target.z} 2 2 1`)
                    server.runCommandSilent(`tp ${target.uuid} ${target.x} ${target.y - 382} ${target.z}`)
                    event.player.give(`tfc:food/${fish}`)
                    player.swing()
                    if (player.isCreative() == false){
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

                if (target.type != `tfc:${shellfish}`) return
                    server.runCommandSilent(`particle minecraft:bubble_pop ${target.x} ${target.y} ${target.z} 0.5 0.5 0.5 0.00001 10`)
                    server.runCommandSilent(`playsound minecraft:entity.player.splash player ${player.username} ${target.x} ${target.y} ${target.z} 2 2 1`)
                    server.runCommandSilent(`tp ${target.uuid} ${target.x} ${target.y - 382} ${target.z}`)
                    event.player.give('tfc:food/shellfish')
                    player.swing()
                    if (player.isCreative() == false){
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

            if (target.type != 'tfc:pufferfish') return
                server.runCommandSilent(`particle minecraft:bubble_pop ${target.x} ${target.y} ${target.z} 0.5 0.5 0.5 0.00001 10`)
                server.runCommandSilent(`playsound minecraft:entity.player.splash player ${player.username} ${target.x} ${target.y} ${target.z} 2 2 1`)
                server.runCommandSilent(`tp ${target.uuid} ${target.x} ${target.y - 382} ${target.z}`)
                event.player.give('minecraft:pufferfish')
                player.swing()
                if (player.isCreative() == false){
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

    if (!inputBlock || !outputBlock) {return};

    if (inputBlock.startsWith('#')) {
        if (!block.hasTag(inputBlock.substring(1))) return;
    } else {
        if (block.id.toString() !== inputBlock) return;
    }

    if (toolId.startsWith('#')) {
        if (item.isEmpty() || !player.mainHandItem.hasTag(toolId.substring(1))) {return};
    } else {
        if (item.isEmpty() || player.mainHandItem.id !== toolId) {return};
    }

    if (!player.crouching) {return};

    let state = block.getBlockState().toString();
    if (state.includes('[') && copyBlockstate == true) {
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

        if (!inputBlock || !outputBlock) {return};

        if (inputBlock.startsWith('#')) {
            if (!block.hasTag(inputBlock.substring(1))) return;
        } else {
            if (block.id.toString() !== inputBlock) return;
        }

        if (itemId.startsWith('#')) {
            if (item.isEmpty() || !player.mainHandItem.hasTag(itemId.substring(1))) {return};
        } else {
            if (item.isEmpty() || player.mainHandItem.id != itemId) {return};
        }
        if (!player.crouching) {return};

        var state = block.getBlockState().toString()
        if (state.includes('[') && copyBlockstate == true){
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
    }
});
//#endregion