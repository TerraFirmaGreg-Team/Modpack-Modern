// priority: 0
"use strict";

function registerFowlPlayItemTags(event) {
	event.add('fowlplay:bird_feed', '#forge:seeds')

	event.add('fowlplay:blue_jay_food', '#forge:seeds')
	event.add('fowlplay:cardinal_food', '#forge:seeds')
	event.add('fowlplay:chickadee_food', '#forge:seeds')
	event.add('fowlplay:crow_food', '#forge:seeds')
	event.add('fowlplay:crow_food', '#tfc:foods/grains')
	event.add('fowlplay:crow_food', '#tfc:foods/breads')
	event.add('fowlplay:crow_food', '#tfc:foods/vegetables')
	event.add('fowlplay:goose_food', '#forge:seeds')
	event.add('fowlplay:goose_food', '#tfc:foods/grains')
	event.add('fowlplay:goose_food', '#tfc:foods/breads')
	event.add('fowlplay:goose_food', '#tfc:foods/vegetables')
	event.add('fowlplay:gull_food', '#forge:seeds')
	event.add('fowlplay:gull_food', '#tfc:foods')
	event.add('fowlplay:hawk_food', '#tfc:foods/meats')
	event.add('fowlplay:penguin_food', '#firmalife:foods/raw_fish')
	event.add('fowlplay:pigeon_food', '#forge:seeds')
	event.add('fowlplay:pigeon_food', '#tfc:foods/grains')
	event.add('fowlplay:pigeon_food', '#tfc:foods/breads')
	event.add('fowlplay:pigeon_food', '#tfc:foods/vegetables')
	event.add('fowlplay:raven_food', '#forge:seeds')
	event.add('fowlplay:raven_food', '#tfc:foods/grains')
	event.add('fowlplay:raven_food', '#tfc:foods/breads')
	event.add('fowlplay:raven_food', '#tfc:foods/vegetables')
	event.add('fowlplay:robin_food', '#forge:seeds')
	event.add('fowlplay:sparrow_food', '#forge:seeds')

	event.add('c:hidden_from_recipe_viewers', 'fowlplay:bird_feeder')
}

function registerFowlPlayBlockTags(event) {
	event.add('fowlplay:penguins_slide_on', 'minecraft:packed_ice')
	event.add('fowlplay:penguins_slide_on', 'minecraft:blue_ice')
	event.add('fowlplay:penguins_slide_on', 'tfc:sea_ice')

	event.add('fowlplay:penguins_spawnable_on', 'tfc:sea_ice')
	event.add('fowlplay:penguins_spawnable_on', '#forge:sand')

	event.add('fowlplay:shorebirds_spawnable_on', '#forge:stone')
	event.add('fowlplay:shorebirds_spawnable_on', '#forge:gravel')

	event.add('fowlplay:waterfowl_spawnable_on', '#forge:stone')
	event.add('fowlplay:waterfowl_spawnable_on', '#forge:gravel')
	event.add('fowlplay:waterfowl_spawnable_on', '#tfc:mud')
}

function registerFowlPlayEntityTags(event) {
	event.add('tfc:land_prey', '#fowlplay:birds')
	event.add('tfc:hunted_by_cats', '#fowlplay:passerines')
	event.add('tfc:hunted_by_dogs', '#fowlplay:waterfowl')
	event.add('tfc:hunted_by_dogs', '#fowlplay:seabirds')

	event.add('fowlplay:blue_jay_avoids', '#tfc:land_predators')
	event.add('fowlplay:cardinal_avoids', '#tfc:land_predators')
	event.add('fowlplay:chickadee_avoids', '#tfc:land_predators')
	event.add('fowlplay:crow_avoids', '#tfc:land_predators')
	event.add('fowlplay:goose_avoids', '#tfc:land_predators')
	event.add('fowlplay:gull_avoids', '#tfc:land_predators')
	event.add('fowlplay:hawk_avoids', '#tfc:land_predators')
	event.add('fowlplay:penguin_avoids', '#tfc:land_predators')
	event.add('fowlplay:pigeon_avoids', '#tfc:land_predators')
	event.add('fowlplay:raven_avoids', '#tfc:land_predators')
	event.add('fowlplay:robin_avoids', '#tfc:land_predators')
	event.add('fowlplay:sparrow_avoids', '#tfc:land_predators')

	event.add('fowlplay:goose_avoids', '#tfc:ocean_predators')
	event.add('fowlplay:gull_avoids', '#tfc:ocean_predators')
	event.add('fowlplay:penguin_avoids', '#tfc:ocean_predators')

	event.add('tfc:amphibious_creatures', 'fowlplay:goose')
	event.add('tfc:amphibious_creatures', 'fowlplay:gull')
	event.add('tfc:amphibious_creatures', 'fowlplay:penguin')

	event.add('fowlplay:gull_hunt_targets', '#tfc:pests')
	event.add('fowlplay:gull_hunt_targets', '#tfc:hunted_by_ocean_predators')
	event.add('fowlplay:gull_baby_hunt_targets', 'tfc:chicken')
	event.add('fowlplay:gull_baby_hunt_targets', 'tfc:duck')
	event.add('fowlplay:gull_baby_hunt_targets', 'tfc:quail')

	event.add('fowlplay:hawk_hunt_targets', '#tfc:pests')
	event.add('fowlplay:hawk_baby_hunt_targets', 'tfc:chicken')
	event.add('fowlplay:hawk_baby_hunt_targets', 'tfc:duck')
	event.add('fowlplay:hawk_baby_hunt_targets', 'tfc:quail')
	event.add('fowlplay:hawk_baby_hunt_targets', 'tfc:rabbit')
	event.add('fowlplay:hawk_baby_hunt_targets', 'tfc:frog')

	event.add('fowlplay:penguin_hunt_targets', '#tfc:hunted_by_ocean_predators')

	event.add('fowlplay:raven_baby_hunt_targets', 'tfc:chicken')
	event.add('fowlplay:raven_baby_hunt_targets', 'tfc:duck')
	event.add('fowlplay:raven_baby_hunt_targets', 'tfc:quail')
	event.add('fowlplay:raven_baby_hunt_targets', 'tfc:rabbit')

	event.add('tfc:spawns_on_cold_blocks', 'fowlplay:penguin')
}

function registerFowlPlayBiomeTags(event) {
	event.add('fowlplay:spawns_blue_jays', '#tfg:overworld_biomes')
	event.add('fowlplay:spawns_cardinals', '#tfg:overworld_biomes')
	event.add('fowlplay:spawns_chickadees', '#tfg:overworld_biomes')
	event.add('fowlplay:spawns_crows', '#tfg:overworld_biomes')
	event.add('fowlplay:spawns_geese', '#tfg:overworld_biomes')
	event.add('fowlplay:spawns_gulls', '#tfg:overworld_biomes')
	event.add('fowlplay:spawns_hawks', '#tfg:overworld_biomes')
	event.add('fowlplay:spawns_penguins', '#tfg:overworld_biomes')
	event.add('fowlplay:spawns_pigeons', '#tfg:overworld_biomes')
	event.add('fowlplay:spawns_ravens', '#tfg:overworld_biomes')
	event.add('fowlplay:spawns_robins', '#tfg:overworld_biomes')
	event.add('fowlplay:spawns_sparrows', '#tfg:overworld_biomes')

	event.removeAll('fowlplay:spawns_ducks')
}