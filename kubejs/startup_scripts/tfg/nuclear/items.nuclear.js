"use strict";

function registerTFGNuclearItems(event) {

	// Empty Fission Rod

	event.create('tfg:empty_rod')
		.translationKey('item.tfg.empty_rod')
		.texture('tfg:item/fission_rod/fuel_rod_empty')
		.tag('tfg:fission_rods')

	event.create('tfg:empty_rod_t2')
		.translationKey('item.tfg.empty_rod_t2')
		.texture('tfg:item/fission_rod/fuel_rod_empty_t2')
		.tag('tfg:fission_rods')

	event.create('tfg:empty_rod_t3')
		.translationKey('item.tfg.empty_rod_t3')
		.texture('tfg:item/fission_rod/fuel_rod_empty_t3')
		.tag('tfg:fission_rods')

	event.create('tfg:refrigerant_pellet')
		.translationKey('item.tfg.refrigerant_pellet')
		.texture('tfg:item/refrigerant_pellet')
		.tag('tfg:fission_coolant')

	event.create('tfg:terrafirmaguard_pa6')
		.translationKey('item.tfg.terrafirmaguard_pa6')
		.texture('tfg:item/terrafirmaguard_pa6')
		.tag('tfg:fission_coolant')

	// Moderator Line

	event.create('tfg:graphite_compound')
		.translationKey('item.tfg.graphite_compound')
		.texture('tfg:item/graphite_line/graphite_compound')

	event.create('tfg:raw_graphite_briquette')
		.translationKey('item.tfg.raw_graphite_briquette')
		.texture('tfg:item/graphite_line/raw_graphite_briquette')

	event.create('tfg:faulty_graphite_briquette')
		.translationKey('item.tfg.faulty_graphite_briquette')
		.texture('tfg:item/graphite_line/faulty_graphite_briquette')

	event.create('tfg:washed_graphite_briquette')
		.translationKey('item.tfg.washed_graphite_briquette')

	event.create('tfg:pure_graphite_rod')
		.translationKey('item.tfg.pure_graphite_rod')
		.texture('tfg:item/graphite_line/pure_graphite_rod')

	event.create('tfg:impure_graphite_rod')
		.translationKey('item.tfg.impure_graphite_rod')
		.texture('tfg:item/graphite_line/impure_graphite_rod')

	event.create('tfg:annealed_graphite_rod')
		.translationKey('item.tfg.annealed_graphite_rod')

	event.create('tfg:impure_annealed_graphite_rod')
		.translationKey('item.tfg.impure_annealed_graphite_rod')

	event.create('tfg:graphite_moderator')
		.translationKey('item.tfg.graphite_moderator')
		.texture('tfg:item/graphite_line/graphite_moderator')

	event.create('tfg:impure_graphite_moderator')
		.translationKey('item.tfg.impure_graphite_moderator')
		.texture('tfg:item/graphite_line/impure_graphite_moderator')

	event.create('tfg:advanced_polymer_binder')
		.translationKey('item.tfg.advanced_polymer_binder')
		.texture('tfg:item/graphite_line/advanced_polymer_binder')
}