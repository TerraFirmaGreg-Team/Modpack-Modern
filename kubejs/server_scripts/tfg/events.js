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
		const { item, server, player, player: { x, y, z } } = event
		if (item.id !== `tfg:${pill_event}_pill`) return
		item.count--
		player.addItemCooldown(item, 100)
		server.runCommandSilent(`effect give ${player.username} minecraft:${pill_event} 480 0 true`)
		server.runCommandSilent(`playsound minecraft:item.honey_bottle.drink player ${player.username} ${x} ${y} ${z} 10 1.5 1`)
	});

	ItemEvents.rightClicked(event => {
		const { item, server, player, player: { x, y, z } } = event
		if (item.id !== `tfg:${pill_event}_tablet`) return
		item.count--
		player.addItemCooldown(item, 100)
		server.runCommandSilent(`effect give ${player.username} minecraft:${pill_event} 1800 0 true`)
		server.runCommandSilent(`playsound minecraft:item.honey_bottle.drink player ${player.username} ${x} ${y} ${z} 10 1.5 1`)
	});
});

ItemEvents.rightClicked(event => {
	const { item, server, player, player: { x, y, z } } = event
	if (item.id !== `tfg:antipoison_pill`) return
	item.count--
	player.addItemCooldown(item, 50)
	event.player.removeEffect('minecraft:poison')
	server.runCommandSilent(`playsound minecraft:item.honey_bottle.drink player ${player.username} ${x} ${y} ${z} 10 1.5 1`)
});

ItemEvents.rightClicked(event => {
	const { item, server, player, player: { x, y, z } } = event
	if (item.id !== `tfg:antipoison_tablet`) return
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
		const { item, server, player, player: { x, y, z } } = event
		if (item.id !== `tfg:${salvo_event}_salvo`) return
		item.count--
		player.addItemCooldown(item, 100)
		server.runCommandSilent(`effect give ${player.username} minecraft:${salvo_event} 480 0 true`)
		server.runCommandSilent(`playsound minecraft:item.glow_ink_sac.use player ${player.username} ${x} ${y} ${z} 10 2 1`)
	});
});

ItemEvents.rightClicked(event => {
	const { item, server, player, player: { x, y, z } } = event
	if (item.id !== `tfg:absorption_salvo`) return
	item.count--
	player.addItemCooldown(item, 200)
	server.runCommandSilent(`effect give ${player.username} minecraft:absorption 480 4 true`)
	server.runCommandSilent(`playsound minecraft:item.glow_ink_sac.use player ${player.username} ${x} ${y} ${z} 10 2 1`)
});

ItemEvents.rightClicked(event => {
	const { item, server, player, player: { x, y, z } } = event
	if (item.id !== `tfg:instant_health_salvo`) return
	item.count--
	player.addItemCooldown(item, 100)
	server.runCommandSilent(`effect give ${player.username} minecraft:instant_health 1 1 true`)
	server.runCommandSilent(`playsound minecraft:item.glow_ink_sac.use player ${player.username} ${x} ${y} ${z} 10 2 1`)
});

//#endregion

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
			const { item, player, server, target } = event;

			if (target.type !== `tfc:${fish}`) return
			server.runCommandSilent(`particle minecraft:bubble_pop ${target.x} ${target.y} ${target.z} 0.5 0.5 0.5 0.00001 10`)
			server.runCommandSilent(`playsound minecraft:entity.player.splash player ${player.username} ${target.x} ${target.y} ${target.z} 2 2 1`)
			server.runCommandSilent(`tp ${target.uuid} ${target.x} ${target.y - 382} ${target.z}`)
			event.player.give(`tfc:food/${fish}`)
			player.swing()
			if (player.isCreative() === false) {
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
			const { item, player, server, target } = event;

			if (target.type !== `tfc:${shellfish}`) return
			server.runCommandSilent(`particle minecraft:bubble_pop ${target.x} ${target.y} ${target.z} 0.5 0.5 0.5 0.00001 10`)
			server.runCommandSilent(`playsound minecraft:entity.player.splash player ${player.username} ${target.x} ${target.y} ${target.z} 2 2 1`)
			server.runCommandSilent(`tp ${target.uuid} ${target.x} ${target.y - 382} ${target.z}`)
			event.player.give('tfc:food/shellfish')
			player.swing()
			if (player.isCreative() === false) {
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
		const { item, player, server, target } = event;

		if (target.type !== 'tfc:pufferfish') return
		server.runCommandSilent(`particle minecraft:bubble_pop ${target.x} ${target.y} ${target.z} 0.5 0.5 0.5 0.00001 10`)
		server.runCommandSilent(`playsound minecraft:entity.player.splash player ${player.username} ${target.x} ${target.y} ${target.z} 2 2 1`)
		server.runCommandSilent(`tp ${target.uuid} ${target.x} ${target.y - 382} ${target.z}`)
		event.player.give('minecraft:pufferfish')
		player.swing()
		if (player.isCreative() === false) {
			item.damageValue++
			if (item.damageValue >= item.maxDamage) {
				server.runCommandSilent(`playsound minecraft:item.shield.break player ${player.username} ${player.x} ${player.y} ${player.z} 1 1 1`)
				item.count--
			}
		}
	})
})
//#endregion

//#region Block Interactions

/**
 * @typedef {Object} BrickVariant
 * @property {string} brick_type - The name of the brick variant.
 * @property {string|null} brick - Main brick block ID.
 * @property {string|null} brick_stairs - Brick stairs block ID.
 * @property {string|null} brick_slab - Brick slab block ID.
 * @property {string|null} brick_wall - Brick wall block ID.
 * @property {string|null} cracked_brick - Cracked brick block ID.
 * @property {string|null} cracked_stairs - Cracked brick stairs block ID.
 * @property {string|null} cracked_slab - Cracked brick slab block ID.
 * @property {string|null} cracked_wall - Cracked brick wall block ID.
 * @property {string|null} mossy_brick - Mossy brick block ID.
 * @property {string|null} mossy_stairs - Mossy brick stairs block ID.
 * @property {string|null} mossy_slab - Mossy brick slab block ID.
 * @property {string|null} mossy_wall - Mossy brick wall block ID.
 * @property {string|null} smooth_brick - Smooth brick block ID.
 * @property {string|null} smooth_stairs - Smooth brick stairs block ID.
 * @property {string|null} smooth_slab - Smooth brick slab block ID.
 * @property {string|null} smooth_wall - Smooth brick wall block ID.
 * @property {string|null} chiseled_brick - Chiseled brick block ID.
 */

const AA_REGULAR_STONES = ['moon', 'mars', 'venus', 'mercury', 'glacio']

