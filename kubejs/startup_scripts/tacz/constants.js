"use strict";


global.TACZ_GUNS_INDEX = [
	//TACZ
	//Pistol
	'tacz:deagle',
	'tacz:glock_17',
	'tacz:deagle_golden',
	'tacz:m1911',
	'tacz:cz75',
	'tacz:p320',
	'tacz:b93r',
	'tacz:timeless50',
	
	//Sniper
	'tacz:m700',
	'tacz:m107',
	'tacz:springfield1873',
	'tacz:m95',
	'tacz:ai_awp',
	
	//Rifle
	'tacz:sks_tactical',
	'tacz:ak47',
	'tacz:type_81',
	'tacz:qbz_95',
	'tacz:hk416d',
	'tacz:m4a1',
	'tacz:m16a1',
	'tacz:hk_g3',
	'tacz:m16a4',
	'tacz:spr15hb',
	'tacz:mk14',
	'tacz:scar_l',
	'tacz:scar_h',
	'tacz:aug',
	'tacz:g36k',
	
	//Shotgun
	'tacz:db_short',
	'tacz:sb_long',
	'tacz:m870',
	'tacz:aa12',
	
	//SMG
	'tacz:ump45',
	'tacz:hk_mp5a5',
	'tacz:uzi',
	'tacz:vector45',
	'tacz:p90',
	
	//Heavy
	'tacz:rpg7',
	'tacz:m320',
	'tacz:m249',
	'tacz:minigun',
	'tacz:rpk',
	
	
	//CA
	//Pistol
	'create_armorer:pistol_revolver_torque',
	'create_armorer:pistol_auto_stress',
	
	//Sniper
	'create_armorer:sniper_semi_clockwork',
	'create_armorer:sniper_semi_m1',
	
	//Rifle
	'create_armorer:rifle_assult_crane',
	'create_armorer:rifle_assult_roller',
	
	//Shotgun
	'create_armorer:shotgun_db_stone',
	'create_armorer:shotgun_pump_bearing',
	
	//SMG
	'create_armorer:smg_auto_crank',
	
	//Heavy
	'create_armorer:gl_revolver_devastator',
	'create_armorer:cannon_40mm_salamander',
	'create_armorer:special_melee_wrench',
	'create_armorer:special_melee_atomic',
	'create_armorer:mg_platemag_flywheel',
	
	
	//AA
	//Pistol
	'applied_armorer:niklas_pistol_semi_union',
	'applied_armorer:niklas_pistol_semi_right',
	'applied_armorer:niklas_pistol_semi_pride',
	'applied_armorer:niklas_pistol_double_win_win',
	
	//Sniper
	'applied_armorer:moritz_sniper_semi_k30',
	
	//Rifle
	'applied_armorer:niklas_lever_vigenere',
	'applied_armorer:moritz_rifle_ar77',
	
	//Shotgun
	'applied_armorer:moritz_shotgun_sg914',
	
	//SMG
	'applied_armorer:niklas_smg_freedom',
	
	//Heavy
	'applied_armorer:moritz_gernade_gl3',
	'applied_armorer:moritz_mg_hmg22',
	'applied_armorer:moritz_mg_emg_prototype',
	
	//ULV Guns
	'ulv_guns:flintlock',
	'ulv_guns:blunderbuss'
	
]

global.TACZ_AMMO_INDEX = [
	//TACZ
	'tacz:68x51fury',
	'tacz:308',
	'tacz:45acp',
	'tacz:50bmg',
	'tacz:40mm',
	'tacz:12g',
	'tacz:rpg_rocket',
	'tacz:58x42',
	'tacz:762x39',
	'tacz:762x54',
	'tacz:9mm',
	'tacz:338',
	'tacz:357mag',
	'tacz:46x30',
	'tacz:57x28',
	'tacz:30x06',
	'tacz:50ae',
	'tacz:45_70',
	'tacz:762x25',
	'tacz:556x45',
	
	//CA
	'create_armorer:slap',
	'create_armorer:melee_weapon',
	'create_armorer:rbapb',
	'create_armorer:gas_pistol_ammo',
	'create_armorer:gernade',
	'create_armorer:40mmhe',
	
	//AA
	'applied_armorer:hard_core_quartz_bullet',
	'applied_armorer:etched_quartz_bullet',
	'applied_armorer:melee',
	'applied_armorer:fluix_infused_grenade',
	'applied_armorer:fluix_battery',
	'applied_armorer:cluster_quartz_bullet',
	

	//ULV Guns
	'ulv_guns:lead_shot'
	
]

