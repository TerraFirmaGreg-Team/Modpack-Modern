// priority: 0
"use strict";

function registerBetterEndItemTags(event) {
	
	event.add('forge:seeds', 'betterend:amber_root_seeds')
	event.add('forge:seeds', 'betterend:blossom_berry_seeds')
	event.add('forge:seeds', 'betterend:bolux_mushroom_seeds')
	event.add('forge:seeds', 'betterend:cave_pumpkin_seeds')
	event.add('forge:seeds', 'betterend:shadow_berry_seeds')

	event.add('tfc:foods', 'betterend:amber_root_product')
	event.add('tfc:foods/grains', 'betterend:amber_root_product')

	event.add('tfc:foods', 'betterend:blossom_berry_product')
	event.add('tfc:foods/fruits', 'betterend:blossom_berry_product')

	event.add('tfc:foods', 'betterend:bolux_mushroom_product')
	event.add('tfc:foods/vegetables', 'betterend:bolux_mushroom_product')
	event.add('forge:mushrooms', 'betterend:bolux_mushroom_product')
	event.add('tfc:foods', 'betterend:bolux_mushroom_cooked')
	event.add('tfc:foods/vegetables', 'betterend:bolux_mushroom_cooked')
	event.add('forge:mushrooms', 'betterend:bolux_mushroom_cooked')

	event.add('tfc:foods', 'betterend:cave_pumpkin')
	event.add('tfc:foods', 'betterend:cave_pumpkin_chunks')
	event.add('tfc:foods/fruits', 'betterend:cave_pumpkin_chunks')
	event.add('tfc:foods', 'betterend:cave_pumpkin_pie_dough')
	event.add('tfc:foods', 'betterend:cave_pumpkin_pie_raw')
	event.add('tfc:foods', 'betterend:cave_pumpkin_pie')
	event.add('firmalife:foods/washable', 'betterend:cave_pumpkin_pie_raw')
	event.add('firmalife:foods/washable', 'betterend:cave_pumpkin_pie')

	event.add('tfc:foods', 'betterend:chorus_mushroom_product')
	event.add('tfc:foods/vegetables', 'betterend:chorus_mushroom_product')
	event.add('forge:mushrooms', 'betterend:chorus_mushroom_product')
	event.add('tfc:foods', 'betterend:chorus_mushroom_cooked')
	event.add('tfc:foods/vegetables', 'betterend:chorus_mushroom_cooked')
	event.add('forge:mushrooms', 'betterend:chorus_mushroom_cooked')

	event.add('tfc:foods', 'betterend:shadow_berry_product')
	event.add('tfc:foods/fruits', 'betterend:shadow_berry_product')
	event.add('tfc:foods', 'betterend:shadow_berry_cooked')
	event.add('tfc:foods/fruits', 'betterend:shadow_berry_cooked')

	event.add('forge:mushrooms', 'betterend:flammalix')
	event.add('forge:mushrooms', 'betterend:small_amaranita_mushroom')
}