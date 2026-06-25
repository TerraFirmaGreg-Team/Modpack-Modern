"use strict";

const registerTFCChannelCastingItemTags = (event) => {

	event.remove('tfcchannelcasting:fire_clay_recycle_5', `tfcchannelcasting:unfired_mold_table`)
	event.remove('tfcchannelcasting:fire_clay_recycle_1', `tfcchannelcasting:unfired_channel`)
	event.remove('tfcchannelcasting:clay_recycle_5', `tfcchannelcasting:unfired_heart_mold`)
	event.add('tfc:fire_clay_recycle_5', `tfcchannelcasting:unfired_mold_table`)
	event.add('tfc:fire_clay_recycle_1', `tfcchannelcasting:unfired_channel`)
	event.add('tfc:clay_recycle_5', `tfcchannelcasting:unfired_heart_mold`)
	
}