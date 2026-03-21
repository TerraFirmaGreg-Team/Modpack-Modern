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

    const GEM_MATERIALS = [
        [GTMaterials.Emerald,                           'emerald'      ],
        [GTMaterials.Sapphire,                          'sapphire'     ],
        [GTMaterials.Ruby,                              'ruby'         ],
        [GTMaterials.Diamond,                           'diamond'      ],
        [GTMaterials.Apatite,                           'apatite'      ],
        [GTMaterials.Spessartine,                       'spessartine'  ],
        [GTMaterials.GarnetYellow,                      'yellow_garnet'],
        [GTMaterials.Olivine,                           'olivine'      ],
        [GTMaterials.Amethyst,                          'amethyst'     ],
        [GTMaterials.Grossular,                         'grossular'    ],
        //[TFGHelpers.getMaterial('armalcolite'),         'armalcolite'  ],
        [GTMaterials.Coal,                              'coal'         ],
    ];

    GEM_MATERIALS.forEach(([material, name]) => {
        const color          = material.getMaterialARGB()          & 0xFFFFFF;
        const secondaryColor = material.getMaterialSecondaryARGB() & 0xFFFFFF;
        createSlurries(event, name, color, secondaryColor);
    });

    createSlurries(event, 'armalcolite', 0x443333, 0x5e2c21);
}