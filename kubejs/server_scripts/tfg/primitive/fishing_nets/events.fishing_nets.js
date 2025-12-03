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