// #region BRICK_INDEX
/** @type {BrickVariant[]} */
global.BRICK_INDEX = (global.TFC_STONE_TYPES ? global.TFC_STONE_TYPES : []).map(tfc_stone => ({
	brick_type: tfc_stone,
	brick: `tfc:rock/bricks/${tfc_stone}`, brick_stairs: `tfc:rock/bricks/${tfc_stone}_stairs`, brick_slab: `tfc:rock/bricks/${tfc_stone}_slab`, brick_wall: `tfc:rock/bricks/${tfc_stone}_wall`,
	cracked_brick: `tfc:rock/cracked_bricks/${tfc_stone}`, cracked_stairs: `tfc:rock/cracked_bricks/${tfc_stone}_stairs`, cracked_slab: `tfc:rock/cracked_bricks/${tfc_stone}_slab`, cracked_wall: `tfc:rock/cracked_bricks/${tfc_stone}_wall`,
	mossy_brick: `tfc:rock/mossy_bricks/${tfc_stone}`, mossy_stairs: `tfc:rock/mossy_bricks/${tfc_stone}_stairs`, mossy_slab: `tfc:rock/mossy_bricks/${tfc_stone}_slab`, mossy_wall: `tfc:rock/mossy_bricks/${tfc_stone}_wall`,
	smooth_brick: `tfc:rock/smooth/${tfc_stone}`, smooth_stairs: `tfc:rock/smooth/${tfc_stone}_stairs`, smooth_slab: `tfc:rock/smooth/${tfc_stone}_slab`, smooth_wall: `tfc:rock/smooth/${tfc_stone}_wall`,
	chiseled_brick: `tfc:rock/chiseled/${tfc_stone}`
}));
(global.CREATE_DECO_BRICK_TYPES ? global.CREATE_DECO_BRICK_TYPES : []).slice(0, -1).forEach(create_brick => {
	global.BRICK_INDEX.push({
		brick_type: create_brick,
		brick: `createdeco:${create_brick}_bricks`, brick_stairs: `createdeco:${create_brick}_brick_stairs`, brick_slab: `createdeco:${create_brick}_brick_slab`, brick_wall: `createdeco:${create_brick}_brick_wall`,
		cracked_brick: `createdeco:cracked_${create_brick}_bricks`, cracked_stairs: `createdeco:cracked_${create_brick}_brick_stairs`, cracked_slab: `createdeco:cracked_${create_brick}_brick_slab`, cracked_wall: `createdeco:cracked_${create_brick}_brick_wall`,
		mossy_brick: `createdeco:mossy_${create_brick}_bricks`, mossy_stairs: `createdeco:mossy_${create_brick}_brick_stairs`, mossy_slab: `createdeco:mossy_${create_brick}_brick_slab`, mossy_wall: `createdeco:mossy_${create_brick}_brick_wall`,
		smooth_brick: `createdeco:corner_${create_brick}_bricks`, smooth_stairs: `createdeco:corner_${create_brick}_brick_stairs`, smooth_slab: `createdeco:corner_${create_brick}_brick_slab`, smooth_wall: `createdeco:corner_${create_brick}_brick_wall`,
		chiseled_brick: `createdeco:tiled_${create_brick}_bricks`
	})
});
global.BRICK_INDEX = global.BRICK_INDEX.concat([
	//  { brick_type:     '',
	//    brick:          '',                                            brick_stairs:    '',                                             brick_slab:   '',                                          brick_wall:   '',
	//    cracked_brick:  '',                                            cracked_stairs:  '',                                             cracked_slab: '',                                          cracked_wall: '', 
	//    mossy_brick:    '',                                            mossy_stairs:    '',                                             mossy_slab:   '',                                          mossy_wallL:  '',
	//    smooth_brick:   '',                                            smooth_stairs:   '',                                             smooth_slab:  '',                                          smooth_wall:  '',
	//    chiseled_brick: ''                            },

	{
		brick_type: 'red',
		brick: 'minecraft:bricks', brick_stairs: 'minecraft:brick_stairs', brick_slab: 'minecraft:brick_slab', brick_wall: 'minecraft:brick_wall',
		cracked_brick: 'createdeco:cracked_red_bricks', cracked_stairs: 'createdeco:cracked_red_brick_stairs', cracked_slab: 'createdeco:cracked_red_brick_slab', cracked_wall: 'createdeco:cracked_red_brick_wall',
		mossy_brick: 'createdeco:mossy_red_bricks', mossy_stairs: 'createdeco:mossy_red_brick_stairs', mossy_slab: 'createdeco:mossy_red_brick_slab', mossy_wall: 'createdeco:mossy_red_brick_wall',
		smooth_brick: 'createdeco:corner_red_bricks', smooth_stairs: 'createdeco:corner_red_brick_stairs', smooth_slab: 'createdeco:corner_red_brick_slab', smooth_wall: 'createdeco:corner_red_brick_wall',
		chiseled_brick: 'createdeco:tiled_red_bricks'
	},

	{
		brick_type: 'light_concrete',
		brick: 'gtceu:light_concrete_bricks', brick_stairs: null, brick_slab: null, brick_wall: null,
		cracked_brick: 'gtceu:cracked_light_concrete_bricks', cracked_stairs: null, cracked_slab: null, cracked_wall: null,
		mossy_brick: 'gtceu:mossy_light_concrete_bricks', mossy_stairs: null, mossy_slab: null, mossy_wall: null,
		smooth_brick: 'gtceu:polished_light_concrete', smooth_stairs: null, smooth_slab: null, smooth_wall: null,
		chiseled_brick: 'gtceu:chiseled_light_concrete'
	},

	{
		brick_type: 'dark_concrete',
		brick: 'gtceu:dark_concrete_bricks', brick_stairs: null, brick_slab: null, brick_wall: null,
		cracked_brick: 'gtceu:cracked_dark_concrete_bricks', cracked_stairs: null, cracked_slab: null, cracked_wall: null,
		mossy_brick: 'gtceu:mossy_dark_concrete_bricks', mossy_stairs: null, mossy_slab: null, mossy_wall: null,
		smooth_brick: 'gtceu:polished_dark_concrete', smooth_stairs: null, smooth_slab: null, smooth_wall: null,
		chiseled_brick: 'gtceu:chiseled_dark_concrete'
	},

	{
		brick_type: 'deepslate',
		brick: 'minecraft:deepslate_bricks', brick_stairs: 'minecraft:deepslate_brick_stairs', brick_slab: 'minecraft:deepslate_brick_slab', brick_wall: 'minecraft:deepslate_brick_wall',
		cracked_brick: 'minecraft:cracked_deepslate_bricks', cracked_stairs: 'tfg:rock/cracked_bricks_deepslate_stairs', cracked_slab: 'tfg:rock/cracked_bricks_deepslate_slab', cracked_wall: 'tfg:rock/cracked_bricks_deepslate_wall',
		mossy_brick: 'tfg:rock/mossy_bricks_deepslate', mossy_stairs: 'tfg:rock/mossy_bricks_deepslate_stairs', mossy_slab: 'tfg:rock/mossy_bricks_deepslate_slab', mossy_wall: 'tfg:rock/mossy_bricks_deepslate_wall',
		smooth_brick: 'minecraft:polished_deepslate', smooth_stairs: 'minecraft:polished_deepslate_stairs', smooth_slab: 'minecraft:polished_deepslate_slab', smooth_wall: 'minecraft:polished_deepslate_wall',
		chiseled_brick: 'minecraft:chiseled_deepslate'
	},

	{
		brick_type: 'deepslate_tiles',
		brick: 'minecraft:deepslate_tiles', brick_stairs: 'minecraft:deepslate_tile_stairs', brick_slab: 'minecraft:deepslate_tile_slab', brick_wall: 'minecraft:deepslate_tile_wall',
		cracked_brick: 'minecraft:cracked_deepslate_tiles', cracked_stairs: 'tfg:rock/cracked_tiles_deepslate_stairs', cracked_slab: 'tfg:rock/cracked_tiles_deepslate_slab', cracked_wall: 'tfg:rock/cracked_tiles_deepslate_wall',
		mossy_brick: null, mossy_stairs: null, mossy_slab: null, mossy_wall: null,
		smooth_brick: 'minecraft:polished_deepslate', smooth_stairs: 'minecraft:polished_deepslate_stairs', smooth_slab: 'minecraft:polished_deepslate_slab', smooth_wall: 'minecraft:polished_deepslate_wall',
		chiseled_brick: 'minecraft:chiseled_deepslate'
	},

	{
		brick_type: 'blackstone',
		brick: 'minecraft:polished_blackstone_bricks', brick_stairs: 'minecraft:polished_blackstone_brick_stairs', brick_slab: 'minecraft:polished_blackstone_brick_slab', brick_wall: 'minecraft:polished_blackstone_brick_wall',
		cracked_brick: 'minecraft:cracked_polished_blackstone_bricks', cracked_stairs: 'tfg:rock/cracked_bricks_blackstone_stairs', cracked_slab: 'tfg:rock/cracked_bricks_blackstone_slab', cracked_wall: 'tfg:rock/cracked_bricks_blackstone_wall',
		mossy_brick: 'tfg:rock/mossy_bricks_blackstone', mossy_stairs: 'tfg:rock/mossy_bricks_blackstone_stairs', mossy_slab: 'tfg:rock/mossy_bricks_blackstone_slab', mossy_wall: 'tfg:rock/mossy_bricks_blackstone_wall',
		smooth_brick: 'minecraft:polished_blackstone', smooth_stairs: 'minecraft:polished_blackstone_stairs', smooth_slab: 'minecraft:polished_blackstone_slab', smooth_wall: 'minecraft:polished_blackstone_wall',
		chiseled_brick: 'minecraft:chiseled_polished_blackstone'
	},

	{
		brick_type: 'dripstone',
		brick: 'create:cut_dripstone_bricks', brick_stairs: 'create:cut_dripstone_brick_stairs', brick_slab: 'create:cut_dripstone_brick_slab', brick_wall: 'create:cut_dripstone_brick_wall',
		cracked_brick: 'tfg:rock/cracked_bricks_dripstone', cracked_stairs: 'tfg:rock/cracked_bricks_dripstone_stairs', cracked_slab: 'tfg:rock/cracked_bricks_dripstone_slab', cracked_wall: 'tfg:rock/cracked_bricks_dripstone_wall',
		mossy_brick: 'tfg:rock/mossy_bricks_dripstone', mossy_stairs: 'tfg:rock/mossy_bricks_dripstone_stairs', mossy_slab: 'tfg:rock/mossy_bricks_dripstone_slab', mossy_wall: 'tfg:rock/mossy_bricks_dripstone_wall',
		smooth_brick: 'create:polished_cut_dripstone', smooth_stairs: 'create:polished_cut_dripstone_stairs', smooth_slab: 'create:polished_cut_dripstone_slab', smooth_wall: 'create:polished_cut_dripstone_wall',
		chiseled_brick: 'create:small_dripstone_bricks'
	},

	{
		brick_type: 'crackrack',
		brick: 'minecraft:nether_bricks', brick_stairs: 'minecraft:nether_bricks_stairs', brick_slab: 'minecraft:nether_bricks_slab', brick_wall: 'minecraft:nether_bricks_wall',
		cracked_brick: 'minecraft:cracked_nether_bricks', cracked_stairs: 'tfg:rock/cracked_bricks_nether_stairs', cracked_slab: 'tfg:rock/cracked_bricks_nether_slab', cracked_wall: 'tfg:rock/cracked_bricks_nether_wall',
		mossy_brick: 'tfg:rock/mossy_bricks_nether', mossy_stairs: 'tfg:rock/mossy_bricks_nether_stairs', mossy_slab: 'tfg:rock/mossy_bricks_nether_slab', mossy_wall: 'tfg:rock/mossy_bricks_nether_wall',
		smooth_brick: 'tfg:rock/polished_crackrack', smooth_stairs: 'tfg:rock/polished_crackrack_stairs', smooth_slab: 'tfg:rock/polished_crackrack_slab', smooth_wall: 'tfg:rock/polished_crackrack_wall',
		chiseled_brick: 'minecraft:chiseled_nether_bricks'
	},

	{
		brick_type: 'moon_deepslate',
		brick: 'tfg:rock/bricks_moon_deepslate', brick_stairs: 'tfg:rock/bricks_moon_deepslate_stairs', brick_slab: 'tfg:rock/bricks_moon_deepslate_slab', brick_wall: 'tfg:rock/bricks_moon_deepslate_wall',
		cracked_brick: 'tfg:rock/cracked_bricks_moon_deepslate', cracked_stairs: 'tfg:rock/cracked_bricks_moon_deepslate_stairs', cracked_slab: 'tfg:rock/cracked_bricks_moon_slab', cracked_wall: 'tfg:rock/cracked_bricks_moon_wall',
		mossy_brick: 'tfg:rock/mossy_bricks_moon_deepslate', mossy_stairs: 'tfg:rock/mossy_bricks_moon_deepslate_stairs', mossy_slab: 'tfg:rock/mossy_bricks_moon_slab', mossy_wall: 'tfg:rock/mossy_bricks_moon_deepslate_wall',
		smooth_brick: 'tfg:rock/polished_moon_deepslate', smooth_stairs: 'tfg:rock/polished_moon_deepslate_stairs', smooth_slab: 'ad_astra:polished_moon_stone_slab', smooth_wall: 'tfg:rock/polished_moon_deepslate_wall',
		chiseled_brick: 'tfg:rock/chiseled_bricks_moon_deepslate'
	},

	{
		brick_type: 'permafrost',
		brick: 'ad_astra:permafrost_bricks', brick_stairs: 'ad_astra:permafrost_brick_stairs', brick_slab: 'ad_astra:permafrost_brick_slab', brick_wall: 'ad_astra:permafrost_brick_wall',
		cracked_brick: 'ad_astra:cracked_permafrost_bricks', cracked_stairs: 'tfg:rock/cracked_bricks_permafrost_stairs', cracked_slab: 'tfg:rock/cracked_bricks_permafrost_slab', cracked_wall: 'tfg:rock/cracked_bricks_permafrost_wall',
		mossy_brick: 'tfg:rock/mossy_bricks_permafrost', mossy_stairs: 'tfg:rock/mossy_bricks_permafrost_stairs', mossy_slab: 'tfg:rock/mossy_bricks_permafrost_slab', mossy_wall: 'tfg:rock/mossy_bricks_permafrost_wall',
		smooth_brick: 'ad_astra:polished_permafrost', smooth_stairs: 'ad_astra:polished_permafrost_stairs', smooth_slab: 'ad_astra:polished_permafrost_slab', smooth_wall: 'tfg:rock/polished_permafrost_wall',
		chiseled_brick: 'ad_astra:chiseled_permafrost_bricks'
	},

	{
		brick_type: 'red_granite',
		brick: 'gtceu:red_granite_bricks', brick_stairs: 'tfg:rock/bricks_red_granite_stairs', brick_slab: 'tfg:rock/bricks_red_granite_slab', brick_wall: 'tfg:rock/bricks_red_granite_wall',
		cracked_brick: 'gtceu:cracked_red_granite_bricks', cracked_stairs: 'tfg:rock/cracked_bricks_red_granite_stairs', cracked_slab: 'tfg:rock/cracked_bricks_red_granite_slab', cracked_wall: 'tfg:rock/cracked_bricks_red_granite_wall',
		mossy_brick: 'gtceu:mossy_red_granite_bricks', mossy_stairs: 'tfg:rock/mossy_bricks_red_granite_stairs', mossy_slab: 'tfg:rock/mossy_bricks_red_granite_slab', mossy_wall: 'tfg:rock/mossy_bricks_red_granite_wall',
		smooth_brick: 'gtceu:polished_red_granite', smooth_stairs: 'tfg:rock/polished_red_granite_stairs', smooth_slab: 'tfg:rock/polished_red_granite_slab', smooth_wall: 'tfg:rock/polished_red_granite_wall',
		chiseled_brick: 'gtceu:chiseled_red_granite'
	},

	{
		brick_type: 'venus_sandstone',
		brick: 'ad_astra:venus_sandstone_bricks', brick_stairs: 'ad_astra:venus_sandstone_brick_stairs', brick_slab: 'ad_astra:venus_sandstone_brick_slab', brick_wall: 'tfg:rock/bricks_venus_sandstone_wall',
		cracked_brick: 'ad_astra:cracked_venus_sandstone_bricks', cracked_stairs: 'tfg:rock/cracked_bricks_venus_sandstone_stairs', cracked_slab: 'tfg:rock/cracked_bricks_venus_sandstone_slab', cracked_wall: 'tfg:rock/cracked_bricks_stone_wall',
		mossy_brick: null, mossy_stairs: null, mossy_slab: null, mossy_wall: null,
		smooth_brick: null, smooth_stairs: null, smooth_slab: null, smooth_wall: null,
		chiseled_brick: null
	},

	{
		brick_type: 'stone',
		brick: 'minecraft:stone_bricks', brick_stairs: 'minecraft:stone_brick_stairs', brick_slab: 'minecraft:stone_brick_slab', brick_wall: 'minecraft:stone_brick_wall',
		cracked_brick: 'minecraft:cracked_stone_bricks', cracked_stairs: 'tfg:rock/cracked_bricks_stone_stairs', cracked_slab: 'tfg:rock/cracked_bricks_stone_slab', cracked_wall: 'tfg:rock/cracked_bricks_stone_wall',
		mossy_brick: 'minecraft:mossy_stone_bricks', mossy_stairs: 'minecraft:mossy_stone_brick_stairs', mossy_slab: 'minecraft:mossy_stone_brick_slab', mossy_wall: 'minecraft:mossy_stone_brick_wall',
		smooth_brick: 'minecraft:smooth_stone', smooth_stairs: 'tfg:rock/smooth_stone_stairs', smooth_slab: 'minecraft:smooth_stone_slab', smooth_wall: 'tfg:rock/smooth_stone_wall',
		chiseled_brick: 'minecraft:chiseled_stone_bricks'
	}
]);

