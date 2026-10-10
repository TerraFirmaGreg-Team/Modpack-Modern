'use strict';

/** @param {Internal.TFCDataEventJS} event */
function registerTFGFLPlanters(event) {
    const $FarmlandBlockEntity = Java.loadClass('net.dries007.tfc.common.blockentities.FarmlandBlockEntity');
    const $PalmTree = Java.loadClass('su.terrafirmagreg.core.common.data.PalmTrees');
    const PALMS = $PalmTree.values().map((palm) => palm.getSerializedName());

    /*
    Firmalife tier values are:
    - 0: any
    - 5: wood
    - 10: copper
    - 15: iron
    - 20: stainless steel
	*/

    // #region Crops
    /**
     * @typedef {Object} firmalifePlantablesObject. https://notenoughmail.github.io/kubejs_tfc/1.20.1/data/#firmalife-planter
     * @property {Internal.Item} input Seed/sapling input.
     * @property {PlanterType} planterType Planter type string. [quad, large, hanging, trellis, bonsai, or hydroponic] Defaults to `quad`.
     * @property {number} tier Greenhouse tier. [5: wood, 10: copper, 15: iron, 20: stainless steel] Defaults to 0 (any).
     * @property {number} stages Visual plant growth stages. May be `null` for trellis and bonsai planter types. Defaults to 3 if `undefined`.
     * @property {number} extraSeedChance Float chance to recieve an additional seed drop. [0-1] Defaults to 0.2
     * @property {Internal.Item} outputSeed Output seed item. May be `null` to not drop a seed item. Defaults to `input` if `undefined`.
     * @property {Internal.ItemStack} productItem Output item stack.
     * @property {FarmlandBlockEntity.NutrientType} nutrient Preferred nutrient type. [NITROGEN, PHOSPHOROUS, POTASSIUM] Defaults to NITROGEN.
     * @property {ResourceLocation[]} textures Array of texture paths.
     * @property {ResourceLocation[]} hangingFruitTexture Texture path for hanging plant fruit texture. Defaults to `null`.
     */
    /**
     * @type {firmalifePlantablesObject[]}
     */
    const firmalifePlantables = [
        // ===================== Earth ========================
        {
            input: 'tfg:sunflower_seeds',
            planterType: 'large',
            productItem: 'tfg:sunflower_product',
            textures: [
                'tfg:block/crop/sunflower_greenhouse_0',
                'tfg:block/crop/sunflower_greenhouse_1',
                'tfg:block/crop/sunflower_greenhouse_2',
                'tfg:block/crop/sunflower_greenhouse_3',
            ]
        },
        {
            input: 'tfg:rapeseed_seeds',
            planterType: 'large',
            productItem: 'tfg:rapeseed_product',
            nutrient: $FarmlandBlockEntity.NutrientType.PHOSPHOROUS,
            textures: [
                'tfg:block/crop/rapeseed_greenhouse_0',
                'tfg:block/crop/rapeseed_greenhouse_1',
                'tfg:block/crop/rapeseed_greenhouse_2',
                'tfg:block/crop/rapeseed_greenhouse_3',
            ]
        },
        {
            input: 'tfg:flax_seeds',
            planterType: 'large',
            productItem: 'tfg:flax_product',
            textures: [
                'tfg:block/crop/flax_age_0',
                'tfg:block/crop/flax_age_1',
                'tfg:block/crop/flax_age_5_top',
                'tfg:block/crop/flax_age_6_top',
            ]
        },
        {
            input: 'tfg:cotton_seeds',
            planterType: 'large',
            productItem: 'tfg:cotton_product',
            textures: [
                'tfg:block/crop/cotton_0',
                'tfg:block/crop/cotton_1',
                'tfg:block/crop/cotton_2_top',
                'tfg:block/crop/cotton_5_top',
            ]
        },
        {
            input: 'tfg:cucumber_seeds',
            planterType: 'large',
            productItem: 'tfg:cucumber_product',
            textures: [
                'tfg:block/crop/cucumber_bottom_1',
                'tfg:block/crop/cucumber_bottom_2',
                'tfg:block/crop/cucumber_top_4',
                'tfg:block/crop/cucumber_top_5',
            ]
        },
        {
            input: 'tfg:radish_seeds',
            productItem: 'tfg:radish_product',
            nutrient: $FarmlandBlockEntity.NutrientType.POTASSIUM,
            textures: [
                'tfg:block/crop/radish_2',
                'tfg:block/crop/radish_3',
                'tfg:block/crop/radish_4',
                'tfg:block/crop/radish_5',
            ]
        },
        {
            input: 'tfg:lentil_seeds',
            productItem: 'tfg:lentil_product',
            nutrient: $FarmlandBlockEntity.NutrientType.PHOSPHOROUS,
            textures: [
                'tfg:block/crop/lentil_1',
                'tfg:block/crop/lentil_3',
                'tfg:block/crop/lentil_4',
                'tfg:block/crop/lentil_5',
            ]
        },
        // ===================== Beneath ========================
        {
            input: 'tfg:beans_seeds',
            productItem: 'tfg:beans_product',
            nutrient: $FarmlandBlockEntity.NutrientType.POTASSIUM,
            textures: [
                'tfg:block/crop/beans_2',
                'tfg:block/crop/beans_3',
                'tfg:block/crop/beans_4',
                'tfg:block/crop/beans_5',
            ]
        },
        {
            input: 'tfg:cassava_seeds',
            productItem: 'tfg:cassava_product',
            textures: [
                'tfg:block/crop/cassava_1',
                'tfg:block/crop/cassava_2',
                'tfg:block/crop/cassava_4',
                'tfg:block/crop/cassava_5',
            ]
        },
        {
            input: 'tfg:peanut_seeds',
            productItem: 'tfg:peanut_product',
            nutrient: $FarmlandBlockEntity.NutrientType.POTASSIUM,
            textures: [
                'tfg:block/crop/peanut_0',
                'tfg:block/crop/peanut_2',
                'tfg:block/crop/peanut_3',
                'tfg:block/crop/peanut_5',
            ]
        },
        {
            input: 'tfg:ghost_pepper_seeds',
            productItem: 'beneath:ghost_pepper',
            textures: [
                'tfg:block/crop/ghost_pepper_1',
                'tfg:block/crop/ghost_pepper_3',
                'tfg:block/crop/ghost_pepper_4',
                'tfg:block/crop/ghost_pepper_5',
            ]
        },
        {
            input: 'tfg:fruit_trees/lavacado_sapling',
            planterType: 'bonsai',
            tier: 15,
            stages: null,
            productItem: 'tfg:food/lavacado',
            textures: [
                'tfg:block/fruit_tree/lavacado_fruiting_leaves',
                'tfg:block/fruit_tree/lavacado_dry_leaves',
                'tfg:block/fruit_tree/lavacado_flowering_leaves',
                'tfg:block/fruit_tree/lavacado_branch',
                'tfg:block/fruit_tree/lavacado_leaves',
            ]
        },
        {
            input: 'tfg:fruit_trees/magmango_sapling',
            planterType: 'bonsai',
            tier: 15,
            stages: null,
            productItem: 'tfg:food/magmango',
            textures: [
                'tfg:block/fruit_tree/magmango_fruiting_leaves',
                'tfg:block/fruit_tree/magmango_dry_leaves',
                'tfg:block/fruit_tree/magmango_flowering_leaves',
                'tfg:block/fruit_tree/magmango_branch',
                'tfg:block/fruit_tree/magmango_leaves',
            ]
        },
        // ===================== Mars ========================
        {
            input: 'betterend:amber_root_seeds',
            planterType: 'large',
            tier: 20,
            productItem: 'betterend:amber_root_product',
            nutrient: $FarmlandBlockEntity.NutrientType.PHOSPHOROUS,
            textures: [
                'betterend:block/amber_root_0',
                'betterend:block/amber_root_1',
                'betterend:block/amber_root_2',
                'betterend:block/amber_root_3',
            ]
        },
        {
            input: 'betterend:blossom_berry_seeds',
            planterType: 'large',
            tier: 20,
            productItem: 'betterend:blossom_berry_product',
            nutrient: $FarmlandBlockEntity.NutrientType.POTASSIUM,
            textures: [
                'betterend:block/blossom_berry_seed_0',
                'betterend:block/blossom_berry_seed_1',
                'betterend:block/blossom_berry_seed_2',
                'betterend:block/blossom_berry_seed_3',
            ]
        },
        {
            input: 'betterend:bolux_mushroom_seeds',
            tier: 20,
            productItem: 'betterend:bolux_mushroom_product',
            nutrient: $FarmlandBlockEntity.NutrientType.PHOSPHOROUS,
            textures: [
                'betterend:block/bolux_mushroom_greenhouse_0',
                'betterend:block/bolux_mushroom_greenhouse_1',
                'betterend:block/bolux_mushroom_greenhouse_2',
                'betterend:block/bolux_mushroom_greenhouse_3',
            ]
        },
        {
            input: 'betterend:chorus_mushroom_seeds',
            tier: 20,
            productItem: 'betterend:chorus_mushroom_product',
            nutrient: $FarmlandBlockEntity.NutrientType.PHOSPHOROUS,
            textures: [
                'betterend:block/chorus_mushroom_0',
                'betterend:block/chorus_mushroom_1',
                'betterend:block/chorus_mushroom_2',
                'betterend:block/chorus_mushroom_3',
            ]
        },
        {
            input: 'betterend:cave_pumpkin_plant_seeds',
            planterType: 'hanging',
            tier: 20,
            productItem: 'betterend:cave_pumpkin',
            nutrient: $FarmlandBlockEntity.NutrientType.PHOSPHOROUS,
            textures: [
                'betterend:block/cave_pumpkin_greenhouse_0',
                'betterend:block/cave_pumpkin_greenhouse_1',
                'betterend:block/cave_pumpkin_greenhouse_2',
                'betterend:block/cave_pumpkin_greenhouse_3',
            ],
            hangingFruitTexture: 'betterend:block/cave_pumpkin_lantern_side'
        },
        {
            input: 'betterend:shadow_berry_seeds',
            tier: 20,
            productItem: 'betterend:shadow_berry_product',
            nutrient: $FarmlandBlockEntity.NutrientType.POTASSIUM,
            textures: [
                'betterend:block/shadow_berry_greenhouse_0',
                'betterend:block/shadow_berry_greenhouse_1',
                'betterend:block/shadow_berry_greenhouse_2',
                'betterend:block/shadow_berry_greenhouse_3',
            ]
        },
    ];

	// #endregion
    // #region Palm Trees

    PALMS.forEach((palm) => {
        if (palm !== 'coconut') {
            firmalifePlantables.push({
                input: `tfg:palm_tree/${palm}_sapling`,
                planterType: 'hanging',
                tier: 15,
                stages: 4,
                extraSeedChance: 0.5,
                outputSeed: `3x tfg:food/${palm}`,
                productItem: `6x tfg:food/${palm}`,
                nutrient: $FarmlandBlockEntity.NutrientType.POTASSIUM,
                textures: [
                    'tfg:block/palm_tree/palm_fruit_planter_0',
                    'tfg:block/palm_tree/palm_fruit_planter_1',
                    'tfg:block/palm_tree/palm_fruit_planter_2',
                    'tfg:block/palm_tree/palm_fruit_planter_3',
                ],
                hangingFruitTexture: `tfg:block/palm_tree/palm_fruit_planter_${palm}`,
            });
        } else {
            firmalifePlantables.push({
                input: 'tfg:palm_tree/coconut_sapling',
                planterType: 'hanging',
                tier: 15,
                stages: 4,
                extraSeedChance: 1,
                outputSeed: '3x tfg:palm_tree/coconut_fruit_green',
                productItem: '3x tfg:palm_tree/coconut_fruit_brown',
                nutrient: $FarmlandBlockEntity.NutrientType.POTASSIUM,
                textures: [
                    'tfg:block/palm_tree/palm_fruit_planter_0',
                    'tfg:block/palm_tree/palm_fruit_planter_1',
                    'tfg:block/palm_tree/palm_fruit_planter_2',
                    'tfg:block/palm_tree/palm_fruit_planter_3',
                ],
                hangingFruitTexture: 'tfg:block/palm_tree/palm_fruit_planter_coconut',
            });
        }
    });

	// #endregion
	// #region Data

    firmalifePlantables.forEach((crop) => {
        event.firmalifePlantable(
            crop.input,
            crop.planterType != null ? crop.planterType : 'quad',
            crop.tier != null ? crop.tier : 0,
            crop.stages !== undefined ? crop.stages : 3,
            crop.extraSeedChance != null ? crop.extraSeedChance : 0.5,
            crop.outputSeed !== undefined ? crop.outputSeed : crop.input,
            crop.productItem,
            crop.nutrient != null ? crop.nutrient : $FarmlandBlockEntity.NutrientType.NITROGEN,
            crop.textures,
            crop.hangingFruitTexture != null && crop.planterType === 'hanging' ? crop.hangingFruitTexture : null
        );
    });

    //#endregion
}
