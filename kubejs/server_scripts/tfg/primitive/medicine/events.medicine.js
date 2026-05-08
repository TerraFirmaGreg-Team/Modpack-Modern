
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

//medicine powders

const powderTypes = [
	'mining',
	'acrobat',
	'recovery',
	'combat'
]
powderTypes.forEach(type => {
	ItemEvents.foodEaten(event => {
		const { item, server, player, player: { x, y, z } } = event
		if (item.id !== `tfg:${type}_powder`) return
		player.addItemCooldown(item, 1200)
		server.runCommandSilent(`playsound minecraft:item.honey_bottle.drink player ${player.username} ${x} ${y} ${z} 10 1.5 1`)
	})
})

ItemEvents.entityInteracted('minecraft:bucket', (event) => {
	const { item, player, server, target } = event;

	if (target.type !== 'tfc:horse') return;
	if (typeof target.getPregnantTime !== 'function' || target.getPregnantTime() <= 0) return;

	if (!player.isCreative()) {
		item.shrink(1);
	}

	player.give('tfg:hormone_rich_urine_bucket');
	player.swing();
	server.runCommandSilent(`playsound minecraft:item.bucket.fill player ${player.username} ${player.x} ${player.y} ${player.z} 1 1 1`);
	event.cancel();
})

ItemEvents.entityInteracted((event) => {
	const { item, player, server, target } = event;
	if (!(item.id.includes('knife'))) return;

	if (target.type !== 'tfc:cow') return;
	const gender = typeof target.getGender === 'function' ? String(target.getGender()).toLowerCase() : '';
    if (gender !== 'male') return;

	player.give('tfg:androgenic_tissue');
	player.swing();
	server.runCommandSilent(`playsound minecraft:item.axe.strip player ${player.username} ${player.x} ${player.y} ${player.z} 1 1 1`);
	event.cancel();
})