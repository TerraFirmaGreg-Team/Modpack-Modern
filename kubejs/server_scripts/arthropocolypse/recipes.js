"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} event 
 */
function registerArthropocolypseRecipes(event) {
	event.remove({ id: 'arthropocolypse:beetle_helmet' });
	event.remove({ id: 'arthropocolypse:beetle_chestplate' });
	event.remove({ id: 'arthropocolypse:beetle_leggings' });
	event.remove({ id: 'arthropocolypse:beetle_boots' });
	event.remove({ id: 'arthropocolypse:energy_bar' });
	event.remove({ id: 'arthropocolypse:gilded_scale_elytra' });
	event.remove({ id: 'arthropocolypse:mandible_shear' });
	event.remove({ id: 'arthropocolypse:mandible_dagger' });
	event.remove({ id: 'arthropocolypse:cooked_ice_crawler_meat' });
	event.remove({ id: 'minecraft:cooked_ice_crawler_meat_from_smoking' });
	event.remove({ id: 'arthropocolypse:polished_beetle_fragment_block' });
	event.remove({ id: 'arthropocolypse:beetle_fragment_block_bricks' });
	event.remove({ id: 'arthropocolypse:beetle_fragment_block_stairs' });
	event.remove({ id: 'arthropocolypse:beetle_fragment_block_slabs' });
	event.remove({ id: 'arthropocolypse:beetle_fragment_block_wall' });
	event.remove({ id: 'arthropocolypse:tiled_beetle_fragment_block' });
	event.remove({ id: 'arthropocolypse:beetle_fragment_block_bricks_stairs' });
	event.remove({ id: 'arthropocolypse:beetle_fragment_block_bricks_slabs' });
	event.remove({ id: 'arthropocolypse:beetle_fragment_block_bricks_wall' });
	event.remove({ id: 'arthropocolypse:polished_beetle_fragment_block_stairs' });
	event.remove({ id: 'arthropocolypse:polished_beetle_fragment_block_slabs' });
	event.remove({ id: 'arthropocolypse:polished_beetle_fragment_block_wall' });
	event.remove({ id: 'arthropocolypse:tiled_beetle_fragment_block_stairs' });
	event.remove({ id: 'arthropocolypse:tiled_beetle_fragment_block_slabs' });
	event.remove({ id: 'arthropocolypse:tiled_beetle_fragment_block_wall' });



	//event.recipes.tfc.knapping('arthropocolypse:mandible_dagger', 'tfc:goat_horn', [
	//	' X   ',
	//	' XX  ',
	//	' XX  ',
	//	' XX  ',
	//	' XX  '
	//]).ingredient('arthropocolypse:mandible_part').outsideSlotRequired(false).id('tfg:knapping/mandible_dagger')
}