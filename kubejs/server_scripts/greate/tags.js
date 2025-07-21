// priority: 0
"use strict";

function registerGreateItemTags(event) {

	global.GREATE_DISABLED_ITEMS.forEach(item => {
		event.removeAllTagsFrom(item)
		event.add('c:hidden_from_recipe_viewers', item)
	})

	event.add('tfg:small_cogwheels', 'greate:andesite_alloy_cogwheel')
	event.add('tfg:small_cogwheels', 'greate:steel_cogwheel')
	event.add('tfg:small_cogwheels', 'greate:aluminium_cogwheel')
	event.add('tfg:small_cogwheels', 'greate:stainless_steel_cogwheel')
	event.add('tfg:small_cogwheels', 'greate:titanium_cogwheel')

	event.add('tfg:large_cogwheels', 'greate:large_andesite_alloy_cogwheel')
	event.add('tfg:large_cogwheels', 'greate:large_steel_cogwheel')
	event.add('tfg:large_cogwheels', 'greate:large_aluminium_cogwheel')
	event.add('tfg:large_cogwheels', 'greate:large_stainless_steel_cogwheel')
	event.add('tfg:large_cogwheels', 'greate:large_titanium_cogwheel')
	
	event.add('tfg:shafts', 'greate:andesite_alloy_shaft')
	event.add('tfg:shafts', 'greate:steel_shaft')
	event.add('tfg:shafts', 'greate:aluminium_shaft')
	event.add('tfg:shafts', 'greate:stainless_steel_shaft')
	event.add('tfg:shafts', 'greate:titanium_shaft')
}


function registerGreateBlockTags(event) {

	global.GREATE_DISABLED_ITEMS.forEach(item => {
		event.removeAllTagsFrom(item)
		event.add('c:hidden_from_recipe_viewers', item)
	})

}



function registerGreateFluidTags(event) {

	global.GREATE_DISABLED_FLUIDS.forEach(fluid => {
		event.removeAllTagsFrom(fluid)
		event.add('c:hidden_from_recipe_viewers', fluid)
	})

}