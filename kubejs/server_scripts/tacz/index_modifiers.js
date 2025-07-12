
const ammoIndexLogic = (event) => {
	const id = event.getId().toString();
	
	if (!global.TACZ_ENABLED_AMMO.includes(id)) {
		
		return event.removeAmmo();
	}
	
	
}

const attachmentIndexLogic = (event) => {
	const id = event.getId().toString();
	
	if (!global.TACZ_ENABLED_ATTACH.includes(id)) {
		
		return event.removeAttachment();
	}
	
}

const gunIndexLogic = (event) => {
	const id = event.getId().toString();
	
	if (!global.TACZ_ENABLED_GUNS.includes(id)) {
		
		return event.removeGun();
	}
	
	
}