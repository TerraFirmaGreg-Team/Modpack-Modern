// priority: 0
"use strict";

const registerTFGEtchingMaterials = (event) => {
    //#region Composition-only materials
    event.create('tfg:mercury_nitrate')
        .components('1x mercury', '1x nitrogen', '3x oxygen')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('tfg:mercury_chloride')
        .components('1x mercury', '1x chlorine')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('tfg:mercury_tri_p_toluenesulfonate')
        .components('1x mercury', '7x carbon', '7x hydrogen', '3x oxygen', '1x sulfur')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    //#endregion
    //#region Redstone Etching Fluid
    event.create('tfg:redstone_nitrate')
        .dust()
        .components('1x silicon', '5x pyrite', '1x ruby', '3x tfg:mercury_nitrate')
        .iconSet(GTMaterialIconSet.FINE)
        .color(0xEC0040)
        .secondaryColor(0x73060A)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('tfg:redstone_chloride')
        .liquid(new GTFluidBuilder().temperature(293))
        .components('1x silicon', '5x pyrite', '1x ruby', '3x tfg:mercury_chloride')
        .color(0xA6080D)
        .secondaryColor(0x73060A)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('tfg:redstone_tri_p_toluenesulfonate')
        .liquid(new GTFluidBuilder().temperature(293))
        .components('1x silicon', '5x pyrite', '1x ruby', '3x tfg:mercury_tri_p_toluenesulfonate')
        .color(0xA6080D)
        .secondaryColor(0x73060A)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('tfg:sulfur_dichloride')
        .liquid(new GTFluidBuilder().temperature(293))
        .components('1x sulfur', '2x chlorine')
        .color(0xDEE01A)
        .secondaryColor(0x5D5E0B)

    event.create('tfg:thionyl_chloride')
        .liquid(new GTFluidBuilder().temperature(293))
        .components('1x sulfur', '1x oxygen', '2x chlorine')
        .color(0xE4C117)
        .secondaryColor(0x63540B)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('tfg:p_toluenesulfonic_acid')
        .liquid(new GTFluidBuilder().temperature(293))
        .components('7x carbon', '8x hydrogen', '3x oxygen', '1x sulfur')
        .color(0x872B0B)
        .secondaryColor(0x501A06)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('tfg:sodium_nitrate')
        .dust()
        .components('1x sodium', '1x nitrogen', '3x oxygen')
        .iconSet(GTMaterialIconSet.FINE)
        .color(0xCBF7FF)
        .secondaryColor(0xB7CFFF)    
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
}

