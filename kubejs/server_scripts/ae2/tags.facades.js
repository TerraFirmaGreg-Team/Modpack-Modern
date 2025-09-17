// priority: 0
"use strict";

function registerAe2FacadeWhitelistTags(event) {
    
    const createdeco_catwalks_fm =
	[
		'andesite',
		'brass',
		'iron',
		'copper',
		'industrial_iron',
		'zinc'
	]

    //createdeco catwalks
	createdeco_catwalks_fm.forEach(facade_material => {
		event.add('ae2:whitelisted/facades', `createdeco:${  facade_material  }_catwalk`)
	})
}