global.BRICK_INDEX = global.BRICK_INDEX.concat((AA_REGULAR_STONES ? AA_REGULAR_STONES : []).map(stone => (
	{
		brick_type: stone,
		brick: `ad_astra:${stone}_stone_bricks`, brick_stairs: `ad_astra:${stone}_stone_brick_stairs`, brick_slab: `ad_astra:${stone}_stone_brick_slab`, brick_wall: `ad_astra:${stone}_stone_brick_wall`,
		cracked_brick: `ad_astra:cracked_${stone}_stone_bricks`, cracked_stairs: `tfg:rock/cracked_bricks_${stone}_stairs`, cracked_slab: `tfg:rock/cracked_bricks_${stone}_slab`, cracked_wall: `tfg:rock/cracked_bricks_${stone}_wall`,
		mossy_brick: `tfg:rock/mossy_bricks_${stone}`, mossy_stairs: `tfg:rock/mossy_bricks_${stone}_stairs`, mossy_slab: `tfg:rock/mossy_bricks_${stone}_slab`, mossy_wall: `tfg:rock/mossy_bricks_${stone}_wall`,
		smooth_brick: `ad_astra:polished_${stone}_stone`, smooth_stairs: `ad_astra:polished_${stone}_stone_stairs`, smooth_slab: `ad_astra:polished_${stone}_stone_slab`, smooth_wall: `tfg:rock/polished_${stone}_wall`,
		chiseled_brick: `ad_astra:chiseled_${stone}_stone_bricks`
	}
)))

