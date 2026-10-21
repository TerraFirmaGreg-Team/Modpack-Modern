// priority: 0
"use strict";

const registerAsticorCartsRecipes = (event) => {
    global.TFC_HARDWOOD_TYPES.forEach(type => {
        TFGHelpers.registerMaterialInfo(`tfcastikorcarts:wheel/${type}`, [GTMaterials.get('hardwood'), 2]);
        TFGHelpers.registerMaterialInfo(`tfcastikorcarts:supply_cart/${type}`, [GTMaterials.Brass, 1, GTMaterials.get('hardwood'), 8, GTMaterials.Wood, 12]);
        TFGHelpers.registerMaterialInfo(`tfcastikorcarts:plow/${type}`, [GTMaterials.Brass, 1, GTMaterials.get('hardwood'), 8]);
        TFGHelpers.registerMaterialInfo(`tfcastikorcarts:animal_cart/${type}`, [GTMaterials.Brass, 1, GTMaterials.get('hardwood'), 14]);

        event.shaped(`tfcastikorcarts:wheel/${type}`, [
            'AAA',
            'ABA',
            'AAA'
        ], {
            'A': `tfc:wood/lumber/${type}`,
            'B': '#forge:rings'
        }).id(`tfcastikorcarts:crafting/wheel/${type}`)
    });

    global.TFC_SOFTWOOD_TYPES.forEach(type => {
        TFGHelpers.registerMaterialInfo(`tfcastikorcarts:wheel/${type}`, [GTMaterials.Wood, 2]);
        TFGHelpers.registerMaterialInfo(`tfcastikorcarts:supply_cart/${type}`, [GTMaterials.Brass, 1, GTMaterials.Wood, 20]);
        TFGHelpers.registerMaterialInfo(`tfcastikorcarts:plow/${type}`, [GTMaterials.Brass, 1, GTMaterials.Wood, 8]);
        TFGHelpers.registerMaterialInfo(`tfcastikorcarts:animal_cart/${type}`, [GTMaterials.Brass, 1, GTMaterials.Wood, 14]);
        
        event.shaped(`tfcastikorcarts:wheel/${type}`, [
            'AAA',
            'ABA',
            'AAA'
        ], {
            'A': `tfc:wood/lumber/${type}`,
            'B': '#forge:rings'
        }).id(`tfcastikorcarts:crafting/wheel/${type}`)
    });
};