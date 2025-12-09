"use strict";

PlayerEvents.tick((event) => {
	const { player } = event;
	if (player.age % 100 === 0) {
		if ((player.headArmorItem === 'create:netherite_diving_helmet'
				|| player.headArmorItem === 'ad_astra:netherite_space_helmet')
			&& (player.chestArmorItem === 'create:netherite_backtank'
				|| player.chestArmorItem === 'ad_astra:netherite_space_suit')
			&& (player.legsArmorItem === 'minecraft:netherite_leggings'
				|| player.legsArmorItem === 'ad_astra:netherite_space_pants')
			&& (player.feetArmorItem === 'create:netherite_diving_boots'
				|| player.feetArmorItem === 'minecraft:netherite_boots'
				|| player.feetArmorItem === 'ad_astra:netherite_space_boots')) {
			player.potionEffects.add("minecraft:fire_resistance", 350, 0, true, false);
		}

		if (player.legsArmorItem === 'gtceu:nanomuscle_leggings') {
			player.potionEffects.add("minecraft:speed", 350, 0, true, false);
		}
	}
});
