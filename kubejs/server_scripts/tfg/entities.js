// priority: 0
"use strict";

const NEW_MOB_MAX_HP = {
	// moon mobs
	"endermanoverhaul:end_enderman": 50 ,
	"endermanoverhaul:end_islands_enderman": 120,
	"endermanoverhaul:windswept_hills_enderman": 70,
	"endermanoverhaul:soulsand_valley_enderman": 80,
	// mars mobs -- wan's ancient beasts has its own config for this
	"endermanoverhaul:crimson_enderman": 60,
	"endermanoverhaul:warped_enderman": 60,
	"endermanoverhaul:badlands_enderman": 65,
	"endermanoverhaul:cave_enderman": 60,
	"ad_astra:martian_raptor": 50,
	"tfg:glacian_ram": 50,
	"tfg:wraptor": 60,
	// sniffer uses the value in wan's ancient beasts config
	"species:goober": 100,
	"species:stackatick": 20,
	"species:springling": 60,
	"species:quake": 130,
	"species:cruncher": 1200
}

EntityEvents.spawned((event) => {

	// Easier to just keep all entities in here for balancing instead of spreading them around

	let { entity, entity: {type} } = event;

	let newHP = NEW_MOB_MAX_HP[type] ?? 0;
	if (newHP === 0)
		return;

    let baseHealth = entity.maxHealth;
    let missingHealth = newHP - baseHealth;

	entity.modifyAttribute("minecraft:generic.max_health", "tfg_health_buff_id", missingHealth, "addition");

    if (missingHealth > 0) {
        entity.health += missingHealth;
    }
})