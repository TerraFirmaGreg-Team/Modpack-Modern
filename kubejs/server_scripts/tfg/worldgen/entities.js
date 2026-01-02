// priority: 0
"use strict";

const NEW_MOB_MAX_HP = {
	// moon mobs
	"endermanoverhaul:end_enderman": 50,
	"endermanoverhaul:end_islands_enderman": 120,
	"endermanoverhaul:windswept_hills_enderman": 70,
	"endermanoverhaul:soulsand_valley_enderman": 80,

	// mars mobs -- wan's ancient beasts has its own config for this (also includes sniffer)
	"endermanoverhaul:crimson_enderman": 60,
	"endermanoverhaul:warped_enderman": 60,
	"endermanoverhaul:badlands_enderman": 65,
	"endermanoverhaul:cave_enderman": 60,
	"ad_astra:martian_raptor": 50,
	"tfg:glacian_ram": 50,
	"tfg:wraptor": 60,
	"species:goober": 100,
	"species:stackatick": 20,
	"species:springling": 60,
	"species:quake": 130,
	"species:cruncher": 1200,

	// venus mobs
	"endermanoverhaul:savanna_enderman": 85,
	"endermanoverhaul:desert_enderman": 90,
	"ad_astra:sulfur_creeper": 60,
	"species:cliff_hanger": 95,
	"species:trooper": 30,
	"minecraft:blaze": 80,
	"minecraft:strider": 50,
	'arthropocolypse:scarab': 10,
	'arthropocolypse:prairie_grasshopper': 15,
	'arthropocolypse:field_cricket': 20,
	'arthropocolypse:ice_crawler': 70,
	'arthropocolypse:behemoth_desert_spider': 1300,
	'arthropocolypse:behemoth_desert_scorpion': 200,
	'arthropocolypse:worker_ant': 30,
	'arthropocolypse:soldier_ant': 60,
	'arthropocolypse:stag_beetle': 90,
	'arthropocolypse:stag_beetle_larva': 20,
	'arthropocolypse:wharf_roach': 20,
	'arthropocolypse:platerodrilus': 95,
	'arthropocolypse:mealworm_beetle': 50,
	'arthropocolypse:mealworm': 15,
	'arthropocolypse:millipede_head': 110,
	'arthropocolypse:millipede_body': 110,
	'arthropocolypse:millipede_tail': 110,

	// europa mobs
	"endermanoverhaul:ice_spikes_enderman": 85,
	"endermanoverhaul:snowy_enderman": 80,
	"endermanoverhaul:coral_enderman": 80,
	"species:leaf_hanger": 85,
};

const NEW_MOB_ARMOR = {
	// mars
	"endermanoverhaul:crimson_enderman": 2,
	"endermanoverhaul:warped_enderman": 2,
	"endermanoverhaul:badlands_enderman": 2,
	"species:quake": 6,

	// venus
	"endermanoverhaul:savanna_enderman": 4,
	"endermanoverhaul:desert_enderman": 4,
	"endermanoverhaul:nether_wastes_enderman": 2,
	"ad_astra:sulfur_creeper": 4,
	"species:cliff_hanger": 2,
};

const NEEDS_FIREPROOFING = [
	"primitive_creatures:golem_2",
	"endermanoverhaul:savanna_enderman",
	"endermanoverhaul:desert_enderman",
	'arthropocolypse:scarab',
	'arthropocolypse:prairie_grasshopper',
	'arthropocolypse:field_cricket',
	'arthropocolypse:ice_crawler',
	'arthropocolypse:behemoth_desert_spider',
	'arthropocolypse:behemoth_desert_scorpion',
	'arthropocolypse:worker_ant',
	'arthropocolypse:soldier_ant',
	'arthropocolypse:stag_beetle',
	'arthropocolypse:stag_beetle_larva',
	'arthropocolypse:wharf_roach',
	'arthropocolypse:platerodrilus',
	'arthropocolypse:mealworm_beetle',
	'arthropocolypse:mealworm',
	'arthropocolypse:millipede_head',
	'arthropocolypse:millipede_body',
	'arthropocolypse:millipede_tail'
];

const VENUS_DAMAGE_BUFFING = {
	"primitive_creatures:golem_2": 10,
	"endermanoverhaul:savanna_enderman": 10,
	"endermanoverhaul:desert_enderman": 10,
	'arthropocolypse:scarab': 4,
	'arthropocolypse:ice_crawler': 12,
	'arthropocolypse:behemoth_desert_spider': 30,
	'arthropocolypse:behemoth_desert_scorpion': 20,
	'arthropocolypse:worker_ant': 10,
	'arthropocolypse:soldier_ant': 15,
	'arthropocolypse:stag_beetle': 8,
	'arthropocolypse:wharf_roach': 8,
	'arthropocolypse:platerodrilus': 14,
	'arthropocolypse:mealworm_beetle': 8,
	'arthropocolypse:millipede_head': 20,
};


// Easier to just keep all entities in here for balancing instead of spreading them around

EntityEvents.spawned((event) => {
	let { entity, entity: { type }, level, level: { dimension } } = event;

	let newHP = NEW_MOB_MAX_HP[type] ?? 0;

	// Special cases
	if (type === "minecraft:enderman") {
		switch (dimension) {
			// use default for beneath
			case "ad_astra:moon": newHP = 45;
			case "ad_astra:mars": newHP = 65;
			case "ad_astra:venus": newHP = 75;
			case "ad_astra:mercury": newHP = 75;
			case "ad_astra:glacio": newHP = 85;
		}
	}
	else if (type === "endermanoverhaul:nether_wastes_enderman") {
		switch (dimension) {
			// use default for beneath
			case "ad_astra:venus": newHP = 80;
		}
	}
	else if (type === "minecraft:magma_cube") {
		switch (dimension) {
			// use default for beneath
			case "ad_astra:venus": newHP = entity.maxHealth * 7;
		}
	}
	else if (type === "primitive_creatures:golem_2") {
		switch (dimension) {
			// use default for beneath
			case "ad_astra:venus": newHP = 90;
		}
	}

	// Add fire immunity to some things
	if (NEEDS_FIREPROOFING.includes(type)) {
		entity.potionEffects.add("minecraft:fire_resistance", -1, 0, true, false);
	}


	if (newHP !== 0) {
		let baseHealth = entity.maxHealth;
		let missingHealth = newHP - baseHealth;

		entity.modifyAttribute("minecraft:generic.max_health", "tfg_health_buff_id", missingHealth, "addition");

		if (missingHealth > 0) {
			entity.health += missingHealth;
		}
	}


	let newArmor = NEW_MOB_ARMOR[type] ?? 0;
	if (newArmor !== 0) {
		let baseArmor = entity.armor;
		let missingArmor = newArmor - baseArmor;
		entity.modifyAttribute("minecraft:generic.armor", "tfg_armor_buff_id", missingArmor, "addition");
	}

	let newAttack = VENUS_DAMAGE_BUFFING[type] ?? 0
	if (dimension === "ad_astra:venus" && newAttack !== 0) {
		let baseAttack = entity.attack_damage;
		let missingAttack = newAttack - baseAttack;
		entity.modifyAttribute("minecraft:generic.attack_damage", "tfg_attack_buff_id", missingAttack, "addition");
	}
})