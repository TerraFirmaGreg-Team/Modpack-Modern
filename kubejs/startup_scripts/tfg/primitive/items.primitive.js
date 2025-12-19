"use strict";

function registerTFGPrimitiveItems(event) {

	// Paper making
	event.create('tfg:hardwood_strip')
	event.create('tfg:soaked_hardwood_strip')
	event.create('tfg:soaked_unrefined_paper')

	// Chalk
	event.create('tfg:unfired_chalk')

	Color.DYE.forEach((dyeName, dye) => {
		event.create(`tfg:wet_${dyeName}_chalk`)
			.textureJson({
				layer0: 'tfg:item/unfired_chalk'
			})
			.color(0, dye.getHexJS());
	});

	// Primitive rubber gloves
	event.create('tfg:prepared_leather_gloves')
	event.create('tfg:latex_soaked_gloves')

	// Chipboard
    event.create('tfg:chipboard_composite')
    event.create('tfg:treated_chipboard_composite')
    event.create('tfg:high_density_treated_fiberboard')
	
	// Wax
	event.create('tfg:paraffin_wax')
	event.create('tfg:conifer_rosin')

	// Tools
	event.create('tfg:flint_club_head')

	event.create('tfg:flint_arrow_head')
	event.create('tfg:fletching')

	event.create('tfg:armor_stand_arms')

	event.create('tfg:harvest_basket')
		.parentModel('tfg:item/harvest_basket')
		.maxDamage(128)

	event.create('tfg:aluminium_harvest_basket')
		.parentModel('tfg:item/aluminium_harvest_basket')
		.unstackable()

	// Carts
	event.create('tfg:cobalt_brass_wheel')

	// Fishing Nets
	event.create('tfg:fishing_net/wood')
		.translationKey('item.tfg.fishing_net.wood')
		.parentModel('tfg:item/fishing_nets/wood_fishing_net')
		.texture('tfg:item/fishing_nets/wood_fishing_net')
		.maxDamage(112)

	event.create('tfg:fishing_net/brass')
		.translationKey('item.tfg.fishing_net.brass')
		.parentModel('tfg:item/fishing_nets/brass_fishing_net')
		.texture('tfg:item/fishing_nets/brass_fishing_net')
		.maxDamage(326)

	event.create('tfg:fishing_net/rose_gold')
		.translationKey('item.tfg.fishing_net.rose_gold')
		.parentModel('tfg:item/fishing_nets/rose_gold_fishing_net')
		.texture('tfg:item/fishing_nets/rose_gold_fishing_net')
		.maxDamage(380)

	event.create('tfg:fishing_net/sterling_silver')
		.translationKey('item.tfg.fishing_net.sterling_silver')
		.parentModel('tfg:item/fishing_nets/sterling_silver_fishing_net')
		.texture('tfg:item/fishing_nets/sterling_silver_fishing_net')
		.maxDamage(380)

	event.create('tfg:fishing_net/invar')
		.translationKey('item.tfg.fishing_net.invar')
		.parentModel('tfg:item/fishing_nets/invar_fishing_net')
		.texture('tfg:item/fishing_nets/invar_fishing_net')
		.maxDamage(740)

	event.create('tfg:fishing_net/tin_alloy')
		.translationKey('item.tfg.fishing_net.tin_alloy')
		.parentModel('tfg:item/fishing_nets/tin_alloy_fishing_net')
		.texture('tfg:item/fishing_nets/tin_alloy_fishing_net')
		.maxDamage(710)

	event.create('tfg:fishing_net/cupronickel')
		.translationKey('item.tfg.fishing_net.cupronickel')
		.parentModel('tfg:item/fishing_nets/cupronickel_fishing_net')
		.texture('tfg:item/fishing_nets/cupronickel_fishing_net')
		.maxDamage(560)

	event.create('tfg:fishing_net/magnalium')
		.translationKey('item.tfg.fishing_net.magnalium')
		.parentModel('tfg:item/fishing_nets/magnalium_fishing_net')
		.texture('tfg:item/fishing_nets/magnalium_fishing_net')
		.maxDamage(1830)

	// Universal compost items
	event.create('tfg:universal_compost_browns')
		.tag('tfc:compost_browns_low')

	event.create('tfg:universal_compost_greens')
		.tag('tfc:compost_greens_low')

	// Etched Diamond Etching Tip
	event.create('tfg:etching_diamond_tip')

	// Cloth & String
	event.create('tfg:polycaprolactam_fabric')
	event.create('tfg:polycaprolactam_string')
	event.create('tfg:phantom_silk')
	event.create('tfg:phantom_thread')

	// Flax Stuff
	event.create('tfg:flax_waste')
		.tag('tfc:scrapable')
	event.create('tfg:flax_tow')
		.tag('tfg:burlap_fiber')
		.tag('tfc:compost_browns')
	event.create('tfg:flax_line')
		.tag('tfc:compost_browns_low')
	event.create('tfg:linen_thread')
		.tag('forge:string')
	event.create('tfg:linen_cloth')
		.tag('forge:cloth')
		.tag('tfc:sewing_light_cloth')

	event.create('tfg:flax_bundle')
		.tag('tfc:scrapable')
		.texture('tfg:item/flax_bundle')
	
	event.create('tfg:bundled_scraped_flax')
		.tag('tfc:scrapable')
		.texture('tfg:item/bundled_scraped_flax')	

		// Molds
	event.create('tfg:rod_mold', 'tfc:mold')
        .capacity(72)
		.texture("base", "tfg:item/mold/fired/rod_mold_empty")
		.texture("fluid", "tfg:item/mold/fired/rod_mold_overlay")
		.tag('tfc:fired_molds')
		.tag('tfc:molds')
		.tfcccAllowedInMoldTable([
			"XXXXXXXXXXXXXX",
			"XXXXXXXXXXXXXX",
			"XXXXXXXXXX  XX",
			"XXXXXXXXX   XX",
			"XXXXXXXX   XXX",
			"XXXXXXX   XXXX",
			"XXXXXX   XXXXX",
			"XXXXX   XXXXXX",
			"XXXX   XXXXXXX",
			"XXX   XXXXXXXX",
			"XX   XXXXXXXXX",
			"XX  XXXXXXXXXX",
			"XXXXXXXXXXXXXX",
			"XXXXXXXXXXXXXX"
		])

	event.create('tfg:small_gear_mold', 'tfc:mold')
        .capacity(288)
		.texture("base", "tfg:item/mold/fired/small_gear_mold_empty")
		.texture("fluid", "tfg:item/mold/fired/small_gear_mold_overlay")
		.tag('tfc:fired_molds')
		.tag('tfc:molds')
		.tfcccAllowedInMoldTable([
			"XXXXXXXXXXXXXX",
			"XXXXXXX   XXXX",
			"XX   X    XXXX",
			"XX        XXXX",
			"XX           X",
			"XXX          X",
			"XX    XX     X",
			"X     XX    XX",
			"X          XXX",
			"X           XX",
			"XXXX        XX",
			"XXX    X    XX",
			"XXX   XXXXXXXX",
			"XXXXXXXXXXXXXX"
		])
	
	event.create('tfg:nugget_mold', 'tfc:mold')
        .capacity(64)
		.texture("base", "tfg:item/mold/fired/nugget_mold_empty")
		.texture("fluid", "tfg:item/mold/fired/nugget_mold_overlay")
		.tag('tfc:fired_molds')
		.tag('tfc:molds')
		.tfcccAllowedInMoldTable([
			"XXXXXXXXXXXXXX",
			"XXXXXXXXXXXXXX",
			"XXX  XXXXX XXX",
			"XX    XXX   XX",
			"XX    XX    XX",
			"XXX XXXXX  XXX",
			"XXXXXXXXXXXXXX",
			"XXXXXXXXXXXXXX",
			"XXX  XXXX  XXX",
			"XX    XXX   XX",
			"XX   XXX    XX",
			"XXX XXXXX  XXX",
			"XXXXXXXXXXXXXX",
			"XXXXXXXXXXXXXX"
		])
	
	// Unfired Molds
	event.create('tfg:unfired_rod_mold')
		.texture("tfg:item/mold/unfired/unfired_rod_mold")
		.tag('tfc:unfired_molds')
		.tag('tfc:fire_clay_recycle_5')
		.tag('tfc:molds')
		.tag('tfc:unfired_pottery')
	
	event.create('tfg:unfired_small_gear_mold')
		.texture("tfg:item/mold/unfired/unfired_small_gear_mold")
		.tag('tfc:unfired_molds')
		.tag('tfc:fire_clay_recycle_5')
		.tag('tfc:molds')
		.tag('tfc:unfired_pottery')
	
	event.create('tfg:unfired_nugget_mold')
		.texture("tfg:item/mold/unfired/unfired_nugget_mold")
		.tag('tfc:unfired_molds')
		.tag('tfc:clay_recycle_5')
		.tag('tfc:molds')
		.tag('tfc:unfired_pottery')
}
