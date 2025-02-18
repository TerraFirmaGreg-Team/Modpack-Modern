const INFINTE = Java.loadClass('java.lang.Integer').MAX_VALUE;
PlayerEvents.tick((event) => {
  const { player } = event;
  if (player.age % 20 != 0) return;
  if (player.legsArmorItem == 'gtceu:nanomuscle_leggings') {
    player.potionEffects.add("minecraft:speed", INFINTE, 1, true, false);
  } else {
    player.removeEffect("minecraft:speed");
  }
});


