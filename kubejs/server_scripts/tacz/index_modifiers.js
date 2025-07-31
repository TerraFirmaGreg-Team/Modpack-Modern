"use strict";

//IndexLogic is used mainly for the removal of tacz items
//	const json = JSON.parse(event.getStdJson());
//	console.log(json);
//	return event.setJson(JSON.stringify(json));
//This can be used to read what the json contains for any given id

const ammoIndexLogic = (event) => {
	const id = event.getId().toString();

	if (!global.TACZ_ENABLED_AMMO.includes(id)) {
		
		return event.removeAmmo();
	}
}

const attachmentIndexLogic = (event) => {
	const id = event.getId().toString();	
	
	if (!global.TACZ_ENABLED_ATTACH.includes(id)) {
		
		return event.removeAttachment();
	}
}

const gunIndexLogic = (event) => {
	const id = event.getId().toString();
	
	if (!global.TACZ_ENABLED_GUNS.includes(id)) {
		
		return event.removeGun();
	}
}

const attachmentDataLogic = (event) => {
	
}

const gunDataLogic = (event) => {
	const id = event.getId().toString();
	const json = JSON.parse(event.getStdJson());
	
	if(id === "create_armorer:pistol_revolver_torque_data"){
		json.bullet.extra_damage.armor_ignore = 0.25;
		return event.setJson(JSON.stringify(json));
	}
	
	if(id === "create_armorer:sniper_semi_clockwork_data"){
		json.bullet.extra_damage.armor_ignore = 0.30;
		json.bullet.damage = 22;
		json.bullet.extra_damage.damage_adjust = 
		[
			{"distance": 60, "damage": 22},
			{"distance": 120, "damage": 19},
			{"distance": "infinite", "damage": 17}
		]
		return event.setJson(JSON.stringify(json));
	}
	
	if(id === "applied_armorer:moritz_rifle_ar77_data") {
		json.ammo = "applied_armorer:hard_core_quartz_bullet";
		json.bullet.damage = 13;
		json.bullet.extra_damage.armor_ignore = 0.35;
		json.bullet.extra_damage.head_shot_multiplier = 1.75;
		json.bullet.extra_damage.damage_adjust =
		[
			{"distance": 80, "damage": 13},
			{"distance": 120, "damage": 11},
			{"distance": "infinite", "damage": 9}
		]
		return event.setJson(JSON.stringify(json));
	}
	
	if(id === "tacz:db_long_data"){
		json.bullet.extra_damage.armor_ignore = 0.22;
		return event.setJson(JSON.stringify(json));
	}
	
	if(id === "tacz:db_short_data"){
		json.bullet.extra_damage.armor_ignore = 0.22;
		return event.setJson(JSON.stringify(json));
	}
	
	if(id === "create_armorer:cannon_40mm_salamander_data"){
		json.bullet.damage = 50;
		json.bullet.extra_damage.damage_adjust =
		[
			{"distance": 200, "damage": 50},
			{"distance": "infinite", "damage": 45}
		]
		return event.setJson(JSON.stringify(json));
	}
	
	
}
