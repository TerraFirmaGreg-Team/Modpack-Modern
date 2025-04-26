PlayerEvents.tick((event) => {
    const { player } = event;
    if (player.age % 100 != 0) return;
    if (player.legsArmorItem == 'gtceu:nanomuscle_leggings') {
        player.potionEffects.add("minecraft:speed", 350, 1, true, false);
    } else {
        player.removeEffect("minecraft:speed");
    }
});