// #endregion BRICK_INDEX

// #region COBBLE_INDEX
global.COBBLE_INDEX = (global.TFC_STONE_TYPES ? global.TFC_STONE_TYPES : []).map(tfc_stone => ({
	cobble_type: tfc_stone,
	block: `tfc:rock/cobble/${tfc_stone}`, stairs: `tfc:rock/cobble/${tfc_stone}_stairs`, slab: `tfc:rock/cobble/${tfc_stone}_slab`, wall: `tfc:rock/cobble/${tfc_stone}_wall`,
	mossy_block: `tfc:rock/mossy_cobble/${tfc_stone}`, mossy_stairs: `tfc:rock/mossy_cobble/${tfc_stone}_stairs`, mossy_slab: `tfc:rock/mossy_cobble/${tfc_stone}_slab`, mossy_wall: `tfc:rock/mossy_cobble/${tfc_stone}_wall`
}));

global.COBBLE_INDEX = global.COBBLE_INDEX.concat([
	{
		cobble_type: 'deepslate',
		block: 'minecraft:cobbled_deepslate', stairs: 'minecraft:cobbled_deepslate_stairs', slab: 'minecraft:cobbled_deepslate_slab', wall: 'minecraft:cobbled_deepslate_wall',
		mossy_block: 'tfg:rock/mossy_cobble_deepslate', mossy_stairs: 'tfg:rock/mossy_cobble_deepslate_stairs', mossy_slab: 'tfg:rock/mossy_cobble_deepslate_slab', mossy_wall: 'tfg:rock/mossy_cobble_deepslate_wall'
	},

	{
		cobble_type: 'blackstone',
		block: 'tfg:rock/cobble_blackstone', stairs: 'tfg:rock/cobble_blackstone_stairs', slab: 'tfg:rock/cobble_blackstone_slab', wall: 'tfg:rock/cobble_blackstone_wall',
		mossy_block: 'tfg:rock/mossy_cobble_blackstone', mossy_stairs: 'tfg:rock/mossy_cobble_blackstone_stairs', mossy_slab: 'tfg:rock/mossy_cobble_blackstone_slab', mossy_wall: 'tfg:rock/mossy_cobble_blackstone_wall'
	},

	{
		cobble_type: 'dripstone',
		block: 'tfg:rock/cobble_dripstone', stairs: 'tfg:rock/cobble_dripstone_stairs', slab: 'tfg:rock/cobble_dripstone_slab', wall: 'tfg:rock/cobble_dripstone_wall',
		mossy_block: 'tfg:rock/mossy_cobble_dripstone', mossy_stairs: 'tfg:rock/mossy_cobble_dripstone_stairs', mossy_slab: 'tfg:rock/mossy_cobble_dripstone_slab', mossy_wall: 'tfg:rock/mossy_cobble_dripstone_wall'
	},

	{
		cobble_type: 'crackrack',
		block: 'tfg:rock/cobble_crackrack', stairs: 'tfg:rock/cobble_crackrack_stairs', slab: 'tfg:rock/cobble_crackrack_slab', wall: 'tfg:rock/cobble_crackrack_wall',
		mossy_block: 'tfg:rock/mossy_cobble_crackrack', mossy_stairs: 'tfg:rock/mossy_cobble_crackrack_stairs', mossy_slab: 'tfg:rock/mossy_cobble_crackrack_slab', mossy_wall: 'tfg:rock/mossy_cobble_crackrack_wall'
	},

	{
		cobble_type: 'moon_deepslate',
		block: 'tfg:rock/cobble_moon_deepslate', stairs: 'tfg:rock/cobble_moon_deepslate_stairs', slab: 'tfg:rock/cobble_moon_deepslate_slab', wall: 'tfg:rock/cobble_moon_deepslate_wall',
		mossy_block: 'tfg:rock/mossy_cobble_moon_deepslate', mossy_stairs: 'tfg:rock/mossy_cobble_moon_deepslate_stairs', mossy_slab: 'tfg:rock/mossy_cobble_moon_deepslate_slab', mossy_wall: 'tfg:rock/mossy_cobble_moon_deepslate_wall'
	},

	{
		cobble_type: 'permafrost',
		block: 'tfg:rock/cobble_permafrost', stairs: 'tfg:rock/cobble_permafrost_stairs', slab: 'tfg:rock/cobble_permafrost_slab', wall: 'tfg:rock/cobble_permafrost_wall',
		mossy_block: 'tfg:rock/mossy_cobble_permafrost', mossy_stairs: 'tfg:rock/mossy_cobble_permafrost_stairs', mossy_slab: 'tfg:rock/mossy_cobble_permafrost_slab', mossy_wall: 'tfg:rock/mossy_cobble_permafrost_wall'
	},

	{
		cobble_type: 'red_granite',
		block: 'gtceu:red_granite_cobblestone', stairs: 'tfg:rock/cobble_red_granite_stairs', slab: 'tfg:rock/cobble_red_granite_slab', wall: 'tfg:rock/cobble_red_granite_wall',
		mossy_block: 'gtceu:mossy_red_granite_cobblestone', mossy_stairs: 'tfg:rock/mossy_cobble_red_granite_stairs', mossy_slab: 'tfg:rock/mossy_cobble_red_granite_slab', mossy_wall: 'tfg:rock/mossy_cobble_red_granite_wall'
	},

	{
		cobble_type: 'stone',
		block: 'minecraft:cobblestone', stairs: 'minecraft:cobblestone_stairs', slab: 'minecraft:cobblestone_slab', wall: 'minecraft:cobblestone_wall',
		mossy_block: 'minecraft:mossy_cobblestone', mossy_stairs: 'minecraft:mossy_cobblestone_stairs', mossy_slab: 'minecraft:mossy_cobblestone_slab', mossy_wall: 'minecraft:mossy_cobblestone_wall'
	}
]);

