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
	"endermanoverhaul:savanna_enderman": 65,
	"endermanoverhaul:desert_enderman": 70,
	"ad_astra:sulfur_creeper": 60,
	"species:cliff_hanger": 75,
	"species:trooper": 20,

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


// Easier to just keep all entities in here for balancing instead of spreading them around

EntityEvents.spawned((event) => {
	let { entity, entity: { type }, level, level: { dimension } } = event;

	let newHP = NEW_MOB_MAX_HP[type] ?? 0;

	// Special cases
	if (type === "minecraft:enderman") {
		switch (dimension) {
			// use default for beneath
			case "ad_astra:moon": newHP = 45;
			case "ad_astra:mars": newHP = 55;
			case "ad_astra:venus": newHP = 65;
			case "ad_astra:mercury": newHP = 65;
			case "ad_astra:glacio": newHP = 75;
		}
	}
	else if (type === "endermanoverhaul:nether_wastes_enderman") {
		switch (dimension) {
			// use default for beneath
			case "ad_astra:venus": newHP = 70;
		}
	}
	else if (type === "minecraft:magma_cube") {
		switch (dimension) {
			// use default for beneath
			case "ad_astra:venus": newHP = entity.maxHealth * 6;
		}
	}

	if (newHP === 0)
		return;


	let baseHealth = entity.maxHealth;
	let missingHealth = newHP - baseHealth;

	entity.modifyAttribute("minecraft:generic.max_health", "tfg_health_buff_id", missingHealth, "addition");

	if (missingHealth > 0) {
		entity.health += missingHealth;
	}


	let newArmor = NEW_MOB_ARMOR[type] ?? 0;
	if (newArmor === 0)
		return;

	let baseArmor = entity.armor;
	let missingArmor = newArmor - baseArmor;
	entity.modifyAttribute("minecraft:generic.armor", "tfg_armor_buff_id", missingArmor, "addition");
})