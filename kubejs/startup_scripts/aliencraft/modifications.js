// priority: 0
"use strict";

function registerAliencraftBlockModification(event) {
	event.modify('aliencraft_kepler:alien_cactus_flower', block => {
		block.lightEmission = 0
	});

	event.modify('aliencraft_kepler:small_desert_cactus', block => {
		block.lightEmission = 0
	});

	event.modify('aliencraft_kepler:small_desert_cactus_fruitless', block => {
		block.lightEmission = 0
	});

	event.modify('aliencraft_kepler:big_alien_cactus', block => {
		block.lightEmission = 0
	});

	event.modify('aliencraft_kepler:thorn_flower', block => {
		block.lightEmission = 0
	});
}