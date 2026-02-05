// priority: 0
"use strict";

const registerAsticorCartsRecipes = (event) => {
    event.remove({ id: 'astikorcarts:animal_cart' });
    event.remove({ id: 'astikorcarts:supply_cart' });
    event.remove({ id: 'astikorcarts:plow' });
    event.remove({ id: 'astikorcarts:wheel' });

    global.TFC_HARDWOOD_TYPES.forEach(type => {
        TFGHelpers.registerMaterialInfo(`tfcastikorcarts:wheel/${type}`, [GTMaterials.get('hardwood'), 2]);
        TFGHelpers.registerMaterialInfo(`tfcastikorcarts:supply_cart/${type}`, [GTMaterials.Brass, 1, GTMaterials.get('hardwood'), 8, GTMaterials.Wood, 12]);
        TFGHelpers.registerMaterialInfo(`tfcastikorcarts:plow/${type}`, [GTMaterials.Brass, 1, GTMaterials.get('hardwood'), 8]);
        TFGHelpers.registerMaterialInfo(`tfcastikorcarts:animal_cart/${type}`, [GTMaterials.Brass, 1, GTMaterials.get('hardwood'), 14]);
    });
    global.TFC_SOFTWOOD_TYPES.forEach(type => {
        TFGHelpers.registerMaterialInfo(`tfcastikorcarts:wheel/${type}`, [GTMaterials.Wood, 2]);
        TFGHelpers.registerMaterialInfo(`tfcastikorcarts:supply_cart/${type}`, [GTMaterials.Brass, 1, GTMaterials.Wood, 20]);
        TFGHelpers.registerMaterialInfo(`tfcastikorcarts:plow/${type}`, [GTMaterials.Brass, 1, GTMaterials.Wood, 8]);
        TFGHelpers.registerMaterialInfo(`tfcastikorcarts:animal_cart/${type}`, [GTMaterials.Brass, 1, GTMaterials.Wood, 14]);
    });

    event.replaceInput({ mod: 'tfcastikorcarts' }, '#forge:rods', '#mcw_tfc_aio:metal_rods');
};