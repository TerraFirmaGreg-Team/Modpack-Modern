const tiers = ["ulv", "lv", "mv", "hv", "ev", "iv", "luv", "zpm", "uv", "uhv"];

ServerEvents.tags("item", event => {
    tiers.forEach(tier => {
        event.add(`gtceu:circuits/${tier}`, `tfg:${tier}_universal_circuit`);
    });
});

ServerEvents.recipes(event => {
	tiers.forEach(tier => {
	event.shapeless(Item.of(`tfg:${tier}_universal_circuit`, 1),  [Ingredient.of([`#gtceu:circuits/${tier}`]).subtract([`tfg:${tier}_universal_circuit`])]
		).id(`universal_circuits_${tier}`);
});
});