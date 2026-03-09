//#region Hide Items

function registerTFGMaterialHiddenPipesTags(event) {

    // Hide Fluid Pipes from EMI

    const hideFluidPipes = (material) => {
        const sizes = ['tiny', 'small', 'normal', 'large', 'huge', 'quadruple', 'nonuple'];
        sizes.forEach(size => {
            event.add('c:hidden_from_recipe_viewers', `#forge:${size}_fluid_pipes/${material}`);
        });
    };

    hideFluidPipes('treated_wood');
    hideFluidPipes('bismuth_bronze');
    hideFluidPipes('black_bronze');
    hideFluidPipes('lead');
    hideFluidPipes('chromium');
    hideFluidPipes('blue_steel');
    hideFluidPipes('red_steel');
    hideFluidPipes('vanadium_steel');
    hideFluidPipes('tungsten');
    hideFluidPipes('ostrum');
    hideFluidPipes('tungsten_carbide');
    hideFluidPipes('tungsten_bismuth_oxide_composite');
    hideFluidPipes('europium');

    // Hide Item Pipes from EMI

    const hideItemPipes = (material) => {
        const sizes = ['small', 'normal', 'large', 'huge'];
        const types = ['item_pipes', 'restrictive_pipes'];
        sizes.forEach(size => {
            types.forEach(type => {
                event.add('c:hidden_from_recipe_viewers', `#forge:${size}_${type}/${material}`);
            });
        });
    };

    hideItemPipes('nickel');
    hideItemPipes('platinum');
    hideItemPipes('bismuth');
    hideItemPipes('rose_gold');
    hideItemPipes('sterling_silver');
    hideItemPipes('cobalt_brass');
    hideItemPipes('cupronickel');
    hideItemPipes('magnalium');
    hideItemPipes('osmium');
    hideItemPipes('osmiridium');
    hideItemPipes('americium');

    const materialPlastic = ['polybenzimidazole', 'polytetrafluoroethylene', 'polyethylene'];
    const toolsPlastic = ['mallet', 'plunger'];
        materialPlastic.forEach(material => {
            toolsPlastic.forEach(tool => {
                event.removeAllTagsFrom(`gtceu:${material}_${tool}`);
                event.add('c:hidden_from_recipe_viewers', `gtceu:${material}_${tool}` );
            });
        });

    // Add Gregtech Tools Tag

    const materialTagTools = ['neutronium'];
    const toolsTagTools = ['pickaxe', 'wrench', 'screwdriver', 'wire_cutter', 'hard_hammer'];

    materialTagTools.forEach(material => {
        toolsTagTools.forEach(tool => {
            event.removeAllTagsFrom(`gtceu:${material}_${tool}`);
            event.add('c:hidden_from_recipe_viewers', `gtceu:${material}_${tool}` );
        });
    });

    //#endregion
    
}

    //#region Remove Recipes

function registerTFGMaterialRemovePipesRecipes(event) {

    // Remove Fluid Pipes recipes

    const removeFluidPipes = (material) => {
        const sizes = ['tiny', 'small', 'normal', 'large', 'huge', 'quadruple', 'nonuple'];
        sizes.forEach(size => {
            event.remove({ output: `#forge:${size}_fluid_pipes/${material}` });
        });
    };

    removeFluidPipes('treated_wood');
    removeFluidPipes('bismuth_bronze');
    removeFluidPipes('black_bronze');
    removeFluidPipes('lead');
    removeFluidPipes('chromium');
    removeFluidPipes('blue_steel');
    removeFluidPipes('red_steel');
    removeFluidPipes('vanadium_steel');
    removeFluidPipes('tungsten');
    removeFluidPipes('ostrum');
    removeFluidPipes('tungsten_carbide');
    removeFluidPipes('tungsten_bismuth_oxide_composite');
    removeFluidPipes('europium');

    // Remove Item Pipes recipes

    const removeItemPipes = (material) => {
        const sizes = ['small', 'normal', 'large', 'huge'];
        const types = ['item_pipes', 'restrictive_pipes'];
        sizes.forEach(size => {
            types.forEach(type => {
                event.remove({ output: `#forge:${size}_${type}/${material}` });
            });
        });
    };

    removeItemPipes('nickel');
    removeItemPipes('platinum');
    removeItemPipes('bismuth');
    removeItemPipes('rose_gold');
    removeItemPipes('sterling_silver');
    removeItemPipes('cobalt_brass');
    removeItemPipes('cupronickel');
    removeItemPipes('magnalium');
    removeItemPipes('osmium');
    removeItemPipes('osmiridium');
    removeItemPipes('americium');

    // Remove Plastic Tools recipes

    const materialRemovePlastic = ['polybenzimidazole', 'polytetrafluoroethylene', 'polyethylene'];
    const toolsRemovePlastic = ['mallet', 'plunger'];

    materialRemovePlastic.forEach(material => {
        toolsRemovePlastic.forEach(tool => {
            event.remove({ output: `gtceu:${material}_${tool}` });
        });
    });

    // Remove Gregtech Tools recipes

    const materialRemoveTools = ['neutronium'];
    const toolsRemoveTools = ['pickaxe', 'wrench', 'screwdriver', 'wire_cutter', 'hard_hammer'];

    materialRemoveTools.forEach(material => {
        toolsRemoveTools.forEach(tool => {
            event.remove({ output: `gtceu:${material}_${tool}` });
        });
    });

    //#endregion
}