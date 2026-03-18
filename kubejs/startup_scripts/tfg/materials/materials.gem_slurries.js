// priority: 0
"use strict";
const registerTFGGemSlurryMaterials = (event) => {

    function darkenColor(color, factor) {
        factor = factor === undefined ? 0.3 : factor;
        const r = (color >> 16) & 0xFF;
        const g = (color >> 8)  & 0xFF;
        const b =  color        & 0xFF;
        const lerp = (c) => Math.max(0, Math.round(c * (1 - factor)));
        return (lerp(r) << 16) | (lerp(g) << 8) | lerp(b);
    }

    function lightenColor(color, factor) {
        factor = factor === undefined ? 0.3 : factor;
        const r = (color >> 16) & 0xFF;
        const g = (color >> 8)  & 0xFF;
        const b =  color        & 0xFF;
        const lerp = (c) => Math.min(255, Math.round(c + (255 - c) * factor));
        return (lerp(r) << 16) | (lerp(g) << 8) | lerp(b);
    }

    function createSlurries(event, name, color, secondaryColor) {
        // Dirty — plus sombre
        event.create(`tfg:dirty_${name}_slurry`)
            .liquid(new GTFluidBuilder().temperature(603))
            .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
            .color(darkenColor(color, 0.6))
            .secondaryColor(secondaryColor);

        // Filtered — couleur de base + légèrement éclaircie
        event.create(`tfg:filtered_${name}_slurry`)
            .liquid(new GTFluidBuilder().temperature(603))
            .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
            .color(darkenColor(color))
            .secondaryColor(lightenColor(secondaryColor));

        // Clean — encore plus claire
        event.create(`tfg:clean_${name}_slurry`)
            .liquid(new GTFluidBuilder().temperature(603))
            .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
            .color((color))
            .secondaryColor(lightenColor(secondaryColor, 0.6));
    }

    createSlurries(event, 'emerald',        0x77a677, 0x74e374);
    createSlurries(event, 'sapphire',       0x8083a8, 0x6e77e0);
    createSlurries(event, 'ruby',           0xe34f4f, 0x88080);
    createSlurries(event, 'diamond',        0x4fe3e1, 0x6e77e0);
    createSlurries(event, 'apatite',        0x00FFFF, 0xFFFFFF);
    createSlurries(event, 'spessartine',    0xfaa805, 0xf7daa1);
    createSlurries(event, 'yellow_garnet',  0xf6ff09, 0xe7a800);
    createSlurries(event, 'olivine',        0xa7e404, 0x166439);
    createSlurries(event, 'amethyst',       0xcfa0f3, 0x734fbc);
    createSlurries(event, 'grossular',      0xffb777, 0x856f48);
    createSlurries(event, 'armalcolite',    0x443333, 0x5e2c21);
    createSlurries(event, 'coal',           0x393e41, 0x101015);
}