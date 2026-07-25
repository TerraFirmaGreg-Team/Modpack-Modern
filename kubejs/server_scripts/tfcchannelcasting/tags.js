"use strict";

function registerTFCChannelCastingItemTags(event) {

	event.remove('tfcchannelcasting:fire_clay_recycle_5', `tfcchannelcasting:unfired_mold_table`)
	event.remove('tfcchannelcasting:fire_clay_recycle_1', `tfcchannelcasting:unfired_channel`)
	event.remove('tfcchannelcasting:clay_recycle_5', `tfcchannelcasting:unfired_heart_mold`)
	event.add('tfc:fire_clay_recycle_5', `tfcchannelcasting:unfired_mold_table`)
	event.add('tfc:fire_clay_recycle_1', `tfcchannelcasting:unfired_channel`)
	event.add('tfc:clay_recycle_5', `tfcchannelcasting:unfired_heart_mold`)
	
}

function registerTFCChannelCastingFluidTags(event) {
	event.add('tfcchannelcasting:whiskey', 'tfcagedalcohol:aged_corn_whiskey')
	event.add('tfcchannelcasting:whiskey', 'tfcagedalcohol:aged_rye_whiskey')
	event.add('tfcchannelcasting:whiskey', 'tfcagedalcohol:aged_whiskey')
	event.add('tfcchannelcasting:whiskey', 'tfg:vintage_corn_whiskey')
	event.add('tfcchannelcasting:whiskey', 'tfg:vintage_rye_whiskey')
	event.add('tfcchannelcasting:whiskey', 'tfg:vintage_whiskey')
}