global.COBBLE_INDEX = global.COBBLE_INDEX.concat((AA_REGULAR_STONES ? AA_REGULAR_STONES : []).map(stone => (
	{
		cobble_type: stone,
		block: `ad_astra:${stone}_cobblestone`, stairs: `ad_astra:${stone}_cobblestone_stairs`, slab: `ad_astra:${stone}_cobblestone_slab`, wall: `tfg:rock/cobble_${stone}_wall`,
		mossy_block: `tfg:rock/mossy_cobble_${stone}`, mossy_stairs: `tfg:rock/mossy_cobble_${stone}_stairs`, mossy_slab: `tfg:rock/mossy_cobble_${stone}_slab`, mossy_wall: `tfg:rock/mossy_cobble_${stone}_wall`
	}
)))

// #endregion COBBLE_INDEX

/**
 * Function for replacing a block with another block by crouch-right-clicking with a tool.
 *
 * If input and output is null recipe will just return.
 *
 * @param {*} event
 * @param {string} inputBlock -Block ID to be replaced. Accepts a Tag, but not recommended.
 * @param {string} outputBlock -Block ID of the replacement.
 * @param {string} toolId -Item ID of the tool.
 * @param {boolean} damageTool -Sets wether the tool should be damaged on use.
 * @param {string} soundId -Sound ID to be used as the flair sound effect. Can be null.
 * @param {string} particleId -SimpleParticleType ID to be used as the flair particle. Can be null.
 * @param {boolean} copyBlockstate - Sets wether the blockstate should be copied from the input block to the output block.
 */
