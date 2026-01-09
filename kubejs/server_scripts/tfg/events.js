"use strict";

// TODO
TFGServerEvents.dimensionalPowerConsumption(event => {
	event["add(java.lang.String,double)"]("minecraft:overworld", 10000);
	event["add(java.lang.String,double)"]("minecraft:the_nether", 20000);
	event["add(java.lang.String,double)"]("ad_astra:earth_orbit", 20000);
	event["add(java.lang.String,double)"]("ad_astra:moon", 50000);
	event["add(java.lang.String,double)"]("ad_astra:moon_orbit", 50000);
	event["add(java.lang.String,double)"]("ad_astra:mars", 100000);
	event["add(java.lang.String,double)"]("ad_astra:mars_orbit", 100000);
});

// Vase Sounds
global.MINECRAFT_DYE_NAMES.forEach(color => {
	BlockEvents.rightClicked(event => {
		const { block, server, player } = event
		if (block.id !== `tfg:decorative_vase/${color}`) return
		server.runCommandSilent(`playsound tfc:block.quern.drag block ${player.username} ${block.x} ${block.y} ${block.z} 0.3 2.0 0.1`)

	})
});


BlockEvents.rightClicked(event => {
	const { block, server, player } = event
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
	if (event.player.isCreative() === false) {
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

