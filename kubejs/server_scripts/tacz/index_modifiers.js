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
		case "tacz:30_06": json.stack_size = 64; break;

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
	
	if (id === "create_armorer:sniper_semi_clockwork"){
		const json = JSON.parse(event.getStdJson());
		json.type = "rifle";
		return event.setJson(JSON.stringify(json));
	}
}

const attachmentDataLogic = (event) => {
	
}

const gunDataLogic = (event) => {
	const id = event.getId().toString();
	const json = JSON.parse(event.getStdJson());
	
	//Pistols
	if (id === "ulv_guns:flintlock_data"){
		json.bullet.damage = 14;
		json.bullet.extra_damage.damage_adjust = 
		[
			{"distance": 15, "damage": 14},
			{"distance": 35, "damage": 12},
			{"distance": 45, "damage": 10},
			{"distance": "infinite", "damage": 8}
		]
	}
	
	if(id === "create_armorer:pistol_revolver_torque_data"){
		json.ammo = "create_armorer:rbapb";
		
		json.bullet.pierce = 2;
		json.bullet.damage = 12;
		json.bullet.extra_damage.armor_ignore = 0.25;
		json.bullet.extra_damage.head_shot_multiplier = 1.5;
		json.bullet.extra_damage.damage_adjust = 
		[
			{"distance": 25, "damage": 12},
			{"distance": 50, "damage": 11},
			{"distance": 75, "damage": 9},
			{"distance": "infinite", "damage": 7}
		]
		
	}
	
	if(id === "create_armorer:pistol_auto_stress_data"){
		json.ammo = "create_armorer:rbapb";
		json.ammo_amount = 10;
		json.extended_mag_ammo_amount = 
		[
			14,
			18,
			22
		]
		
		json.fire_mode = 
		[
			"semi"
		]
		
		json.bullet.damage = 8;
		json.bullet.extra_damage.armor_ignore = 0.25;
		json.bullet.extra_damage.damage_adjust = 
		[
			{"distance": 32, "damage": 8},
			{"distance": 64, "damage": 7},
			{"distance": "infinite", "damage": 6}
		]
	}
	
	if(id === "applied_armorer:niklas_pistol_semi_pride_data"){
		json.bullet.extra_damage.armor_ignore = 0.25;
	}
	
	if(id === "applied_armorer:niklas_pistol_double_win_win_data"){
		json.bullet.damage = 10;
		json.bullet.extra_damage.armor_ignore = 0.25;
		json.bullet.extra_damage.head_shot_multiplier = 1.5;
		json.bullet.extra_damage.damage_adjust = 
		[
			{"distance": 15, "damage": 10},
			{"distance": 35, "damage": 9},
			{"distance": "infinite", "damage": 8}
		]
	}
	
	//Snipers
	if(id === "tacz:springfield1873_data") {
		json.bullet.damage = 25;
		json.bullet.extra_damage.damage_adjust = 
		[
			{"distance": 40, "damage": 25},
			{"distance": 70, "damage": 21},
			{"distance": 100, "damage": 17},
			{"distance": "infinite", "damage": 12}
		]
	}
	
	if(id === "tacz:m700_data"){
		json.ammo_amount = 2;
		json.extended_mag_ammo_amount = 
		[
			4,
			6,
			9
		]
		
		json.bullet.damage = 32;
		json.bullet.extra_damage.head_shot_multiplier = 1.75;
		json.bullet.extra_damage.damage_adjust = 
		[
			{"distance": 48, "damage": 32},
			{"distance": 96, "damage": 28},
			{"distance": 128, "damage": 23},
			{"distance": "infinite", "damage": 18}
		]
	}
	
	if(id === "applied_armorer:moritz_sniper_semi_k30_data") {
		json.bullet.pierce = 4;
		json.bullet.damage = 40;
		json.bullet.extra_damage.armor_ignore = 0.55;
		json.bullet.extra_damage.damage_adjust = 
		[
			{"distance": 100, "damage": 40},
			{"distance": 200, "damage": 35},
			{"distance": "infinite", "damage": 30}
		]
	}
        
	
	//Rifles
	if(id === "create_armorer:sniper_semi_clockwork_data"){
		json.ammo = "create_armorer:slap";
		json.ammo_amount = 10;
		json.extended_mag_ammo_amount = 
		[
			13,
			16,
			20
		]
		
		
		json.bullet.extra_damage.armor_ignore = 0.30;
		json.bullet.damage = 22;
		json.bullet.extra_damage.head_shot_multiplier = 1.50;
		json.bullet.extra_damage.damage_adjust = 
		[
			{"distance": 60, "damage": 22},
			{"distance": 120, "damage": 19},
			{"distance": "infinite", "damage": 17}
		]
		
		json.builtin_attachments = {};
		json.builtin_attachments.scope = "create_armorer:sight_simple";
	}
	
	if(id === "create_armorer:rifle_assult_crane_data"){
		json.ammo_amount = 20;
		json.extended_mag_ammo_amount = 
		[
			28,
			36,
			44
		]
	}
	
	if(id === "applied_armorer:moritz_rifle_ar77_data") {
		json.ammo = "applied_armorer:hard_core_quartz_bullet";
		json.ammo_amount = 25;
		json.extended_mag_ammo_amount = 
		[
			36,
			45,
			52
		]
		
		
		json.bullet.damage = 14;
		json.bullet.extra_damage.armor_ignore = 0.35;
		json.bullet.extra_damage.head_shot_multiplier = 1.75;
		json.bullet.extra_damage.damage_adjust =
		[
			{"distance": 80, "damage": 14},
			{"distance": 120, "damage": 12},
			{"distance": "infinite", "damage": 10}
		]
		
	}
	
	//Shotguns
	if(id === "tacz:db_long_data"){
		json.bullet.extra_damage.armor_ignore = 0.22;
	}
	
	if(id === "tacz:db_short_data"){
		json.bullet.extra_damage.armor_ignore = 0.22;
	}
	
	//SMGs
	if(id === "create_armorer:smg_auto_crank_data"){
		json.ammo = "create_armorer:rbapb";
		
		json.ammo_amount = 25;
		json.extended_mag_ammo_amount = 
		[
			35,
			45,
			55
		]
		
		json.bullet.damage = 8;
		json.bullet.extra_damage.armor_ignore = 0.25;
		json.bullet.extra_damage.head_shot_multiplier = 1.2;
		json.bullet.extra_damage.damage_adjust =
		[
			{"distance": 24, "damage": 8},
			{"distance": 48, "damage": 7},
			{"distance": 72, "damage": 6},
			{"distance": "infinite", "damage": 5}
		]
	}
	
	if(id === "applied_armorer:niklas_smg_freedom_data"){
		json.ammo_amount = 35;
		json.extended_mag_ammo_amount = 
		[
			45,
			55,
			65
		]
		
		json.bullet.damage = 10;
		json.bullet.extra_damage.armor_ignore = 0.25;		
		json.bullet.extra_damage.damage_adjust =
		[
			{"distance": 24, "damage": 10},
			{"distance": 48, "damage": 9},
			{"distance": 72, "damage": 8},
			{"distance": "infinite", "damage": 7}
		]
	}
	
	//Heavy
	if(id === "create_armorer:mg_platemag_flywheel_data") {
		json.ammo_amount = 40;
		json.extended_mag_ammo_amount = 
		[
			55,
			80,
			115
		]
		
		json.rpm = 640;
		
		json.bullet.damage = 12;
		json.bullet.extra_damage.damage_adjust =
		[
			{"distance": 32, "damage": 12},
			{"distance": 64, "damage": 11},
			{"distance": "infinite", "damage": 10}
		]
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
