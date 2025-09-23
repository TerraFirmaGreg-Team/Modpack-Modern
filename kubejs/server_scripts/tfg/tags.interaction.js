// priority: 0
"use strict";

function registerBlockInteractionTags(event) {
	
	/**
	 * @typedef {Object} BrickVariant
	 * @property {string} brick_type - The name of the brick variant.
	 * @property {string|null} brick - Main brick block ID.
	 * @property {string|null} brick_stairs - Brick stairs block ID.
	 * @property {string|null} brick_slab - Brick slab block ID.
	 * @property {string|null} brick_wall - Brick wall block ID.
	 * @property {string|null} cracked_brick - Cracked brick block ID.
	 * @property {string|null} cracked_stairs - Cracked brick stairs block ID.
	 * @property {string|null} cracked_slab - Cracked brick slab block ID.
	 * @property {string|null} cracked_wall - Cracked brick wall block ID.
	 * @property {string|null} mossy_brick - Mossy brick block ID.
	 * @property {string|null} mossy_stairs - Mossy brick stairs block ID.
	 * @property {string|null} mossy_slab - Mossy brick slab block ID.
	 * @property {string|null} mossy_wall - Mossy brick wall block ID.
	 * @property {string|null} smooth_brick - Smooth brick block ID.
	 * @property {string|null} smooth_stairs - Smooth brick stairs block ID.
	 * @property {string|null} smooth_slab - Smooth brick slab block ID.
	 * @property {string|null} smooth_wall - Smooth brick wall block ID.
	 * @property {string|null} chiseled_brick - Chiseled brick block ID.
	 */ 
	 
	 for (const b of global.BRICK_INDEX) {
		if (b.brick !== null) { event.add('tfg:interaction/brick', b.brick) }
		if (b.brick_stairs !== null)  {event.add('tfg:interaction/brick_stairs', b.brick_stairs) }
		if (b.brick_slab !== null) { event.add('tfg:interaction/brick_slab', b.brick_slab) }
		if (b.brick_wall !== null) { event.add('tfg:interaction/brick_wall', b.brick_wall) }

		if (b.cracked_brick !== null) { event.add('tfg:interaction/cracked_brick', b.cracked_brick) }
		if (b.cracked_stairs !== null) { event.add('tfg:interaction/cracked_brick_stairs', b.cracked_stairs) }
		if (b.cracked_slab !== null) { event.add('tfg:interaction/cracked_brick_slab', b.cracked_slab) }
		if (b.cracked_wall !== null) { event.add('tfg:interaction/cracked_brick_wall', b.cracked_wall) }

		if (b.mossy_brick !== null) { event.add('tfg:interaction/mossy_brick', b.mossy_brick) }
		if (b.mossy_stairs !== null) { event.add('tfg:interaction/mossy_brick_stairs', b.mossy_stairs) }
		if (b.mossy_slab !== null) { event.add('tfg:interaction/mossy_brick_slab', b.mossy_slab) }
		if (b.mossy_wall !== null) { event.add('tfg:interaction/mossy_brick_wall', b.mossy_wall) }

		if (b.smooth_brick !== null) { event.add('tfg:interaction/smooth_brick', b.smooth_brick) }
		 //event.add('tfg:interaction/smooth_bricks', b.smooth_stairs)
		 //event.add('tfg:interaction/smooth_bricks', b.smooth_slab)
		 //event.add('tfg:interaction/smooth_bricks', b.smooth_wall)
		 

	 }
	 
	 
	 for (const c of global.COBBLE_INDEX) {
		
		 event.add('tfg:interaction/cobble', c.block)
		 event.add('tfg:interaction/cobble_stairs', c.stairs)
		 event.add('tfg:interaction/cobble_slab', c.slab)
		 event.add('tfg:interaction/cobble_wall', c.wall)

		 event.add('tfg:interaction/mossy_cobble', c.mossy_block)
		 event.add('tfg:interaction/mossy_cobble_stairs', c.mossy_stairs)
		 event.add('tfg:interaction/mossy_cobble_slab', c.mossy_slab)
		 event.add('tfg:interaction/mossy_cobble_wall', c.mossy_wall)

		 
	 }
	
}
