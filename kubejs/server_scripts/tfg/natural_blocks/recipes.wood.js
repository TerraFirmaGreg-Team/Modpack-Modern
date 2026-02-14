// priority: 0
"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} event 
 */
function registerTFGWoodenRecipes(event) {

    // #region Wood Builder

        /**
         * Generates most basic wooden recipes. 
         * 
         * All parameters are optional. Name is used for the ID.
         *
         * @param {*} event 
         * @param {string} name -Name of the wood.
         * @param {string} lumber -ID for the lumber.
         * @param {string} logs -Tag or ID for all the logs.
         * @param {string} log -ID for the regular log.
         * @param {string} stripped_log -ID for the stripped log.
         * @param {string} plank -ID for planks.
         * @param {string} stair -ID for stairs.
         * @param {string} slab -ID for slabs.
         * @param {string} door -ID for the door.
         * @param {string} trapdoor -ID for the trapdoor.
         * @param {string} fence -ID for the fence.
         * @param {string} fence_gate -ID for the fence gate.
         * @param {string} support -ID for the support.
         * @param {string} pressure_plate -ID for the pressure plate.
         * @param {string} button -ID for the button.
         * @param {string} log_wood -ID for the log wood.
         * @param {string} stripped_wood -ID for the stripped wood.
         */
        function woodBuilder(event, name, lumber, logs, log, stripped_log, plank, stair, slab, door, trapdoor, fence, fence_gate, support, pressure_plate, button, log_wood, stripped_wood) {

            // Stripped log from log
            if (log && stripped_log && name) {
                event.recipes.gtceu.lathe(`tfg:${name}_stripped_log_from_log`)
                    .itemInputs(log)
                    .itemOutputs(stripped_log)
                    .duration(50)
                    .EUt(GTValues.VA[GTValues.ULV])

                event.recipes.vintageimprovements.polishing(stripped_log, log)
                    .speedLimits(0)
                    .processingTime(50 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER)
                    .id(`tfg:vi/lathe/${name}_stripped_log_from_log`)
            };

            // Stripped wood from log wood
            if (log_wood && stripped_wood && name) {
                event.recipes.gtceu.lathe(`tfg:${name}_stripped_wood_from_log_wood`)
                    .itemInputs(log_wood)
                    .itemOutputs(stripped_wood)
                    .duration(50)
                    .EUt(GTValues.VA[GTValues.ULV])

                event.recipes.vintageimprovements.polishing(stripped_wood, log_wood)
                    .speedLimits(0)
                    .processingTime(50 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER)
                    .id(`tfg:vi/lathe/${name}_stripped_wood_from_log_wood`)
            };

            // Lumber from log
            if (logs && lumber && name) {
                event.shapeless(`8x ${lumber}`,
                    [logs, '#forge:tools/saws']
                )
                .id(`tfg:shapeless/${name}_lumber_from_log`)

                generateCutterRecipe(event, logs, `16x ${lumber}`, 50, 7, `${name}_lumber_from_log`)
            };

            if (plank && lumber && name) {
                // Lumber from plank
                event.shapeless(`4x ${lumber}`,
                    [plank, '#forge:tools/saws']
                )
                .id(`tfg:shapeless/${name}_lumber_from_plank`)

                generateCutterRecipe(event, plank, `4x ${lumber}`, 50, 7, `${name}_lumber_from_plank`)

                // Plank from lumber
                event.shaped(plank, [
                    'AA',
                    'AA'
                ], {
                    A: lumber
                })
                .id(`tfg:shaped/${name}_plank_from_lumber`)
            };

            // Lumber from slab
            if (slab && lumber && name) {
                event.shapeless(`2x ${lumber}`,
                    [slab, '#forge:tools/saws']
                )
                .id(`tfg:shapeless/${name}_lumber_from_slab`)

                generateCutterRecipe(event, slab, `2x ${lumber}`, 50, 7, `${name}_lumber_from_slab`)
            };

            // Slab from lumber
            if (slab && lumber && name) {
                event.shaped(slab, [
                    'AA'
                ], {
                    A: lumber
                })
                .id(`tfg:shaped/${name}_slab_from_lumber`)
            };

            // Lumber from slab
            if (stair && lumber && name) {
                event.shapeless(`3x ${lumber}`,
                    [stair, '#forge:tools/saws']
                )
                .id(`tfg:shapeless/${name}_lumber_from_stair`)

                generateCutterRecipe(event, stair, `3x ${lumber}`, 50, 7, `${name}_lumber_from_stair`)
            };

            // Stair from plank
            if (stair && lumber && name) {
                event.shaped(`8x ${stair}`, [
                    'A  ',
                    'AA ',
                    'AAA'
                ], {
                    A: plank
                })
                .id(`tfg:shaped/${name}_stair_from_plank`)
            };

            // Door from lumber
            if (door && lumber && name) {
                event.shaped(`2x ${door}`, [
                    'AA',
                    'AA',
                    'AA'
                ], {
                    A: lumber
                })
                .id(`tfg:shaped/${name}_door_from_lumber`)
            };

            // Trapdoor from lumber
            if (trapdoor && lumber && name) {
                event.shaped(`3x ${trapdoor}`, [
                    'AAA',
                    'AAA'
                ], {
                    A: lumber
                })
                .id(`tfg:shaped/${name}_trapdoor_from_lumber`)
            };

            // Fence from lumber & plank
            if (fence && lumber && plank && name) {
                event.shaped(`8x ${fence}`, [
                    'ABA',
                    'ABA'
                ], {
                    A: lumber,
                    B: plank
                })
                .id(`tfg:shaped/${name}_fence_from_lumber_and_plank`)
            };

            // Fence gate from lumber and plank
            if (fence_gate && lumber && plank && name) {
                event.shaped(`2x ${fence_gate}`, [
                    'ABA',
                    'ABA'
                ], {
                    A: plank,
                    B: lumber
                })
                .id(`tfg:shaped/${name}_fence_gate_from_lumber_and_plank`)
            };

            // Support from logs
            if (support && logs && name) {
                event.shapeless(`8x ${support}`,
                    [`2x ${logs}`, '#forge:tools/saws']
                )
                .id(`tfg:shapeless/${name}_support_from_logs`)

                event.recipes.gtceu.assembler(`tfg:${name}_support_from_logs`)
                    .itemInputs(`2x ${logs}`)
                    .itemOutputs(`8x ${support}`)
                    .duration(50)
                    .circuit(4)
                    .EUt(GTValues.VA[GTValues.ULV])
            };

            // Pressure plate
            if (pressure_plate && slab && name) {
                event.shaped(pressure_plate, [
                    ' B ',
                    'ACA',
                    ' D '
                ], {
                    A: slab,
                    B: '#forge:tools/hammers',
                    C: '#forge:springs',
                    D: '#forge:tools/screwdrivers'
                })
                .id(`tfg:shaped/${name}_pressure_plate`)

                event.recipes.gtceu.assembler(`tfg:${name}_pressure_plate`)
                    .itemInputs(`2x ${slab}`, '#forge:small_springs')
                    .itemOutputs(`2x ${pressure_plate}`)
                    .duration(50)
                    .circuit(3)
                    .EUt(GTValues.VA[GTValues.ULV])
            };

            // Button from pressure plate
            if (button && pressure_plate && name) {
                event.recipes.gtceu.cutter(`tfg:${name}_button_from_pressure_plate`)
                    .itemInputs(pressure_plate)
                    .itemOutputs(`6x ${button}`)
                    .duration(50)
                    .EUt(GTValues.VA[GTValues.ULV])

                event.shapeless(`3x ${button}`, [pressure_plate, '#forge:tools/saws'])
                    .id(`tfg:shapeless/saw_${name}_pressure_plate_to_button`)
            };
        };

    //#endregion

    // #region Wood Recycling

        /**
         * @property {Array} TFGWoodRecyclingIndex - TFG Wood recycling material index.
         */
        const TFGWoodRecyclingIndex = [
            ['{mod}:wood/chest_minecart/{type}', ['{wood}', 4, GTMaterials.WroughtIron, 5]],
            ['{mod}:wood/planks/{type}', ['{wood}', 2]],
            ['{mod}:wood/planks/{type}_door', ['{wood}', 3/2]],
            ['{mod}:wood/planks/{type}_trapdoor', ['{wood}', 1]],
            ['{mod}:wood/planks/{type}_fence', ['{wood}', 4]],
            ['{mod}:wood/planks/{type}_log_fence', ['{wood}', 8]],
            ['{mod}:wood/planks/{type}_fence_gate', ['{wood}', 8]],
            ['{mod}:wood/planks/{type}_slab', ['{wood}', 1]],
            ['{mod}:wood/planks/{type}_stairs', ['{wood}', 3/2]],
            ['{mod}:wood/planks/{type}_pressure_plate', ['{wood}', 2]],
            ['{mod}:wood/planks/{type}_button', ['{wood}', 1/4]],
            ['{mod}:wood/chest/{type}', ['{wood}', 4]],
            ['{mod}:wood/trapped_chest/{type}', ['{wood}', 4, GTMaterials.WroughtIron, 4/9, GTMaterials.Wood, 1]]
        ];

        /**
         * @param {Array} materials
         * @param {string} woodMaterial
         * @return {Array}
         */
        function resolveArgs(materials, woodMaterial) {
            return materials
            .map(materials => materials === '{wood}' ? woodMaterial : materials);
        };

        function registerTFGWoodRecycling(mod, woodname, woodMaterial) {
            woodname.forEach(name => {
                TFGWoodRecyclingIndex.forEach(([template, args]) => {
                    const item = template
                        .replace('{mod}', mod)
                        .replace('{type}', name);
                    const resolvedArgs = resolveArgs(args, woodMaterial);
                    TFGHelpers.registerMaterialInfo(item, resolvedArgs); 
                });
            });
        };

    // #endregion

    // #region Ad Astra

        global.AD_ASTRA_WOOD.forEach(wood => {
            // TODO: standardise ad astra constants 
            woodBuilder(
                event, 
                wood.name, 
                wood.lumber, 
                wood.logs, 
                wood.log, 
                wood.stripped_log, 
                wood.plank, 
                wood.stair, 
                wood.slab, 
                wood.door, 
                wood.trapdoor, 
                wood.fence, 
                wood.fence_gate, 
                wood.support, 
                wood.pressure_plate, 
                wood.button, 
                wood.log_wood, 
                wood.stripped_wood
            );
        });

        event.shaped('8x ad_astra:aeronos_ladder', [
            'A A',
            'ABA',
            'A A'
        ], {
            A: 'tfg:wood/lumber/aeronos',
            B: ChemicalHelper.get(TagPrefix.rod, GTMaterials.Wood, 1)
        })
        .id('tfg:shaped/aeronos_ladder');

        event.shaped('8x ad_astra:strophar_ladder', [
            'A A',
            'ABA',
            'A A'
        ], {
            A: 'tfg:wood/lumber/strophar',
            B: ChemicalHelper.get(TagPrefix.rod, GTMaterials.Wood, 1)
        })
        .id('tfg:shaped/strophar_ladder');

    // #endregion

    // #region Beneath

        global.BENEATH_WOOD_TYPES.forEach(wood => {

            // Removed recipe changes
            event.remove({ id: `beneath:crafting/wood/${wood}_planks` });
            event.remove({ id: `beneath:crafting/wood/${wood}_slab` });
            event.remove({ id: `beneath:crafting/wood/${wood}_button` });
            event.remove({ id: `beneath:crafting/wood/${wood}_pressure_plate` });
            event.remove({ id: `beneath:crafting/wood/${wood}_lumber_log` });
            event.remove({ id: `beneath:crafting/wood/${wood}_lumber_planks` });
            event.remove({ id: `beneath:crafting/wood/${wood}_slab_undo` });

            woodBuilder(
                event, 
                `${wood}`, 
                `beneath:wood/lumber/${wood}`, 
                `#tfc:${wood}_logs`, 
                `beneath:wood/log/${wood}`,
                `beneath:wood/stripped_log/${wood}`, 
                `beneath:wood/planks/${wood}`, 
                null,
                `beneath:wood/planks/${wood}_slab`, 
                `beneath:wood/planks/${wood}_door`, 
                `beneath:wood/planks/${wood}_trapdoor`, 
                null, 
                null, 
                null, 
                `beneath:wood/planks/${wood}_pressure_plate`,
                `beneath:wood/planks/${wood}_button`, 
                `beneath:wood/wood/${wood}`, 
                `beneath:wood/stripped_wood/${wood}`, 
                `beneath:wood/wood/${wood}`, 
                `beneath:wood/stripped_wood/${wood}`
            );
        });

        registerTFGWoodRecycling('beneath', ['crimson'], GTMaterials.get('hardwood'));
        registerTFGWoodRecycling('beneath', ['warped'], GTMaterials.Wood);

    // #endregion

    // #region AFC

        global.AFC_WOOD_TYPES.forEach(wood => {

            // Removed unused assets
            event.remove({ id: `afc:crafting/wood/${wood}_axle` });
            event.remove({ id: `afc:crafting/wood/${wood}_bladed_axle` });
            event.remove({ id: `afc:crafting/wood/${wood}_encased_axle` });
            event.remove({ id: `afc:crafting/wood/${wood}_clutch` });
            event.remove({ id: `afc:crafting/wood/${wood}_gear_box` });
            event.remove({ id: `afc:crafting/wood/${wood}_water_wheel` });

            // Removed recipe changes
            event.remove({ id: `afc:crafting/wood/${wood}_lumber_log` });
            event.remove({ id: `afc:crafting/wood/${wood}_stairs` });
            event.remove({ id: `afc:crafting/wood/${wood}_stairs_undo` });
            event.remove({ id: `afc:crafting/wood/${wood}_slab` });
            event.remove({ id: `afc:crafting/wood/${wood}_button` });
            event.remove({ id: `afc:crafting/wood/${wood}_stomping_barrel` });
            event.remove({ id: `afc:crafting/wood/${wood}_lumber_planks` });
            event.remove({ id: `afc:crafting/wood/${wood}_slab_undo` });

            woodBuilder(
                event, 
                `${wood}`, 
                `afc:wood/lumber/${wood}`, 
                `#afc:${wood}_logs`, 
                `afc:wood/log/${wood}`, 
                `afc:wood/stripped_log/${wood}`,
                `afc:wood/planks/${wood}`, 
                `afc:wood/planks/${wood}_stairs`,
                `afc:wood/planks/${wood}_slab`, 
                null, 
                null, 
                null, 
                null, 
                null, 
                `afc:wood/planks/${wood}_pressure_plate`,
                `afc:wood/planks/${wood}_button`, 
                `afc:wood/wood/${wood}`, 
                `afc:wood/stripped_wood/${wood}`
            );

            registerTFGWoodRecycling('afc', global.AFC_HARDWOOD_TYPES, GTMaterials.get('hardwood'));
            registerTFGWoodRecycling('afc', global.AFC_SOFTWOOD_TYPES, GTMaterials.Wood);

            // Stomping Barrel
            event.shaped(`afc:wood/stomping_barrel/${wood}`, [
                'ABA',
                'AAA',
                'BBB'
            ], {
                A: `afc:wood/lumber/${wood}`,
                B: 'tfc:glue'

            })
            .id(`afc:crafting/wood/${wood}_stomping_barrel`);
        });

        // Outliers
        const AFC_MORE_STRIPPING = [
            { name: 'black_oak', stripped: 'oak', stripped_mod: 'tfc' },
            { name: 'rainbow_eucalyptus', stripped: 'eucalyptus', stripped_mod: 'afc' },
            { name: 'gum_arabic', stripped: 'acacia', stripped_mod: 'tfc' },
            { name: 'redcedar', stripped: 'cypress', stripped_mod: 'afc' },
            { name: 'rubber_fig', stripped: 'fig', stripped_mod: 'afc' },
            { name: 'poplar', stripped: 'aspen', stripped_mod: 'tfc' }
        ];

        AFC_MORE_STRIPPING.forEach(x => {
            event.recipes.gtceu
                .lathe(`tfg:${x.name}_stripped_log_from_log`)
                .itemInputs(`afc:wood/log/${x.name}`)
                .itemOutputs(`${x.stripped_mod}:wood/stripped_log/${x.stripped}`)
                .duration(50)
                .EUt(GTValues.VA[GTValues.ULV]);

            event.recipes.vintageimprovements
                .polishing(`${x.stripped_mod}:wood/stripped_log/${x.stripped}`, `afc:wood/log/${x.name}`)
                .speedLimits(0)
                .processingTime(50 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER)
                .id(`tfg:vi/lathe/${x.name}_stripped_log_from_log`);

            event.recipes.gtceu
                .lathe(`tfg:${x.name}_stripped_wood_from_log_wood`)
                .itemInputs(`afc:wood/wood/${x.name}`)
                .itemOutputs(`${x.stripped_mod}:wood/stripped_wood/${x.stripped}`)
                .duration(50)
                .EUt(GTValues.VA[GTValues.ULV]);

            event.recipes.vintageimprovements
                .polishing(`${x.stripped_mod}:wood/stripped_wood/${x.stripped}`, `afc:wood/wood/${x.name}`)
                .speedLimits(0)
                .processingTime(50 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER)
                .id(`tfg:vi/lathe/${x.name}_stripped_wood_from_log_wood`);
        });    

    // #endregion

    // #region General

    // Ladder
	event.shaped('8x minecraft:ladder', [
		'A A',
		'AAA',
		'A A'
	], {
		A: '#forge:rods/wooden'
	})
    .id('gtceu:shaped/ladder');

	event.shaped('8x minecraft:ladder', [
		'A A',
		'AAA',
		'A A'
	], {
		A: '#tfc:lumber'
	})
    .id('tfc:crafting/vanilla/ladder');

    // Sticks
	event.remove('gtceu:shaped/stick_normal');
    event.remove('gtceu:lathe/lathe_planks');
    event.remove('gtceu:lathe/lathe_saplings');

    event.recipes.gtceu.lathe('tfg:planks_to_sticks')
        .itemInputs('#minecraft:planks')
        .itemOutputs('4x minecraft:stick')
        .duration(20)
        .EUt(7)

	event.shapeless('2x minecraft:stick', ['#minecraft:saplings', '#forge:tools/knives'])
        .id('tfg:strip_saplings')

	event.recipes.gtceu.cutter('tfg:saplings_to_sticks')
		.itemInputs('#minecraft:saplings')
		.itemOutputs('2x minecraft:stick')
		.duration(20)
		.EUt(7)

	event.recipes.gtceu.packer('tfg:stick_bunch')
		.itemInputs('9x #forge:rods/wooden')
		.circuit(5)
		.itemOutputs('tfc:stick_bunch')
		.duration(50)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.packer('tfg:stick_bundle')
		.itemInputs('18x #forge:rods/wooden')
		.circuit(8)
		.itemOutputs('tfc:stick_bundle')
		.duration(50)
		.EUt(GTValues.VA[GTValues.ULV])

    // #endregion

    // #region TFC

        global.TFC_WOOD_TYPES.forEach(wood => {

            // Removed unused assets
            event.remove({ id: `tfc:crafting/wood/${wood}_axle` });
            event.remove({ id: `tfc:crafting/wood/${wood}_bladed_axle` });
            event.remove({ id: `tfc:crafting/wood/${wood}_encased_axle` });
            event.remove({ id: `tfc:crafting/wood/${wood}_clutch` });
            event.remove({ id: `tfc:crafting/wood/${wood}_gear_box` });
            event.remove({ id: `tfc:crafting/wood/${wood}_water_wheel` });

            // Removed recipe changes
            event.remove({ id: `tfc:crafting/wood/${wood}_lumber_log` });
            event.remove({ id: `tfc:crafting/wood/${wood}_button` });
            event.remove({ id: `tfc:crafting/wood/${wood}_slab` });
            event.remove({ id: `tfc:crafting/wood/${wood}_slab_undo` });
            event.remove({ id: `tfc:crafting/wood/${wood}_lumber_planks` });
            event.remove({ id: `tfc:crafting/wood/${wood}_stairs` });
            event.remove({ id: `tfc:crafting/wood/${wood}_stairs_undo` });
            event.remove({ id: `tfc:crafting/wood/palm_mosaic` });
            event.remove({ id: `tfc:crafting/wood/palm_mosaic_slab` });
            event.remove({ id: `tfc:crafting/wood/palm_mosaic_slab_undo` });
            event.remove({ id: `tfc:crafting/wood/palm_mosaic_stairs` });
            event.remove({ id: `tfc:crafting/wood/palm_mosaic_stairs_undo` });
            
            woodBuilder(
                event, 
                `${wood}`, 
                `tfc:wood/lumber/${wood}`, 
                `#tfc:${wood}_logs`, 
                `tfc:wood/log/${wood}`,
                `tfc:wood/stripped_log/${wood}`, 
                `tfc:wood/planks/${wood}`, 
                `tfc:wood/planks/${wood}_stairs`,
                `tfc:wood/planks/${wood}_slab`,
                null, 
                null, 
                null, 
                null, 
                null, 
                `tfc:wood/planks/${wood}_pressure_plate`,
                `tfc:wood/planks/${wood}_button`, 
                `tfc:wood/wood/${wood}`, 
                `tfc:wood/stripped_wood/${wood}`, 
                `tfc:wood/wood/${wood}`, 
                `tfc:wood/stripped_wood/${wood}`
            );
        });   

        registerTFGWoodRecycling('tfc', global.TFC_HARDWOOD_TYPES, GTMaterials.get('hardwood'));
        registerTFGWoodRecycling('tfc', global.TFC_SOFTWOOD_TYPES, GTMaterials.Wood);

        // Outlier
		event.recipes.tfc.damage_inputs_shapeless_crafting(
            event.shapeless('tfc:wood/planks/palm_mosaic', 
                ['tfc:wood/planks/palm', '#tfc:chisels']
            )
        )
		.id('tfg:shapeless/palm_mosaic');

        event.shapeless('4x tfc:wood/lumber/palm',
            ['tfc:wood/planks/palm_mosaic', '#forge:tools/saws']
        )
        .id(`tfg:shapeless/palm_mosaic_lumber_from_plank`);

        generateCutterRecipe(event, 'tfc:wood/planks/palm_mosaic', '4x tfc:wood/lumber/palm', 50, 7, `palm_lumber_from_mosaic_plank`);

        event.recipes.tfc.damage_inputs_shapeless_crafting(
            event.shapeless('tfc:wood/planks/palm_mosaic_stairs', 
                ['tfc:wood/planks/palm_stairs', '#tfc:chisels']
            )
        )
		.id('tfg:shapeless/palm_mosaic_stairs');

        event.shapeless('3x tfc:wood/lumber/palm',
            ['tfc:wood/planks/palm_mosaic_stairs', '#forge:tools/saws']
        )
        .id(`tfg:shapeless/palm_mosaic_lumber_from_stair`);

        generateCutterRecipe(event, 'tfc:wood/planks/palm_mosaic_stairs', '3x tfc:wood/lumber/palm', 50, 7, `palm_lumber_from_mosaic_stair`);

        event.recipes.tfc.damage_inputs_shapeless_crafting(
            event.shapeless('tfc:wood/planks/palm_mosaic_slab', 
                ['tfc:wood/planks/palm_slab', '#tfc:chisels']
            )
        )
		.id('tfg:shapeless/palm_mosaic_slab');

        event.shapeless('2x tfc:wood/lumber/palm',
            ['tfc:wood/planks/palm_mosaic_slab', '#forge:tools/saws']
        )
        .id(`tfg:shapeless/palm_mosaic_lumber_from_slab`);

        generateCutterRecipe(event, 'tfc:wood/planks/palm_slab', '2x tfc:wood/lumber/palm', 50, 7, `palm_lumber_from_mosaic_slab`);

    // #endregion

    // #region Minecraft

        // Bamboo

        // Removed recipe changes
        const Bamboo_Items = [
            'minecraft:stripped_bamboo_block',
            'minecraft:bamboo_planks',
            'minecraft:bamboo_slab',
            'minecraft:bamboo_stairs',
            'minecraft:bamboo_fence',
            'minecraft:bamboo_fence_gate',
            'minecraft:bamboo_door',
            'minecraft:bamboo_trapdoor',
            'minecraft:bamboo_button',
            'minecraft:bamboo_mosaic',
            'minecraft:bamboo_mosaic_slab',
            'minecraft:bamboo_mosaic_stairs',
            'minecraft:bamboo_pressure_plate'
        ];

        Bamboo_Items.forEach(item => {
            event.remove({ input: item })
            event.remove({ output: item })
        });

        woodBuilder(
            event,
            'bamboo',
            'tfg:wood/lumber/bamboo',
            null,
            'minecraft:bamboo_block',
            'minecraft:stripped_bamboo_block',
            'minecraft:bamboo_planks',
            'minecraft:bamboo_stairs',
            'minecraft:bamboo_slab',
            'minecraft:bamboo_door',
            'minecraft:bamboo_trapdoor',
            'minecraft:bamboo_fence',
            'minecraft:bamboo_fence_gate',
            null,
            'minecraft:bamboo_pressure_plate',
            'minecraft:bamboo_button',
            null,
            null
        );

        event.shapeless('8x tfg:wood/lumber/bamboo', 
                ['minecraft:bamboo_block', '#forge:tools/saws']
            )
		.id(`tfg:shapeless/bamboo_lumber_from_log`);

        // TODO: chisel recipes
        // Outlier
		event.recipes.tfc.damage_inputs_shapeless_crafting(
            event.shapeless('minecraft:bamboo_mosaic', 
                ['minecraft:bamboo_planks', '#tfc:chisels']
            )
        )
		.id(`tfg:shapeless/bamboo_mosaic`);

        event.shapeless('4x tfg:wood/lumber/bamboo',
            ['minecraft:bamboo_mosaic', '#forge:tools/saws']
        )
        .id(`tfg:shapeless/bamboo_mosaic_lumber_from_plank`)

        generateCutterRecipe(event, 'minecraft:bamboo_mosaic', '4x tfg:wood/lumber/bamboo', 50, 7, `bamboo_lumber_from_mosaic_plank`)

        event.recipes.tfc.damage_inputs_shapeless_crafting(
            event.shapeless('minecraft:bamboo_mosaic_stairs', 
                ['minecraft:bamboo_stairs', '#tfc:chisels']
            )
        )
		.id(`tfg:shapeless/bamboo_mosaic_stairs`);

        event.shapeless('3x tfg:wood/lumber/bamboo',
            ['minecraft:bamboo_mosaic_stairs', '#forge:tools/saws']
        )
        .id(`tfg:shapeless/bamboo_mosaic_lumber_from_stair`);

        generateCutterRecipe(event, 'minecraft:bamboo_mosaic_stairs', '3x tfg:wood/lumber/bamboo', 50, 7, `bamboo_lumber_from_mosaic_stair`);

        event.recipes.tfc.damage_inputs_shapeless_crafting(
            event.shapeless('minecraft:bamboo_mosaic_slab', 
                ['minecraft:bamboo_slab', '#tfc:chisels']
            )
        )
		.id(`tfg:shapeless/bamboo_mosaic_slab`);

        event.shapeless('2x tfg:wood/lumber/bamboo',
            ['minecraft:bamboo_mosaic_slab', '#forge:tools/saws']
        )
        .id(`tfg:shapeless/bamboo_mosaic_lumber_from_slab`);

        generateCutterRecipe(event, 'minecraft:bamboo_mosaic_slab', '2x tfg:wood/lumber/bamboo', 50, 7, `bamboo_lumber_from_mosaic_slab`);

    // #endregion

    // #region Gregtech

        // Removed recipe changes
        event.remove({ id: 'gtceu:shaped/treated_fence' });
        event.remove({ id: 'gtceu:shaped/treated_fence_gate' });
        event.remove({ id: 'gtceu:shaped/treated_fence_gate_screws' });
        event.remove({ id: 'gtceu:shaped/treated_stairs' });
        event.remove({ id: 'gtceu:assembler/treated_stairs' });
        event.remove({ id: 'gtceu:assembler/treated_fence' });
        event.remove({ id: 'gtceu:assembler/treated_fence_gate' });
        event.remove({ output: 'gtceu:treated_wood_button' });

        // Treated wood
        woodBuilder(
            event, 
            'treated_wood', 
            'gtceu:treated_wood_plate', 
            null, 
            null, 
            null, 
            'gtceu:treated_wood_planks', 
            'gtceu:treated_wood_stairs', 
            'gtceu:treated_wood_slab', 
            'gtceu:treated_wood_door', 
            'gtceu:treated_wood_trapdoor', 
            'gtceu:treated_wood_fence', 
            'gtceu:treated_wood_fence_gate', 
            null, 
            'gtceu:treated_wood_pressure_plate', 
            'gtceu:treated_wood_button', 
            null, 
            null
        );

    // #endregion

};