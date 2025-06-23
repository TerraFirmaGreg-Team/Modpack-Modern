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