function transformBlockWithTool(event, inputBlock, outputBlock, toolId, damageTool, soundId, particleId, copyBlockstate) {
	const { server, item, player, block } = event;

	if (!inputBlock || !outputBlock) return;

	if (inputBlock.startsWith('#')) {
		if (!block.hasTag(inputBlock.substring(1))) return;
	} else {
		if (block.id.toString() !== inputBlock) return;
	}

	if (toolId.startsWith('#')) {
		if (item.isEmpty() || !player.mainHandItem.hasTag(toolId.substring(1))) return;
	} else {
		if (item.isEmpty() || player.mainHandItem.id !== toolId) return;
	}

	if (!player.crouching) return;

	let state = block.getBlockState().toString();
	if (state.includes('[') && copyBlockstate === true) {
		state = state.substring(state.indexOf('['));
	} else {
		state = '';
	}

	if (soundId) {
		server.runCommandSilent(`playsound ${soundId} player ${player.username} ${player.x} ${player.y} ${player.z} 1 2 1`)
	}
	if (particleId) {
		server.runCommandSilent(`particle ${particleId} ${block.x} ${block.y + 0.8} ${block.z} 0.1 0.1 0.1 0.6 10`)
	}
	player.swing();

	if (!player.isCreative() && damageTool) {
		item.damageValue++;
		if (item.damageValue >= item.maxDamage) {
			server.runCommandSilent(`playsound minecraft:item.shield.break player ${player.username} ${player.x} ${player.y} ${player.z} 1 1 1`);
			item.count--;
		}
	}

	const dim = block.level.name.getString();
	server.runCommandSilent(`execute in ${dim} run fill ${block.x} ${block.y} ${block.z} ${block.x} ${block.y} ${block.z} air`);
	server.runCommandSilent(`execute in ${dim} run setblock ${block.x} ${block.y} ${block.z} ${outputBlock}${state}`);
};

/**
 * Function for replacing a block with another block by crouch-right-clicking with a tool and receiving an item.
 *
 * If input and output is null recipe will just return.
 *
 * @param {*} event
 * @param {string} inputBlock -Block ID to be replaced. Accepts a Tag, but not recommended.
 * @param {string} outputBlock -Block ID of the replacement.
 * @param {string} outputItem -Item ID of item to receive
 * @param {number} outputCount -Number of items to be returned
 * @param {string} toolId -Item ID of the tool.
 * @param {boolean} damageTool -Sets wether the tool should be damaged on use.
 * @param {string} soundId -Sound ID to be used as the flair sound effect. Can be null.
 * @param {string} particleId -SimpleParticleType ID to be used as the flair particle. Can be null.
 * @param {boolean} copyBlockstate - Sets wether the blockstate should be copied from the input block to the output block.
 */
function transformBlockWithToolReturn(event, inputBlock, outputBlock, outputItem, outputCount, toolId, damageTool, soundId, particleId, copyBlockstate) {
	const { server, item, player, block } = event;

	if (!inputBlock || !outputBlock) return;

	if (inputBlock.startsWith('#')) {
		if (!block.hasTag(inputBlock.substring(1))) return;
	} else {
		if (block.id.toString() !== inputBlock) return;
	}
	if (!player.crouching) return;

	if (toolId.startsWith('#')) {
		if (item.isEmpty() || !player.mainHandItem.hasTag(toolId.substring(1))) return;
	} else {
		if (item.isEmpty() || player.mainHandItem.id !== toolId) return;
	}

	transformBlockWithTool(event, inputBlock, outputBlock, toolId, damageTool, soundId, particleId, copyBlockstate)
	
	const dim = block.level.name.getString();
	server.runCommandSilent(`execute in ${dim} run summon item ${player.x} ${player.y} ${player.z} {Item:{id:'${outputItem}', Count:${outputCount}b}}`);

}
/**
 * Function for replacing a block with another block by crouch-right-clicking with an item.
 *
 * If input and output is null recipe will just return.
 *
 * @param {*} event
 * @param {string} inputBlock -Block ID to be replaced. Accepts a Tag, but not recommended.
 * @param {string} outputBlock -Block ID of the replacement.
 * @param {string} itemId -Item ID of the consumed item. Accepts Tags.
 * @param {boolean} consumeItem -Sets wether the item should be comsumed or not.
 * @param {number} consumeAmount -Number of items to consume, can't be greater than stacksize.
 * @param {string} soundId -Sound ID to be used as the flair sound effect. Can be null.
 * @param {string} particleId -SimpleParticleType ID to be used as the flair particle. Can be null.
 * @param {boolean} copyBlockstate - Sets wether the blockstate should be copied from the input block to the output block.
 */
function transformBlockWithItem(event, inputBlock, outputBlock, itemId, consumeItem, consumeAmount, soundId, particleId, copyBlockstate) {
	const { server, item, player, block } = event;

	if (!inputBlock || !outputBlock) return;

	if (inputBlock.startsWith('#')) {
		if (!block.hasTag(inputBlock.substring(1))) return;
	} else {
		if (block.id.toString() !== inputBlock) return;
	}

	if (itemId.startsWith('#')) {
		if (item.isEmpty() || !player.mainHandItem.hasTag(itemId.substring(1))) return;
	} else {
		if (item.isEmpty() || player.mainHandItem.id !== itemId) return;
	}
	if (!player.crouching) return;

	let state = block.getBlockState().toString()
	if (state.includes('[') && copyBlockstate === true) {
		state = state.substring(block.getBlockState().toString().indexOf('['));
	} else {
		state = ''
	}

	if (!player.isCreative() && consumeItem === true) {
		if (item.count < consumeAmount) {
			player.tell(`Item count is too low. Held amount = ${item.count}, required amount = ${consumeAmount}`)
			return;
		}
		item.count -= consumeAmount;
	}
	if (soundId) {
		server.runCommandSilent(`playsound ${soundId} player ${player.username} ${player.x} ${player.y} ${player.z} 1 2 1`)
	}
	if (particleId) {
		server.runCommandSilent(`particle ${particleId} ${block.x} ${block.y + 0.8} ${block.z} 0.1 0.1 0.1 0.6 10`)
	}
	player.swing()
	event.server.runCommandSilent(`execute in ${event.block.level.name.getString()} run fill ${block.x} ${block.y} ${block.z} ${block.x} ${block.y} ${block.z} air`)
	event.server.runCommandSilent(`execute in ${event.block.level.name.getString()} run setblock ${block.x} ${block.y} ${block.z} ${outputBlock}${state}`)
};

