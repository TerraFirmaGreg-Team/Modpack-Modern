"use strict";

PlayerEvents.tick((event) => {
	const { player } = event;
	if (player.age % 100 === 0) {
		if (player.headArmorItem === 'create:netherite_diving_helmet'
			&& player.chestArmorItem === 'create:netherite_backtank'
			&& player.legsArmorItem === 'minecraft:netherite_leggings'
			&& (player.feetArmorItem === 'create:netherite_diving_boots'
				|| player.feetArmorItem === 'minecraft:netherite_boots')) {
			player.potionEffects.add("minecraft:fire_resistance", 350, 0, true, false);
		}

		if (player.legsArmorItem === 'gtceu:nanomuscle_leggings') {
			player.potionEffects.add("minecraft:speed", 350, 0, true, false);
		}
	}
});
