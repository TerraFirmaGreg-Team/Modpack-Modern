function registerTFGMaterialHiddenPipesTags(event) {


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
    hideItemPipes('rose_gold');
    hideItemPipes('platinum');
    hideItemPipes('sterling_silver');

}

function registerTFGMaterialRemovePipesRecipes(event) {


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

    const removeItemPipes = (material) => {
        const sizes = ['small', 'normal', 'large', 'huge'];
        const types = ['item_pipes', 'restrictive_pipes'];
        sizes.forEach(size => {
            types.forEach(type => {
                event.add('c:hidden_from_recipe_viewers', `#forge:${size}_${type}/${material}`);
            });
        });
    };

    removeItemPipes('nickel');
    removeItemPipes('rose_gold');
    removeItemPipes('platinum');
    removeItemPipes('sterling_silver');
}