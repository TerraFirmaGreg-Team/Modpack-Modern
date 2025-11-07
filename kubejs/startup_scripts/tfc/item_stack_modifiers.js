// priority: 0
"use strict";

TFCEvents.registerItemStackModifier(event => {

	event.withInput('tfg:add_bowl', (output, input) => {
		TFC.misc.getFood(output).setBowl(input)
		return output;
	});
})