"use strict";

function registerTFGMedicineItemTags(event) {

	//#region Medicine
	/**
	 * Array of medicinal pill items.
	 * @type {{Item}}
	 */
	const medicine_pills = [
		'tfg:antipoison_pill',
		'tfg:haste_pill',
		'tfg:night_vision_pill',
		'tfg:poison_pill',
		'tfg:regeneration_pill',
		'tfg:slowness_pill',
		'tfg:speed_pill',
		'tfg:water_breathing_pill',
		'tfg:weakness_pill',
		'tfg:paracetamol_pill',
		'tfg:rad_away_pill'
	];
	medicine_pills.forEach(items => { event.add('tfg:medicine/pills', items) });

	/**
	 * Array of medicinal tablet items.
	 * @type {{Item}}
	 */
	const medicine_tablets = [
		'tfg:antipoison_tablet',
		'tfg:haste_tablet',
		'tfg:night_vision_tablet',
		'tfg:poison_tablet',
		'tfg:regeneration_tablet',
		'tfg:slowness_tablet',
		'tfg:speed_tablet',
		'tfg:water_breathing_tablet',
		'tfg:weakness_tablet'
	];
	medicine_tablets.forEach(items => { event.add('tfg:medicine/tablets', items) });

	/**
	 * Array of medicinal salvo items.
	 * @type {{Item}}
	 */
	const medicine_salvos = [
		'tfg:absorption_salvo',
		'tfg:fire_resistance_salvo',
		'tfg:invisibility_salvo',
		'tfg:luck_salvo',
		'tfg:resistance_salvo',
		'tfg:instant_health_salvo'
	];
	medicine_salvos.forEach(items => { event.add('tfg:medicine/salvos', items) });

	/**
	 * Array of medicinal powder items.
	 * @type {{Item}}
	 */
	const medicine_powders = [
		'tfg:mining_powder',
		'tfg:acrobat_powder',
		'tfg:recovery_powder',
		'tfg:combat_powder'
	];
	medicine_powders.forEach(items => { event.add('tfg:medicine/powders', items) });

	/**
	 * Array of medicinal capsule items.
	 * @type {{Item}}
	 */
	const medicine_capsules = [
		'tfg:parasiticide_capsule',
		'tfg:detox_capsule',
		'tfg:nanofiltration_capsule'
	];
	medicine_capsules.forEach(items => { event.add('tfg:medicine/capsules', items) });

	const all_medicine = [].concat(medicine_pills, medicine_tablets, medicine_salvos, medicine_powders, medicine_capsules);
	all_medicine.forEach(items => { event.add('tfg:medicine', items) });

	//#endregion
	//#region Antipoison

	/**
	 * Array of antipoison items.
	 * @type {{Item}}
	 */
	const antipoison_ingredients = [
		'tfc:plant/blood_lily',
		'tfc:plant/pistia',
		'tfc:powder/bismuthinite',
		'gtceu:mica_dust',
		'gtceu:fullers_earth_dust'
	];
	antipoison_ingredients.forEach(items => { event.add('tfg:antipoison_ingredients', items) });

	//#endregion
	//#region Poison

	/**
	 * Array of poison items.
	 * @type {{Item}}
	 */
	const poison_ingredients = [
		'tfc:plant/butterfly_milkweed',
		'tfc:plant/grape_hyacinth',
		'tfc:plant/lily_of_the_valley',
		'tfc:plant/pulsatilla',
		'firmalife:food/nightshade_berry',
		'tfg:food/fly_agaric'
	];
	poison_ingredients.forEach(items => { event.add('tfg:poison_ingredients', items) });

	//#endregion
	//#region Regeneration

	/**
	 * Array of regeneration items.
	 * @type {{Item}}
	 */
	const regeneration_ingredients = [
		'tfc:plant/lilac',
		'tfc:plant/field_horsetail',
		'tfc:plant/licorice_fern',
		'tfc:plant/sacred_datura'
	];
	regeneration_ingredients.forEach(items => { event.add('tfg:regeneration_ingredients', items) });

	//#endregion
	//#region Speed

	/**
	 * Array of speed items.
	 * @type {{Item}}
	 */
	const speed_ingredients = [
		'tfc:plant/labrador_tea',
		'firmalife:raw_honey'
	];
	speed_ingredients.forEach(items => { event.add('tfg:speed_ingredients', items) });

	//#endregion
	//#region Slowness

	/**
	 * Array of slowness items.
	 * @type {{Item}}
	 */
	const slowness_ingredients = [
		'tfc:plant/marigold',
		'tfc:plant/nasturtium',
		'tfc:plant/snapdragon_red',
		'tfc:plant/snapdragon_white',
		'tfc:plant/snapdragon_yellow'
	];
	slowness_ingredients.forEach(items => { event.add('tfg:slowness_ingredients', items) });

	//#endregion
	//#region Weakness

	/**
	 * Array of weakness items.
	 * @type {{Item}}
	 */
	const weakness_ingredients = [
		'tfc:plant/laminaria',
		'tfc:plant/sea_palm',
		'tfc:plant/sea_lavender',
		'tfc:plant/canna',
		'tfc:plant/water_canna'
	];
	weakness_ingredients.forEach(items => { event.add('tfg:weakness_ingredients', items) });

	//#endregion
	//#region Haste

	/**
	 * Array of haste items.
	 * @type {{Item}}
	 */
	const haste_ingredients = [
		'#tfg:sugars'
	];
	haste_ingredients.forEach(items => { event.add('tfg:haste_ingredients', items) });

	//#endregion
	//#region Water Breathing

	/**
	 * Array of water breathing items.
	 * @type {{Item}}
	 */
	const water_breathing_ingredients = [
		'tfc:powder/saltpeter',
		'tfc:powder/charcoal',
		'tfg:rapeseed_product'
	];
	water_breathing_ingredients.forEach(items => { event.add('tfg:water_breathing_ingredients', items) });

	//#endregion
	//#region Night Vision

	/**
	 * Array of night vision items.
	 * @type {{Item}}
	 */
	const night_vision_ingredients = [
		'tfc:food/carrot',
		'beneath:gleamflower',
		'tfg:sunflower_product'
	];
	night_vision_ingredients.forEach(items => { event.add('tfg:night_vision_ingredients', items) });

	//#endregion
	//#region Invisibility

	/**
	 * Array of invisibility items.
	 * @type {{Item}}
	 */
	const invisibility_ingredients = [
		'tfc:plant/calendula',
		'tfc:plant/snapdragon_pink',
		'tfg:plant/eyeblossom'
	];
	invisibility_ingredients.forEach(items => { event.add('tfg:invisibility_ingredients', items) });

	//#endregion
	//#region Absorption

	/**
	 * Array of absorption items.
	 * @type {{Item}}
	 */
	const absorption_ingredients = [
		'tfc:plant/poppy',
		'tfg:plant/silver_bromeliad',
		'tfg:plant/tank_bromeliad'
	];
	absorption_ingredients.forEach(items => { event.add('tfg:absorption_ingredients', items) });

	//#endregion
	//#region Fire Resistance

	/**
	 * Array of fire resistance items.
	 * @type {{Item}}
	 */
	const fire_resistance_ingredients = [
		'tfc:plant/cattail',
		'tfc:plant/meads_milkweed',
		'firmalife:plant/bay_laurel',
		'beneath:ghost_pepper',
		'tfg:plant/flame_vine'
	];
	fire_resistance_ingredients.forEach(items => { event.add('tfg:fire_resistance_ingredients', items) });

	//#endregion
	//#region Resistance

	/**
	 * Array of resistance items.
	 * @type {{Item}}
	 */
	const resistance_ingredients = [
		'tfc:plant/hibiscus',
		'tfg:plant/palash',
		'gtceu:calcium_dust'
	];
	resistance_ingredients.forEach(items => { event.add('tfg:resistance_ingredients', items) });

	//#endregion
	//#region Instant Health

	/**
	 * Array of instant health items.
	 * @type {{Item}}
	 */
	const instant_health_ingredients = [
		'tfc:plant/foxglove',
		'tfc:plant/artists_conk'
	];
	instant_health_ingredients.forEach(items => { event.add('tfg:instant_health_ingredients', items) });

	//#endregion
	//#region Strength

	/**
	 * Array of strength items.
	 * @type {{Item}}
	 */
	const strength_ingredients = [
		'tfg:plant/prickly_pear',
		'tfg:plant/prickly_pear_purple',
		'tfc:powder/sulfur'
	];
	strength_ingredients.forEach(items => { event.add('tfg:strength_ingredients', items) });

	//#endregion
	//#region Jump Boost

	/**
	 * Array of jump boost items.
	 * @type {{Item}}
	 */
	const jump_boost_ingredients = [
		'tfg:plant/penwortel',
		'tfg:plant/qantu',
		'tfc:plant/silver_spurflower'
	];
	jump_boost_ingredients.forEach(items => { event.add('tfg:jump_boost_ingredients', items) });

	//#endregion
	//#region Slow Fall

	/**
	 * Array of slow fall items.
	 * @type {{Item}}
	 */
	const slow_fall_ingredients = [
		'tfc:plant/reindeer_lichen',
		'tfc:plant/spanish_moss',
		'tfg:plant/mountain_hullwort'
	];
	slow_fall_ingredients.forEach(items => { event.add('tfg:slow_fall_ingredients', items) });

	//#endregion
	//#region Luck

	/**
	 * Array of luck items.
	 * @type {{Item}}
	 */
	const luck_ingredients = [
		'tfc:plant/goldenrod',
		'tfc:plant/heather'
	];
	luck_ingredients.forEach(items => { event.add('tfg:luck_ingredients', items) });

	//#endregion
	//#region Antiparasitic

	/**
	 * Array of antiparasitic items.
	 * @type {{Item}}
	 */
	const antiparasitic_ingredients = [
		'tfg:spice/oregano_leaves',
		'tfc:food/garlic',
		'tfc:seeds/pumpkin',
		'betterend:cave_pumpkin_plant_seeds'
	];
	antiparasitic_ingredients.forEach(items => { event.add('tfg:antiparasitic_ingredients', items) });

	//#endregion
	//#region Detox

	/**
	 * Array of detox items.
	 * @type {{Item}}
	 */
	const detox_ingredients = [
		'tfc:food/onion',
		'tfc:plant/dandelion',
		'tfc:plant/green_algae',
		'betterend:lacugrove',
		'tfg:citric_acid_dust'
	];
	detox_ingredients.forEach(items => { event.add('tfg:detox_ingredients', items) });

	//#endregion
	//#region Filtering

	/**
	 * Array of filtering items.
	 * @type {{Item}}
	 */
	const filtering_ingredients = [
		'gtceu:carbon_fiber_mesh',
		'betterend:twisted_vine',
	];
	filtering_ingredients.forEach(items => { event.add('tfg:filtering_ingredients', items) });

	//#endregion

};