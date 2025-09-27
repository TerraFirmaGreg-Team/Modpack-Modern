// priority: 0
"use strict";

const registerToolBeltRecipes = (event) => {

	event.remove({ mod: 'toolbelt' });

	event.shaped('toolbelt:pouch', [
		'ACA',
		'BAB'
	], {
		A: '#forge:string',
		B: 'sns:leather_strip',
		C: '#forge:bolts/rose_gold'
	}).id('tfg:toolbelt/shaped/pouch')

	event.shaped(Item.of('toolbelt:belt', { Size: 2 }), [
		'ABA',
		'B B',
		'BCB'
	], {
		A: '#forge:string',
		B: 'sns:leather_strip',
		C: 'sns:buckle'
	}).id(`tfg:toolbelt/shaped/belt_${2}`)


	event.shapeless('toolbelt:belt', ['toolbelt:belt', 'toolbelt:pouch'])
		.modifyResult((grid, result) => {
			let orig = grid.find(Item.of('toolbelt:belt').ignoreNBT())

			if (orig.nbt == null) {
				orig.nbt = { Size: 3 };
			}
			else {
				if (orig.nbt.Size == null) {
					orig.nbt = { Size: 3 };
				}
				else {
					orig.nbt.Size = orig.nbt.getInt("Size") + 1;
				}
			}

			return result.withNBT(orig.nbt);
		})


	event.shapeless('toolbelt:belt', ['toolbelt:belt', 'tfc:powder/wood_ash'])
		.modifyResult((grid, result) => {
			let orig = grid.find(Item.of('toolbelt:belt').ignoreNBT())

			if (orig.nbt == null || orig.nbt.display == null) {
				return result;
			}
			else {
				delete orig.nbt.display;
				return result.withNBT(orig.nbt);
			}
		})
}
