"use strict";

TFGServerEvents.dimensionalPowerConsumption(event => {
    event.add("minecraft:overworld",   10000);
    event.add("minecraft:the_nether",  20000);
    event.add("ad_astra:earth_orbit",  20000);
    event.add("ad_astra:moon",         50000);
    event.add("ad_astra:moon_orbit",   50000);
    event.add("ad_astra:mars",        100000);
    event.add("ad_astra:mars_orbit",  100000);
    event.add("ad_astra:venus",       200000);
    event.add("ad_astra:venus_orbit", 200000);
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


// Swap armor stand modes

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


// Display messages in chat when GT miners are placed
const TFGConfig = Java.loadClass("su.terrafirmagreg.core.config.TFGConfig");

const miners = [
	'gtceu:hp_steam_miner',
	'gtceu:lv_miner',
	'gtceu:mv_miner',
	'gtceu:hv_miner'
];

miners.forEach(miner => {
	BlockEvents.placed(miner, event => {
		const { level, player } = event;
		if (!player || !level)
			return;

		if (level.dimension === "minecraft:the_nether" && TFGConfig.SERVER.enableBeneathMiningRestrictions.get())
		{
			player.tell(Text.translate("tfg.clientmessage.nether_miner_placed", TFGConfig.SERVER.disabledBeneathMiningYLevel.get()));
		}
		else if ((level.dimension === "ad_astra:venus" || level.dimension === "ad_astra:mercury")
			&& TFGConfig.SERVER.enableHotPlanetMiningRestrictions.get())
		{
			player.tell(Text.translate("tfg.clientmessage.hot_planet_miner_placed"));
		}
	})
})