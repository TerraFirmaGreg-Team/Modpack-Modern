// priority: 0

const registerKnightsOfTerraFirmaItemTags = (event) => {
	// tag "#c:hidden_from_recipe_viewers" marks an item to be removed from
	// recipie viewers when it can't be removed outright.

	// Magistu items are no longer valid except edge cases where they're
	// recycled by TFK, so hide them (bc we can't outright remove them).
	//
	// Additionally, while technically everything besides diamond, stone,
	// and netherite could be viable for some weapons or shields, their scaling
	// is broken and I haven't yet found a way to fix-up their armor / damage
	// values. Otherwise I could reasonably add recipies for them back to the
	// game.
	const purgeMagistuVariants = [
		// "iron", // Becomes wrought_iron
		"wood",
		"stone",
		"gold",
		"diamond",
		"silver",
		"netherite",
		"tin",
		// "rusted" // Obtainable by killing monsters with held weapon in hard.
	];
	// Antiquelegacy seems to be properly cleaned!
	// We only need to purge magistuarmory's rogue items.
	// The list below belongs to antique, left here in case things change
	// for the worst. An inkling for where to start looking.
	// "sica", 
	// "rhomphaia"
	// "celticsword",
	// "gladius",
	// "republic_gladius",
	// "xiphos",	
	// "single_edged_sword",
	// "kopis",
	// "antique_sword",
	// NOTE: List of items included by magistu at their wiki here:
	//   https://docs.google.com/document/d/19cIxLeXQ2r_9zxP6q33WA7i4oFTGHVjnV5MTSIWXrKQ/edit?tab=t.0
	const purgeMagistuWeapons = [
		"bastardsword",
		"estoc",
		"zweihander",
		"heavymace",
		"claymore",
		"heavywarhammer",
		"lucernhammer",
		"shortsword",
		"flamebladedsword",
		"katzbalger",
		"stylet",
		"lochaberaxe",
		"ahlspiess",
		"morgenstern",
		"chainmorgenstern", // NOTE: TFK didn't fully add variants
		"ranseur",
		"guisarme",
		"chivalrylance",
		"concavehalberd",
		"pike",

		// Shields, but exceptions from shield rules.
		"rondache", 
		"buckler",
		"target",
	];
	purgeMagistuVariants.forEach((variant) => {
		purgeMagistuWeapons.forEach((objectName) => {
			const item = "magistuarmory:" + variant + "_" + objectName;
			event.add("c:hidden_from_recipe_viewers", item);
		});
	});

	// Most shields must be crafted from wood and built-upon to make others.
	const purgeMagistuShields = [
		"pavise", // NOTE: not properly updated by TFK (must add recipies)
		"ellipticalshield",
		"heatershield",
		"roundshield",
		"tartsche",
		"kiteshield",
	];
	purgeMagistuVariants.filter((e) => e !== "wood").forEach((variant) => {
		purgeMagistuShields.forEach((objectName) => {
			const item = "magistuarmory:" + variant + "_" + objectName;
			event.add("c:hidden_from_recipe_viewers", item);
		});
	});

	// Allowing these armor-specific recipies to have the forge tag
	// creates an item duping machine. So we have to remove them.
	event.remove("forge:plates/bronze", "antiquelegacy:bronze_plate");
	event.remove("forge:plates/iron", "antiquelegacy:iron_plate");
	event.remove("forge:plates/black_bronze", "knightsofterrafirma:black_bronze_plate");
	event.remove("forge:plates/bismuth_bronze", "knightsofterrafirma:bismuth_bronze_plate");
	event.remove("forge:plates/steel", "magistuarmory:steel_plate");
};