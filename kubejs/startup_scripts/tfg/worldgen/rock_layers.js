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
})

TFCEvents.defaultWorldSettings(event => {
	event.addRockFromId('tfg:tuff', 'tuff', false)
})