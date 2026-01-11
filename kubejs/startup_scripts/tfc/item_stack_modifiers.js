// priority: 0
"use strict";

TFCEvents.registerItemStackModifier(event => {

	// for adding bowls to dynamic_bowl-type foods
	event.withInput('tfg:add_bowl', (output, input) => {
		TFC.misc.getFood(output).setBowl(input)
		return output;
	});

	// for adding bowls to foods that are not dynamic_bowls
	event.withInput('tfg:force_add_bowl', (output, input) => {
		if (input.nbt) {
			output.orCreateTag.merge(input.nbt)
		}

		if (output.nbt) {
			output.nbt.put('bowl', { Count: 1, id: 'minecraft:bowl' });
		}
		else {
			output.nbt = { bowl: { Count: true, id: 'minecraft:bowl' }};
		}
		return output;
	});

	// if you're doing any sort of recipe where you need the nbt copied from input to output
	event.withInput('tfg:copy_nbt', (output, input) => {
		if (input.nbt) {
			output.orCreateTag.merge(input.nbt)
		}
		return output
	})
})