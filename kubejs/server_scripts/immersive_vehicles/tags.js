"use strict";

function registerImmersiveVehiclesItemTags(event) {
	event.add('c:hidden_from_recipe_viewers', 'mts:mts.y2kbutton')

	event.add('mts:vehicle_barrels', 'mts:mtsofficialpack.barrel')
	event.add('mts:vehicle_barrels', 'mts:mtsofficialpack.barrel_black')
	event.add('mts:vehicle_barrels', 'mts:mtsofficialpack.barrel_blank')
	event.add('mts:vehicle_barrels', 'mts:mtsofficialpack.barrel_blue')
	event.add('mts:vehicle_barrels', 'mts:mtsofficialpack.barrel_yellow')

	event.add('automotives:dashornaments', 'mts:mtsofficialpack.mirrorornament')


	// Taken from the old optional IV compat
	event.add('mts:bell206', [
		'mts:mtsofficialpack.bell206_red',
		'mts:mtsofficialpack.bell206_seagreen',
		'mts:mtsofficialpack.bell206_skyblue',
		'mts:mtsofficialpack.bell206_yellow',
		'mts:mtsofficialpack.bell206_black',
		'mts:mtsofficialpack.bell206_blackstripe',
		'mts:mtsofficialpack.bell206_blue',
		'mts:mtsofficialpack.bell206_brown',
		'mts:mtsofficialpack.bell206_gray',
		'mts:mtsofficialpack.bell206_green',
		'mts:mtsofficialpack.bell206_olive',
		'mts:mtsofficialpack.bell206_orange',
		'mts:mtsofficialpack.bell206_police']);
	event.add('mts:bell47g', [
		'mts:mtsofficialpack.bell47g',
		'mts:mtsofficialpack.bell47g_black',
		'mts:mtsofficialpack.bell47g_blue',
		'mts:mtsofficialpack.bell47g_olive'
	]);
	event.add('mts:comanche', [
		'mts:mtsofficialpack.comanche_blackred',
		'mts:mtsofficialpack.comanche_blackredstripe',
		'mts:mtsofficialpack.comanche_blue',
		'mts:mtsofficialpack.comanche_orangebrown',
		'mts:mtsofficialpack.comanche_red',
		'mts:mtsofficialpack.comanche_seagreen',
		'mts:mtsofficialpack.comanche_yellow'
	]);
	event.add('mts:e500', [
		'mts:mtsofficialpack.e500_blackred',
		'mts:mtsofficialpack.e500_blue',
		'mts:mtsofficialpack.e500_extravagant',
		'mts:mtsofficialpack.e500_green',
		'mts:mtsofficialpack.e500_red',
		'mts:mtsofficialpack.e500_silver',
		'mts:mtsofficialpack.e500_yellow'
	]);
	event.add('mts:firetruck', ['mts:mtsofficialpack.firetruck']);
	event.add('mts:fordmustang69', [
		'mts:mtsofficialpack.fordmustang69_silver',
		'mts:mtsofficialpack.fordmustang69_white',
		'mts:mtsofficialpack.fordmustang69_whitestripe',
		'mts:mtsofficialpack.fordmustang69_yellow',
		'mts:mtsofficialpack.fordmustang69_black',
		'mts:mtsofficialpack.fordmustang69_bluestripe',
		'mts:mtsofficialpack.fordmustang69_extravagant',
		'mts:mtsofficialpack.fordmustang69_lime',
		'mts:mtsofficialpack.fordmustang69_orange',
		'mts:mtsofficialpack.fordmustang69_police',
		'mts:mtsofficialpack.fordmustang69_red',
		'mts:mtsofficialpack.fordmustang69_redstripe',
		'mts:mtsofficialpack.fordmustang69_seagreen'
	]);
	event.add('mts:gmcbrig', [
		'mts:mtsofficialpack.gmcbrig_black',
		'mts:mtsofficialpack.gmcbrig_blackwhite',
		'mts:mtsofficialpack.gmcbrig_blue',
		'mts:mtsofficialpack.gmcbrig_brown',
		'mts:mtsofficialpack.gmcbrig_cream',
		'mts:mtsofficialpack.gmcbrig_gray',
		'mts:mtsofficialpack.gmcbrig_green',
		'mts:mtsofficialpack.gmcbrig_maroon',
		'mts:mtsofficialpack.gmcbrig_red',
		'mts:mtsofficialpack.gmcbrig_tan',
		'mts:mtsofficialpack.gmcbrig_white'
	])
	event.add('mts:mc172', [
		'mts:mtsofficialpack.mc172_acacia',
		'mts:mtsofficialpack.mc172_birch',
		'mts:mtsofficialpack.mc172_darkoak',
		'mts:mtsofficialpack.mc172_jungle',
		'mts:mtsofficialpack.mc172_oak',
		'mts:mtsofficialpack.mc172_spruce'
	]);
	event.add('mts:merc230', [
		'mts:mtsofficialpack.merc230_white',
		'mts:mtsofficialpack.merc230_black',
		'mts:mtsofficialpack.merc230_blue',
		'mts:mtsofficialpack.merc230_brown',
		'mts:mtsofficialpack.merc230_gray',
		'mts:mtsofficialpack.merc230_maroon',
		'mts:mtsofficialpack.merc230_police',
		'mts:mtsofficialpack.merc230_police2',
		'mts:mtsofficialpack.merc230_red',
		'mts:mtsofficialpack.merc230_seagreen'
	]);
	event.add('mts:pzl37los', [
		'mts:mtsofficialpack.pzl37los',
		'mts:mtsofficialpack.pzl37los_arctic',
		'mts:mtsofficialpack.pzl37los_brown',
		'mts:mtsofficialpack.pzl37los_green',
		'mts:mtsofficialpack.pzl37los_tan'
	]);
	event.add('mts:pzlp11', [
		'mts:mtsofficialpack.pzlp11',
		'mts:mtsofficialpack.pzlp11_brown',
		'mts:mtsofficialpack.pzlp11_green',
		'mts:mtsofficialpack.pzlp11_tan'
	]);
	event.add('mts:quad', [
		'mts:mtsofficialpack.quad_gray',
		'mts:mtsofficialpack.quad_green',
		'mts:mtsofficialpack.quad_olive',
		'mts:mtsofficialpack.quad_orange',
		'mts:mtsofficialpack.quad_red',
		'mts:mtsofficialpack.quad_tan',
		'mts:mtsofficialpack.quad_white',
		'mts:mtsofficialpack.quad_yellow'
	]);
	event.add('mts:scout', [
		'mts:mtsofficialpack.scout_tan',
		'mts:mtsofficialpack.scout_white',
		'mts:mtsofficialpack.scout_yellow',
		'mts:mtsofficialpack.scout_yellowwhite',
		'mts:mtsofficialpack.scout_black',
		'mts:mtsofficialpack.scout_blue',
		'mts:mtsofficialpack.scout_brown',
		'mts:mtsofficialpack.scout_gray',
		'mts:mtsofficialpack.scout_maroon',
		'mts:mtsofficialpack.scout_olive',
		'mts:mtsofficialpack.scout_orange',
		'mts:mtsofficialpack.scout_red',
		'mts:mtsofficialpack.scout_seagreen'
	]);
	event.add('mts:skyhawk', [
		'mts:mtsofficialpack.skyhawk_green',
		'mts:mtsofficialpack.skyhawk_red',
		'mts:mtsofficialpack.skyhawk_red2',
		'mts:mtsofficialpack.skyhawk_blackorange',
		'mts:mtsofficialpack.skyhawk_blackred',
		'mts:mtsofficialpack.skyhawk_blackyellow',
		'mts:mtsofficialpack.skyhawk_blue',
		'mts:mtsofficialpack.skyhawk_bluered',
		'mts:mtsofficialpack.skyhawk_bluestripe',
		'mts:mtsofficialpack.skyhawk_brown',
		'mts:mtsofficialpack.skyhawk_butter',
		'mts:mtsofficialpack.skyhawk_coffee'
	]);
	event.add('mts:trimotor', [
		'mts:mtsofficialpack.trimotor_black',
		'mts:mtsofficialpack.trimotor_blue',
		'mts:mtsofficialpack.trimotor_red',
		'mts:mtsofficialpack.trimotor_white'
	]);
	event.add('mts:vulcanair', [
		'mts:mtsofficialpack.vulcanair_yellow',
		'mts:mtsofficialpack.vulcanair_blackred',
		'mts:mtsofficialpack.vulcanair_blackyellow',
		'mts:mtsofficialpack.vulcanair_blue',
		'mts:mtsofficialpack.vulcanair_gray',
		'mts:mtsofficialpack.vulcanair_green',
		'mts:mtsofficialpack.vulcanair_orange',
		'mts:mtsofficialpack.vulcanair_police',
		'mts:mtsofficialpack.vulcanair_redyellow',
		'mts:mtsofficialpack.vulcanair_white'
	]);
	event.add('mts:engine_big', [
		'mts:mtsofficialpack.engineallison250',
		'mts:mtsofficialpack.engineamci4',
		'mts:mtsofficialpack.enginebristolmercury',
		'mts:mtsofficialpack.enginedetroitdiesel',
		'mts:mtsofficialpack.enginefordfe428',
		'mts:mtsofficialpack.enginefranklin0335',
		'mts:mtsofficialpack.enginelycomingo360',
		'mts:mtsofficialpack.enginemercedesm102',
		'mts:mtsofficialpack.enginepw610f',
		'mts:mtsofficialpack.enginequad',
		'mts:belroftmotors.bee_i3_engine',
		'mts:belroftmotors.engine_barracuda',
		'mts:belroftmotors.engine_granite',
		'mts:belroftmotors.engine_highlander_v8',
		'mts:belroftmotors.engine_highlander_v8_snorkel',
		'mts:belroftmotors.engine_mahogany',
		'mts:belroftmotors.engine_tuna',
		'mts:belroftmotors.engine_turbo_hauler_v8',
		'mts:belroftmotors.enginepounderv8'
	]);
	event.add('mts:brigtrailers', [
		'mts:mtsofficialpack.brigbedtanker_grey',
		'mts:mtsofficialpack.brigbedtransport',
		'mts:mtsofficialpack.brigbedtransport_brown',
		'mts:mtsofficialpack.brigbedtransport_green',
		'mts:mtsofficialpack.brigbedtransport_tan',
		'mts:mtsofficialpack.brigbedbox',
		'mts:mtsofficialpack.brigbeddump',
		'mts:mtsofficialpack.brigbedflat',
		'mts:mtsofficialpack.brigbedlogs',
		'mts:mtsofficialpack.brigbedstake',
		'mts:mtsofficialpack.brigbedtanker_blackred',
		'mts:mtsofficialpack.brigbedtanker_blank',
		'mts:mtsofficialpack.brigbedtanker_blueorange',
		'mts:mtsofficialpack.brigbedtanker_greenred'
	]);
	event.add('mts:vehicle_crates', [
		'mts:mtsofficialpack.crate',
		'mts:mtsofficialpack.crate_blue',
		'mts:mtsofficialpack.crate_green',
		'mts:mtsofficialpack.crate_red',
		'mts:mtsofficialpack.crate_white'
	]);
	event.add('mts:wheels', [
		'mts:mtsofficialpack.ft17track',
		'mts:mtsofficialpack.wheellarge',
		'mts:mtsofficialpack.wheelmedium',
		'mts:mtsofficialpack.wheelsmall',
		'mts:mtsofficialpack.pontoon',
		'mts:mtsofficialpack.skidhelicopter',
	]);
	event.add('mts:propellers', [
		'mts:mtsofficialpack.propellerlarge2blade',
		'mts:mtsofficialpack.propellersmall2blade',
		'mts:mtsofficialpack.propellersmall3blade',
		'mts:mtsofficialpack.propellerrotor',
		'mts:mtsofficialpack.propellerrotor206'
	]);
	event.add('mts:scoutattach', [
		'mts:mtsofficialpack.scoutbedpickup',
		'mts:mtsofficialpack.scouthardtop',
		'mts:mtsofficialpack.scouthardtop_vinyl',
		'mts:mtsofficialpack.scoutpickuproof'
	]);
	event.add('mts:road_props', [
		'mts:mtsofficialpack.sign_speedlimit',
		'mts:mtsofficialpack.sign_stop',
		'mts:mtsofficialpack.sign_turn_left',
		'mts:mtsofficialpack.sign_turn_right',
		'mts:mtsofficialpack.sign_wrongway',
		'mts:mtsofficialpack.sign_yield',
		'mts:mtsofficialpack.crashbarrier',
		'mts:mtsofficialpack.signalcontroller',
		'mts:mtsofficialpack.pole_crossingsignal',
		'mts:mtsofficialpack.pole_flashingsignal_red',
		'mts:mtsofficialpack.pole_flashingsignal_yellow',
		'mts:mtsofficialpack.pole_trafficsignal',
		'mts:mtsofficialpack.trafficcone',
		'mts:mtsofficialpack.pole_core',
		'mts:mtsofficialpack.pole_streetlight',
		'mts:mtsofficialpack.sign_bump',
		'mts:mtsofficialpack.sign_cow',
		'mts:mtsofficialpack.sign_crosswalk',
		'mts:mtsofficialpack.sign_deadend',
		'mts:mtsofficialpack.sign_donotenter',
		'mts:mtsofficialpack.sign_entryforbidden',
		'mts:mtsofficialpack.sign_highway',
		'mts:mtsofficialpack.sign_highwayend',
		'mts:mtsofficialpack.sign_left_direction',
		'mts:mtsofficialpack.sign_mts',
		'mts:mtsofficialpack.sign_noparking',
		'mts:mtsofficialpack.sign_oneway_left',
		'mts:mtsofficialpack.sign_oneway_right',
		'mts:mtsofficialpack.sign_priority',
		'mts:mtsofficialpack.sign_priorityend',
		'mts:mtsofficialpack.sign_restrictionsend',
		'mts:mtsofficialpack.sign_right_direction',
		'mts:mtsofficialpack.sign_route'
	]);
	event.add('mts:carseats', [
		'mts:mtsofficialpack.carseat_black',
		'mts:mtsofficialpack.carseat_brown',
		'mts:mtsofficialpack.carseat_grey', 
		'mts:mtsofficialpack.carseat_maroon',
		'mts:mtsofficialpack.carseat_red',
		'mts:mtsofficialpack.carseat_tan', 
		'mts:mtsofficialpack.carseat_white',
		'mts:mtsofficialpack.seatblack', 
		'mts:mtsofficialpack.seatblue',
		'mts:mtsofficialpack.seatbrown',
		'mts:mtsofficialpack.seatcyan',
		'mts:mtsofficialpack.seatgrey',
		'mts:mtsofficialpack.seatolive',
		'mts:mtsofficialpack.seatpink',
		'mts:mtsofficialpack.seatred',
		'mts:mtsofficialpack.seatwhite',
		'mts:mtsofficialpack.seatyellow'
	]);
	event.add('mts:indicators', [
		'mts:mtsofficialpack.instrument_aircraft_adf', 
		'mts:mtsofficialpack.instrument_aircraft_airspeed', 
		'mts:mtsofficialpack.instrument_aircraft_altimeter', 
		'mts:mtsofficialpack.instrument_aircraft_attitude', 
		'mts:mtsofficialpack.instrument_aircraft_beacon_distance', 
		'mts:mtsofficialpack.instrument_aircraft_clock', 
		'mts:mtsofficialpack.instrument_aircraft_coordinate', 
		'mts:mtsofficialpack.instrument_aircraft_electric', 
		'mts:mtsofficialpack.instrument_aircraft_enginetemp', 
		'mts:mtsofficialpack.instrument_aircraft_flaps', 
		'mts:mtsofficialpack.instrument_aircraft_fuelflow', 
		'mts:mtsofficialpack.instrument_aircraft_fuelqty', 
		'mts:mtsofficialpack.instrument_aircraft_heading', 
		'mts:mtsofficialpack.instrument_aircraft_ils', 
		'mts:mtsofficialpack.instrument_aircraft_liftreserve', 
		'mts:mtsofficialpack.instrument_aircraft_oilpressure', 
		'mts:mtsofficialpack.instrument_aircraft_tachometer', 
		'mts:mtsofficialpack.instrument_aircraft_trim', 
		'mts:mtsofficialpack.instrument_aircraft_turncoord', 
		'mts:mtsofficialpack.instrument_aircraft_turnslip', 
		'mts:mtsofficialpack.instrument_aircraft_verticalspeed', 
		'mts:mtsofficialpack.instrument_car_clock', 
		'mts:mtsofficialpack.instrument_car_electric',
		'mts:mtsofficialpack.instrument_car_enginetemp_c', 
		'mts:mtsofficialpack.instrument_car_enginetemp_f', 
		'mts:mtsofficialpack.instrument_car_fuelqty', 
		'mts:mtsofficialpack.instrument_car_gear', 
		'mts:mtsofficialpack.instrument_car_oilpressure_b', 
		'mts:mtsofficialpack.instrument_car_oilpressure_p', 
		'mts:mtsofficialpack.instrument_car_spedometer_blk', 
		'mts:mtsofficialpack.instrument_car_spedometer_kph', 
		'mts:mtsofficialpack.instrument_car_spedometer_mph', 
		'mts:mtsofficialpack.instrument_car_tachometer', 
		'mts:mtsofficialpack.instrument_misc_mud'
	]);


	// Belroft Motors
	const adventure = ['black', 'black_gray', 'blue', 'blue_white', 'brown', 'cherry_red', 'cherry_tan', 'copper',
		'cyan', 'emerald', 'gray', 'gray_brown', 'purple', 'red', 'tan', 'white', 'yellow'];
	adventure.forEach(adv => {
		event.add('mts:adventure', `mts:belroftmotors.adventure_${adv}`)
	})

	const bullfrog = ['blue', 'cyan', 'emerald', 'gray', 'gray_classy', 'gray_classy_red', 'green', 'legacy_blue',
		'orange', 'purple', 'red', 'yellow'];
	bullfrog.forEach(bf => {
		event.add('mts:bullfrog', `mts:belroftmotors.bullfrog_${bf}`)
	})

	const citadel = ['black', 'blue', 'brown', 'cherry_red', 'copper', 'cyan', 'emerald', 'gray', 'green', 'khaki',
		'marine', 'olive', 'purple', 'red', 'tan', 'white', 'yellow']
	citadel.forEach(c => {
		event.add('mts:citadel', `mts:belroftmotors.citadel_${c}`)
	})

	const corallum = ['black', 'black_phantom', 'blue', 'brown', 'cherry_red', 'copper', 'coral', 'coralius', 'cyan',
		'emerald', 'gray', 'khaki', 'khaki_steelie', 'marine', 'olive', 'olive_steelie', 'purple', 'red', 'steelie',
		'tan', 'white', 'yellow'];
	corallum.forEach(c => {
		event.add('mts:corallum', `mts:belroftmotors.corallum_${c}`)
	})

	const fisker = ['black', 'blue', 'brown', 'cherry_red', 'copper', 'cyan', 'emerald', 'gray', 'khaki', 'marine', 'green',
		'olive', 'purple', 'red', 'tan', 'white', 'yellow'];
	fisker.forEach(f => {
		event.add('mts:fisker_a', `mts:belroftmotors.fisker_type_a_${f}`)
		event.add('mts:fisker_b', `mts:belroftmotors.fisker_type_b_${f}`)
		// not a fisker but it has the same colors
		event.add('mts:harpy', `mts:belroftmotors.harpy_${f}`)
		event.add('mts:dry_van', `mts:belroftmotors.trailer_dry_van_${f}`)
		event.add('mts:tanker', `mts:belroftmotors.trailer_tanker_${f}`)
	})

	const keeper = ['black', 'blue', 'brown', 'cherry_red', 'copper', 'cyan', 'emerald', 'gray', 'green', 'khaki', 'marine',
		'olive', 'police_black', 'police_blue', 'police_green', 'purple', 'red', 'tan', 'white', 'yellow'];
	keeper.forEach(k => {
		event.add('mts:keeper', `mts:belroftmotors.keeper_${k}`)
	})

	const nugget = ['black', 'blue', 'brown', 'cherry_red', 'copper', 'cyan', 'emerald', 'gray', 'green',
		'police_black', 'police_blue', 'police_green', 'purple', 'red', 'tan', 'white', 'yellow', 'white_sport'];
	nugget.forEach(n => {
		event.add('mts:nugget', `mts:belroftmotors.nugget_${n}`)
	})

	const silver = ['black', 'blue', 'cherry_red', 'copper', 'green', 'khaki', 'marine', 'olive', 'purple',
		'red', 'white', 'yellow']
	silver.forEach(s => {
		event.add('mts:silver', `mts:belroftmotors.silver_${s}`)
	})
}