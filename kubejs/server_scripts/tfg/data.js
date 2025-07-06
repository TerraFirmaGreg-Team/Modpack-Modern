// priority: 0

function registerTFCDataForTFG(event) {
	registerTFGHeatData(event);
	registerTFGItemSize(event);
	registerTFGSupportData(event);
	registerTFGFoodData(event);
	registerTFGFauna(event);
	registerTFGCropRanges(event);
	registerTFGFLPlanters(event);
}


const registerTFGHeatData = (event) => {
	event.itemHeat('tfg:latex_soaked_gloves', 1.0, null, null)

	global.MINECRAFT_DYE_NAMES.forEach(color => {
		event.itemHeat(`tfg:decorative_vase/unfired/${color}`, 1.0, null, null)
	})
	event.itemHeat('tfg:decorative_vase/unfired', 1.0, null, null)

	event.itemHeat('tfg:sunflower_product', 1.0, null, null)
	event.itemHeat('tfg:roasted_sunflower_seeds', 1.0, null, null)
}


const registerTFGItemSize = (event) => {

	global.MINECRAFT_DYE_NAMES.forEach(color => {
		event.itemSize(`tfg:decorative_vase/${color}`, 'normal', 'medium', `decorative_vase/${color}`)
		event.itemSize(`tfg:decorative_vase/unfired/${color}`, 'normal', 'medium', `decorative_vase/unfired/${color}`)
	})
	event.itemSize('tfg:decorative_vase', 'normal', 'medium', 'decorative_vase')
	event.itemSize('tfg:decorative_vase/unfired', 'normal', 'medium', 'decorative_vase/unfired')

	event.itemSize('tfg:fishing_net/wood', 'large', 'medium', 'wood_fishing_net')
	event.itemSize('tfg:fishing_net/brass', 'large', 'medium', 'brass_fishing_net')
	event.itemSize('tfg:fishing_net/rose_gold', 'large', 'medium', 'rose_gold_fishing_net')
	event.itemSize('tfg:fishing_net/sterling_silver', 'large', 'medium', 'sterling_silver_fishing_net')
	event.itemSize('tfg:fishing_net/invar', 'large', 'medium', 'invar_fishing_net')
	event.itemSize('tfg:fishing_net/cupronickel', 'large', 'medium', 'cupronickel_fishing_net')
	event.itemSize('tfg:fishing_net/tin_alloy', 'large', 'medium', 'tin_alloy_fishing_net')
	event.itemSize('tfg:fishing_net/magnalium', 'large', 'medium', 'magnalium_fishing_net')

}


//up, down, horizontal
const registerTFGSupportData = (event) => {
	event.support('tfg:light_concrete_support_horizontal', 4, 4, 8, 'light_concrete_support')
	event.support('tfg:dark_concrete_support_horizontal', 4, 4, 8, 'dark_concrete_support')
	event.support('tfg:reinforced_light_concrete_support_horizontal', 6, 6, 16, 'reinforced_light_concrete_support')
	event.support('tfg:reinforced_dark_concrete_support_horizontal', 6, 6, 16, 'reinforced_dark_concrete_support')
	event.support('tfg:rebar_support_horizontal', 4, 4, 8, 'rebar_support')
	event.support('tfg:steel_support_horizontal', 6, 6, 16, 'steel_support')

	const other_stone = ['pyroxenite', 'migmatite', 'travertine']
	const stone_types = global.TFC_STONE_TYPES.concat(other_stone)

	stone_types.forEach(stone => {

		event.support(`tfg:${stone}_support_horizontal`, 2, 2, 4, `${stone}_support`)
	})
}


const registerTFGFoodData = (event) => {

	// birt has the same stats as chicken

	event.foodItem('tfg:food/raw_birt', food => {
		food.hunger(4)
		food.protein(1.5)
		food.decayModifier(3)
	})

	event.foodItem('tfg:food/cooked_birt', food => {
		food.hunger(4)
		food.saturation(2)
		food.protein(2.5)
		food.decayModifier(2.25)
	})

	event.foodItem('tfg:food/raw_crawlermari', food => {
		food.hunger(4)
		food.water(5)
		food.protein(1.1)
		food.decayModifier(3)
	})

	event.foodItem('tfg:food/cooked_crawlermari', food => {
		food.hunger(4)
		food.saturation(2)
		food.protein(2.2)
		food.decayModifier(2.25)
	})

	event.foodItem('tfg:food/raw_limpet', food => {
		food.hunger(4)
		food.water(5)
		food.protein(1.2)
		food.decayModifier(3)
	})

	event.foodItem('tfg:food/cooked_limpet', food => {
		food.hunger(5)
		food.saturation(2)
		food.protein(2.4)
		food.decayModifier(2.25)
	})

	global.FOOD_FRUIT.forEach(fruit => {
		event.foodItem(`tfg:food/freeze_dried/${fruit.name}`, food => {
			food.hunger(4)
			food.saturation(fruit.saturation)
			food.water(0)
			food.fruit(fruit.fruit)
			food.decayModifier(fruit.decay)
		})
	})

	event.foodItem('tfg:food/calorie_paste', food => {
		food.hunger(6)
		food.saturation(4)
		food.decayModifier(4.5)
		food.grain(0.5)
		food.fruit(0.5)
		food.vegetables(1)
		food.protein(1)
	})

	event.foodItem('tfg:food/meal_bag', food => {
		food.type('dynamic')
	})

	event.foodItem('tfg:roasted_sunflower_seeds', food => {
		food.hunger(4)
		food.decayModifier(0.5)
		food.grain(0.1)
		food.saturation(0.5)
	})

	event.foodItem('tfg:sunflower_product', food => {
		food.decayModifier(0.5)
	})
}

const registerTFGFauna = (event) => {

	//event.fauna(climate => { }, fauna => { fauna.chance(0) }, 'tfg:moon_rabbit')
}

const registerTFGCropRanges = (event) => {

	event.climateRange(climate => {
        climate.minHydration(20)
        climate.maxHydration(80)
        climate.minTemperature(5)
        climate.maxTemperature(40)
        climate.hydrationWiggle(7.5)
        climate.temperatureWiggle(5.5)
    }, 'tfg:sunflower')

    event.climateRange(climate => {
        climate.minHydration(10)
        climate.maxHydration(60)
        climate.minTemperature(-5)
        climate.maxTemperature(25)
        climate.hydrationWiggle(7.5)
        climate.temperatureWiggle(1.5)
    }, 'tfg:rapeseed')
}

const registerTFGFLPlanters = (event) => {

	event.firmalifePlantable(
		'tfg:sunflower_seeds',
		'large',
		10,
		3,
		0.15,
		'tfg:sunflower_seeds',
		'tfg:sunflower_product',
		'nitrogen',
		[
			'tfg:block/crop/sunflower_greenhouse_0',
			'tfg:block/crop/sunflower_greenhouse_1',
			'tfg:block/crop/sunflower_greenhouse_2',
			'tfg:block/crop/sunflower_greenhouse_3'
		],
		null
	)

	event.firmalifePlantable(
		'tfg:rapeseed_seeds',
		'large',
		10,
		3,
		0.15,
		'tfg:rapeseed_seeds',
		'tfg:rapeseed_product',
		'phosphorous',
		[
			'tfg:block/crop/rapeseed_greenhouse_0',
			'tfg:block/crop/rapeseed_greenhouse_1',
			'tfg:block/crop/rapeseed_greenhouse_2',
			'tfg:block/crop/rapeseed_greenhouse_3'
		],
		null
	)
}