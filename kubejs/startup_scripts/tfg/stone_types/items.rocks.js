"use strict";

function registerTFGRockItems(event) {

	for (let [rockId, rock] of Object.entries(global.BIG_ROCK_TABLE)) {

		if (rock.brick != null && rock.brick.startsWith('tfg:brick/')) {
			let brickItem = event.create(rock.brick);

			if (rock.tfcTag != null) {
				brickItem.tag(rock.tfcTag)
			}
		}
	}
}