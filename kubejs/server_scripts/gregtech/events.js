"use strict";

PlayerEvents.tick((event) => {
    const { player } = event;
    if (player.age % 100 === 0 && player.legsArmorItem === 'gtceu:nanomuscle_leggings') {
        player.potionEffects.add("minecraft:speed", 350, 0, true, false);
    }
});
