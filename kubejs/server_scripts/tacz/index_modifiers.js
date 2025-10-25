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
	
	const json = JSON.parse(event.getStdJson());
	
	switch(id) {
		case "tacz:45_70": json.stack_size = 64; break;
		case "tacz:12g": json.stack_size = 64; break;

		case "create_armorer:40mmhe": json.stack_size = 16; break;
		case "create_armorer:rbapb": json.stack_size = 64; break;
		case "create_armorer:slap": json.stack_size = 64; break;
		
		case "applied_armorer:cluster_quartz_bullet": json.stack_size = 64; break;
		case "applied_armorer:etched_quartz_bullet": json.stack_size = 64; break;
		case "applied_armorer:hard_core_quartz_bullet": json.stack_size = 64; break;
		case "applied_armorer:fluix_infused_grenade": json.stack_size = 32; break;
	}
	
	return event.setJson(JSON.stringify(json));
}

const attachmentIndexLogic = (event) => {
	const id = event.getId().toString();	
	
	if (!global.TACZ_ENABLED_ATTACH.includes(id)) {
		
		return event.removeAttachment();
	}
	
	const json = JSON.parse(event.getStdJson());
	
	
	switch(id) {
		
		//Scope Sorting
		case "create_armorer:sight_simple": json.sort = 100; break;
		case "create_armorer:sight_reflex": json.sort = 101; break;
		case "applied_armorer:si_pricision": json.sort = 102; break;
		case "applied_armorer:si_double_sided_mirror": json.sort = 103; break;
		
		case "create_armorer:sight_standard": json.sort = 200; break;
		case "applied_armorer:si_ms_12": json.sort = 201; break;
		
		case "create_armorer:sight_medium_distance": json.sort = 400; break;
		case "applied_armorer:scope_ms_14": json.sort = 401; break;
		case "tacz:scope_1873_6x": json.sort = 600; break;
		case "create_armorer:scope_telephoto": json.sort = 800; break;
		case "applied_armorer:scope_xgs_905": json.sort = 801; break;
		
		//Muzzle Sorting
		case "create_armorer:muzzle_refit_bigger_cylinder": json.sort = 100; break;
		case "create_armorer:muzzle_refit_lava_perfusion_bottle": json.sort = 101; break;
		case "applied_armorer:muzzle_ns_1": json.sort = 201; break;
		case "applied_armorer:muzzle_classic": json.sort = 202; break;
		case "applied_armorer:muzzle_bs_mod4": json.sort = 203; break;
		case "applied_armorer:muzzle_commander": json.sort = 204; break;
		
		//Grip Sorting
		case "create_armorer:grip_wooden": json.sort = 100; break;
		case "create_armorer:grip_gantry_shaft": json.sort = 101; break;
		case "applied_armorer:grip_light": json.sort = 102; break;
		case "applied_armorer:grip_stable": json.sort = 103; break;
		
		case "create_armorer:grip_shaft": json.sort = 200; break;
		case "applied_armorer:grip_hf_17": json.sort = 201; break;
		
		case "applied_armorer:grip_lf11": json.sort = 300; break;
		case "applied_armorer:grip_sl_2": json.sort = 301; break;
		
		//Mag Sorting
		case "applied_armorer:extended_mag_aa_1": json.sort = 401; break;
		case "applied_armorer:extended_mag_aa_2": json.sort = 402; break;
		case "applied_armorer:extended_mag_aa_3": json.sort = 403; break;
		case "applied_armorer:extended_mid_mag_aa_1": json.sort = 404; break;
		case "applied_armorer:extended_mid_mag_aa_2": json.sort = 405; break;
		case "applied_armorer:extended_mid_mag_aa_3": json.sort = 406; break;
	} 
	
	return event.setJson(JSON.stringify(json));
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
		json.builtin_attachments = {};
		json.builtin_attachments.scope = "create_armorer:sight_simple";
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
		
	}
	
	if(id === "tacz:db_long_data"){
		json.bullet.extra_damage.armor_ignore = 0.22;
	}
	
	if(id === "tacz:db_short_data"){
		json.bullet.extra_damage.armor_ignore = 0.22;
	}
	
	if(id === "create_armorer:cannon_40mm_salamander_data"){
		json.bullet.damage = 50;
		json.bullet.extra_damage.damage_adjust =
		[
			{"distance": 200, "damage": 50},
			{"distance": "infinite", "damage": 45}
		]
		json.builtin_attachments = {};
		json.builtin_attachments.scope = "create_armorer:sight_simple";
	}
	
	if(id === "applied_armorer:moritz_gernade_gl3_data"){
		json.ammo_amount = 2;
		json.extended_mag_ammo_amount = 
		[
			3,
			4,
			5
		]
	}
	
	return event.setJson(JSON.stringify(json));
}
