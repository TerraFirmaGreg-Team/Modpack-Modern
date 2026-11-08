// priority: 0
"use strict";

function registerOpposingForceEntityTags(event) {
	event.removeAll('opposing_force:post_nether')
	event.removeAll('opposing_force:post_end')
}

function registerOpposingForceItemTags(event) {
	event.add('tfg:foods/parasites', 'opposing_force:raw_terror_leg')
}