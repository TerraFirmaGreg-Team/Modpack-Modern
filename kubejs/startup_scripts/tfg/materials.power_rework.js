// priority: 0
"use strict";

const registerTFGPowerReworkMaterials = (event) => {

// Syngas
event.create('tfg:syngas')
    .gas(new GTFluidBuilder().state(GTFluidState.GAS).customStill().temperature(650))
    .components('11x carbon', '20x hydrogen', '12x oxygen')
    .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    .color(0x7da6c2)
    .secondaryColor(0xcfe3ee)

// Raw Aromatic Mix
event.create('tfg:raw_aromatic_mix')
    .gas(new GTFluidBuilder().state(GTFluidState.GAS).temperature(420))
    .components('137x carbon', '154x hydrogen')
    .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    .color(0x8a4b3d)
    .secondaryColor(0xd8b6ac)

// Aromatic Feedstock
event.create('tfg:aromatic_feedstock')
    .gas(new GTFluidBuilder().state(GTFluidState.GAS).temperature(450))
    .components('67x carbon', '74x hydrogen')
    .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    .color(0x915c2f)
    .secondaryColor(0xe2c49b)

// Reformed Aromatic Feedstock
event.create('tfg:reformed_aromatic_feedstock')
    .gas(new GTFluidBuilder().state(GTFluidState.GAS).temperature(500))
    .components('133x carbon', '146x hydrogen')
    .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    .color(0x4e6b83)
    .secondaryColor(0xbacdde)

// Reformate Gas
event.create('tfg:reformate_gas')
    .gas(new GTFluidBuilder().state(GTFluidState.GAS).customStill().temperature(540))
    .components('13x carbon', '63x hydrogen')
    .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    .color(0x6c7f4e)
    .secondaryColor(0xc7d8b1)

// Cracker Off-Gas
event.create('tfg:cracker_off_gas')
    .gas(new GTFluidBuilder().state(GTFluidState.GAS).temperature(480))
    .components('31x carbon', '128x hydrogen', '2x oxygen')
    .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    .color(0xa36f2a)
    .secondaryColor(0xecd8ae)

}
