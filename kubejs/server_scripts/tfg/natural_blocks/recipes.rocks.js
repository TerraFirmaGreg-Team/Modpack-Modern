// priority: 0
"use strict";

/**
 * @param {Internal.RecipesEventJS} event 
 */
function registerTFGRockRecipes(event) {


	// #region GLUEING_TOGETHER
	// raw rock to hardened, bricks to brick blocks
	const GLUEING_TOGETHER = [
		{ loose: 'tfg:brick/deepslate',           block: '4x minecraft:deepslate_bricks' },
		{ loose: 'beneath:blackstone_brick',      block: '4x minecraft:polished_blackstone_bricks' },
		{ loose: 'tfg:brick/dripstone',           block: '4x create:cut_dripstone_bricks' },
		{ loose: 'minecraft:nether_brick',        block: '4x minecraft:nether_bricks' },
		{ loose: 'tfg:brick/moon_stone',          block: '4x ad_astra:moon_stone_bricks' },
		{ loose: 'tfg:brick/moon_deepslate',      block: '4x tfg:rock/bricks_moon_deepslate' },
		{ loose: 'tfg:brick/mars_stone',          block: '4x ad_astra:mars_stone_bricks' },
		{ loose: 'tfg:brick/venus_stone',         block: '4x ad_astra:venus_stone_bricks' },
		{ loose: 'tfg:brick/red_granite',         block: '4x gtceu:red_granite_bricks' },
		{ loose: 'tfg:brick/mercury_stone',       block: '4x ad_astra:mercury_stone_bricks' },
		{ loose: 'tfg:brick/glacio_stone',        block: '4x ad_astra:glacio_stone_bricks' },
		{ loose: 'tfg:brick/permafrost',          block: '4x ad_astra:permafrost_bricks' },
		{ loose: 'minecraft:popped_chorus_fruit', block: '4x minecraft:purpur_block' },
		{ loose: 'gtceu:stone_ingot',			  block: '4x minecraft:stone_bricks' },

		{ loose: 'minecraft:deepslate',		      block: '2x tfg:rock/hardened_deepslate' },
		{ loose: 'minecraft:blackstone',		  block: '2x tfg:rock/hardened_blackstone' },
		{ loose: 'minecraft:dripstone_block',	  block: '2x tfg:rock/hardened_dripstone' },
		{ loose: 'ad_astra:moon_stone',		      block: '2x tfg:rock/hardened_moon_stone' },
		{ loose: 'ad_astra:moon_deepslate',		  block: '2x tfg:rock/hardened_moon_deepslate'},
		{ loose: 'ad_astra:mars_stone',			  block: '2x tfg:rock/hardened_mars_stone'},
		{ loose: 'ad_astra:venus_stone',		  block: '2x tfg:rock/hardened_venus_stone'},
		{ loose: 'ad_astra:mercury_stone',		  block: '2x tfg:rock/hardened_mercury_stone'},
		{ loose: 'ad_astra:glacio_stone',	      block: '2x tfg:rock/hardened_glacio_stone'},
		{ loose: 'gtceu:red_granite',			  block: '2x tfg:rock/hardened_red_granite'}
	]

	GLUEING_TOGETHER.forEach(x => {
		event.shaped(x.block, [
			'ABA',
			'BAB',
			'ABA'
		], {
			A: x.loose,
			B: 'tfc:mortar'
		})

		event.recipes.gtceu.assembler(`${x.loose}_to_${x.block}`.replace(/[: ]/g, '_'))
			.itemInputs(`5x ${x.loose}`)
			.inputFluids(Fluid.of('gtceu:concrete', 72))
			.itemOutputs(x.block)
			.circuit(1)
			.duration(50)
			.EUt(2)
	})
	// #endregion GLUEING_TOGETHER

	// #region COBBLE_TO_LOOSE
	const COBBLE_TO_LOOSE = [
		{ cobble: 'tfg:rock/cobble_blackstone',     loose: 'beneath:blackstone_pebble' },
		{ cobble: 'minecraft:cobbled_deepslate',    loose: 'tfg:loose/deepslate' },
		{ cobble: 'tfg:rock/cobble_dripstone',      loose: 'tfg:loose/dripstone' },
		{ cobble: 'tfg:rock/cobble_crackrack',      loose: 'tfg:loose/crackrack' },
		{ cobble: 'ad_astra:moon_cobblestone',      loose: 'tfg:loose/moon_stone' },
		{ cobble: 'tfg:rock/cobble_moon_deepslate', loose: 'tfg:loose/moon_deepslate' },
		{ cobble: 'ad_astra:mars_cobblestone',      loose: 'tfg:loose/mars_stone' },
		{ cobble: 'ad_astra:venus_cobblestone',     loose: 'tfg:loose/venus_stone' },
		{ cobble: 'ad_astra:mercury_cobblestone',   loose: 'tfg:loose/mercury_stone' },
		{ cobble: 'ad_astra:glacio_cobblestone',    loose: 'tfg:loose/glacio_stone' },
		{ cobble: 'gtceu:red_granite_cobblestone',  loose: 'tfg:loose/red_granite' },
		{ cobble: 'tfg:rock/cobble_permafrost',     loose: 'tfg:loose/permafrost' }
	]

	COBBLE_TO_LOOSE.forEach(x => {
		event.shapeless(`4x ${x.loose}`, [x.cobble]);

		event.shaped(x.cobble, [
			'AA',
			'AA'
		], {
			A: x.loose
		});

		event.recipes.gtceu.packer(`tfc:gtceu/packer/unpacking_${x.cobble}`.replace(/[: ]/g, '_'))
			.itemInputs(`1x ${x.cobble}`)
			.itemOutputs(`4x ${x.loose}`)
			.circuit(1)
			.duration(20)
			.EUt(GTValues.VA[GTValues.ULV])

		event.recipes.gtceu.packer(`tfc:gtceu/packer/packing_${x.cobble}`.replace(/[: ]/g, '_'))
			.itemInputs(`4x ${x.loose}`)
			.itemOutputs(`1x ${x.cobble}`)
			.circuit(1)
			.duration(20)
			.EUt(GTValues.VA[GTValues.ULV])
	})
	// #endregion COBBLE_TO_LOOSE

	// #region LOOSE_TO_BRICKS
	const LOOSE_TO_BRICKS = [
		{ loose: 'tfg:loose/deepslate',       brick: 'tfg:brick/deepslate' },
		{ loose: 'tfg:loose/dripstone',       brick: 'tfg:brick/dripstone' },
		{ loose: 'tfg:loose/crackrack',       brick: 'minecraft:nether_brick' },
		{ loose: 'tfg:loose/moon_stone',      brick: 'tfg:brick/moon_stone' },
		{ loose: 'tfg:loose/moon_deepslate',  brick: 'tfg:brick/moon_deepslate' },
		{ loose: 'tfg:loose/mars_stone',      brick: 'tfg:brick/mars_stone' },
		{ loose: 'tfg:loose/venus_stone',     brick: 'tfg:brick/venus_stone' },
		{ loose: 'tfg:loose/mercury_stone',   brick: 'tfg:brick/mercury_stone' },
		{ loose: 'tfg:loose/glacio_stone',    brick: 'tfg:brick/glacio_stone' },
		{ loose: 'tfg:loose/permafrost',      brick: 'tfg:brick/permafrost' },
		{ loose: 'tfg:loose/red_granite',     brick: 'tfg:brick/red_granite' },
		{ loose: 'beneath:blackstone_pebble', brick: 'beneath:blackstone_brick' }
	]

	LOOSE_TO_BRICKS.forEach(x => {
		event.recipes.tfc.damage_inputs_shapeless_crafting(event.recipes.minecraft.crafting_shapeless(
			x.brick, [x.loose, '#tfc:chisels']
		))

		event.recipes.gtceu.cutter(`${x.loose}_to_${x.brick}`.replace(/:/g, '_'))
			.itemInputs(x.loose)
			.itemOutputs(x.brick)
			.duration(10)
			.EUt(2)
	})
	// #endregion LOOSE_TO_BRICKS

	// #region AQUEDUCTS
	const AQUEDUCTS = [
		{ brick: 'tfg:brick/deepslate',       aqueduct: 'tfg:rock/aqueduct_deepslate'      },
		{ brick: 'beneath:blackstone_brick',  aqueduct: 'beneath:blackstone_aqueduct'      },
		{ brick: 'tfg:brick/dripstone',       aqueduct: 'tfg:rock/aqueduct_dripstone'      },
		{ brick: 'minecraft:nether_brick',    aqueduct: 'tfg:rock/aqueduct_nether'         },
		{ brick: 'tfg:brick/moon_stone',      aqueduct: 'tfg:rock/aqueduct_moon_stone'     },
		{ brick: 'tfg:brick/moon_deepslate',  aqueduct: 'tfg:rock/aqueduct_moon_deepslate' },
		{ brick: 'tfg:brick/mars_stone',      aqueduct: 'tfg:rock/aqueduct_mars_stone'     },
		{ brick: 'tfg:brick/venus_stone',     aqueduct: 'tfg:rock/aqueduct_venus_stone'    },
		{ brick: 'tfg:brick/mercury_stone',   aqueduct: 'tfg:rock/aqueduct_mercury_stone'  },
		{ brick: 'tfg:brick/glacio_stone',    aqueduct: 'tfg:rock/aqueduct_glacio_stone'   },
		{ brick: 'tfg:brick/permafrost',      aqueduct: 'tfg:rock/aqueduct_permafrost'     },
		{ brick: 'tfg:brick/red_granite',     aqueduct: 'tfg:rock/aqueduct_red_granite'    },
		{ brick: 'gtceu:stone_ingot',         aqueduct: 'tfg:rock/aqueduct_stone'          }
	]

	AQUEDUCTS.forEach(x => {
		event.shaped(x.aqueduct, [
			'A A',
			'BAB'
		], {
			A: x.brick,
			B: 'tfc:mortar'
		})

		event.recipes.gtceu.assembler(`${x.brick}_to_${x.aqueduct}`.replace(/:/g, '_'))
			.itemInputs(`3x ${x.brick}`)
			.circuit(3)
			.inputFluids(Fluid.of('gtceu:concrete', 16))
			.itemOutputs(x.aqueduct)
			.duration(50)
			.EUt(2)
	})	
	// #endregion AQUEDUCT

	// #region COBBLE TO MOSSY COBBLE

	const COBBLE_TO_MOSSY = [
		{ cobble: 'minecraft:cobblestone',             mossy: 'minecraft:mossy_cobblestone' },
		{ cobble: 'tfg:rock/cobble_blackstone',        mossy: 'tfg:rock/mossy_cobble_blackstone' },
		{ cobble: 'minecraft:cobbled_deepslate',       mossy: 'tfg:rock/mossy_cobble_deepslate' },
		{ cobble: 'tfg:rock/cobble_dripstone',         mossy: 'tfg:rock/mossy_cobble_dripstone' },
		{ cobble: 'tfg:rock/cobble_crackrack',         mossy: 'tfg:rock/mossy_cobble_crackrack' },
		{ cobble: 'ad_astra:moon_cobblestone',         mossy: 'tfg:rock/mossy_cobble_moon' },
		{ cobble: 'tfg:rock/cobble_moon_deepslate',    mossy: 'tfg:rock/mossy_cobble_moon_deepslate' },
		{ cobble: 'ad_astra:mars_cobblestone',         mossy: 'tfg:rock/mossy_cobble_mars' },
		{ cobble: 'ad_astra:venus_cobblestone',        mossy: 'tfg:rock/mossy_cobble_venus' },
		{ cobble: 'ad_astra:mercury_cobblestone',      mossy: 'tfg:rock/mossy_cobble_mercury' },
		{ cobble: 'ad_astra:glacio_cobblestone',       mossy: 'tfg:rock/mossy_cobble_glacio' },
		{ cobble: 'tfg:rock/cobble_permafrost',        mossy: 'tfg:rock/mossy_cobble_permafrost' },
		{ cobble: 'gtceu:red_granite_cobblestone',     mossy: 'gtceu:mossy_red_granite_cobblestone' },
		{ cobble: 'gtceu:light_concrete_cobblestone',  mossy: 'gtceu:mossy_light_concrete_cobblestone' },
		{ cobble: 'gtceu:dark_concrete_cobblestone',   mossy: 'gtceu:mossy_dark_concrete_cobblestone' }
	];

	COBBLE_TO_MOSSY.forEach(x => {

		event.recipes.gtceu.assembler(`${x.mossy}_cobble_rocks_to_mossy_cobble`.replace(/: /g, '_'))
			.itemInputs(x.cobble, '#tfc:compost_greens_low')
			.circuit(0)
			.inputFluids("#tfg:clean_water 144")
			.itemOutputs(x.mossy)
			.duration(50)
			.EUt(2)
	})

	// #endregion

	// #region RAW_TO_POLISHED
	const RAW_TO_POLISHED = [
		// Beneath
		{ raw: 'minecraft:deepslate',                     polished: 'minecraft:polished_deepslate'            },
		{ raw: 'tfg:rock/hardened_deepslate',             polished: 'minecraft:polished_deepslate'            },
		{ raw: 'create:cut_deepslate',                    polished: 'create:polished_cut_deepslate'           },
		{ raw: 'minecraft:deepslate_bricks',              polished: 'minecraft:deepslate_tiles'               },
		{ raw: 'minecraft:deepslate_tiles',               polished: 'minecraft:chiseled_deepslate'            },
		{ raw: 'minecraft:chiseled_deepslate',            polished: 'minecraft:deepslate_bricks'              },

		{ raw: 'minecraft:blackstone',                    polished: 'minecraft:polished_blackstone'           },
		{ raw: 'tfg:rock/hardened_blackstone',            polished: 'minecraft:polished_blackstone'           },
		{ raw: 'minecraft:polished_blackstone_bricks',    polished: 'minecraft:chiseled_polished_blackstone'  },
		{ raw: 'minecraft:chiseled_polished_blackstone',  polished: 'minecraft:polished_blackstone_bricks'    },

		{ raw: 'minecraft:dripstone_block',               polished: 'create:polished_cut_dripstone'           },
		{ raw: 'tfg:rock/hardened_dripstone',             polished: 'create:polished_cut_dripstone'           },
		{ raw: 'create:cut_dripstone',                    polished: 'create:polished_cut_dripstone'           },
		{ raw: 'create:cut_dripstone_bricks',             polished: 'create:small_dripstone_bricks'           },
		{ raw: 'create:small_dripstone_bricks',           polished: 'create:cut_dripstone_bricks'             },

		{ raw: 'beneath:crackrack',                       polished: 'tfg:rock/polished_crackrack'             },
		{ raw: 'minecraft:nether_bricks',                 polished: 'minecraft:chiseled_nether_bricks'        },
		{ raw: 'minecraft:chiseled_nether_bricks',        polished: 'minecraft:nether_bricks'                 },

		{ raw: 'minecraft:basalt',                        polished: 'minecraft:smooth_basalt'                 },
		{ raw: 'minecraft:smooth_basalt',                 polished: 'minecraft:polished_basalt'               },

		// Moon
		{ raw: 'ad_astra:moon_stone',                     polished: 'ad_astra:polished_moon_stone'            },
		{ raw: 'tfg:rock/hardened_moon_stone',            polished: 'ad_astra:polished_moon_stone'            },
		{ raw: 'ad_astra:moon_stone_bricks',              polished: 'ad_astra:chiseled_moon_stone_bricks'     },
		{ raw: 'ad_astra:chiseled_moon_stone_bricks',     polished: 'ad_astra:moon_stone_bricks'              },

		{ raw: 'ad_astra:moon_deepslate',                 polished: 'tfg:rock/polished_moon_deepslate'        },
		{ raw: 'tfg:rock/hardened_moon_deepslate',        polished: 'tfg:rock/polished_moon_deepslate'        },
		{ raw: 'tfg:rock/bricks_moon_deepslate',          polished: 'tfg:rock/chiseled_bricks_moon_deepslate' },
		{ raw: 'tfg:rock/chiseled_bricks_moon_deepslate', polished: 'tfg:rock/bricks_moon_deepslate'          },
		
		{ raw: 'ad_astra:glacio_stone',                   polished: 'ad_astra:polished_glacio_stone'          },
		{ raw: 'tfg:rock/hardened_glacio_stone',          polished: 'ad_astra:polished_glacio_stone'          },
		{ raw: 'ad_astra:glacio_stone_bricks',            polished: 'ad_astra:chiseled_glacio_stone_bricks'   },
		{ raw: 'ad_astra:chiseled_glacio_stone_bricks',   polished: 'ad_astra:glacio_stone_bricks'            },

		// Mars
		{ raw: 'ad_astra:mars_stone',                     polished: 'ad_astra:polished_mars_stone'            },
		{ raw: 'tfg:rock/hardened_mars_stone',            polished: 'ad_astra:polished_mars_stone'            },
		{ raw: 'ad_astra:mars_stone_bricks',              polished: 'ad_astra:chiseled_mars_stone_bricks'     },
		{ raw: 'ad_astra:chiseled_mars_stone_bricks',     polished: 'ad_astra:mars_stone_bricks'              },

		{ raw: 'ad_astra:venus_stone',                    polished: 'ad_astra:polished_venus_stone'           },
		{ raw: 'tfg:rock/hardened_venus_stone',           polished: 'ad_astra:polished_venus_stone'           },
		{ raw: 'ad_astra:venus_stone_bricks',             polished: 'ad_astra:chiseled_venus_stone_bricks'    },
		{ raw: 'ad_astra:venus_sandstone',                polished: 'ad_astra:venus_sandstone_bricks'         },
		{ raw: 'ad_astra:venus_sandstone_bricks',         polished: 'ad_astra:venus_sandstone'                },
				
		{ raw: 'gtceu:red_granite',                       polished: 'gtceu:polished_red_granite'              },
		{ raw: 'tfg:rock/hardened_red_granite',           polished: 'gtceu:polished_red_granite'              },
		{ raw: 'gtceu:red_granite_bricks',                polished: 'gtceu:red_granite_tile'                  },
		{ raw: 'gtceu:red_granite_tile',                  polished: 'gtceu:square_red_granite_bricks'         },
		{ raw: 'gtceu:square_red_granite_bricks',         polished: 'gtceu:red_granite_windmill_a'            },
		{ raw: 'gtceu:red_granite_windmill_a',            polished: 'gtceu:red_granite_windmill_b'            },
		{ raw: 'gtceu:red_granite_windmill_b',            polished: 'gtceu:small_red_granite_bricks'          },
		{ raw: 'gtceu:small_red_granite_bricks',          polished: 'gtceu:red_granite_small_tile'            },
		{ raw: 'gtceu:red_granite_small_tile',            polished: 'gtceu:chiseled_red_granite'              },
		{ raw: 'gtceu:chiseled_red_granite',              polished: 'gtceu:red_granite_bricks'                },

		{ raw: 'minecraft:smooth_red_sandstone',          polished: 'minecraft:cut_red_sandstone'             },
		{ raw: 'minecraft:cut_red_sandstone',             polished: 'minecraft:chiseled_red_sandstone'        },
		{ raw: 'minecraft:chiseled_red_sandstone',        polished: 'minecraft:smooth_red_sandstone'          },

		// Mercury
		{ raw: 'ad_astra:mercury_stone',                  polished: 'ad_astra:polished_mercury_stone'         },
		{ raw: 'tfg:rock/hardened_mercury_stone',         polished: 'ad_astra:polished_mercury_stone'         },
		{ raw: 'ad_astra:mercury_stone_bricks',           polished: 'ad_astra:chiseled_mercury_stone_bricks'  },
		{ raw: 'ad_astra:chiseled_mercury_stone_bricks',  polished: 'ad_astra:mercury_stone_bricks'           },

		// Europa
		{ raw: 'ad_astra:permafrost',                     polished: 'ad_astra:polished_permafrost'            },
		{ raw: 'ad_astra:permafrost_bricks',              polished: 'ad_astra:chiseled_permafrost_bricks'     },
		{ raw: 'ad_astra:chiseled_permafrost_bricks',     polished: 'ad_astra:permafrost_tiles'               },
		{ raw: 'ad_astra:permafrost_tiles',               polished: 'ad_astra:chiseled_permafrost_bricks'     },

		// Misc
		{ raw: 'ae2:sky_stone_block',                     polished: 'ae2:smooth_sky_stone_block'              },
		{ raw: 'ae2:smooth_sky_stone_block',              polished: 'ae2:sky_stone_brick'                     },
		{ raw: 'ae2:sky_stone_brick',                     polished: 'ae2:sky_stone_small_brick'               },
		{ raw: 'ae2:sky_stone_small_brick',               polished: 'ae2:smooth_sky_stone_block'              },
		{ raw: 'tfc:alabaster/raw',                       polished: 'tfc:alabaster/polished'                  },
		
		// Concrete
		{ raw: 'tfg:titanium_concrete',                   polished: 'tfg:polished_titanium_concrete'          },

		// Recon Stone
		{ raw: 'minecraft:stone',                         polished: 'minecraft:smooth_stone'                  },
		{ raw: 'minecraft:smooth_stone',                  polished: 'minecraft:stone'                         },

		{ raw: 'minecraft:stone_bricks',                  polished: 'minecraft:chiseled_stone_bricks'         },
		{ raw: 'minecraft:chiseled_stone_bricks',         polished: 'minecraft:stone_bricks'                  },

		// Quartz
		{ raw: 'minecraft:quartz_block',                  polished: 'minecraft:smooth_quartz'                 },
		{ raw: 'minecraft:smooth_quartz',                 polished: 'minecraft:quartz_bricks'                 },
		{ raw: 'minecraft:quartz_bricks',                 polished: 'minecraft:chiseled_quartz_block'         },
		{ raw: 'minecraft:chiseled_quartz_block',         polished: 'minecraft:quartz_block'                  },

		// Certus Quartz
		{ raw: 'ae2:quartz_block',                        polished: 'gtceu:certus_quartz_block'               },
		{ raw: 'gtceu:certus_quartz_block',               polished: 'ae2:cut_quartz_block'                    },
		{ raw: 'ae2:cut_quartz_block',                    polished: 'ae2:quartz_bricks'                       },
		{ raw: 'ae2:quartz_bricks',                       polished: 'ae2:chiseled_quartz_block'               },
		{ raw: 'ae2:chiseled_quartz_block',               polished: 'ae2:quartz_block'                        },

		// Other @Create Blocks
		{ raw: 'create:cut_andesite',                     polished: 'create:polished_cut_andesite'            },
		{ raw: 'create:cut_granite',                      polished: 'create:polished_cut_granite'             },
		{ raw: 'create:cut_diorite',                      polished: 'create:polished_cut_diorite'             },
		{ raw: 'create:limestone',                        polished: 'create:polished_cut_limestone'           },
		{ raw: 'create:cut_limestone',                    polished: 'create:polished_cut_limestone'           },

		{ raw: 'minecraft:calcite',                       polished: 'create:polished_cut_calcite'             },
		{ raw: 'create:cut_calcite',                      polished: 'create:polished_cut_calcite'             },
		{ raw: 'create:asurine',                          polished: 'create:polished_cut_asurine'             },
		{ raw: 'create:cut_asurine',                      polished: 'create:polished_cut_asurine'             },
		{ raw: 'create:crimsite',                         polished: 'create:polished_cut_crimsite'            },
		{ raw: 'create:cut_crimsite',                     polished: 'create:polished_cut_crimsite'            },
		{ raw: 'create:ochrum',                           polished: 'create:polished_cut_ochrum'              },
		{ raw: 'create:cut_ochrum',                       polished: 'create:polished_cut_ochrum'              },
		{ raw: 'create:scorchia',                         polished: 'create:polished_cut_scorchia'            },
		{ raw: 'create:cut_scorchia',                     polished: 'create:polished_cut_scorchia'            },
		{ raw: 'create:scoria',                           polished: 'create:polished_cut_scoria'              },
		{ raw: 'create:cut_scoria',                       polished: 'create:polished_cut_scoria'              },
		{ raw: 'minecraft:tuff',                          polished: 'create:polished_cut_tuff'                },
		{ raw: 'create:cut_tuff',                         polished: 'create:polished_cut_tuff'                },
		{ raw: 'create:veridium',                         polished: 'create:polished_cut_veridium'            },
		{ raw: 'create:cut_veridium',                     polished: 'create:polished_cut_veridium'            }
	]
	
	RAW_TO_POLISHED.forEach(x => {
		event.recipes.tfc.chisel(`${x.polished}`, `${x.raw}`, 'smooth')

		event.recipes.tfc.damage_inputs_shapeless_crafting(event.recipes.minecraft.crafting_shapeless(
			x.polished, [x.raw, '#tfc:chisels']
		))

		event.recipes.gtceu.laser_engraver(`${x.raw}_to_${x.polished}`.replace(/:/g, '_'))
			.itemInputs(x.raw)
			.itemOutputs(x.polished)
			.notConsumable('tfc:lens')
			.duration(30)
			.EUt(GTValues.VA[GTValues.ULV])
	})

	// #endregion RAW_TO_POLISHED
	
	// #region CRACKING
	const CRACKING = [
		{ raw: 'minecraft:deepslate_bricks',      cracked: 'minecraft:cracked_deepslate_bricks'      },
		{ raw: 'minecraft:deepslate_tiles',       cracked: 'minecraft:cracked_deepslate_tiles'       },
		{ raw: 'minecraft:nether_bricks',         cracked: 'minecraft:cracked_nether_bricks'         },
		{ raw: 'ad_astra:moon_stone_bricks',      cracked: 'ad_astra:cracked_moon_stone_bricks'      },
		{ raw: 'tfg:rock/bricks_moon_deepslate',  cracked: 'tfg:rock/cracked_bricks_moon_deepslate'  },
		{ raw: 'ad_astra:mars_stone_bricks',      cracked: 'ad_astra:cracked_mars_stone_bricks'      },
		{ raw: 'ad_astra:venus_stone_bricks',     cracked: 'ad_astra:cracked_venus_stone_bricks'     },
		{ raw: 'ad_astra:venus_sandstone_bricks', cracked: 'ad_astra:cracked_venus_sandstone_bricks' },
		{ raw: 'ad_astra:mercury_stone_bricks',   cracked: 'ad_astra:cracked_mercury_stone_bricks'   },
		{ raw: 'ad_astra:glacio_stone_bricks',    cracked: 'ad_astra:cracked_glacio_stone_bricks'    },
		{ raw: 'ad_astra:permafrost_bricks',      cracked: 'ad_astra:cracked_permafrost_bricks'      },
		{ raw: 'gtceu:red_granite_bricks',        cracked: 'gtceu:cracked_red_granite_bricks'        }
		
	]

	CRACKING.forEach(x => {
		event.recipes.tfc.damage_inputs_shapeless_crafting(event.recipes.minecraft.crafting_shapeless(
			x.cracked, [x.raw, '#tfc:hammers']
		))

		event.recipes.gtceu.forge_hammer(`${x.raw}_to_${x.cracked}`.replace(/:/g, '_'))
			.itemInputs(x.raw)
			.itemOutputs(x.cracked)
			.duration(12)
			.EUt(8)

		event.recipes.greate.pressing(x.cracked, x.raw)
			.recipeTier(0)
			.id(`greate:pressing/${x.raw}_to_${x.cracked}`.replace(/:/g, '_'))
	})
	// #endregion CRACKING

	// #region HAMMERING
	// Defined in kubejs/startup_scripts/tfg/constants.js
	global.HAMMERING.forEach(x => {
		event.recipes.gtceu.forge_hammer(`${x.raw}_to_${x.hammered}`.replace(/[: ]/g, '_'))
			.itemInputs(x.raw)
			.itemOutputs(x.hammered)
			.duration(x.duration)
			.EUt(x.eu)

		event.recipes.greate.pressing(x.hammered, x.raw)
			.recipeTier(x.eu <= 8 ? 0 : 1)
			.id(`greate:pressing/${x.raw}_to_${x.hammered}`.replace(/[: ]/g, '_'))
	})
	// #endregion HAMMERING

	// #region CUT_GRIND
	//
	// (spacing for region titles)
	//
	let CUT_GRIND = [
		// #region Nether
		// Deepslate
		{  raw:  'minecraft:deepslate',                         stair: 'tfg:rock/deepslate_stairs',                     slab: 'tfg:rock/deepslate_slab',                       wall: 'tfg:rock/deepslate_wall',
		   dust: 'gtceu:deepslate_dust',                        loose: null,                                            stonecutting: false }, // Raw

		{  raw:  'minecraft:cobbled_deepslate',                 stair: 'minecraft:cobbled_deepslate_stairs',            slab: 'minecraft:cobbled_deepslate_slab',              wall: 'minecraft:cobbled_deepslate_wall',
		   dust: 'gtceu:deepslate_dust', 		                loose: 'tfg:loose/deepslate',                           stonecutting: false }, // Cobble

		{  raw:  'tfg:rock/mossy_cobble_deepslate',             stair: 'tfg:rock/mossy_cobble_deepslate_stairs',        slab: 'tfg:rock/mossy_cobble_deepslate_slab',          wall: 'tfg:rock/mossy_cobble_deepslate_wall',
           dust: 'gtceu:deepslate_dust',                        loose: null,                                            stonecutting: true  }, // Cobble - Mossy

		{ raw:  'minecraft:polished_deepslate',                 stair: 'minecraft:polished_deepslate_stairs',           slab: 'minecraft:polished_deepslate_slab',             wall: 'minecraft:polished_deepslate_wall',
		  dust: 'gtceu:deepslate_dust',                         loose: null,                                            stonecutting: false }, // Smooth

		{ raw:  'create:cut_deepslate',                         stair: 'create:cut_deepslate_stairs',                   slab: 'create:cut_deepslate_slab',                     wall: 'create:cut_deepslate_wall',
		  dust: 'gtceu:deepslate_dust',                         loose: null,                                            stonecutting: false }, // Smooth - Extra

		{ raw:  'create:polished_cut_deepslate',                stair: 'create:polished_cut_deepslate_stairs',          slab: 'create:polished_cut_deepslate_slab',            wall: 'create:polished_cut_deepslate_wall',
		  dust: 'gtceu:deepslate_dust',                         loose: null,                                            stonecutting: false }, // Smooth - Extra

		{ raw:  'minecraft:deepslate_bricks',                   stair: 'minecraft:deepslate_brick_stairs',              slab: 'minecraft:deepslate_brick_slab',                wall: 'minecraft:deepslate_brick_wall',
		  dust: 'gtceu:deepslate_dust',                         loose: null,                                            stonecutting: false }, // Bricks

		{ raw:  'minecraft:cracked_deepslate_bricks',           stair: 'tfg:rock/cracked_bricks_deepslate_stairs',      slab: 'tfg:rock/cracked_bricks_deepslate_slab',        wall: 'tfg:rock/cracked_bricks_deepslate_wall',
		  dust: 'gtceu:deepslate_dust',                         loose: null,                                            stonecutting: true  }, // Bricks - Cracked
		
		{ raw:  'tfg:rock/mossy_bricks_deepslate',              stair: 'tfg:rock/mossy_bricks_deepslate_stairs',        slab: 'tfg:rock/mossy_bricks_deepslate_slab',          wall: 'tfg:rock/mossy_bricks_deepslate_wall',
		  dust: 'gtceu:deepslate_dust',                         loose: null,                                            stonecutting: true  }, // Bricks - Mossy
		
		{ raw:  'minecraft:deepslate_tiles',                    stair: 'minecraft:deepslate_tile_stairs',               slab: 'minecraft:deepslate_tile_slab',                 wall: 'minecraft:deepslate_tile_wall',
		  dust: 'gtceu:deepslate_dust',                         loose: null,                                            stonecutting: false }, // Bricks - Extra

		{ raw:  'minecraft:cracked_deepslate_tiles',            stair: 'tfg:rock/cracked_tiles_deepslate_stairs',       slab: 'tfg:rock/cracked_tiles_deepslate_slab',         wall: 'tfg:rock/cracked_tiles_deepslate_wall',
		  dust: 'gtceu:deepslate_dust',                         loose: null,                                            stonecutting: true  }, // Bricks - Cracked - Extra

		{ raw:  'create:cut_deepslate_bricks',                  stair: 'create:cut_deepslate_brick_stairs',             slab: 'create:cut_deepslate_brick_slab',               wall: 'create:cut_deepslate_brick_wall',
		  dust: 'gtceu:deepslate_dust',                         loose: null,                                            stonecutting: false }, // Bricks - Extra		
		
		{ raw:  'create:small_deepslate_bricks',                stair: 'create:small_deepslate_brick_stairs',           slab: 'create:small_deepslate_brick_slab',             wall: 'create:small_deepslate_brick_wall',
		  dust: 'gtceu:deepslate_dust',                         loose: null,                                            stonecutting: false }, // Bricks - Extra

		// Blackstone
		{ raw:  'minecraft:blackstone',                         stair: 'minecraft:blackstone_stairs',                   slab: 'minecraft:blackstone_slab',                     wall: 'minecraft:blackstone_wall',
		  dust: 'gtceu:blackstone_dust',                        loose: null,                                            stonecutting: false }, // Raw

		{ raw:  'tfg:rock/cobble_blackstone',                   stair: 'tfg:rock/cobble_blackstone_stairs',             slab: 'tfg:rock/cobble_blackstone_slab',               wall: 'tfg:rock/cobble_blackstone_wall',
		  dust: 'gtceu:blackstone_dust',                        loose: 'beneath:blackstone_pebble',                     stonecutting: true  }, // Cobble
		
		{ raw:  'tfg:rock/mossy_cobble_blackstone',             stair: 'tfg:rock/mossy_cobble_blackstone_stairs',       slab: 'tfg:rock/mossy_cobble_blackstone_slab',         wall: 'tfg:rock/mossy_cobble_blackstone_wall',
		  dust: 'gtceu:blackstone_dust',                        loose: null,                                            stonecutting: true  }, // Cobble - Mossy

		{ raw:  'minecraft:polished_blackstone',                stair: 'minecraft:polished_blackstone_stairs',          slab: 'minecraft:polished_blackstone_slab',            wall: 'minecraft:polished_blackstone_wall',
		  dust: 'gtceu:blackstone_dust',                        loose: null,                                            stonecutting: false }, // Smooth

		{ raw:  'minecraft:polished_blackstone_bricks',         stair: 'minecraft:polished_blackstone_brick_stairs',    slab: 'minecraft:polished_blackstone_brick_slab',      wall: 'minecraft:polished_blackstone_brick_wall',
		  dust: 'gtceu:blackstone_dust',                        loose: null,                                            stonecutting: false }, // Bricks

		{ raw:  'minecraft:cracked_polished_blackstone_bricks', stair: 'tfg:rock/cracked_bricks_blackstone_stairs',     slab: 'tfg:rock/cracked_bricks_blackstone_slab',       wall: 'tfg:rock/cracked_bricks_blackstone_wall',
		  dust: 'gtceu:blackstone_dust',                 	    loose: null,                                            stonecutting: true },  // Bricks - Cracked

		{ raw:  'tfg:rock/mossy_bricks_blackstone',             stair: 'tfg:rock/mossy_bricks_blackstone_stairs',       slab: 'tfg:rock/mossy_bricks_blackstone_slab',         wall: 'tfg:rock/mossy_bricks_blackstone_wall',
		  dust: 'gtceu:blackstone_dust',                 	    loose: null,                                            stonecutting: true },  // Bricks - Mossy

		// Dripstone
		{ raw:  'minecraft:dripstone_block',                    stair: 'tfg:rock/dripstone_stairs',                     slab: 'tfg:rock/dripstone_slab',                       wall: 'tfg:rock/dripstone_wall',
		  dust: 'tfg:dripstone_dust',                           loose: null,                                            stonecutting: true  }, // Raw

		{ raw:  'tfg:rock/cobble_dripstone',                    stair: 'tfg:rock/cobble_dripstone_stairs',              slab: 'tfg:rock/cobble_dripstone_slab',                wall: 'tfg:rock/cobble_dripstone_wall',
		  dust: 'tfg:dripstone_dust',                           loose: 'tfg:loose/dripstone',                           stonecutting: true  }, // Cobble
		
		{ raw:  'tfg:rock/mossy_cobble_dripstone',              stair: 'tfg:rock/mossy_cobble_dripstone_stairs',        slab: 'tfg:rock/mossy_cobble_dripstone_slab',          wall: 'tfg:rock/mossy_cobble_dripstone_wall',
		  dust: 'tfg:dripstone_dust',                           loose: null,                                            stonecutting: true },  // Cobble - Mossy

		{ raw:  'create:polished_cut_dripstone',                stair: 'create:polished_cut_dripstone_stairs',          slab: 'create:polished_cut_dripstone_slab',            wall: 'create:polished_cut_dripstone_wall',
		  dust: 'tfg:dripstone_dust',                           loose: null,                                            stonecutting: false }, // Smooth

		{ raw:  'create:cut_dripstone',                         stair: 'create:cut_dripstone_stairs',                   slab: 'create:cut_dripstone_slab',                     wall: 'create:cut_dripstone_wall',
		  dust: 'tfg:dripstone_dust',                           loose: null,                                            stonecutting: false }, // Smooth

		{ raw:  'create:cut_dripstone_bricks',                  stair: 'create:cut_dripstone_brick_stairs',             slab: 'create:cut_dripstone_brick_slab',               wall: 'create:cut_dripstone_brick_wall',
		  dust: 'tfg:dripstone_dust',                           loose: null,                                            stonecutting: false }, // Bricks

		{ raw:  'tfg:rock/cracked_bricks_dripstone',            stair: 'tfg:rock/cracked_bricks_dripstone_stairs',      slab: 'tfg:rock/cracked_bricks_dripstone_slab',        wall: 'tfg:rock/cracked_bricks_dripstone_wall',
		  dust: 'tfg:dripstone_dust',                           loose: null,                                            stonecutting: true  }, // Bricks - Cracked

		{ raw:  'tfg:rock/mossy_bricks_dripstone',              stair: 'tfg:rock/mossy_bricks_dripstone_stairs',        slab: 'tfg:rock/mossy_bricks_dripstone_slab',          wall: 'tfg:rock/mossy_bricks_dripstone_wall',
		  dust: 'tfg:dripstone_dust',                           loose: null,                                            stonecutting: true  }, // Bricks - Mossy

		{ raw:  'create:small_dripstone_bricks',                stair: 'create:small_dripstone_brick_stairs',           slab: 'create:small_dripstone_brick_slab',             wall: 'create:small_dripstone_brick_wall',
		  dust: 'tfg:dripstone_dust',                           loose: null,                                            stonecutting: false }, // Bricks - Extra

		// Crackrack / Nether
		{ raw:  'beneath:crackrack',                            stair: 'tfg:rock/crackrack_stairs',                     slab: 'tfg:rock/crackrack_slab',                       wall: 'tfg:rock/crackrack_wall',
		  dust: 'gtceu:netherrack_dust',                        loose: null,                                            stonecutting: true  }, // Raw

		{ raw:  'tfg:rock/cobble_crackrack',                    stair: 'tfg:rock/cobble_crackrack_stairs',              slab: 'tfg:rock/cobble_crackrack_slab',                wall: 'tfg:rock/cobble_crackrack_wall',
		  dust: 'gtceu:netherrack_dust',                        loose: 'tfg:loose/crackrack',                           stonecutting: true  }, // Cobble
    
		{ raw:  'tfg:rock/mossy_cobble_crackrack',              stair: 'tfg:rock/mossy_cobble_crackrack_stairs',        slab: 'tfg:rock/mossy_cobble_crackrack_slab',          wall: 'tfg:rock/mossy_cobble_crackrack_wall',
		  dust: 'gtceu:netherrack_dust',                        loose: null,                                            stonecutting: true  }, // Cobble - Mossy

		{ raw:  'tfg:rock/polished_crackrack',                  stair: 'tfg:rock/polished_crackrack_stairs',            slab: 'tfg:rock/polished_crackrack_slab',              wall: 'tfg:rock/polished_crackrack_wall',
		  dust: 'gtceu:netherrack_dust',                        loose: null,                                            stonecutting: true  }, // Smooth

		{ raw:  'minecraft:nether_bricks',                      stair: 'minecraft:nether_brick_stairs',                 slab: 'minecraft:nether_brick_slab',                   wall: 'minecraft:nether_brick_wall',
		  dust: 'gtceu:netherrack_dust',                        loose: null,                                            stonecutting: true  }, // Bricks

		{ raw:  'minecraft:cracked_nether_bricks',              stair: 'tfg:rock/cracked_bricks_nether_stairs',         slab: 'tfg:rock/cracked_bricks_nether_slab',           wall: 'tfg:rock/cracked_bricks_nether_wall',
		  dust: 'gtceu:netherrack_dust',                        loose: null,                                            stonecutting: true  }, // Bricks - Cracked
		
		{ raw:  'tfg:rock/mossy_bricks_nether',                 stair: 'tfg:rock/mossy_bricks_nether_stairs',           slab: 'tfg:rock/mossy_bricks_nether_slab',             wall: 'tfg:rock/mossy_bricks_nether_wall',
		  dust: 'gtceu:netherrack_dust',                        loose: null,                                            stonecutting: true  }, // Bricks - Mossy

		// #endregion Nether
	]

	// #region Space
	const AA_REGULAR_STONES = ['moon', 'mars', 'venus', 'mercury', 'glacio']

	CUT_GRIND = CUT_GRIND.concat( (AA_REGULAR_STONES ? AA_REGULAR_STONES : []).map(stone => (
		{ raw:  `ad_astra:${stone}_stone`,                      stair: `ad_astra:${stone}_stone_stairs`,                slab: `ad_astra:${stone}_stone_slab`,                  wall: `tfg:rock/${stone}_stone_wall`,
	      dust: `tfg:${stone}_stone_dust`,                      loose: null,                                            stonecutting: true }   // Raw
	)) )
	CUT_GRIND = CUT_GRIND.concat( (AA_REGULAR_STONES ? AA_REGULAR_STONES : []).map(stone => (
		{ raw:  `ad_astra:${stone}_cobblestone`,                stair: `ad_astra:${stone}_cobblestone_stairs`,          slab: `ad_astra:${stone}_cobblestone_slab`,            wall: `tfg:rock/cobble_${stone}_wall`,
		  dust: `tfg:${stone}_stone_dust`,                      loose: `tfg:loose/${stone}_stone`,                      stonecutting: true }   // Cobble
	)) )
	CUT_GRIND = CUT_GRIND.concat( (AA_REGULAR_STONES ? AA_REGULAR_STONES : []).map(stone => (
		{ raw:  `tfg:rock/mossy_cobble_${stone}`,               stair: `tfg:rock/mossy_cobble_${stone}_stairs`,         slab: `tfg:rock/mossy_cobble_${stone}_slab`,           wall: `tfg:rock/mossy_cobble_${stone}_wall`,
		  dust: `tfg:${stone}_stone_dust`,                      loose: null,                                            stonecutting: true }   // Cobble - Mossy
	)) )
	CUT_GRIND = CUT_GRIND.concat( (AA_REGULAR_STONES ? AA_REGULAR_STONES : []).map(stone => (
		{ raw:  `ad_astra:polished_${stone}_stone`,             stair: `ad_astra:polished_${stone}_stone_stairs`,       slab: `ad_astra:polished_${stone}_stone_slab`,         wall: `tfg:rock/polished_${stone}_wall`,
		  dust: `tfg:${stone}_stone_dust`,                      loose: null,                                            stonecutting: true }   // Smooth
	)) )
	CUT_GRIND = CUT_GRIND.concat( (AA_REGULAR_STONES ? AA_REGULAR_STONES : []).map(stone => (
		{ raw:  `ad_astra:${stone}_stone_bricks`,               stair: `ad_astra:${stone}_stone_brick_stairs`,          slab: `ad_astra:${stone}_stone_brick_slab`,            wall: `ad_astra:${stone}_stone_brick_wall`,
		  dust: `tfg:${stone}_stone_dust`,                      loose: null,                                            stonecutting: true }   // Bricks
	)) )
	CUT_GRIND = CUT_GRIND.concat( (AA_REGULAR_STONES ? AA_REGULAR_STONES : []).map(stone => (
		{ raw:  `ad_astra:cracked_${stone}_stone_bricks`,       stair: `tfg:rock/cracked_bricks_${stone}_stairs`,       slab: `tfg:rock/cracked_bricks_${stone}_slab`,         wall: `tfg:rock/cracked_bricks_${stone}_wall`,
		  dust: `tfg:${stone}_stone_dust`,                      loose: null,                                            stonecutting: true }   // Bricks - Cracked
	)) )
	CUT_GRIND = CUT_GRIND.concat( (AA_REGULAR_STONES ? AA_REGULAR_STONES : []).map(stone => (
		{ raw:  `tfg:rock/mossy_bricks_${stone}`,               stair: `tfg:rock/mossy_bricks_${stone}_stairs`,         slab: `tfg:rock/mossy_bricks_${stone}_slab`,           wall: `tfg:rock/mossy_bricks_${stone}_wall`,
		  dust: `tfg:${stone}_stone_dust`,                      loose: null,                                            stonecutting: true }   // Bricks - Mossy
	)) )
	CUT_GRIND = CUT_GRIND.concat( (AA_REGULAR_STONES ? AA_REGULAR_STONES : []).map(stone => (
		{ raw:  `ad_astra:chiseled_${stone}_stone_bricks`,      stair: `ad_astra:chiseled_${stone}_stone_stairs`,       slab: `ad_astra:chiseled_${stone}_stone_slab`,         wall: `tfg:rock/chiseled_bricks_${stone}_wall`,
		  dust: `tfg:${stone}_stone_dust`,                      loose: null,                                            stonecutting: true }   // Bricks - Extra
	)) )

	CUT_GRIND = CUT_GRIND.concat([
		// Moon Deepstone
		{ raw:  'ad_astra:moon_deepslate',                      stair: 'tfg:rock/moon_deepslate_stairs',                 slab: 'tfg:rock/moon_deepslate_slab',                 wall: 'tfg:rock/moon_deepslate_wall',
		  dust: 'tfg:moon_deepslate_dust',                      loose: null,                                             stonecutting: true  }, // Raw

		{ raw:  'tfg:rock/cobble_moon_deepslate',               stair: 'tfg:rock/cobble_moon_deepslate_stairs',          slab: 'tfg:rock/cobble_moon_deepslate_slab',          wall: 'tfg:rock/cobble_moon_deepslate_wall',
		  dust: 'tfg:moon_deepslate_dust',                      loose: 'tfg:loose/moon_deepslate',                       stonecutting: true  }, // Cobble

		{ raw:  'tfg:rock/mossy_cobble_moon_deepslate',         stair: 'tfg:rock/mossy_cobble_moon_deepslate_stairs',    slab: 'tfg:rock/mossy_cobble_moon_deepslate_slab',    wall: 'tfg:rock/mossy_cobble_moon_deepslate_wall',
		  dust: 'tfg:moon_deepslate_dust',                      loose: null,                                             stonecutting: true  }, // Cobble - Mossy

		{ raw:  'tfg:rock/polished_moon_deepslate',             stair: 'tfg:rock/polished_moon_deepslate_stairs',        slab: 'tfg:rock/polished_moon_deepslate_slab',        wall: 'tfg:rock/polished_moon_deepslate_wall',
		  dust: 'tfg:moon_deepslate_dust',                      loose: null,                                             stonecutting: true  }, // Smooth

		{ raw:  'tfg:rock/bricks_moon_deepslate',               stair: 'tfg:rock/bricks_moon_deepslate_stairs',          slab: 'tfg:rock/bricks_moon_deepslate_slab',          wall: 'tfg:rock/bricks_moon_deepslate_wall',
		  dust: 'tfg:moon_deepslate_dust',                      loose: null,                                             stonecutting: true  }, // Bricks

		{ raw:  'tfg:rock/cracked_bricks_moon_deepslate',       stair: 'tfg:rock/cracked_bricks_moon_deepslate_stairs',  slab: 'tfg:rock/cracked_bricks_moon_deepslate_slab',  wall: 'tfg:rock/cracked_bricks_moon_deepslate_wall',
		  dust: 'tfg:moon_deepslate_dust',                      loose: null,                                             stonecutting: true  }, // Bricks - Cracked

		{ raw:  'tfg:rock/mossy_bricks_moon_deepslate',         stair: 'tfg:rock/mossy_bricks_moon_deepslate_stairs'  ,  slab: 'tfg:rock/mossy_bricks_moon_deepslate_slab',    wall: 'tfg:rock/mossy_bricks_moon_deepslate_wall',
		  dust: 'tfg:moon_deepslate_dust',                      loose: null,                                             stonecutting: true  }, // Bricks - Mossy

		{ raw:  'tfg:rock/chiseled_bricks_moon_deepslate',      stair: 'tfg:rock/chiseled_bricks_moon_deepslate_stairs', slab: 'tfg:rock/chiseled_bricks_moon_deepslate_slab', wall: 'tfg:rock/chiseled_bricks_moon_deepslate_wall',
		  dust: 'tfg:moon_deepslate_dust',                      loose: null,                                             stonecutting: true  }, // Bricks - Extra

		// Permafrost
		{ raw:  'ad_astra:permafrost',                          stair: 'tfg:rock/permafrost_stairs',                     slab: 'tfg:rock/permafrost_slab',                     wall: 'tfg:rock/permafrost_wall',
		  dust: 'gtceu:ice_dust',                               loose: null,                                             stonecutting: true  }, // Raw

		{ raw:  'tfg:rock/cobble_permafrost',                   stair: 'tfg:rock/cobble_permafrost_stairs',              slab: 'tfg:rock/cobble_permafrost_slab',              wall: 'tfg:rock/cobble_permafrost_wall',
		  dust: 'gtceu:ice_dust',                               loose: 'tfg:loose/permafrost',                           stonecutting: true  }, // Cobble

		{ raw:  'tfg:rock/mossy_cobble_permafrost',             stair: 'tfg:rock/mossy_cobble_permafrost_stairs',        slab: 'tfg:rock/mossy_cobble_permafrost_slab',        wall: 'tfg:rock/mossy_cobble_permafrost_wall',
		  dust: 'gtceu:ice_dust',                               loose: null,                                             stonecutting: true  }, // Cobble - Mossy

		{ raw:  'ad_astra:polished_permafrost',                 stair: 'ad_astra:polished_permafrost_stairs',            slab: 'ad_astra:polished_permafrost_slab',            wall: 'tfg:rock/polished_permafrost_wall',
		  dust: 'gtceu:ice_dust',                               loose: null,                                             stonecutting: true  }, // Smooth

		{ raw:  'ad_astra:permafrost_bricks',                   stair: 'ad_astra:permafrost_brick_stairs',               slab: 'ad_astra:permafrost_brick_slab',               wall: 'ad_astra:permafrost_brick_wall',
		  dust: 'gtceu:ice_dust',                               loose: null,                                             stonecutting: true  }, // Bricks

		{ raw:  'ad_astra:cracked_permafrost_bricks',           stair: 'tfg:rock/cracked_bricks_permafrost_stairs',      slab: 'tfg:rock/cracked_bricks_permafrost_slab',      wall: 'tfg:rock/cracked_bricks_permafrost_wall',
		  dust: 'gtceu:ice_dust',                               loose: null,                                             stonecutting: true  }, // Bricks - Cracked

		{ raw:  'tfg:rock/mossy_bricks_permafrost',             stair: 'tfg:rock/mossy_bricks_permafrost_stairs',        slab: 'tfg:rock/mossy_bricks_permafrost_slab',        wall: 'tfg:rock/mossy_bricks_permafrost_wall',
		  dust: 'gtceu:ice_dust',                               loose: null,                                             stonecutting: true  }, // Bricks - Mossy

		{ raw:  'ad_astra:chiseled_permafrost_bricks',          stair: 'ad_astra:chiseled_permafrost_brick_stairs',      slab: 'ad_astra:chiseled_permafrost_brick_slab',      wall: 'tfg:rock/chiseled_bricks_permafrost_wall',
		  dust: 'gtceu:ice_dust',                               loose: null,                                             stonecutting: true  }, // Bricks - Extra

		// Red Granite
		{ raw:  'gtceu:red_granite',                            stair: 'tfg:rock/red_granite_stairs',                    slab: 'tfg:rock/red_granite_slab',                    wall: 'tfg:rock/red_granite_wall',
		  dust: 'gtceu:granite_red_dust',                       loose: null,                                             stonecutting: true  }, // Raw

		{ raw:  'gtceu:red_granite_cobblestone',                stair: 'tfg:rock/cobble_red_granite_stairs',             slab: 'tfg:rock/cobble_red_granite_slab',             wall: 'tfg:rock/cobble_red_granite_wall',
		  dust: 'gtceu:granite_red_dust',                       loose: 'tfg:loose/red_granite',                          stonecutting: true  }, // Cobble

		{ raw:  'gtceu:mossy_red_granite_cobblestone',          stair: 'tfg:rock/mossy_cobble_red_granite_stairs',       slab: 'tfg:rock/mossy_cobble_red_granite_slab',       wall: 'tfg:rock/mossy_cobble_red_granite_wall',
		  dust: 'gtceu:granite_red_dust',                       loose: null,                                             stonecutting: true  }, // Cobble - Mossy

		{ raw:  'gtceu:polished_red_granite',                   stair: 'tfg:rock/polished_red_granite_stairs',           slab: 'tfg:rock/polished_red_granite_slab',           wall: 'tfg:rock/polished_red_granite_wall',
		  dust: 'gtceu:granite_red_dust',                       loose: null,                                             stonecutting: true  }, // Smooth

		{ raw:  'gtceu:red_granite_bricks',                     stair: 'tfg:rock/bricks_red_granite_stairs',             slab: 'tfg:rock/bricks_red_granite_slab',             wall: 'tfg:rock/bricks_red_granite_wall',
		  dust: 'gtceu:granite_red_dust',                       loose: null,                                             stonecutting: true  }, // Bricks

		{ raw:  'gtceu:cracked_red_granite_bricks',             stair: 'tfg:rock/cracked_bricks_red_granite_stairs',     slab: 'tfg:rock/cracked_bricks_red_granite_slab',     wall: 'tfg:rock/cracked_bricks_red_granite_wall',
		  dust: 'gtceu:granite_red_dust',                       loose: null,                                             stonecutting: true  }, // Bricks - Cracked

		{ raw:  'gtceu:mossy_red_granite_bricks',               stair: 'tfg:rock/mossy_bricks_red_granite_stairs',       slab: 'tfg:rock/mossy_bricks_red_granite_slab',       wall: 'tfg:rock/mossy_bricks_red_granite_wall',
		  dust: 'gtceu:granite_red_dust',                       loose: null,                                             stonecutting: true  }, // Bricks - Mossy
		
		// Red Sandstone
		{ raw:  'minecraft:red_sandstone',                      stair: 'minecraft:red_sandstone_stairs',                 slab: 'minecraft:red_sandstone_slab',                 wall: 'minecraft:red_sandstone_wall',
		  dust: null,                                           loose: null,                                             stonecutting: true  }, // Raw

		{ raw:  'minecraft:smooth_red_sandstone',               stair: 'minecraft:smooth_red_sandstone_stairs',          slab: 'minecraft:smooth_red_sandstone_slab',          wall: 'tfg:rock/smooth_red_sandstone_wall',
		  dust: null,                                           loose: null,                                             stonecutting: true  }, // Smooth

		{ raw:  'minecraft:cut_red_sandstone',                  stair: 'tfg:rock/cut_red_sandstone_stairs',              slab: 'minecraft:smooth_red_sandstone_slab',          wall: 'tfg:rock/cut_red_sandstone_wall',
		  dust: null,                                           loose: null,                                             stonecutting: true  }, // Smooth - Extra

		// Venus Sandstone
		{ raw:  'ad_astra:venus_sandstone_bricks',              stair: 'ad_astra:venus_sandstone_brick_stairs',          slab: 'ad_astra:venus_sandstone_brick_slab',          wall: 'tfg:rock/bricks_venus_sandstone_wall',
		  dust: null,                                           loose: null,                                             stonecutting: true  }, // Bricks

		{ raw:  'ad_astra:cracked_venus_sandstone_bricks',      stair: 'tfg:rock/cracked_bricks_venus_sandstone_stairs', slab: 'tfg:rock/cracked_bricks_venus_sandstone_slab', wall: 'tfg:rock/cracked_bricks_venus_sandstone_wall',
		  dust: null,                                           loose: null,                                             stonecutting: true  }, // Bricks - Cracked

		// Certus Quartz
		{ raw:  'ae2:quartz_block',                             stair: 'ae2:quartz_stairs',                              slab: 'ae2:quartz_slab',                              wall: 'ae2:quartz_wall',
		  dust: null,                                           loose: null,                                             stonecutting: false  }, // Raw

		{ raw:  'ae2:cut_quartz_block',                         stair: 'ae2:cut_quartz_stairs',                          slab: 'ae2:cut_quartz_slab',                          wall: 'ae2:cut_quartz_wall',
		  dust: null,                                           loose: null,                                             stonecutting: false  }, // Smooth

		{ raw:  'ae2:quartz_bricks',                            stair: 'ae2:quartz_brick_stairs',                        slab: 'ae2:quartz_brick_slab',                        wall: 'ae2:quartz_brick_wall',
		  dust: null,                                           loose: null,                                             stonecutting: false  }, // Bricks

		{ raw:  'ae2:chiseled_quartz_block',                    stair: 'ae2:chiseled_quartz_stairs',                     slab: 'ae2:chiseled_quartz_slab',                     wall: 'ae2:chiseled_quartz_wall',
		  dust: null,                                           loose: null,                                             stonecutting: false  }, // Chiseled

		{ raw:  'ae2:quartz_pillar',                            stair: 'ae2:quartz_pillar_stairs',                       slab: 'ae2:quartz_pillar_slab',                       wall: 'ae2:quartz_pillar_wall',
		  dust: null,                                           loose: null,                                             stonecutting: false  }, // Pillar
		
		// Other Space Blocks
		{ raw:  'ae2:sky_stone_block',                          stair: 'ae2:sky_stone_stairs',                           slab: 'ae2:sky_stone_slab',                           wall: 'ae2:sky_stone_wall',
		  dust: 'ae2:sky_dust',                                 loose: null,                                             stonecutting: true  },
		
		{ raw:  'ae2:smooth_sky_stone_block',                   stair: 'ae2:smooth_sky_stone_stairs',                    slab: 'ae2:smooth_sky_stone_slab',                    wall: 'ae2:smooth_sky_stone_wall',
		  dust: 'ae2:sky_dust',                                 loose: null,                                             stonecutting: true  },

		{ raw:  'ae2:sky_stone_brick',                          stair: 'ae2:sky_stone_brick_stairs',                     slab: 'ae2:sky_stone_brick_slab',                     wall: 'ae2:sky_stone_brick_wall',
		  dust: 'ae2:sky_dust',                                 loose: null,                                             stonecutting: true  },
		
		{ raw:  'ae2:sky_stone_small_brick',                    stair: 'ae2:sky_stone_small_brick_stairs',               slab: 'ae2:sky_stone_small_brick_slab',               wall: 'ae2:sky_stone_small_brick_wall',
		  dust: 'ae2:sky_dust',                                 loose: null,                                             stonecutting: true  },		
		
		{ raw:  'ae2:fluix_block',                              stair: 'ae2:fluix_stairs',                               slab: 'ae2:fluix_slab',                               wall: 'ae2:fluix_wall',
		  dust: 'ae2:fluix_dust',                               loose: null,                                             stonecutting: true  },

		{ raw:  'minecraft:purpur_block',                       stair: 'minecraft:purpur_stairs',                        slab: 'minecraft:purpur_slab',                        wall: null,
		  dust: null,                                           loose: null,                                             stonecutting: true  },
		// #endregion Space

		// #region Vanilla Blocks
		// Reconstituted Stone
		{ raw:  'minecraft:stone',                              stair: 'minecraft:stone_stairs',                         slab: 'minecraft:stone_slab',                         wall: 'tfg:rock/stone_wall',
		  dust: 'gtceu:stone_dust',                             loose: null,                                             stonecutting: true  }, // Raw

		{ raw:  'minecraft:cobblestone',                        stair: 'minecraft:cobblestone_stairs',                   slab: 'minecraft:cobblestone_slab',                   wall: 'minecraft:cobblestone_wall',
		  dust: 'gtceu:stone_dust',                             loose: null,                                             stonecutting: true  }, // Cobble

		{ raw:  'minecraft:mossy_cobblestone',                  stair: 'minecraft:mossy_cobblestone_stairs',             slab: 'minecraft:mossy_cobblestone_slab',             wall: 'minecraft:mossy_cobblestone_wall',
		  dust: 'gtceu:stone_dust',                             loose: null,                                             stonecutting: true  }, // Cobble - Mossy

		{ raw:  'minecraft:smooth_stone',                       stair: 'tfg:rock/smooth_stone_stairs',                   slab: 'minecraft:smooth_stone_slab',                  wall: 'tfg:rock/smooth_stone_wall',
		  dust: 'gtceu:stone_dust',                             loose: null,                                             stonecutting: true  }, // Smooth

		{ raw:  'minecraft:stone_bricks',                       stair: 'minecraft:stone_brick_stairs',                   slab: 'minecraft:stone_brick_slab',                   wall: 'minecraft:stone_brick_wall',
		  dust: 'gtceu:stone_dust',                             loose: null,                                             stonecutting: true  }, // Brick

		{ raw:  'minecraft:cracked_stone_bricks',               stair: 'tfg:rock/cracked_bricks_stone_stairs',           slab: 'tfg:rock/cracked_bricks_stone_slab',           wall: 'tfg:rock/cracked_bricks_stone_wall',
		  dust: 'gtceu:stone_dust',                             loose: null,                                             stonecutting: true  }, // Brick - Cracked

		{ raw:  'minecraft:mossy_stone_bricks',                 stair: 'minecraft:mossy_stone_brick_stairs',             slab: 'minecraft:mossy_stone_brick_slab',             wall: 'minecraft:mossy_stone_brick_wall',
		  dust: 'gtceu:stone_dust',                             loose: null,                                             stonecutting: true  }, // Brick - Mossy
		
		// Quartz
		{ raw:  'minecraft:quartz_block',                       stair: 'minecraft:quartz_stairs',                        slab: 'minecraft:quartz_slab',                        wall: 'tfg:rock/quartz_wall',
		  dust: null,                                           loose: null,                                             stonecutting: false  }, // Raw

		{ raw:  'minecraft:smooth_quartz',                      stair: 'minecraft:smooth_quartz_stairs',                 slab: 'minecraft:quartz_slab',                        wall: 'tfg:rock/smooth_quartz_wall',
		  dust: null,                                           loose: null,                                             stonecutting: false  }, // Smooth
		
		// #endregion Vanilla Blocks
	    // #region @Create Stones
		// @Create Andesite
		{ raw:  'create:cut_andesite',                          stair: 'create:cut_andesite_stairs',                     slab: 'create:cut_andesite_slab',                     wall: 'create:cut_andesite_wall',
		  dust: 'gtceu:andesite_dust',                          loose: null,                                             stonecutting: false  }, // Raw

		{ raw:  'create:polished_cut_andesite',                 stair: 'create:polished_cut_andesite_stairs',            slab: 'create:polished_cut_andesite_slab',            wall: 'create:polished_cut_andesite_wall',
		  dust: 'gtceu:andesite_dust',                          loose: null,                                             stonecutting: false  }, // Smooth

		{ raw:  'create:cut_andesite_bricks',                   stair: 'create:cut_andesite_brick_stairs',               slab: 'create:cut_andesite_brick_slab',               wall: 'create:cut_andesite_brick_wall',
		  dust: 'gtceu:andesite_dust',                          loose: null,                                             stonecutting: false  }, // Bricks

		{ raw:  'create:small_andesite_bricks',                 stair: 'create:small_andesite_brick_stairs',             slab: 'create:small_andesite_brick_slab',             wall: 'create:small_andesite_brick_wall',
		  dust: 'gtceu:andesite_dust',                          loose: null,                                             stonecutting: false  }, // Bricks - Extra

		// @Create Calcite
		{ raw:  'create:cut_calcite',                           stair: 'create:cut_calcite_stairs',                      slab: 'create:cut_calcite_slab',                      wall: 'create:cut_calcite_wall',
		  dust: 'gtceu:calcite_dust',                           loose: null,                                             stonecutting: false  }, // Raw

		{ raw:  'create:polished_cut_calcite',                  stair: 'create:polished_cut_calcite_stairs',             slab: 'create:polished_cut_calcite_slab',             wall: 'create:polished_cut_calcite_wall',
		  dust: 'gtceu:calcite_dust',                           loose: null,                                             stonecutting: false  }, // Smooth

		{ raw:  'create:cut_calcite_bricks',                    stair: 'create:cut_calcite_brick_stairs',                slab: 'create:cut_calcite_brick_slab',                wall: 'create:cut_calcite_brick_wall',
		  dust: 'gtceu:calcite_dust',                           loose: null,                                             stonecutting: false  }, // Bricks

		{ raw:  'create:small_calcite_bricks',                  stair: 'create:small_calcite_brick_stairs',              slab: 'create:small_calcite_brick_slab',              wall: 'create:small_calcite_brick_wall',
		  dust: 'gtceu:calcite_dust',                           loose: null,                                             stonecutting: false  }, // Bricks - Extra

		// @Create Granite (Chert)
		{ raw:  'create:cut_granite',                           stair: 'create:cut_granite_stairs',                      slab: 'create:cut_granite_slab',                      wall: 'create:cut_granite_wall',
		  dust: 'tfg:chert_dust',                               loose: null,                                             stonecutting: false  }, // Raw

		{ raw:  'create:polished_cut_granite',                  stair: 'create:polished_cut_granite_stairs',             slab: 'create:polished_cut_granite_slab',             wall: 'create:polished_cut_granite_wall',
		  dust: 'tfg:chert_dust',                               loose: null,                                             stonecutting: false  }, // Smooth

		{ raw:  'create:cut_granite_bricks',                    stair: 'create:cut_granite_brick_stairs',                slab: 'create:cut_granite_brick_slab',                wall: 'create:cut_granite_brick_wall',
		  dust: 'tfg:chert_dust',                               loose: null,                                             stonecutting: false  }, // Bricks

		{ raw:  'create:small_granite_bricks',                  stair: 'create:small_granite_brick_stairs',              slab: 'create:small_granite_brick_slab',              wall: 'create:small_granite_brick_wall',
		  dust: 'tfg:chert_dust',                               loose: null,                                             stonecutting: false  }, // Bricks - Extra

		// @Create Diorite
		{ raw:  'create:cut_diorite',                           stair: 'create:cut_diorite_stairs',                      slab: 'create:cut_diorite_slab',                      wall: 'create:cut_diorite_wall',
		  dust: 'gtceu:diorite_dust',                           loose: null,                                             stonecutting: false  }, // Raw

		{ raw:  'create:polished_cut_diorite',                  stair: 'create:polished_cut_diorite_stairs',             slab: 'create:polished_cut_diorite_slab',             wall: 'create:polished_cut_diorite_wall',
		  dust: 'gtceu:diorite_dust',                           loose: null,                                             stonecutting: false  }, // Smooth

		{ raw:  'create:cut_diorite_bricks',                    stair: 'create:cut_diorite_brick_stairs',                slab: 'create:cut_diorite_brick_slab',                wall: 'create:cut_diorite_brick_wall',
		  dust: 'gtceu:diorite_dust',                           loose: null,                                             stonecutting: false  }, // Bricks

		{ raw:  'create:small_diorite_bricks',                  stair: 'create:small_diorite_brick_stairs',              slab: 'create:small_diorite_brick_slab',              wall: 'create:small_diorite_brick_wall',
		  dust: 'gtceu:diorite_dust',                           loose: null,                                             stonecutting: false  }, // Bricks - Extra

		// @Create Limestone
		{ raw:  'create:cut_limestone',                         stair: 'create:cut_limestone_stairs',                    slab: 'create:cut_limestone_slab',                    wall: 'create:cut_limestone_wall',
		  dust: 'tfg:limestone_dust',                           loose: null,                                             stonecutting: false  }, // Raw

		{ raw:  'create:polished_cut_limestone',                stair: 'create:polished_cut_limestone_stairs',           slab: 'create:polished_cut_limestone_slab',           wall: 'create:polished_cut_limestone_wall',
		  dust: 'tfg:limestone_dust',                           loose: null,                                             stonecutting: false  }, // Smooth

		{ raw:  'create:cut_limestone_bricks',                  stair: 'create:cut_limestone_brick_stairs',              slab: 'create:cut_limestone_brick_slab',              wall: 'create:cut_limestone_brick_wall',
		  dust: 'tfg:limestone_dust',                           loose: null,                                             stonecutting: false  }, // Bricks

		{ raw:  'create:small_limestone_bricks',                stair: 'create:small_limestone_brick_stairs',            slab: 'create:small_limestone_brick_slab',            wall: 'create:small_limestone_brick_wall',
		  dust: 'tfg:limestone_dust',                           loose: null,                                             stonecutting: false  }, // Bricks - Extra

		// @Create Asurine
		{ raw:  'create:cut_asurine',                           stair: 'create:cut_asurine_stairs',                      slab: 'create:cut_asurine_slab',                      wall: 'create:cut_asurine_wall',
		  dust: 'gtceu:asurine_dust',                           loose: null,                                             stonecutting: false  }, // Raw

		{ raw:  'create:polished_cut_asurine',                  stair: 'create:polished_cut_asurine_stairs',             slab: 'create:polished_cut_asurine_slab',             wall: 'create:polished_cut_asurine_wall',
		  dust: 'gtceu:asurine_dust',                           loose: null,                                             stonecutting: false  }, // Smooth

		{ raw:  'create:cut_asurine_bricks',                    stair: 'create:cut_asurine_brick_stairs',                slab: 'create:cut_asurine_brick_slab',                wall: 'create:cut_asurine_brick_wall',
		  dust: 'gtceu:asurine_dust',                           loose: null,                                             stonecutting: false  }, // Bricks

		{ raw:  'create:small_asurine_bricks',                  stair: 'create:small_asurine_brick_stairs',              slab: 'create:small_asurine_brick_slab',              wall: 'create:small_asurine_brick_wall',
		  dust: 'gtceu:asurine_dust',                           loose: null,                                             stonecutting: false  }, // Bricks - Extra

		// @Create Crimsite
		{ raw:  'create:cut_crimsite',                          stair: 'create:cut_crimsite_stairs',                     slab: 'create:cut_crimsite_slab',                     wall: 'create:cut_crimsite_wall',
		  dust: null,                                           loose: null,                                             stonecutting: false  }, // Raw

		{ raw:  'create:polished_cut_crimsite',                 stair: 'create:polished_cut_crimsite_stairs',            slab: 'create:polished_cut_crimsite_slab',            wall: 'create:polished_cut_crimsite_wall',
		  dust: null,                                           loose: null,                                             stonecutting: false  }, // Smooth

		{ raw:  'create:cut_crimsite_bricks',                   stair: 'create:cut_crimsite_brick_stairs',               slab: 'create:cut_crimsite_brick_slab',               wall: 'create:cut_crimsite_brick_wall',
		  dust: null,                                           loose: null,                                             stonecutting: false  }, // Bricks

		{ raw:  'create:small_crimsite_bricks',                 stair: 'create:small_crimsite_brick_stairs',             slab: 'create:small_crimsite_brick_slab',             wall: 'create:small_crimsite_brick_wall',
		  dust: null,                                           loose: null,                                             stonecutting: false  }, // Bricks - Extra
		
		// @Create Ochrum
		{ raw:  'create:cut_ochrum',                            stair: 'create:cut_ochrum_stairs',                       slab: 'create:cut_ochrum_slab',                       wall: 'create:cut_ochrum_wall',
		  dust: 'gtceu:ochrum_dust',                            loose: null,                                             stonecutting: false  }, // Raw

		{ raw:  'create:polished_cut_ochrum',                   stair: 'create:polished_cut_ochrum_stairs',              slab: 'create:polished_cut_ochrum_slab',              wall: 'create:polished_cut_ochrum_wall',
		  dust: 'gtceu:ochrum_dust',                            loose: null,                                             stonecutting: false  }, // Smooth

		{ raw:  'create:cut_ochrum_bricks',                     stair: 'create:cut_ochrum_brick_stairs',                 slab: 'create:cut_ochrum_brick_slab',                 wall: 'create:cut_ochrum_brick_wall',
		  dust: 'gtceu:ochrum_dust',                            loose: null,                                             stonecutting: false  }, // Bricks

		{ raw:  'create:small_ochrum_bricks',                   stair: 'create:small_ochrum_brick_stairs',               slab: 'create:small_ochrum_brick_slab',               wall: 'create:small_ochrum_brick_wall',
		  dust: 'gtceu:ochrum_dust',                            loose: null,                                             stonecutting: false  }, // Bricks - Extra

		// @Create Scorchia
		{ raw:  'create:cut_scorchia',                          stair: 'create:cut_scorchia_stairs',                     slab: 'create:cut_scorchia_slab',                     wall: 'create:cut_scorchia_wall',
		  dust: null,                                           loose: null,                                             stonecutting: false  }, // Raw

		{ raw:  'create:polished_cut_scorchia',                 stair: 'create:polished_cut_scorchia_stairs',            slab: 'create:polished_cut_scorchia_slab',            wall: 'create:polished_cut_scorchia_wall',
		  dust: null,                                           loose: null,                                             stonecutting: false  }, // Smooth

		{ raw:  'create:cut_scorchia_bricks',                   stair: 'create:cut_scorchia_brick_stairs',               slab: 'create:cut_scorchia_brick_slab',               wall: 'create:cut_scorchia_brick_wall',
		  dust: null,                                           loose: null,                                             stonecutting: false  }, // Bricks

		{ raw:  'create:small_scorchia_bricks',                 stair: 'create:small_scorchia_brick_stairs',             slab: 'create:small_scorchia_brick_slab',             wall: 'create:small_scorchia_brick_wall',
		  dust: null,                                           loose: null,                                             stonecutting: false  }, // Bricks - Extra

		// @Create Scoria
		{ raw:  'create:cut_scoria',                            stair: 'create:cut_scoria_stairs',                       slab: 'create:cut_scoria_slab',                       wall: 'create:cut_scoria_wall',
		  dust: null,                                           loose: null,                                             stonecutting: false  }, // Raw

		{ raw:  'create:polished_cut_scoria',                   stair: 'create:polished_cut_scoria_stairs',              slab: 'create:polished_cut_scoria_slab',              wall: 'create:polished_cut_scoria_wall',
		  dust: null,                                           loose: null,                                             stonecutting: false  }, // Smooth

		{ raw:  'create:cut_scoria_bricks',                     stair: 'create:cut_scoria_brick_stairs',                 slab: 'create:cut_scoria_brick_slab',                 wall: 'create:cut_scoria_brick_wall',
		  dust: null,                                           loose: null,                                             stonecutting: false  }, // Bricks

		{ raw:  'create:small_scoria_bricks',                   stair: 'create:small_scoria_brick_stairs',               slab: 'create:small_scoria_brick_slab',               wall: 'create:small_scoria_brick_wall',
		  dust: null,                                           loose: null,                                             stonecutting: false  }, // Bricks - Extra

		// @Create Tuff
		{ raw:  'create:cut_tuff',                              stair: 'create:cut_tuff_stairs',                         slab: 'create:cut_tuff_slab',                         wall: 'create:cut_tuff_wall',
		  dust: null,                                           loose: null,                                             stonecutting: false  }, // Raw

		{ raw:  'create:polished_cut_tuff',                     stair: 'create:polished_cut_tuff_stairs',                slab: 'create:polished_cut_tuff_slab',                wall: 'create:polished_cut_tuff_wall',
		  dust: null,                                           loose: null,                                             stonecutting: false  }, // Smooth

		{ raw:  'create:cut_tuff_bricks',                       stair: 'create:cut_tuff_brick_stairs',                   slab: 'create:cut_tuff_brick_slab',                  wall: 'create:cut_tuff_brick_wall',
		  dust: null,                                           loose: null,                                             stonecutting: false  }, // Bricks

		{ raw:  'create:small_tuff_bricks',                     stair: 'create:small_tuff_brick_stairs',                 slab: 'create:small_tuff_brick_slab',                wall: 'create:small_tuff_brick_wall',
		  dust: null,                                           loose: null,                                             stonecutting: false  }, // Bricks - Extra
		
		// @Create Veridium
		{ raw:  'create:cut_veridium',                          stair: 'create:cut_veridium_stairs',                     slab: 'create:cut_veridium_slab',                     wall: 'create:cut_veridium_wall',
		  dust: null,                                           loose: null,                                             stonecutting: false  }, // Raw

		{ raw:  'create:polished_cut_veridium',                 stair: 'create:polished_cut_veridium_stairs',            slab: 'create:polished_cut_veridium_slab',            wall: 'create:polished_cut_veridium_wall',
		  dust: null,                                           loose: null,                                             stonecutting: false  }, // Smooth

		{ raw:  'create:cut_veridium_bricks',                   stair: 'create:cut_veridium_brick_stairs',               slab: 'create:cut_veridium_brick_slab',               wall: 'create:cut_veridium_brick_wall',
		  dust: null,                                           loose: null,                                             stonecutting: false  }, // Bricks

		{ raw:  'create:small_veridium_bricks',                 stair: 'create:small_veridium_brick_stairs',             slab: 'create:small_veridium_brick_slab',             wall: 'create:small_veridium_brick_wall',
		  dust: null,                                           loose: null,                                             stonecutting: false  }, // Bricks - Extra

		// #endregion @Create Stones
	])

	CUT_GRIND.forEach(x => {
		if (x.raw != null && x.dust != null) {
			try{
				event.recipes.gtceu.macerator(x.raw.replace(/.*:/g, 'macerate_'))
					.itemInputs(x.raw)
					.itemOutputs(x.dust)
					.duration(150)
					.EUt(2)
					.category(GTRecipeCategories.MACERATOR_RECYCLING)
			} catch(e){ }
		}
		if (x.stair != null) {
			if (x.raw != null) {
				event.recipes.tfc.chisel(x.stair, x.raw, 'stair')

				if (x.stonecutting) {
					event.stonecutting(x.stair, x.raw).id(`${x.raw}_to_${x.stair}`.replace(/:/g, '_'))
				}
			}

			if (x.dust != null) {
				event.recipes.gtceu.macerator(x.stair.replace(/.*:/g, 'macerate_'))
					.itemInputs(x.stair)
					.itemOutputs(x.dust)
					.duration(150)
					.EUt(2)
					.category(GTRecipeCategories.MACERATOR_RECYCLING)
			}

			if (x.loose != null) {
				event.shapeless(`3x ${x.loose}`, [x.stair])
			}
		}
		if (x.slab != null) {
			if (x.raw != null) {
				event.recipes.tfc.chisel(x.slab, x.raw, 'slab').extraDrop(x.slab)
				
				if (x.stonecutting) {
					event.stonecutting(`2x ${x.slab}`, x.raw).id(`${x.raw}_to_${x.slab}`.replace(/:/g, '_'))
				}
			}

			if (x.dust != null) {
				event.recipes.gtceu.macerator(x.slab.replace(/.*:/g, 'macerate_'))
					.itemInputs(`2x ${x.slab}`)
					.itemOutputs(x.dust)
					.duration(150)
					.EUt(2)
					.category(GTRecipeCategories.MACERATOR_RECYCLING)
			}

			if (x.loose != null) {
				event.shapeless(`2x ${x.loose}`, [x.slab])
			}
		}
		if (x.wall != null) {
			if (x.raw != null) {
				if (x.stonecutting) {
					event.stonecutting(x.wall, x.raw).id(`${x.raw}_to_${x.wall}`.replace(/:/g, '_'))
				}
			}
			if (x.slab != null) {
				event.recipes.tfc.chisel(x.wall, x.slab, 'smooth')
			}

			if (x.dust != null) {
				event.recipes.gtceu.macerator(x.wall.replace(/.*:/g, 'macerate_'))
					.itemInputs(`2x ${x.wall}`)
					.itemOutputs(x.dust)
					.duration(150)
					.EUt(2)
					.category(GTRecipeCategories.MACERATOR_RECYCLING)
			}
			if (x.loose != null) {
				event.shapeless(`2x ${x.loose}`, [x.wall])
			}
		}
	})

	// Alabaster
	event.recipes.gtceu.cutter("tfg:raw_alabaster_to_bricks")
		.itemInputs("tfc:alabaster/raw")
		.itemOutputs("4x tfc:alabaster_brick")
		.duration(40)
		.EUt(2)

	// #endregion CUT_GRIND

	// #region MACERATOR
	// For all the blocks not already handles bu the CUTTER loop.
	const MACERATOR = [
		{ block: 'tfg:rock/hardened_deepslate',            dust: 'gtceu:deepslate_dust'    },
		{ block: 'minecraft:chiseled_deepslate',           dust: 'gtceu:deepslate_dust'    },
		{ block: 'tfg:rock/hardened_blackstone',           dust: 'gtceu:blackstone_dust'   },
		{ block: 'minecraft:chiseled_polished_blackstone', dust: 'gtceu:blackstone_dust'   },
		{ block: 'tfg:rock/hardened_dripstone',            dust: 'tfg:dripstone_dust'      },
		{ block: 'minecraft:chiseled_nether_bricks',       dust: 'gtceu:netherrack_dust'   },
		{ block: 'tfg:rock/hardened_moon_stone',           dust: 'tfg:moon_stone_dust'     },
		{ block: 'ad_astra:moon_pillar',                   dust: 'tfg:moon_stone_dust'     },
		{ block: 'tfg:rock/hardened_moon_deepslate',       dust: 'tfg:moon_deepslate_dust' },
		{ block: 'tfg:rock/pillar_moon_deepslate',         dust: 'tfg:moon_deepslate_dust' },
		{ block: 'tfg:rock/hardened_mars_stone',           dust: 'tfg:mars_stone_dust'     },
		{ block: 'ad_astra:mars_pillar',                   dust: 'tfg:mars_stone_dust'     },
		{ block: 'tfg:rock/hardened_venus_stone',          dust: 'tfg:venus_stone_dust'    },
		{ block: 'ad_astra:venus_pillar',                  dust: 'tfg:venus_stone_dust'    },
		{ block: 'tfg:rock/hardened_mercury_stone',        dust: 'tfg:mercury_stone_dust'  },
		{ block: 'ad_astra:mercury_pillar',                dust: 'tfg:mercury_stone_dust'  },
		{ block: 'tfg:rock/hardened_glacio_stone',         dust: 'tfg:glacio_stone_dust'   },
		{ block: 'ad_astra:glacio_pillar',                 dust: 'tfg:glacio_stone_dust'   },
		{ block: 'tfg:rock/hardened_red_granite',          dust: 'gtceu:granite_red_dust'  },
		{ block: 'gtceu:red_granite_tile',                 dust: 'gtceu:granite_red_dust'  },
		{ block: 'gtceu:square_red_granite_bricks',        dust: 'gtceu:granite_red_dust'  },
		{ block: 'gtceu:red_granite_windmill_a',           dust: 'gtceu:granite_red_dust'  },
		{ block: 'gtceu:red_granite_windmill_b',           dust: 'gtceu:granite_red_dust'  },
		{ block: 'gtceu:small_red_granite_bricks',         dust: 'gtceu:granite_red_dust'  },
		{ block: 'gtceu:red_granite_small_tile',           dust: 'gtceu:granite_red_dust'  },
		{ block: 'gtceu:chiseled_red_granite',             dust: 'gtceu:granite_red_dust'  }
	]

	MACERATOR.forEach(x => {
		event.recipes.gtceu.macerator(x.block.replace(/.*:/g, 'macerate_'))
			.itemInputs(x.block)
			.itemOutputs(x.dust)
			.duration(150)
			.EUt(2)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)
	})
	//#endregion

	// #endregion MACERATOR

	// #region STONECUTTER
	const STONECUTTER = [
		[ 'minecraft:deepslate_bricks',           'minecraft:deepslate_tiles',               'minecraft:chiseled_deepslate'       ],
		[ 'minecraft:polished_blackstone_bricks', 'minecraft:chiseled_polished_blackstone'                                        ],
		[ 'minecraft:nether_bricks',              'minecraft:nether_bricks'                                                       ],
		[ 'ad_astra:moon_stone_bricks',           'ad_astra:chiseled_moon_stone_bricks',                                          ],
		[ 'tfg:rock/bricks_moon_deepslate',       'tfg:rock/chiseled_bricks_moon_deepslate',                                      ],
		[ 'ad_astra:mars_stone_bricks',           'ad_astra:chiseled_mars_stone_bricks',                                          ],
		[ 'ad_astra:venus_stone_bricks',          'ad_astra:chiseled_venus_stone_bricks',                                         ],
		[ 'ad_astra:mercury_stone_bricks',        'ad_astra:chiseled_mercury_stone_bricks',                                       ],
		[ 'ad_astra:glacio_stone_bricks',         'ad_astra:chiseled_glacio_stone_bricks',                                        ],
		[ 'ad_astra:permafrost_bricks',           'ad_astra:chiseled_permafrost_bricks',                                          ],
		[ 'gtceu:red_granite_bricks',             'gtceu:red_granite_tile',                  'gtceu:square_red_granite_bricks',
		  'gtceu:red_granite_windmill_a',     	  'gtceu:red_granite_windmill_b',            'gtceu:small_red_granite_bricks',
		  'gtceu:red_granite_small_tile',         'gtceu:chiseled_red_granite'                                                    ],
		[ 'minecraft:stone_bricks',               'minecraft:chiseled_stone_bricks'                                               ]
	]

	STONECUTTER.forEach(set => {
		set.forEach(block1 => {
			set.forEach(block2 => {
				if( block1 != block2 ){ event.stonecutting(block1, block2) }
			})
		})
	})
	// #endregion STONECUTTER

	// #region PILLARS
	const PILLARS = [
		{ raw: 'tfc:rock/smooth/andesite',       pillar: 'create:andesite_pillar'          },
		{ raw: 'create:cut_andesite',            pillar: 'create:andesite_pillar'          },
		{ raw: 'create:polished_cut_calcite',    pillar: 'create:calcite_pillar'           },
		{ raw: 'tfc:rock/smooth/chert',          pillar: 'create:granite_pillar'           },
		{ raw: 'create:cut_granite',             pillar: 'create:granite_pillar'           },
		{ raw: 'tfc:rock/smooth/diorite',        pillar: 'create:diorite_pillar'           },
		{ raw: 'create:cut_diorite',             pillar: 'create:diorite_pillar'           },
		{ raw: 'tfc:rock/smooth/limestone',      pillar: 'create:limestone_pillar'         },
		{ raw: 'create:cut_limestone',           pillar: 'create:limestone_pillar'         },
		{ raw: 'minecraft:polished_deepslate',   pillar: 'create:deepslate_pillar'         },
		{ raw: 'create:polished_cut_deepslate',  pillar: 'create:deepslate_pillar'         },
		{ raw: 'create:polished_cut_dripstone',  pillar: 'create:dripstone_pillar'         },
		{ raw: 'create:cut_dripstone',           pillar: 'create:dripstone_pillar'         },
		{ raw: 'ad_astra:moon_stone_bricks',     pillar: 'ad_astra:moon_pillar'            },
		{ raw: 'tfg:rock/pillar_moon_deepslate', pillar: 'tfg:rock/bricks_moon_deepslate'  },
		{ raw: 'ad_astra:mars_stone_bricks',     pillar: 'ad_astra:mars_pillar'            },
		{ raw: 'ad_astra:venus_stone_bricks',    pillar: 'ad_astra:venus_pillar'           },
		{ raw: 'ad_astra:mercury_stone_bricks',  pillar: 'ad_astra:mercury_pillar'         },
		{ raw: 'ad_astra:glacio_stone_bricks',   pillar: 'ad_astra:glacio_pillar'          },
		{ raw: 'ad_astra:permafrost_bricks',     pillar: 'ad_astra:permafrost_pillar'      },
		{ raw: 'create:cut_asurine',             pillar: 'create:asurine_pillar'           },
		{ raw: 'create:polished_cut_asurine',    pillar: 'create:asurine_pillar'           },
		{ raw: 'create:cut_crimsite',            pillar: 'create:crimsite_pillar'          },
		{ raw: 'create:polished_cut_crimsite',   pillar: 'create:crimsite_pillar'          },
		{ raw: 'create:cut_ochrum',              pillar: 'create:ochrum_pillar'            },
		{ raw: 'create:polished_cut_ochrum',     pillar: 'create:ochrum_pillar'            },
		{ raw: 'create:cut_scorchia',            pillar: 'create:scorchia_pillar'          },
		{ raw: 'create:polished_cut_scorchia',   pillar: 'create:scorchia_pillar'          },
		{ raw: 'create:cut_scoria',              pillar: 'create:scoria_pillar'            },
		{ raw: 'create:polished_cut_scoria',     pillar: 'create:scoria_pillar'            },
		{ raw: 'create:cut_tuff',                pillar: 'create:tuff_pillar'              },
		{ raw: 'create:polished_cut_tuff',       pillar: 'create:tuff_pillar'              },
		{ raw: 'create:cut_veridium',            pillar: 'create:veridium_pillar'          },
		{ raw: 'create:polished_cut_veridium',   pillar: 'create:veridium_pillar'          },
		{ raw: 'minecraft:purpur_block',         pillar: 'minecraft:purpur_pillar'         },
		{ raw: 'minecraft:quartz_block',         pillar: 'minecraft:quartz_pillar'         },
		{ raw: 'ae2:quartz_block',               pillar: 'ae2:quartz_pillar'               }		 
	]

	PILLARS.forEach(x => {
		event.shaped(`2x ${x.pillar}`, [
			'A',
			'A'
		], {
			A: x.raw
		})

		event.stonecutting(x.pillar, x.raw).id(`${x.raw}_to_${x.pillar}`.replace(/:/g, '_'))
	})

	// horizontal shaped recipes
	const PILLARS_H = [
		{ raw: 'tfc:rock/smooth/andesite',       pillar: 'create:layered_andesite'         },
		{ raw: 'create:polished_cut_andesite',   pillar: 'create:layered_andesite'         },
		{ raw: 'tfc:rock/smooth/chert',          pillar: 'create:layered_granite'          },
		{ raw: 'create:polished_cut_granite',    pillar: 'create:layered_granite'          },
		{ raw: 'create:polished_cut_calcite',    pillar: 'create:layered_calcite'          },
		{ raw: 'tfc:rock/smooth/diorite',        pillar: 'create:layered_diorite'          },
		{ raw: 'create:polished_cut_diorite',    pillar: 'create:layered_diorite'          },
		{ raw: 'tfc:rock/smooth/limestone',      pillar: 'create:layered_limestone'        },
		{ raw: 'create:polished_cut_limestone',  pillar: 'create:layered_limestone'        },
		{ raw: 'minecraft:polished_deepslate',   pillar: 'create:layered_deepslate'        },
		{ raw: 'create:polished_cut_deepslate',  pillar: 'create:layered_deepslate'        },
		{ raw: 'create:cut_dripstone',           pillar: 'create:layered_dripstone'        },
		{ raw: 'create:polished_cut_dripstone',  pillar: 'create:layered_dripstone'        },

		{ raw: 'create:cut_asurine',             pillar: 'create:layered_asurine'          },
		{ raw: 'create:polished_cut_asurine',    pillar: 'create:layered_asurine'          },
		{ raw: 'create:cut_crimsite',            pillar: 'create:layered_crimsite'         },
		{ raw: 'create:polished_cut_crimsite',   pillar: 'create:layered_crimsite'         },
		{ raw: 'create:cut_ochrum',              pillar: 'create:layered_ochrum'           },
		{ raw: 'create:polished_cut_ochrum',     pillar: 'create:layered_ochrum'           },
		{ raw: 'create:cut_scorchia',            pillar: 'create:layered_scorchia'         },
		{ raw: 'create:polished_cut_scorchia',   pillar: 'create:layered_scorchia'         },
		{ raw: 'create:cut_scoria',              pillar: 'create:layered_scoria'           },
		{ raw: 'create:polished_cut_scoria',     pillar: 'create:layered_scoria'           },
		{ raw: 'create:cut_tuff',                pillar: 'create:layered_tuff'             },
		{ raw: 'create:polished_cut_tuff',       pillar: 'create:layered_tuff'             },
		{ raw: 'create:cut_veridium',            pillar: 'create:layered_veridium'         },
		{ raw: 'create:polished_cut_veridium',   pillar: 'create:layered_veridium'         }
	]

	PILLARS_H.forEach(x => {
		event.shaped(`2x ${x.pillar}`, [
			'AA'
		], {
			A: x.raw
		})
	})

	// #endregion PILLARS

	// #region ROCK_DUPING (Breaker)
	const ROCK_DUPING = [
		{ block: 'minecraft:deepslate',				dimension: null               },
		{ block: 'minecraft:cobbled_deepslate',		dimension: null               },
		{ block: 'minecraft:blackstone',			dimension: null               },
		{ block: 'tfg:rock/cobble_blackstone',		dimension: null               },
		{ block: 'minecraft:dripstone_block',		dimension: null               },
		{ block: 'tfg:rock/cobble_dripstone',		dimension: null               },
		{ block: 'beneath:crackrack',				dimension: null               },
		{ block: 'tfg:rock/cobble_crackrack',		dimension: null               },
		{ block: 'minecraft:basalt',				dimension: null               },
		{ block: 'minecraft:calcite',               dimension: null               },
		{ block: 'ad_astra:moon_stone',				dimension: 'ad_astra:moon'    },
		{ block: 'ad_astra:moon_cobblestone',		dimension: 'ad_astra:moon'    },
		{ block: 'ad_astra:moon_deepslate',			dimension: 'ad_astra:moon'    },
		{ block: 'tfg:rock/cobble_moon_deepslate',	dimension: 'ad_astra:moon'    },
		{ block: 'ad_astra:glacio_stone',			dimension: 'ad_astra:moon'    },
		{ block: 'ad_astra:glacio_cobblestone',		dimension: 'ad_astra:moon'    },
		{ block: 'create:asurine',					dimension: 'ad_astra:moon'    },
		{ block: 'ae2:sky_stone_block',				dimension: 'ad_astra:moon'    },
		{ block: 'ad_astra:mars_stone',				dimension: 'ad_astra:mars'    },
		{ block: 'ad_astra:mars_cobblestone',		dimension: 'ad_astra:mars'    },
		{ block: 'ad_astra:venus_stone',			dimension: 'ad_astra:mars'    },
		{ block: 'ad_astra:venus_cobblestone',		dimension: 'ad_astra:mars'    },
		{ block: 'gtceu:red_granite',				dimension: 'ad_astra:mars'    },
		{ block: 'gtceu:red_granite_cobblestone',	dimension: 'ad_astra:mars'    },
		{ block: 'create:ochrum',					dimension: 'ad_astra:mars'    },
		{ block: 'create:scoria',					dimension: 'ad_astra:venus'   },
		{ block: 'minecraft:tuff',					dimension: 'ad_astra:venus'   },
		{ block: 'betterend:flavolite',             dimension: 'ad_astra:venus'   },
		{ block: 'betterend:sandy_jadestone',       dimension: 'ad_astra:venus'   },
		{ block: 'betterend:sulphuric_rock',        dimension: 'ad_astra:venus'   },
		{ block: 'betterend:brimstone',             dimension: 'ad_astra:venus'   },
		{ block: 'ad_astra:mercury_stone',			dimension: 'ad_astra:mercury' },
		{ block: 'ad_astra:mercury_cobblestone',	dimension: 'ad_astra:mercury' },
		{ block: 'create:crimsite',					dimension: 'ad_astra:mercury' },
		{ block: 'create:scorchia',					dimension: null },
		{ block: 'ad_astra:permafrost',				dimension: 'ad_astra:glacio'  },
		{ block: 'tfg:rock/cobble_permafrost',		dimension: 'ad_astra:glacio'  },
		{ block: 'create:veridium',					dimension: 'ad_astra:glacio'  },
		{ block: 'tfc:alabaster/raw',				dimension: null               }
	]
	
	ROCK_DUPING.forEach(x => {
		if (x.dimension != null) {
			event.recipes.gtceu.rock_breaker(x.block)
				.notConsumable(x.block)
				.itemOutputs(x.block)
				.duration(16)
				.EUt(7)
				.dimension(x.dimension)
		} else {
			event.recipes.gtceu.rock_breaker(x.block)
				.notConsumable(x.block)
				.itemOutputs(x.block)
				.duration(16)
				.EUt(7)
		}
	})

	// #endregion ROCK_DUPING (Breaker)

	// #region COMPRESSOR
	event.recipes.gtceu.compressor('tfg:permafrost')
		.itemInputs('4x tfg:loose/permafrost')
		.itemOutputs('ad_astra:permafrost')
		.duration(40*20)
		.EUt(2)
		.dimension('ad_astra:glacio')
	
	event.recipes.gtceu.compressor('tfg:venus_sandstone')
		.itemInputs('4x ad_astra:venus_sand')
		.itemOutputs('ad_astra:venus_sandstone')
		.duration(40*20)
		.EUt(2)
		.dimension('ad_astra:mars')

	// #endregion COMPRESSOR

	//#region Magma Blocks
	event.remove({id: 'gtceu:compressor/magma_block'})
	event.remove({id: 'greate:splashing/obsidian'})

	//magma block + stone group
	const MAGMA_BLOCKS = [
		{ magma: 'minecraft:magma_block',   rock: 'minecraft:blackstone' },
		{ magma: 'tfc:rock/magma/granite',  rock: 'tfc:rock/raw/granite' },
		{ magma: 'tfc:rock/magma/diorite',  rock: 'tfc:rock/raw/diorite' },
		{ magma: 'tfc:rock/magma/gabbro',   rock: 'tfc:rock/raw/gabbro' },
		{ magma: 'tfc:rock/magma/rhyolite', rock: 'tfc:rock/raw/rhyolite' },
		{ magma: 'tfc:rock/magma/basalt',   rock: 'tfc:rock/raw/basalt' },
		{ magma: 'tfc:rock/magma/andesite', rock: 'tfc:rock/raw/andesite' },
		{ magma: 'tfc:rock/magma/dacite',   rock: 'tfc:rock/raw/dacite' }
	];

	MAGMA_BLOCKS.forEach(block => {
		event.recipes.gtceu.fluid_solidifier(`tfg:gtceu/fluid_solidifier/${block.magma}`.replace(/:/g, '/'))
			.itemInputs(`1x ${block.rock}`)
			.inputFluids(Fluid.of('minecraft:lava', 250))
			.itemOutputs(`1x ${block.magma}`)
			.duration(100)
			.EUt(GTValues.VA[GTValues.ULV])
			
		event.recipes.gtceu.extractor(`tfg:gtceu/extractor/${block.magma}`.replace(/:/g, "/"))
			.itemInputs(`1x ${block.magma}`)
			.outputFluids(Fluid.of('minecraft:lava', 250))
			.itemOutputs(`1x ${block.rock}`)
			.duration(100)
			.EUt(GTValues.VA[GTValues.LV])
	})

	//#endregion Magma Blocks

	//#region GT marble
	event.stonecutting('gtceu:polished_marble', 'tfc:rock/bricks/marble').id('tfg:stonecutting/gt_polished_marble')
	event.stonecutting('gtceu:chiseled_marble', 'tfc:rock/bricks/marble').id('tfg:stonecutting/gt_chiseled_marble')
	event.stonecutting('gtceu:marble_tile', 'tfc:rock/bricks/marble').id('tfg:stonecutting/gt_marble_tile')
	event.stonecutting('gtceu:marble_small_tile', 'tfc:rock/bricks/marble').id('tfg:stonecutting/gt_marble_small_tile')
	event.stonecutting('gtceu:marble_windmill_a', 'tfc:rock/bricks/marble').id('tfg:stonecutting/gt_marble_windmill_a')
	event.stonecutting('gtceu:marble_windmill_b', 'tfc:rock/bricks/marble').id('tfg:stonecutting/gt_marble_windmill_b')
	event.stonecutting('gtceu:small_marble_bricks', 'tfc:rock/bricks/marble').id('tfg:stonecutting/gt_small_marble_bricks')
	event.stonecutting('gtceu:square_marble_bricks', 'tfc:rock/bricks/marble').id('tfg:stonecutting/gt_square_marble_bricks')
	//#endregion

	// Blackstone Buttons
	removeCutterRecipe(event, 'blackstone_button')
	removeCutterRecipe(event, 'blackstone_button_water')
	removeCutterRecipe(event, 'blackstone_button_distilled_water')
	removeCutterRecipe(event, 'cut_polished_blackstone_brickslab_into_button')
	removeCutterRecipe(event, 'cut_polished_blackstone_brickslab_into_button_water')
	removeCutterRecipe(event, 'cut_polished_blackstone_brickslab_into_button_distilled_water')

	event.recipes.gtceu.cutter('tfg:blackstone_button')
		.itemInputs('minecraft:polished_blackstone_pressure_plate')
		.itemOutputs('6x minecraft:polished_blackstone_button')
		.EUt(7)
		.duration(100)

	// Misc
	event.recipes.gtceu.cutter('tfg:vanilla_stone_slab_to_plate')
		.itemInputs('minecraft:stone_slab')
		.itemOutputs('#forge:plates/stone')
		.duration(20)
		.EUt(GTValues.VA[GTValues.LV])
}