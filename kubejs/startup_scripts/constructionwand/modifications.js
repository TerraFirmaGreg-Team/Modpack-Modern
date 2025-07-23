// priority: 0
"use strict";

function registerConstructionWandsItemModifications(event) {

	// Increase durability of all construction wands

	event.modify('constructionwand:stone_wand', item => {
		item.maxDamage = 791
	})
	event.modify('constructionwand:iron_wand', item => {
		item.maxDamage = 2303
	})
	event.modify('constructionwand:diamond_wand', item => {
		item.maxDamage = 12286
	})
}