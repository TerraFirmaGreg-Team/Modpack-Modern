"use strict";

function registerTFGMedicineItemTags(event) {

	event.add('tfg:medicine', 'tfg:antipoison_pill')
	event.add('tfg:medicine', 'tfg:antipoison_tablet')
	event.add('tfg:medicine', 'tfg:haste_pill')
	event.add('tfg:medicine', 'tfg:haste_tablet')
	event.add('tfg:medicine', 'tfg:night_vision_pill')
	event.add('tfg:medicine', 'tfg:night_vision_tablet')
	event.add('tfg:medicine', 'tfg:poison_pill')
	event.add('tfg:medicine', 'tfg:poison_tablet')
	event.add('tfg:medicine', 'tfg:regeneration_pill')
	event.add('tfg:medicine', 'tfg:regeneration_tablet')
	event.add('tfg:medicine', 'tfg:slowness_pill')
	event.add('tfg:medicine', 'tfg:slowness_tablet')
	event.add('tfg:medicine', 'tfg:speed_pill')
	event.add('tfg:medicine', 'tfg:speed_tablet')
	event.add('tfg:medicine', 'tfg:water_breathing_pill')
	event.add('tfg:medicine', 'tfg:water_breathing_tablet')
	event.add('tfg:medicine', 'tfg:weakness_pill')
	event.add('tfg:medicine', 'tfg:weakness_tablet')
	event.add('tfg:medicine', 'tfg:absorption_salvo')
	event.add('tfg:medicine', 'tfg:fire_resistance_salvo')
	event.add('tfg:medicine', 'tfg:invisibility_salvo')
	event.add('tfg:medicine', 'tfg:luck_salvo')
	event.add('tfg:medicine', 'tfg:resistance_salvo')
	event.add('tfg:medicine', 'tfg:instant_health_salvo')
	event.add('tfg:medicine', 'gtceu:paracetamol_pill')
	event.add('tfg:medicine', 'gtceu:rad_away_pill')

	event.add('tfg:antipoison_ingredients', 'tfc:plant/blood_lily')
	event.add('tfg:antipoison_ingredients', 'tfc:plant/pistia')
	event.add('tfg:antipoison_ingredients', 'tfc:powder/bismuthinite')
	event.add('tfg:antipoison_ingredients', 'gtceu:mica_dust')
	event.add('tfg:antipoison_ingredients', 'gtceu:fullers_earth_dust')

	event.add('tfg:poison_ingredients', 'tfc:plant/butterfly_milkweed')
	event.add('tfg:poison_ingredients', 'tfc:plant/grape_hyacinth')
	event.add('tfg:poison_ingredients', 'tfc:plant/lily_of_the_valley')
	event.add('tfg:poison_ingredients', 'tfc:plant/pulsatilla')
	event.add('tfg:poison_ingredients', 'firmalife:food/nightshade_berry')
	event.add('tfg:poison_ingredients', 'minecraft:red_mushroom')

	event.add('tfg:regeneration_ingredients', 'tfc:plant/lilac')
	event.add('tfg:regeneration_ingredients', 'tfc:plant/field_horsetail')
	event.add('tfg:regeneration_ingredients', 'tfc:plant/licorice_fern')
	event.add('tfg:regeneration_ingredients', 'tfc:plant/sacred_datura')

	event.add('tfg:speed_ingredients', 'tfc:plant/labrador_tea')
	event.add('tfg:speed_ingredients', 'firmalife:raw_honey')

	event.add('tfg:slowness_ingredients', 'tfc:plant/marigold')
	event.add('tfg:slowness_ingredients', 'tfc:plant/nasturtium')
	event.add('tfg:slowness_ingredients', 'tfc:plant/snapdragon_red')
	event.add('tfg:slowness_ingredients', 'tfc:plant/snapdragon_white')
	event.add('tfg:slowness_ingredients', 'tfc:plant/snapdragon_yellow')

	event.add('tfg:weakness_ingredients', 'tfc:plant/laminaria')
	event.add('tfg:weakness_ingredients', 'tfc:plant/sea_palm')
	event.add('tfg:weakness_ingredients', 'tfc:plant/sea_lavender')
	event.add('tfg:weakness_ingredients', 'tfc:plant/canna')
	event.add('tfg:weakness_ingredients', 'tfc:plant/water_canna')

	event.add('tfg:haste_ingredients', '#tfg:sugars')

	event.add('tfg:water_breathing_ingredients', 'tfc:powder/saltpeter')
	event.add('tfg:water_breathing_ingredients', 'tfc:powder/charcoal')
	event.add('tfg:water_breathing_ingredients', 'tfg:rapeseed_product')

	event.add('tfg:night_vision_ingredients', 'tfc:food/carrot')
	event.add('tfg:night_vision_ingredients', 'beneath:gleamflower')
	event.add('tfg:night_vision_ingredients', 'tfg:sunflower_product')

	event.add('tfg:invisibility_ingredients', 'tfc:plant/calendula')
	event.add('tfg:invisibility_ingredients', 'tfc:plant/snapdragon_pink')
	
	event.add('tfg:absorption_ingredients', 'tfc:plant/poppy')
	event.add('tfg:absorption_ingredients', 'beneath:burpflower')

	event.add('tfg:fire_resistance_ingredients', 'tfc:plant/cattail')
	event.add('tfg:fire_resistance_ingredients', 'tfc:plant/meads_milkweed')
	event.add('tfg:fire_resistance_ingredients', 'firmalife:plant/bay_laurel')
	event.add('tfg:fire_resistance_ingredients', 'beneath:ghost_pepper')

	event.add('tfg:resistance_ingredients', 'tfc:plant/hibiscus')
	event.add('tfg:resistance_ingredients', 'gtceu:calcium_dust')

	event.add('tfg:instant_health_ingredients', 'tfc:plant/foxglove')
	event.add('tfg:instant_health_ingredients', 'tfc:plant/artists_conk')

	event.add('tfg:luck_ingredients', 'tfc:plant/goldenrod')
	event.add('tfg:luck_ingredients', 'tfc:plant/heather')
}