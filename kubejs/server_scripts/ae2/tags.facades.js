// priority: 0
"use strict";

function registerAe2FacadeWhitelistTags(event) {

    //createdeco catwalks
	global.CREATE_DECO_CATWALK_TYPES.forEach(facade_material => {
		event.add('ae2:whitelisted/facades', `createdeco:${  facade_material  }_catwalk`)
	})
}