// priority: 0
"use strict";

TFCEvents.rockSettings(event => {
	event.defineRock('tfg:tuff',
		'minecraft:tuff',
		'tfg:rock/hardened_tuff',
		'tfg:tuff_gravel',
		'tfg:rock/cobble_tuff',
		'tfc:sand/green',
		'tfc:raw_sandstone/green',
		'tfg:spike/tuff_spike',
		'tfg:loose/tuff',
		null
	);

	event.defineRock('tfg:deepslate',
		'minecraft:deepslate',
		'tfg:rock/hardened_deepslate',
		'tfg:rock/gravel_deepslate',
		'minecraft:cobbled_deepslate',
		'tfc:sand/black',
		'tfc:raw_sandstone/black',
		'tfg:spike/deepslate_spike',
		'tfg:loose/deepslate',
		null
	);
})

TFCEvents.defaultWorldSettings(event => {
	event.addRockFromId('tfg:tuff', 'tuff', false)
	event.addRockFromId('tfg:deepslate', 'deepslate', false)
})