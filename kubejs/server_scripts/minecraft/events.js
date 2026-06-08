"use strict";

PlayerEvents.tick(event => {

	// make levitation last shorter, so shulkers aren't so deadly on the moon
	const { player, level, level: { dimension } } = event;
	if (player.age % 20 === 0) {
		if (event.player.hasEffect('minecraft:levitation') && dimension == "minecraft:the_nether") {
			if (event.player.getEffect('minecraft:levitation').getDuration() > 60) {
				event.player.potionEffects.add('minecraft:levitation', 60, 0, true, true)
			}
		}
	}
});
