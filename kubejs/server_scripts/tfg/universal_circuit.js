const tiers = ["ulv", "lv", "mv", "hv", "ev", "iv", "luv", "zpm", "uv", "uhv", "uev","uiv"];

ServerEvents.tags("item", event => {
	tiers.forEach(tier => {
		event.add(`kubejs:craft_circuits/${tier}`, `#gtceu:circuits/${tier}`);
	});
});

ServerEvents.recipes(event => {
	tiers.forEach(tier => {
		event.shapeless(
            Item.of(`tfg:${tier}_universal_circuit`, 1),
            [
              `kubejs:craft_circuits_${tier}`
            ]
          );
	});

});

ServerEvents.tags("item", event => {
	tiers.forEach(tier => {
		event.add(`gtceu:circuits/${tier}`, `tfg:${tier}_universal_circuit`);
	});
});