global.TACZ_ATTACH_INDEX = [
	//TACZ
	//scope
	'tacz:scope_vudu',
	'tacz:scope_lpvo_1_6',
	'tacz:scope_hamr',
	'tacz:scope_elcan_4x',
	'tacz:scope_retro_2x',
	'tacz:scope_mk5hd',
	'tacz:scope_contender',
	'tacz:scope_1873_6x',
	'tacz:scope_acog_ta31',
	'tacz:scope_standard_8x',
	'tacz:sight_okp7',
	'tacz:sight_deltapoint_pistol',
	'tacz:sight_deltapoint_rifle',
	'tacz:sight_fastfire_pistol',
	'tacz:sight_fastfire_rifle',
	'tacz:sight_rmr_dot',
	'tacz:sight_pk06_pistol',
	'tacz:sight_pk06_rifle',
	'tacz:sight_srs_02',
	'tacz:sight_sro_dot',
	'tacz:sight_acro_pistol',
	'tacz:sight_acro_rifle',
	'tacz:sight_552',
	'tacz:sight_uh1',
	'tacz:sight_coyote',
	'tacz:sight_t2',
	'tacz:sight_t1',
	'tacz:sight_exp3',
	
	//muzzle
	'tacz:muzzle_silencer_ptilopsis',
	'tacz:muzzle_silencer_mirage',
	'tacz:muzzle_silencer_phantom_s1',
	'tacz:bayonet_m9',
	'tacz:bayonet_6h3',
	'tacz:muzzle_brake_timeless50',
	'tacz:muzzle_compensator_trident',
	'tacz:muzzle_brake_cthulhu',
	'tacz:muzzle_brake_pioneer',
	'tacz:muzzle_silencer_vulture',
	'tacz:muzzle_brake_cyclone_d2',
	'tacz:muzzle_silencer_knight_qd',
	'tacz:deagle_golden_long_barrel',
	'tacz:muzzle_brake_trex',
	'tacz:muzzle_silencer_ursus',
	
	//stock
	'tacz:oem_stock_tactical',
	'tacz:oem_stock_light',
	'tacz:oem_stock_heavy',
	'tacz:stock_ak12',
	'tacz:stock_moe',
	'tacz:stock_m4ss',
	'tacz:stock_carbon_bone_c5',
	'tacz:stock_sba3',
	'tacz:stock_tactical_ar',
	'tacz:stock_hk_slim_line',
	'tacz:stock_miltech_b5',
	'tacz:stock_ripstock',
	
	//grip
	'tacz:grip_magpul_afg_2',
	'tacz:grip_cobra',
	'tacz:grip_rk6',
	'tacz:grip_osovets_black',
	'tacz:grip_vertical_talon',
	'tacz:grip_vertical_military',
	'tacz:grip_vertical_ranger',
	'tacz:grip_se_5',
	'tacz:grip_4k0',
	'tacz:grip_td',
	'tacz:grip_rk1_b25u',
	
	//mag
	'tacz:extended_mag_1',
	'tacz:extended_mag_2',
	'tacz:extended_mag_3',
	'tacz:light_extended_mag_1',
	'tacz:light_extended_mag_2',
	'tacz:light_extended_mag_3',
	'tacz:sniper_extended_mag_1',
	'tacz:sniper_extended_mag_2',
	'tacz:sniper_extended_mag_3',
	'tacz:ammo_mod_i',
	'tacz:ammo_mod_hp',
	'tacz:ammo_mod_he',
	
	//laser
	'tacz:laser_compact',
	'tacz:laser_nightstick',
	'tacz:laser_lopro',
	
	//CA
	//scope
	'create_armorer:sight_reflex',
	'create_armorer:scope_telephoto',
	'create_armorer:sight_standard',
	'create_armorer:sight_medium_distance',
	'create_armorer:scope_pipe',
	'create_armorer:sight_simple',
	
	//muzzle
	'create_armorer:muzzle_refit_iron_spike',
	'create_armorer:muzzle_refit_brass_retractor',
	'create_armorer:muzzle_refit_bigger_cylinder',
	'create_armorer:muzzle_refit_lava_perfusion_bottle',
	'create_armorer:refit_blasting_protocol',
	'create_armorer:muzzle_refit_ap_grenade',
	
	//grip
	'create_armorer:grip_pipe',
	'create_armorer:grip_wooden',
	'create_armorer:grip_gantry_shaft',
	'create_armorer:grip_shaft',
	
	//mag
	'create_armorer:extended_mag_ca_1',
	'create_armorer:extended_mag_ca_2',
	'create_armorer:extended_mag_ca_3',
	
	//AA
	//scope
	'applied_armorer:si_double_sided_mirror',
	'applied_armorer:si_simple_3',
	'applied_armorer:si_profession',
	'applied_armorer:scope_xgs_905',
	'applied_armorer:si_ms_12',
	'applied_armorer:scope_ms_14',
	'applied_armorer:si_pricision',
	'applied_armorer:sight_type_3741',
	
	//muzzle
	'applied_armorer:muzzle_chip_hyper_propellant',
	'applied_armorer:muzzle_commander',
	'applied_armorer:bayonet_gladius',
	'applied_armorer:muzzle_chip_firework',
	'applied_armorer:muzzle_ns_1',
	'applied_armorer:bayonet_er',
	'applied_armorer:muzzle_chip_firefly',
	'applied_armorer:muzzle_chip_atm_x2',
	'applied_armorer:muzzle_bs_mod4',
	'applied_armorer:muzzle_chip_pcs_x1',
	'applied_armorer:muzzle_classic',
	'applied_armorer:muzzle_chip_fat_boy',
	
	//stock
	'applied_armorer:bracelet_niklas',
	'applied_armorer:bracelet_broken_handcuffs',
	'applied_armorer:bracelet_aerial_wristband',
	'applied_armorer:bracelet_broken_watch',
	'applied_armorer:bracelet_zenith',
	'applied_armorer:bracelet_koeis_armband',
	'applied_armorer:bracelet_magma_wristband',
	'applied_armorer:bracelet_exo',
	
	//grip
	'applied_armorer:grip_lf11',
	'applied_armorer:grip_stable',
	'applied_armorer:grip_light',
	'applied_armorer:grip_storm',
	'applied_armorer:grip_static_1',
	'applied_armorer:grip_hf_17',
	'applied_armorer:grip_eazy',
	'applied_armorer:grip_sl_2',
	
	//mag
	'applied_armorer:extended_mag_aa_1',
	'applied_armorer:extended_mag_aa_2',
	'applied_armorer:extended_mag_aa_3',
	'applied_armorer:extended_mid_mag_aa_1',
	'applied_armorer:extended_mid_mag_aa_2',
	'applied_armorer:extended_mid_mag_aa_3',
	'applied_armorer:extended_battery_aa_1',
	'applied_armorer:extended_battery_aa_2',
	'applied_armorer:extended_battery_aa_3'
]

