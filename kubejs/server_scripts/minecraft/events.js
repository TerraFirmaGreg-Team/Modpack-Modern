"use strict";

PlayerEvents.tick(event => {

	// make levitation last shorter, so shulkers aren't so deadly on the moon

	if (event.player.hasEffect('minecraft:levitation')) {
		event.server.scheduleInTicks(0, () => { })
		event.server.scheduleInTicks(40, () => {
			event.player.removeEffect('minecraft:levitation')
		})
	}
});
