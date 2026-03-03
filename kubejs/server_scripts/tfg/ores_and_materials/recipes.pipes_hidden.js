function registerTFGMaterialHiddenPipesTags(event) {


    const hidePipes = (material) => {
        const sizes = ['tiny', 'small', 'normal', 'large', 'huge', 'quadruple', 'nonuple'];
        sizes.forEach(size => {
            event.add('c:hidden_from_recipe_viewers', `#forge:${size}_fluid_pipes/${material}`);
        });
    };

    hidePipes('treated_wood');
    hidePipes('bismuth_bronze');
    hidePipes('black_bronze');
    hidePipes('lead');
    hidePipes('chromium');
    hidePipes('blue_steel');
    hidePipes('red_steel');
    hidePipes('vanadium_steel');
    hidePipes('tungsten');
    hidePipes('ostrum');
    hidePipes('tungsten_carbide');
    hidePipes('tungsten_bismuth_oxide_composite');
    hidePipes('europium');

}

function registerTFGMaterialRemovePipesRecipes(event) {
    const removePipes = (material) => {
        const sizes = ['tiny', 'small', 'normal', 'large', 'huge', 'quadruple', 'nonuple'];
        sizes.forEach(size => {
            event.remove({ output: `#forge:${size}_fluid_pipes/${material}` });
        });
    };

    removePipes('treated_wood');
    removePipes('bismuth_bronze');
    removePipes('black_bronze');
    removePipes('lead');
    removePipes('chromium');
    removePipes('blue_steel');
    removePipes('red_steel');
    removePipes('vanadium_steel');
    removePipes('tungsten');
    removePipes('ostrum');
    removePipes('tungsten_carbide');
    removePipes('tungsten_bismuth_oxide_composite');
    removePipes('europium');
}