global.TACZ_ENABLED_GUNS = [
	//Pistol
	'ulv_guns:flintlock',
	'create_armorer:pistol_revolver_torque',
	'applied_armorer:niklas_pistol_semi_right',
	'applied_armorer:niklas_pistol_semi_pride',
	'applied_armorer:niklas_pistol_double_win_win',
	
	//Sniper
	'tacz:springfield1873',
	'create_armorer:sniper_semi_clockwork',
	'applied_armorer:moritz_sniper_semi_k30',
	
	//Rifle
	'create_armorer:rifle_assult_crane',
	'applied_armorer:moritz_rifle_ar77',
	
	//Shotgun
	'ulv_guns:blunderbuss',
	'create_armorer:shotgun_pump_bearing',
	'applied_armorer:moritz_shotgun_sg914',
	'tacz:db_short',
	'tacz:db_long',
	
	//SMG
	
	
	//Heavy
	'create_armorer:mg_platemag_flywheel',
	'applied_armorer:moritz_gernade_gl3',
	'create_armorer:cannon_40mm_salamander'

];
	
	
global.TACZ_ENABLED_AMMO = [
	'tacz:12g',
	'tacz:45_70',
	'create_armorer:slap',
	'create_armorer:rbapb',
	'create_armorer:40mmhe',
	'applied_armorer:hard_core_quartz_bullet',
	'applied_armorer:etched_quartz_bullet',
	'applied_armorer:fluix_infused_grenade',
	'applied_armorer:cluster_quartz_bullet',
	'ulv_guns:lead_shot'
];
	
global.TACZ_ENABLED_ATTACH = [
	//scope
	'tacz:scope_1873_6x',
	'create_armorer:sight_reflex',
	'create_armorer:scope_telephoto',
	'create_armorer:sight_standard',
	'create_armorer:sight_medium_distance',
	'create_armorer:sight_simple',
	'applied_armorer:si_double_sided_mirror',
	'applied_armorer:scope_xgs_905',
	'applied_armorer:si_ms_12',
	'applied_armorer:scope_ms_14',
	'applied_armorer:si_pricision',
	//These two aren't obtainable but used as default for guns, so need to exist
	'applied_armorer:si_pride_default',
	'applied_armorer:si_xs_07',
	//'applied_armorer:si_simple_3',
	//'applied_armorer:si_profession',
	//'applied_armorer:sight_type_3741',
	
	//muzzle
	'create_armorer:muzzle_refit_bigger_cylinder',
	'create_armorer:muzzle_refit_lava_perfusion_bottle',
	'applied_armorer:muzzle_bs_mod4',
	'applied_armorer:muzzle_commander',
	'applied_armorer:muzzle_ns_1',
	'applied_armorer:muzzle_classic',
	
	//stock
	
	
	//grip
	'create_armorer:grip_wooden',
	'create_armorer:grip_gantry_shaft',
	'create_armorer:grip_shaft',
	'applied_armorer:grip_hf_17',
	'applied_armorer:grip_stable',
	'applied_armorer:grip_light',
	'applied_armorer:grip_lf11',
	'applied_armorer:grip_sl_2',
	
	//mag
	'create_armorer:extended_mag_ca_1',
	'create_armorer:extended_mag_ca_2',
	'create_armorer:extended_mag_ca_3',
	'applied_armorer:extended_mag_aa_1',
	'applied_armorer:extended_mag_aa_2',
	'applied_armorer:extended_mag_aa_3',
	'applied_armorer:extended_mid_mag_aa_1',
	'applied_armorer:extended_mid_mag_aa_2',
	'applied_armorer:extended_mid_mag_aa_3'
	
	//laser

];
	
	
	