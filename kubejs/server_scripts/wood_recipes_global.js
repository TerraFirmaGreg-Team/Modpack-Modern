
/**
 * 
 * @param {Internal.RecipesEventJS} event 
 */
const registerWoodStructRecipes = (event) =>
{
	//Replace any recipe that outputs wood dust to use hardwood dust if it's ID string contains the name of one of the hardwood types.
	//This absolutely fuckin sucks but it works
    //Sidenote, i think this is more efficient than putting it
    event.forEachRecipe({ output: 'gtceu:wood_dust' }, r =>{
        global.getWoodStructArray().forEach(woodType =>
        {
            if(r.id.toString().includes(woodType.name))
            {
                r.replaceOutput('gtceu:wood_dust', 'gtceu:hardwood_dust')
				r.replaceOutput('gtceu:small_wood_dust', 'gtceu:small_hardwood_dust')
				r.replaceOutput('gtceu:tiny_wood_dust', 'gtceu:tiny_hardwood_dust')
                return; //If we found the matching ID, return as we dont need to iterate thru the other wood types.
            }
        });
    });

    global.getWoodStructArray().forEach(woodType =>
    {
        console.log("Generating wood struct recipes for " + woodType.modName + ":" + woodType.name);

        //window pane recipes
        global.invokeIfNotNull(woodType.window_pane, () =>
        {
            //These share the same id as the block/item
            event.remove({ id: woodType.window_pane });

            event.shapeless(`2x ${woodType.window_pane}`,
                [
                    woodType.window,
                    '#forge:tools/saws'
                ])
                .id(`tfg:everycompat/shapeless/${woodType.name}_window_pane`);

            event.recipes.gtceu.cutter(`tfg:everycompat/shapeless/${woodType.name}_window_pane`)
                .itemInputs(`3x ${woodType.window}`)
                .itemOutputs(`8x ${woodType.window_pane}`)
                .duration(40)
                .EUt(7)
        });

        //wired macaw fence recipe
        global.invokeIfNotNull((woodType.macaw_data && woodType.tree_data), () =>
        {
            let treeData = woodType.tree_data[0];
            let logData = treeData.log_data;

            event.shaped(`8x mcw_tfc_aio:fences/${woodType.name}_fences/${woodType.name}_wired_fence`, [
			'ABA',
			'C C'
            ], {
                A: '#forge:rods/wooden',
                B: 'createaddition:barbed_wire',
                C: logData.log
            }).id(`tfg:shaped/${woodType.name}_wired_fence`);
        });

        //train track recipes
        global.invokeIfNotNull(woodType.railways_data, () =>
        {
            //tracks
            event.recipes.createSequencedAssembly([
                `32x ${woodType.railways_data.track}`,
                ], woodType.slab, [
                    event.recipes.createDeploying(woodType.railways_data.incomplete_track, [woodType.railways_data.incomplete_track, woodType.slab]),
                    event.recipes.createDeploying(woodType.railways_data.incomplete_track, [woodType.railways_data.incomplete_track, '#tfg:track_rods']),
                    event.recipes.createDeploying(woodType.railways_data.incomplete_track, [woodType.railways_data.incomplete_track, '#tfc:mortar']),
                    event.recipes.greate.pressing(woodType.railways_data.incomplete_track, woodType.railways_data.incomplete_track),
                ]).transitionalItem(woodType.railways_data.incomplete_track).loops(2).id(`tfg:railways/sequenced_assembly/track_create_${woodType.name}`)

                event.recipes.gtceu.assembler(`railways/track_${woodType.name}`)
                    .itemInputs(`3x ${woodType.slab}`, '2x #tfg:track_rods')
                    .inputFluids(Fluid.of('gtceu:concrete', 144))
                    .itemOutputs(`32x ${woodType.railways_data.track}`)
                    .duration(200)
                    .EUt(16)
                    .circuit(2);
                
                event.shaped(`16x ${woodType.railways_data.track}`, [
                    'R R',
                    'MHM',
                    'SSS'
                ], {
                    H: '#forge:tools/hammers',
                    M: '#tfc:mortar',
                    R: '#tfg:track_rods',
                    S: woodType.slab
                }).id(`tfg:railways/shaped/track_create_${woodType.name}`)

            // narrow tracks
            event.recipes.createSequencedAssembly([
                    `32x ${woodType.railways_data.track_narrow}`,
                ], woodType.slab, [
                    event.recipes.createDeploying(woodType.railways_data.incomplete_track_narrow, [woodType.railways_data.incomplete_track_narrow, '#tfg:track_rods']),
                    event.recipes.createDeploying(woodType.railways_data.incomplete_track_narrow, [woodType.railways_data.incomplete_track_narrow, '#tfc:mortar']),
                    event.recipes.greate.pressing(woodType.railways_data.incomplete_track_narrow, woodType.railways_data.incomplete_track_narrow),
                ]).transitionalItem(woodType.railways_data.incomplete_track_narrow).loops(2).id(`tfg:railways/sequenced_assembly/track_create_${woodType.name}_narrow`)

                event.recipes.gtceu.assembler(`railways/track_create_${woodType.name}_narrow`)
                    .itemInputs(woodType.slab, '2x #tfg:track_rods')
                    .inputFluids(Fluid.of('gtceu:concrete', 144))
                    .itemOutputs(`32x ${woodType.railways_data.track_narrow}`)
                    .duration(200)
                    .EUt(16)
                    .circuit(1)

                event.shaped(`16x ${woodType.railways_data.track_narrow}`, [
                    'R R',
                    'MHM',
                    ' S '
                ], {
                    H: '#forge:tools/hammers',
                    M: '#tfc:mortar',
                    R: '#tfg:track_rods',
                    S: woodType.slab
                }).id(`tfg:railways/shaped/track_create_${woodType.name}_narrow`)
                
            //wide tracks
            event.recipes.createSequencedAssembly([
			`32x ${woodType.railways_data.track_wide}`,
            ], woodType.slab, [
                event.recipes.createDeploying(woodType.railways_data.incomplete_track_wide, [woodType.railways_data.incomplete_track_wide, woodType.plank]),
                event.recipes.createDeploying(woodType.railways_data.incomplete_track_wide, [woodType.railways_data.incomplete_track_wide, `#tfg:track_rods`]),
                event.recipes.createDeploying(woodType.railways_data.incomplete_track_wide, [woodType.railways_data.incomplete_track_wide, '#tfc:mortar']),
                event.recipes.greate.pressing(woodType.railways_data.incomplete_track_wide, woodType.railways_data.incomplete_track_wide)
            ]).transitionalItem(woodType.railways_data.incomplete_track_wide).loops(2).id(`tfg:railways/sequenced_assembly/track_create_${woodType.name}_wide`)

            event.recipes.gtceu.assembler(`railways/track_${woodType.name}_wide`)
                .itemInputs(`5x ${woodType.slab}`, '2x #tfg:track_rods')
                .inputFluids(Fluid.of('gtceu:concrete', 144))
                .itemOutputs(`32x ${woodType.railways_data.track_wide}`)
                .duration(200)
                .EUt(16)
                .circuit(3);

            event.shaped(`16x ${woodType.railways_data.track_wide}`, [
                'R R',
                'MHM',
                'BSB'
            ], {
                B: woodType.plank,
                H: '#forge:tools/hammers',
                M: '#tfc:mortar',
                R: '#tfg:track_rods',
                S: woodType.slab
            }).id(`tfg:railways/shaped/track_create_${woodType.name}_wide`)
        })

        //shingle assembling recipe
        global.invokeIfNotNull(woodType.rnr_data, () =>
        {
            //Replace it so it accepts any log of the wood type
            event.replaceInput({ id: `rnr:crafting/shingle/${woodType.name}`}, `tfc:wood/log/${woodType.name}`, woodType.logsTag);
            
            event.recipes.gtceu.assembler(`tfg:wood/shingle/${woodType.name}`)
                .itemInputs(woodType.logsTag)
                .itemOutputs(`4x ${woodType.rnr_data.shingle}`)
                .circuit(3)
                .duration(20)
                .EUt(30);

            event.recipes.gtceu.assembler(`tfg:wood/shingles/${woodType.name}`)
                .itemInputs(woodType.rnr_data.shingle, 'rnr:roof_frame')
                .itemOutputs(woodType.rnr_data.shingle_block)
                .duration(20)
                .EUt(30)

            event.recipes.gtceu.assembler(`tfg:wood/shingles/${woodType.name}_slab_from_framing`)
                .itemInputs(woodType.rnr_data.shingle, 'rnr:roof_frame_slab')
                .itemOutputs(woodType.rnr_data.shingle_slab)
                .duration(20)
                .EUt(30);
    
            event.recipes.gtceu.assembler(`tfg:wood/shingles/${woodType.name}_slab`)
                .itemInputs(woodType.rnr_data.shingle_block)
                .itemOutputs(woodType.rnr_data.shingle_slab)
                .circuit(3)
                .duration(20)
                .EUt(30)

            event.recipes.gtceu.assembler(`tfg:wood/shingles/${woodType.name}_stairs_from_framing`)
                .itemInputs(woodType.rnr_data.shingle, 'rnr:roof_frame_stairs')
                .itemOutputs(woodType.rnr_data.shingle_stair)
                .duration(20)
                .EUt(30)
    
            event.recipes.gtceu.assembler(`tfg:wood/shingles/${woodType.name}_stairs`)
                .itemInputs(woodType.rnr_data.shingle_block)
                .itemOutputs(woodType.rnr_data.shingle_stair)
                .circuit(2)
                .duration(20)
                .EUt(30)
        });

        //fallen leaves from block recipe
        global.invokeIfNotNull(woodType.tree_data, () =>
        {
            woodType.tree_data.forEach(tree =>
            {
                event.shaped(`4x ${tree.fallen_leaves}`,[
                    'AA',
                    'AA'
                ], {
                    A: tree.leaf_block
                }).id(`tfg:shaped/tfc/${tree.tree_name}_leaves_to_fallen_leaves`);
            });
        });
        
        if(woodType.modName == "tfc")
        {
            handleTFCRecipeRefistration(woodType);
        }
        else if(woodType.modName == "afc")
        {
            handleAFCRecipeRegistration(woodType);
        }
        else if(woodType.modName == "beneath")
        {
            handleBeneathRecipeRegistration(woodType);
        }

        global.invokeIfNotNull(woodType.tree_data, () =>
        {
            woodType.tree_data.forEach(treeData =>
            {
                if(!treeData.log_data)
                {
                    return;
                }

                let sapling = treeData.sapling;
                let leafBlock = treeData.leaf_block;
                let log = treeData.log_data.log;
                console.log("Name:" + treeData.tree_name + "\r\nSapling:" + sapling + "\r\nLeafBlock:" + leafBlock + "\r\nLog:" + log);
                console.log("Log Data:" + treeData.log_data);
                
                if(sapling && leafBlock && log)
                    generateTreeGreenHouseRecipe(event, null, sapling, log, leafBlock, 1);
            });
        });

        global.invokeIfNotNull(woodType.woodKind, () =>
        {
            if(woodType.woodKind == global.WOOD_KIND.NONE)
            {
                return;
            }

            if(woodType.woodKind == global.WOOD_KIND.HARD)
            {
                global.invokeIfNotNull(woodType.astikor_data, () =>
                {
                    TFGHelpers.registerMaterialInfo(woodType.astikor_data.wheel, [GTMaterials.get('hardwood'), 2]);
                    TFGHelpers.registerMaterialInfo(woodType.astikor_data.supply_cart, [GTMaterials.Brass, 1, GTMaterials.get('hardwood'), 8, GTMaterials.Wood, 12]);
                    TFGHelpers.registerMaterialInfo(woodType.astikor_data.plow, [GTMaterials.Brass, 1, GTMaterials.get('hardwood'), 8]);
                    TFGHelpers.registerMaterialInfo(woodType.astikor_data.animal_cart, [GTMaterials.Brass, 1, GTMaterials.get('hardwood'), 14]);

                    event.shaped(woodType.astikor_data.wheel, [
                        'AAA',
                        'ABA',
                        'AAA'
                    ], {
                        'A': woodType.lumber,
                        'B': '#forge:rings'
                    }).id(`tfcastikorcarts:crafting/wheel/${woodType.name}`)
                });
                registerTFGWoodRecycling(woodType.modName, [woodType.name], GTMaterials.get('hardwood'));
            }
            else if(woodType.woodKind == global.WOOD_KIND.SOFT)
            {
                global.invokeIfNotNull(woodType.astikor_data, () =>
                {
                    TFGHelpers.registerMaterialInfo(woodType.astikor_data.wheel, [GTMaterials.Wood, 2]);
                    TFGHelpers.registerMaterialInfo(woodType.astikor_data.supply_cart, [GTMaterials.Brass, 1, GTMaterials.Wood, 20]);
                    TFGHelpers.registerMaterialInfo(woodType.astikor_data.plow, [GTMaterials.Brass, 1, GTMaterials.Wood, 8]);
                    TFGHelpers.registerMaterialInfo(woodType.astikor_data.animal_cart, [GTMaterials.Brass, 1, GTMaterials.Wood, 14]);
                    
                    event.shaped(woodType.astikor_data.wheel, [
                        'AAA',
                        'ABA',
                        'AAA'
                    ], {
                        'A': woodType.lumber,
                        'B': '#forge:rings'
                    }).id(`tfcastikorcarts:crafting/wheel/${woodType.name}`)
                });
                registerTFGWoodRecycling(woodType.modName, [woodType.name], GTMaterials.Wood);
            }
        });
    })

    function handleTFCRecipeRefistration(woodType)
    {
        // Removed unused assets
        event.remove({ id: `tfc:crafting/wood/${woodType.name}_axle` });
        event.remove({ id: `tfc:crafting/wood/${woodType.name}_bladed_axle` });
        event.remove({ id: `tfc:crafting/wood/${woodType.name}_encased_axle` });
        event.remove({ id: `tfc:crafting/wood/${woodType.name}_clutch` });
        event.remove({ id: `tfc:crafting/wood/${woodType.name}_gear_box` });
        event.remove({ id: `tfc:crafting/wood/${woodType.name}_water_wheel` });

        // Removed recipe changes
        event.remove({ id: `tfc:crafting/wood/${woodType.name}_planks` });
        event.remove({ id: `tfc:crafting/wood/${woodType.name}_pressure_plate` });
        event.remove({ id: `tfc:crafting/wood/${woodType.name}_lumber_log` });
        event.remove({ id: `tfc:crafting/wood/${woodType.name}_button` });
        event.remove({ id: `tfc:crafting/wood/${woodType.name}_slab` });
        event.remove({ id: `tfc:crafting/wood/${woodType.name}_slab_undo` });
        event.remove({ id: `tfc:crafting/wood/${woodType.name}_lumber_planks` });
        event.remove({ id: `tfc:crafting/wood/${woodType.name}_stairs` });
        event.remove({ id: `tfc:crafting/wood/${woodType.name}_stairs_undo` });

        TFGWoodBuilder(
            event,
            woodType.name,
            woodType.lumber,
            woodType.logsTag,
            woodType.tree_data[0].log_data.log,
            woodType.tree_data[0].log_data.stripped_log,
            woodType.plank,
            woodType.stair,
            woodType.slab,
            null,
            null,
            null,
            null,
            null,
            null,
            woodType.pressure_plate,
            woodType.button,
            woodType.tree_data[0].log_data.wood,
            woodType.tree_data[0].log_data.stripped_wood,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            woodType.crafting_station,
            woodType.workbench,
            woodType.rope_ladder,
            null
        );
    }
    function handleAFCRecipeRegistration(woodType)
    {
        // Removed unused assets
		event.remove({ id: `afc:crafting/wood/${woodType.name}_axle` });
		event.remove({ id: `afc:crafting/wood/${woodType.name}_bladed_axle` });
		event.remove({ id: `afc:crafting/wood/${woodType.name}_encased_axle` });
		event.remove({ id: `afc:crafting/wood/${woodType.name}_clutch` });
		event.remove({ id: `afc:crafting/wood/${woodType.name}_gear_box` });
		event.remove({ id: `afc:crafting/wood/${woodType.name}_water_wheel` });

		// Removed recipe changes
		event.remove({ id: `afc:crafting/wood/${woodType.name}_planks` });
		event.remove({ id: `afc:crafting/wood/${woodType.name}_pressure_plate` });
		event.remove({ id: `afc:crafting/wood/${woodType.name}_lumber_log` });
		event.remove({ id: `afc:crafting/wood/${woodType.name}_stairs` });
		event.remove({ id: `afc:crafting/wood/${woodType.name}_stairs_undo` });
		event.remove({ id: `afc:crafting/wood/${woodType.name}_slab` });
		event.remove({ id: `afc:crafting/wood/${woodType.name}_button` });
		event.remove({ id: `afc:crafting/wood/${woodType.name}_stomping_barrel` });
		event.remove({ id: `afc:crafting/wood/${woodType.name}_lumber_planks` });
		event.remove({ id: `afc:crafting/wood/${woodType.name}_slab_undo` });

		TFGWoodBuilder(
			event,
			woodType.name,
			woodType.lumber,
			woodType.logsTag,
			woodType.tree_data[0].log_data.log,
			woodType.tree_data[0].log_data.stripped_log,
			woodType.plank,
			woodType.stair,
			woodType.slab,
			null,
			null,
			null,
			null,
			null,
			null,
			woodType.pressure_plate,
			woodType.button,
			woodType.tree_data[0].log_data.wood,
			woodType.tree_data[0].log_data.stripped_wood,
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			woodType.firmalife_data.stomping_barrel,
			null,
			null,
			null,
			null,
			woodType.crafting_station,
			woodType.workbench,
			woodType.rope_ladder,
			null
		);
    }

    function handleBeneathRecipeRegistration(woodType)
    {
        // Removed recipe changes
		event.remove({ id: `beneath:crafting/wood/${woodType.name}_planks` });
		event.remove({ id: `beneath:crafting/wood/${woodType.name}_slab` });
		event.remove({ id: `beneath:crafting/wood/${woodType.name}_button` });
		event.remove({ id: `beneath:crafting/wood/${woodType.name}_pressure_plate` });
		event.remove({ id: `beneath:crafting/wood/${woodType.name}_lumber_log` });
		event.remove({ id: `beneath:crafting/wood/${woodType.name}_lumber_planks` });
		event.remove({ id: `beneath:crafting/wood/${woodType.name}_slab_undo` });
		event.remove({ id: `beneath:crafting/wood/${woodType.name}_trapdoor` });
		event.remove({ id: `beneath:crafting/wood/${woodType.name}_door` });
		event.remove({ id: `beneath:crafting/wood/${woodType.name}_stairs` });

		TFGWoodBuilder(
			event,
			woodType.name,
			woodType.lumber,
			woodType.logsTag,
			woodType.tree_data[0].log_data.log,
			woodType.tree_data[0].log_data.stripped_log,
			woodType.plank,
			woodType.stair,
			woodType.slab,
            woodType.door,
            woodType.trapdoor,
			null,
			null,
			null,
			null,
			woodType.pressure_plate,
			woodType.button,
			woodType.tree_data[0].log_data.wood,
			woodType.tree_data[0].log_data.stripped_wood,
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			woodType.crafting_station,
			woodType.workbench,
			woodType.rope_ladder,
			null
		);
    }
}