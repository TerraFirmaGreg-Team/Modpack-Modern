"use strict";

/**
 * 
 * @param {Internal.TFCDataEventJS} evt 
 */

const registerTFCDataForImmersiveVehicles = (event) => {
    event.itemSize('mts:mts.jerrycan', 'normal', 'medium');
	event.itemSize('mts:mts.fuelhose', 'normal', 'medium');
	event.itemSize('mts:mts.handbook_car', 'small', 'light');
	event.itemSize('mts:mts.handbook_plane', 'small', 'light');
	event.itemSize('mts:mts.jumpercable', 'normal', 'light');
	event.itemSize('mts:mts.jumperpack', 'normal', 'medium');
    event.itemSize('mts:mts.key', 'very_small', 'very_light');
	event.itemSize('mts:mts.paintgun', 'normal', 'light');
	event.itemSize('mts:mts.partscanner', 'small', 'light');
	event.itemSize('mts:mts.ticket', 'very_small', 'very_light');

    event.itemSize('#mts:bell206', 'huge', 'very_heavy');
    event.itemSize('#mts:bell47g', 'huge', 'very_heavy');
    event.itemSize('#mts:comanche', 'huge', 'very_heavy');
    event.itemSize('#mts:e500', 'huge', 'very_heavy');
    event.itemSize('#mts:firetruck', 'huge', 'very_heavy');
    event.itemSize('#mts:fordmustang69', 'huge', 'very_heavy');
    event.itemSize('#mts:ft17', 'huge', 'very_heavy');
    event.itemSize('#mts:gmcbrig', 'huge', 'very_heavy');
    event.itemSize('#mts:mc172', 'huge', 'very_heavy');
    event.itemSize('#mts:merc230', 'huge', 'very_heavy');
    event.itemSize('#mts:pzl37los', 'huge', 'very_heavy');
    event.itemSize('#mts:pzlp11', 'huge', 'very_heavy');
    event.itemSize('#mts:quad', 'very_large', 'heavy');
    event.itemSize('#mts:scout', 'huge', 'very_heavy');
    event.itemSize('#mts:skyhawk', 'huge', 'very_heavy');
    event.itemSize('#mts:trimotor', 'huge', 'very_heavy');
    event.itemSize('#mts:vulcanair', 'huge', 'very_heavy');
    event.itemSize('#mts:camaro', 'huge', 'very_heavy');
    event.itemSize('#mts:escargot', 'huge', 'very_heavy');
    event.itemSize('#mts:luxorama', 'huge', 'very_heavy');
    event.itemSize('#mts:stationmerc', 'huge', 'very_heavy');
    event.itemSize('#mts:engine_big', 'large', 'very_heavy');
	event.itemSize('#mts:adventure', 'huge', 'very_heavy');
	event.itemSize('#mts:bullfrog', 'huge', 'very_heavy');
	event.itemSize('#mts:citadel', 'huge', 'very_heavy');
	event.itemSize('#mts:corallum', 'huge', 'very_heavy');
	event.itemSize('#mts:fisker_a', 'huge', 'very_heavy');
	event.itemSize('#mts:fisker_b', 'huge', 'very_heavy');
	event.itemSize('#mts:harpy', 'huge', 'very_heavy');
	event.itemSize('#mts:dry_van', 'huge', 'very_heavy');
	event.itemSize('#mts:tanker', 'huge', 'very_heavy');
	event.itemSize('#mts:keeper', 'huge', 'very_heavy');
	event.itemSize('#mts:nugget', 'huge', 'very_heavy');
	event.itemSize('#mts:silver', 'huge', 'very_heavy');

	event.itemSize('#mts:brigtrailers', 'huge', 'very_heavy');
    event.itemSize('mts:mtsofficialpack.auxiliary_tank', 'normal', 'heavy');
    event.itemSize('mts:mtsofficialpack.barrelbell47g', 'normal', 'heavy');
	event.itemSize('mts:mtsofficialpack.camera_vulcanair', 'normal', 'medium');
	event.itemSize('#mts:carseats', 'normal', 'medium');
	event.itemSize('#mts:crates', 'normal', 'medium');
	event.itemSize('#mts:drums', 'normal', 'medium');
	event.itemSize('mts:mtsofficialpack.cratebell47g', 'normal', 'heavy');
	event.itemSize('#mts:wheels', 'normal', 'medium');
	event.itemSize('mts:mtsofficialpack.gunfireextinguisher', 'normal', 'medium');
	event.itemSize('mts:mtsofficialpack.gunft17turret', 'very_large', 'very_heavy');
	event.itemSize('mts:mtsofficialpack.hoist_bell206', 'normal', 'medium');
	event.itemSize('#mts:propellers', 'normal', 'medium');
	event.itemSize('#mts:scoutattach', 'large', 'heavy');
	event.itemSize('mts:mtsofficialpack.spotlight', 'normal', 'medium');
	event.itemSize('mts:mtsofficialpack.spotlight_bell206', 'normal', 'medium');
	event.itemSize('mts:mtsofficialpack.watercannon', 'large', 'heavy');
	event.itemSize('mts:mtsofficialpack.watercannon_proj', 'normal', 'medium');
	event.itemSize('mts:mtsofficialpack.beacon_top', 'large', 'medium');
	event.itemSize('mts:mtsofficialpack.beacon_tower_inverted', 'huge', 'very_heavy');
	event.itemSize('mts:mtsofficialpack.beacon_tower_standard', 'huge', 'very_heavy');
	event.itemSize('mts:mtsofficialpack.repairkit', 'normal', 'medium');
	event.itemSize('mts:mts.fuelpump', 'normal', 'medium');
	event.itemSize('mts:mts.charger', 'normal', 'medium');
	event.itemSize('mts:mtsofficialpack.fuelpump', 'normal', 'medium');
}