const registerTFGGemSlurries = (event) => {

    function createDirtySlurry(event, name, color, secondaryColor) {
        event.create(`tfg:dirty_${name}_slurry`)
            .liquid(new GTFluidBuilder().temperature(603))
            .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
            .color(color)
            .secondaryColor(secondaryColor);
    }

    createDirtySlurry(event, 'emerald', 0x77a677, 0x74e374);        // Green Lens
    createDirtySlurry(event, 'sapphire', 0x8083a8, 0x6e77e0);       // Blue Lens
    createDirtySlurry(event, 'ruby', 0xe34f4f, 0x88080);            // Red Lens
    createDirtySlurry(event, 'diamond', 0x4fe3e1, 0x6e77e0);        // Light Blue Lens
    createDirtySlurry(event, 'apatite', 0x00FFFF, 0xFFFFFF);        // Cyan Lens
    createDirtySlurry(event, 'spessartine', 0xfaa805, 0xf7daa1);    // Orange Lens
}