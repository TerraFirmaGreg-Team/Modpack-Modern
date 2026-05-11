// priority: 0
"use strict";
const TFGAsphaltRoadMarkings = Java.loadClass('su.terrafirmagreg.core.common.block.asphalt.TFGAsphaltRoadMarkings')

function registerTFGAsphaltRoadItems(event) {

	event.create('tfg:tar_chunk')
	event.create('tfg:asphalt_binder')
	event.create('tfg:asphalt_rubble')

    event.create('tfg:asphalt_road_stencil_line')
		.tag('tfg:road_marking_stencils')
	event.create('tfg:asphalt_road_stencil_cross')
		.tag('tfg:road_marking_stencils')
	event.create('tfg:asphalt_road_stencil_arrow')
		.tag('tfg:road_marking_stencils')

	TFGAsphaltRoadMarkings.registerStencil('tfg:asphalt_road_stencil_line', 'line')
	TFGAsphaltRoadMarkings.registerStencil('tfg:asphalt_road_stencil_cross', 'cross')
	TFGAsphaltRoadMarkings.registerStencil('tfg:asphalt_road_stencil_arrow', 'arrow')
}