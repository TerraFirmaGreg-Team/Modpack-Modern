// priority: 0
"use strict";
const TFGAsphaltRoadMarkings = Java.loadClass('su.terrafirmagreg.core.common.block.asphalt.TFGAsphaltRoadMarkings')

function registerTFGAsphaltRoadItems(event) {

	event.create('tfg:tar_chunk')
	event.create('tfg:asphalt_binder')
	event.create('tfg:asphalt_rubble')

    let masks = [
        "arrow", "corner", "cross", "line", 
        "line_slash_l", "line_slash_r", 
        "num_0", "num_1", "num_2", "num_3", "num_4",
        "num_5", "num_6", "num_7", "num_8", "num_9",
        "number", "slash_l", "slash_r"
    ];
    masks.forEach(mask => {
        let itemId = `tfg:asphalt_road_stencil_${mask}`;
        event.create(itemId).tag('tfg:road_marking_stencils');
        TFGAsphaltRoadMarkings.registerStencil(itemId, mask);
    });
}