// Declare Events
BlockEvents.rightClicked(event => {
	//Brick index events
	for (const b of global.BRICK_INDEX) {
		//brick -> cracked
		transformBlockWithTool(event, b.brick, b.cracked_brick, '#forge:tools/hammers', true, 'minecraft:block.copper.hit', 'minecraft:crit', true);
		transformBlockWithTool(event, b.brick_stairs, b.cracked_stairs, '#forge:tools/hammers', true, 'minecraft:block.copper.hit', 'minecraft:crit', true);
		transformBlockWithTool(event, b.brick_slab, b.cracked_slab, '#forge:tools/hammers', true, 'minecraft:block.copper.hit', 'minecraft:crit', true);
		transformBlockWithTool(event, b.brick_wall, b.cracked_wall, '#forge:tools/hammers', true, 'minecraft:block.copper.hit', 'minecraft:crit', true);
		//brick -> mossy
		transformBlockWithItem(event, b.brick, b.mossy_brick, '#tfc:compost_greens_low', true, 1, 'minecraft:block.moss.hit', 'minecraft:item_slime', true);
		transformBlockWithItem(event, b.brick, b.mossy_brick, 'gtceu:plant_ball', true, 1, 'minecraft:block.moss.hit', 'minecraft:item_slime', true);
		transformBlockWithItem(event, b.brick_stairs, b.mossy_stairs, '#tfc:compost_greens_low', true, 1, 'minecraft:block.moss.hit', 'minecraft:item_slime', true);
		transformBlockWithItem(event, b.brick_stairs, b.mossy_stairs, 'gtceu:plant_ball', true, 1, 'minecraft:block.moss.hit', 'minecraft:item_slime', true);
		transformBlockWithItem(event, b.brick_slab, b.mossy_slab, '#tfc:compost_greens_low', true, 1, 'minecraft:block.moss.hit', 'minecraft:item_slime', true);
		transformBlockWithItem(event, b.brick_slab, b.mossy_slab, 'gtceu:plant_ball', true, 1, 'minecraft:block.moss.hit', 'minecraft:item_slime', true);
		transformBlockWithItem(event, b.brick_wall, b.mossy_wall, '#tfc:compost_greens_low', true, 1, 'minecraft:block.moss.hit', 'minecraft:item_slime', true);
		transformBlockWithItem(event, b.brick_wall, b.mossy_wall, 'gtceu:plant_ball', true, 1, 'minecraft:block.moss.hit', 'minecraft:item_slime', true);
		//cracked -> mossy
		transformBlockWithItem(event, b.cracked_brick, b.mossy_brick, '#tfc:compost_greens_low', true, 1, 'minecraft:block.moss.hit', 'minecraft:item_slime', true);
		transformBlockWithItem(event, b.cracked_brick, b.mossy_brick, 'gtceu:plant_ball', true, 1, 'minecraft:block.moss.hit', 'minecraft:item_slime', true);
		transformBlockWithItem(event, b.cracked_stairs, b.mossy_stairs, '#tfc:compost_greens_low', true, 1, 'minecraft:block.moss.hit', 'minecraft:item_slime', true);
		transformBlockWithItem(event, b.cracked_stairs, b.mossy_stairs, 'gtceu:plant_ball', true, 1, 'minecraft:block.moss.hit', 'minecraft:item_slime', true);
		transformBlockWithItem(event, b.cracked_slab, b.mossy_slab, '#tfc:compost_greens_low', true, 1, 'minecraft:block.moss.hit', 'minecraft:item_slime', true);
		transformBlockWithItem(event, b.cracked_slab, b.mossy_slab, 'gtceu:plant_ball', true, 1, 'minecraft:block.moss.hit', 'minecraft:item_slime', true);
		transformBlockWithItem(event, b.cracked_wall, b.mossy_wall, '#tfc:compost_greens_low', true, 1, 'minecraft:block.moss.hit', 'minecraft:item_slime', true);
		transformBlockWithItem(event, b.cracked_wall, b.mossy_wall, 'gtceu:plant_ball', true, 1, 'minecraft:block.moss.hit', 'minecraft:item_slime', true);
		//mossy -> cracked
		transformBlockWithTool(event, b.mossy_brick, b.cracked_brick, '#forge:tools/hammers', true, 'minecraft:block.copper.hit', 'minecraft:crit', true);
		transformBlockWithTool(event, b.mossy_stairs, b.cracked_stairs, '#forge:tools/hammers', true, 'minecraft:block.copper.hit', 'minecraft:crit', true);
		transformBlockWithTool(event, b.mossy_slab, b.cracked_slab, '#forge:tools/hammers', true, 'minecraft:block.copper.hit', 'minecraft:crit', true);
		transformBlockWithTool(event, b.mossy_wall, b.cracked_wall, '#forge:tools/hammers', true, 'minecraft:block.copper.hit', 'minecraft:crit', true);
		//mossy -> brick
		transformBlockWithTool(event, b.mossy_brick, b.brick, '#forge:tools/knives', true, 'minecraft:item.axe.wax_off', 'minecraft:item_slime', true);
		transformBlockWithItem(event, b.mossy_brick, b.brick, 'tfc:groundcover/pumice', true, 1, 'minecraft:item.axe.wax_off', 'minecraft:item_slime', true);
		transformBlockWithTool(event, b.mossy_stairs, b.brick_stairs, '#forge:tools/knives', true, 'minecraft:item.axe.wax_off', 'minecraft:item_slime', true);
		transformBlockWithItem(event, b.mossy_stairs, b.brick_stairs, 'tfc:groundcover/pumice', true, 1, 'minecraft:item.axe.wax_off', 'minecraft:item_slime', true);
		transformBlockWithTool(event, b.mossy_slab, b.brick_slab, '#forge:tools/knives', true, 'minecraft:item.axe.wax_off', 'minecraft:item_slime', true);
		transformBlockWithItem(event, b.mossy_slab, b.brick_slab, 'tfc:groundcover/pumice', true, 1, 'minecraft:item.axe.wax_off', 'minecraft:item_slime', true);
		transformBlockWithTool(event, b.mossy_wall, b.brick_wall, '#forge:tools/knives', true, 'minecraft:item.axe.wax_off', 'minecraft:item_slime', true);
		transformBlockWithItem(event, b.mossy_wall, b.brick_wall, 'tfc:groundcover/pumice', true, 1, 'minecraft:item.axe.wax_off', 'minecraft:item_slime', true);
		//cracked -> brick
		transformBlockWithItem(event, b.cracked_brick, b.brick, 'tfc:mortar', true, 1, 'minecraft:item.ink_sac.use', 'minecraft:effect', true);
		transformBlockWithItem(event, b.cracked_stairs, b.brick_stairs, 'tfc:mortar', true, 1, 'minecraft:item.ink_sac.use', 'minecraft:effect', true);
		transformBlockWithItem(event, b.cracked_slab, b.brick_slab, 'tfc:mortar', true, 1, 'minecraft:item.ink_sac.use', 'minecraft:effect', true);
		transformBlockWithItem(event, b.cracked_wall, b.brick_wall, 'tfc:mortar', true, 1, 'minecraft:item.ink_sac.use', 'minecraft:effect', true);
		// brick -> smooth
		transformBlockWithTool(event, b.brick, b.smooth_brick, '#create:sandpaper', true, 'create:sanding_short', 'minecraft:crit', true);
		transformBlockWithTool(event, b.mossy_brick, b.smooth_brick, '#create:sandpaper', true, 'create:sanding_short', 'minecraft:crit', true);
		transformBlockWithTool(event, b.cracked_brick, b.smooth_brick, '#create:sandpaper', true, 'create:sanding_short', 'minecraft:crit', true);
		// smooth -> brick
		transformBlockWithTool(event, b.smooth_brick, b.cracked_brick, '#forge:tools/hammers', true, 'minecraft:block.copper.hit', 'minecraft:crit', true);
		transformBlockWithItem(event, b.smooth_brick, b.mossy_brick, '#tfc:compost_greens_low', true, 1, 'minecraft:block.moss.hit', 'minecraft:item_slime', true);
		transformBlockWithItem(event, b.smooth_brick, b.mossy_brick, 'gtceu:plant_ball', true, 1, 'minecraft:block.moss.hit', 'minecraft:item_slime', true);
		transformBlockWithTool(event, b.smooth_brick, b.brick, '#forge:tools/files', true, 'minecraft:block.beehive.shear', 'minecraft:crit', true);
	}

	//Cobble index events
	for (const c of global.COBBLE_INDEX) {
		//cobble -> mossy
		transformBlockWithItem(event, c.block, c.mossy_block, '#tfc:compost_greens_low', true, 1, 'minecraft:block.moss.hit', 'minecraft:item_slime', true);
		transformBlockWithItem(event, c.block, c.mossy_block, 'gtceu:plant_ball', true, 1, 'minecraft:block.moss.hit', 'minecraft:item_slime', true);
		transformBlockWithItem(event, c.stairs, c.mossy_stairs, '#tfc:compost_greens_low', true, 1, 'minecraft:block.moss.hit', 'minecraft:item_slime', true);
		transformBlockWithItem(event, c.stairs, c.mossy_stairs, 'gtceu:plant_ball', true, 1, 'minecraft:block.moss.hit', 'minecraft:item_slime', true);
		transformBlockWithItem(event, c.slab, c.mossy_slab, '#tfc:compost_greens_low', true, 1, 'minecraft:block.moss.hit', 'minecraft:item_slime', true);
		transformBlockWithItem(event, c.slab, c.mossy_slab, 'gtceu:plant_ball', true, 1, 'minecraft:block.moss.hit', 'minecraft:item_slime', true);
		transformBlockWithItem(event, c.wall, c.mossy_wall, '#tfc:compost_greens_low', true, 1, 'minecraft:block.moss.hit', 'minecraft:item_slime', true);
		transformBlockWithItem(event, c.wall, c.mossy_wall, 'gtceu:plant_ball', true, 1, 'minecraft:block.moss.hit', 'minecraft:item_slime', true);
		//mossy -> cobble
		transformBlockWithTool(event, c.mossy_block, c.block, '#forge:tools/knives', true, 'minecraft:item.axe.wax_off', 'minecraft:item_slime', true);
		transformBlockWithItem(event, c.mossy_block, c.block, 'tfc:groundcover/pumice', true, 1, 'minecraft:item.axe.wax_off', 'minecraft:item_slime', true);
		transformBlockWithTool(event, c.mossy_stairs, c.stairs, '#forge:tools/knives', true, 'minecraft:item.axe.wax_off', 'minecraft:item_slime', true);
		transformBlockWithItem(event, c.mossy_stairs, c.stairs, 'tfc:groundcover/pumice', true, 1, 'minecraft:item.axe.wax_off', 'minecraft:item_slime', true);
		transformBlockWithTool(event, c.mossy_slab, c.slab, '#forge:tools/knives', true, 'minecraft:item.axe.wax_off', 'minecraft:item_slime', true);
		transformBlockWithItem(event, c.mossy_slab, c.slab, 'tfc:groundcover/pumice', true, 1, 'minecraft:item.axe.wax_off', 'minecraft:item_slime', true);
		transformBlockWithTool(event, c.mossy_wall, c.wall, '#forge:tools/knives', true, 'minecraft:item.axe.wax_off', 'minecraft:item_slime', true);
		transformBlockWithItem(event, c.mossy_wall, c.wall, 'tfc:groundcover/pumice', true, 1, 'minecraft:item.axe.wax_off', 'minecraft:item_slime', true);
	}
	
	//Misc Events
	transformBlockWithItem(event, 'gtceu:incoloy_ma_956_frame', 'tfg:glacian_wool_frame', 'tfg:glacian_wool', true, 2, 'block.wool.place', 'minecraft:happy_villager', true);
	transformBlockWithToolReturn(event, 'tfg:glacian_wool_frame', 'gtceu:incoloy_ma_956_frame', 'tfg:glacian_wool', 2,'#forge:tools/wire_cutters', true, 'minecraft:block.beehive.shear', 'minecraft:crit', true);

	transformBlockWithItem(event, 'gtceu:incoloy_ma_956_frame', 'tfg:aes_insulation_frame', 'tfg:aes_insulation_roll', true, 1, 'block.wool.place', 'minecraft:happy_villager', true);
	transformBlockWithToolReturn(event, 'tfg:aes_insulation_frame', 'gtceu:incoloy_ma_956_frame', 'tfg:aes_insulation_roll', 1, '#forge:tools/wire_cutters', true, 'minecraft:block.beehive.shear', 'minecraft:crit', true);

	transformBlockWithItem(event, 'gtceu:incoloy_ma_956_frame', 'tfg:moderate_core_frame', 'tfg:graphite_moderator', true, 1, 'block.wool.place', 'minecraft:happy_villager', true);
	transformBlockWithToolReturn(event, 'tfg:moderate_core_frame', 'gtceu:incoloy_ma_956_frame', 'tfg:graphite_moderator', 1, '#forge:tools/wire_cutters', true, 'minecraft:block.beehive.shear', 'minecraft:crit', true);

	transformBlockWithItem(event, 'gtceu:incoloy_ma_956_frame', 'tfg:impure_moderate_core_frame', 'tfg:impure_graphite_moderator', true, 1, 'block.wool.place', 'minecraft:happy_villager', true);
	transformBlockWithToolReturn(event, 'tfg:impure_moderate_core_frame', 'gtceu:incoloy_ma_956_frame', 'tfg:impure_graphite_moderator', 1, '#forge:tools/wire_cutters', true, 'minecraft:block.beehive.shear', 'minecraft:crit', true);

});

// Makes scythes, hoes, and knives take damage when cutting grass
BlockEvents.broken('tfc:mineable_with_sharp_tool', event => {
	let player = event.player;
	let toolUsed = player.mainHandItem;

	if (!toolUsed.hasTag('tfc:sharp_tools')) {
		return;
	}

	if (!player.isCreative()) {
		toolUsed.damageValue++;
		if (toolUsed.damageValue >= toolUsed.maxDamage) {
			event.server.runCommandSilent(`playsound minecraft:item.shield.break player ${player.username} ${player.x} ${player.y} ${player.z} 1 1 1`);
			toolUsed.count--;
		}
	}
});

//#endregion
