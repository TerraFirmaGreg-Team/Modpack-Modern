// priority: 0
"use strict";

function registerCreateFluidLogisticsItemTags(event) {;
    event.add('tfg:create_logistics_jar', 'fluidlogistics:rare_fluid_package')

    //The fluid transporter is like a pump but it can move multiple fluid types at a time (and can filter fluids)
    //Not usefull for this pack as GT pumps exhist
    event.add('c:hidden_from_recipe_viewers', 'fluidlogistics:fluid_transporter')

    //The smart faucet is like a spout but you can filter it for different liquids, not very usefull for this pack
    event.add('c:hidden_from_recipe_viewers', 'fluidlogistics:smart_faucet')
    


}