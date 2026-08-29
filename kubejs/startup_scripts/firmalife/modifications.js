// priority: 0
"use strict";

function registerFirmalifeItemModifications(event) {

	event.modify('firmalife:spoon', item => {
		item.setCraftingRemainder('firmalife:spoon')
	})
	event.modify('firmalife:mixing_bowl', item => {
		item.setCraftingRemainder('firmalife:mixing_bowl')
	})

	event.modify('firmalife:ice_shavings', item => {
		item.foodProperties = food => {
			food.hunger(0)
			food.saturation(0)
		}
	})
	
	//#region Temp Changing Foods
	
	global.WARMING_FOODS.forEach(food => {
		event.modify(food, item => {
			item.foodProperties = food => {
				food.effect('tfg:warming', 9600, 0, 1)
			}
		})
	})
	
}