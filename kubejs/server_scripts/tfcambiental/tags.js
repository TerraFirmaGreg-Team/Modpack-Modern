// priority: 0
"use strict";

function registerTFCAmbientalItemTags(event) {
	event.add('tfcambiental:sunblocking_apparel', '#curios:clothes_hat');

    event.add('forge:string', 'tfc_textile:cotton_string');

	const hides = [
        "tfc_textile:caribou_fur",
        "tfc_textile:polar_bear_fur",
        "tfc_textile:black_bear_fur",
        "tfc_textile:grizzly_bear_fur",
        "tfc_textile:tiger_fur",
        "tfc_textile:cougar_fur",
        "tfc_textile:panther_fur",
        "tfc_textile:sabertooth_fur",
        "tfc_textile:direwolf_fur",
        "tfc_textile:lion_fur",
        "tfc_textile:crocodile_leather",
        "beneath:cursed_hide"
	]
    hides.forEach(hide => {
        event.add('tfc_textile:animal_furs', hide);
    })
}