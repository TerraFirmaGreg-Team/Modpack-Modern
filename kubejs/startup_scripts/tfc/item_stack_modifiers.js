// priority: 0
"use strict";

TFCEvents.registerItemStackModifier(event => {

	event.withInput('tfg:add_bowl', (output, input) => {
		TFC.misc.getFood(output).setBowl(input)
		return output;
	});

	event.withInput('tfg:copy_nbt', (output, input) => {
		let { nbt } = input
		if (nbt) {
			output.orCreateTag.merge(nbt)
		}
		return output
	})
})