// priority: 0
"use strict";

function registerFirmalifeItemModifications(event) {

	event.modify('firmalife:spoon', item => {
		item.setCraftingRemainder('firmalife:spoon')
	})
	event.modify('firmalife:mixing_bowl', item => {
		item.setCraftingRemainder('firmalife:mixing_bowl')
	})
	
	//#region add cooling/heating to foods
	global.COOLING_FOODS.forEach(food => {
		event.modify(food, item =>{
			item.foodProperties = food => {
				food.effect('tfg:cooling', 20, 0, 1)
			}
		})
	})
	
	global.WARMING_FOODS.forEach(food => {
		event.modify(food, item =>{
			item.foodProperties = food => {
				food.effect('tfg:warming', 20, 1, 1)
			}
		})
	})
	
}