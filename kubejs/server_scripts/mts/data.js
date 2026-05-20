// priority: 0
"use strict";

const registerTFCDataForMTS = (event) => {
	
    event.itemSize('mts:mts.jerrycan', 'normal', 'medium');
	event.itemSize('mts:mts.custombench', 'large', 'heavy');
	event.itemSize('mts:mts.decorbench', 'large', 'heavy');
	event.itemSize('mts:mts.enginebench', 'large', 'heavy');
	event.itemSize('mts:mts.gunbench', 'large', 'heavy');
	event.itemSize('mts:mts.instrumentbench', 'large', 'heavy');
	event.itemSize('mts:mts.itembench', 'large', 'heavy');
	event.itemSize('mts:mts.propellerbench', 'large', 'heavy');
	event.itemSize('mts:mts.seatbench', 'large', 'heavy');
	event.itemSize('mts:mts.vehiclebench', 'large', 'heavy');
	event.itemSize('mts:mts.wheelbench', 'large', 'heavy');
	event.itemSize('mts:mts.fuelhose', 'normal', 'medium');
	event.itemSize('mts:mts.handbook_car', 'small', 'light');
	event.itemSize('mts:mts.handbook_plane', 'small', 'light');
	event.itemSize('mts:mts.jumpercable', 'normal', 'light');
	event.itemSize('mts:mts.jumperpack', 'normal', 'medium');
    event.itemSize('mts:mts.key', 'very_small', 'very_light');
	event.itemSize('mts:mts.paintgun', 'normal', 'light');
	event.itemSize('mts:mts.partscanner', 'small', 'light');
	event.itemSize('mts:mts.ticket', 'very_small', 'very_light');
	event.itemSize('mts:mts.wrench', 'normal', 'medium')
}