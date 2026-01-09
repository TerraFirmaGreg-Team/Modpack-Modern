
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

	ItemEvents.foodEaten(event => {
		const { item, server, player, player: { x, y, z } } = event
		if (item.id !== `tfg:${pill_event}_pill`) return
		player.addItemCooldown(item, 100)
		server.runCommandSilent(`playsound minecraft:item.honey_bottle.drink player ${player.username} ${x} ${y} ${z} 10 1.5 1`)
	});

	ItemEvents.foodEaten(event => {
		const { item, server, player, player: { x, y, z } } = event
		if (item.id !== `tfg:${pill_event}_tablet`) return
		player.addItemCooldown(item, 100)
		server.runCommandSilent(`playsound minecraft:item.honey_bottle.drink player ${player.username} ${x} ${y} ${z} 10 1.5 1`)
	});
});

ItemEvents.foodEaten(event => {
	const { item, server, player, player: { x, y, z } } = event
	if (item.id !== `tfg:antipoison_pill`) return
	player.addItemCooldown(item, 50)
	event.player.removeEffect('minecraft:poison')
	server.runCommandSilent(`playsound minecraft:item.honey_bottle.drink player ${player.username} ${x} ${y} ${z} 10 1.5 1`)
});

ItemEvents.foodEaten(event => {
	const { item, server, player, player: { x, y, z } } = event
	if (item.id !== `tfg:antipoison_tablet`) return
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
	ItemEvents.foodEaten(event => {
		const { item, server, player, player: { x, y, z } } = event
		if (item.id !== `tfg:${salvo_event}_salvo`) return
		player.addItemCooldown(item, 100)
		server.runCommandSilent(`playsound minecraft:item.glow_ink_sac.use player ${player.username} ${x} ${y} ${z} 10 2 1`)
	});
});

ItemEvents.foodEaten(event => {
	const { item, server, player, player: { x, y, z } } = event
	if (item.id !== `tfg:absorption_salvo`) return
	player.addItemCooldown(item, 200)
	server.runCommandSilent(`playsound minecraft:item.glow_ink_sac.use player ${player.username} ${x} ${y} ${z} 10 2 1`)
});

ItemEvents.foodEaten(event => {
	const { item, server, player, player: { x, y, z } } = event
	if (item.id !== `tfg:instant_health_salvo`) return
	player.addItemCooldown(item, 100)
	server.runCommandSilent(`playsound minecraft:item.glow_ink_sac.use player ${player.username} ${x} ${y} ${z} 10 2 1`)
});