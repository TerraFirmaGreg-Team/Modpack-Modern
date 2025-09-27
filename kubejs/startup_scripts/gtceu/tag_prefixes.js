// priority: 0
"use strict";

const registerGTCEuTagPrefixes = (event) => {

	const $TagKeyClass = Java.loadClass('net.minecraft.tags.TagKey')
	const $ForgeRegistries = Java.loadClass('net.minecraftforge.registries.ForgeRegistries')
	const $ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation')

	const createBlockTag = (path) =>
		$TagKeyClass.create($ForgeRegistries.BLOCKS.getRegistryKey(), new $ResourceLocation(path))

	/* Tag Fixes */
	TagPrefix.plate.defaultTagPath("sheets/%s")
	TagPrefix.plateDouble.defaultTagPath("double_sheets/%s")

	TagPrefix.frameGt.unformattedTagPath("frames")

	TagPrefix.wireGtSingle.defaultTagPath("single_wires/%s")
	TagPrefix.wireGtSingle.unformattedTagPath("single_wires")
	TagPrefix.wireGtDouble.defaultTagPath("double_wires/%s")
	TagPrefix.wireGtDouble.unformattedTagPath("double_wires")
	TagPrefix.wireGtQuadruple.defaultTagPath("quadruple_wires/%s")
	TagPrefix.wireGtQuadruple.unformattedTagPath("quadruple_wires")
	TagPrefix.wireGtOctal.defaultTagPath("octal_wires/%s")
	TagPrefix.wireGtOctal.unformattedTagPath("octal_wires")
	TagPrefix.wireGtHex.defaultTagPath("hex_wires/%s")
	TagPrefix.wireGtHex.unformattedTagPath("hex_wires")

	TagPrefix.cableGtSingle.defaultTagPath("single_cables/%s")
	TagPrefix.cableGtSingle.unformattedTagPath("single_cables")
	TagPrefix.cableGtDouble.defaultTagPath("double_cables/%s")
	TagPrefix.cableGtDouble.unformattedTagPath("double_cables")
	TagPrefix.cableGtQuadruple.defaultTagPath("quadruple_cables/%s")
	TagPrefix.cableGtQuadruple.unformattedTagPath("quadruple_cables")
	TagPrefix.cableGtOctal.defaultTagPath("octal_cables/%s")
	TagPrefix.cableGtOctal.unformattedTagPath("octal_cables")
	TagPrefix.cableGtHex.defaultTagPath("hex_cables/%s")
	TagPrefix.cableGtHex.unformattedTagPath("hex_cables")

	TagPrefix.pipeTinyFluid.defaultTagPath("tiny_fluid_pipes/%s")
	TagPrefix.pipeTinyFluid.unformattedTagPath("tiny_fluid_pipes")
	TagPrefix.pipeSmallFluid.defaultTagPath("small_fluid_pipes/%s")
	TagPrefix.pipeSmallFluid.unformattedTagPath("small_fluid_pipes")
	TagPrefix.pipeNormalFluid.defaultTagPath("normal_fluid_pipes/%s")
	TagPrefix.pipeNormalFluid.unformattedTagPath("normal_fluid_pipes")
	TagPrefix.pipeLargeFluid.defaultTagPath("large_fluid_pipes/%s")
	TagPrefix.pipeLargeFluid.unformattedTagPath("large_fluid_pipes")
	TagPrefix.pipeHugeFluid.defaultTagPath("huge_fluid_pipes/%s")
	TagPrefix.pipeHugeFluid.unformattedTagPath("huge_fluid_pipes")
	TagPrefix.pipeQuadrupleFluid.defaultTagPath("quadruple_fluid_pipes/%s")
	TagPrefix.pipeQuadrupleFluid.unformattedTagPath("quadruple_fluid_pipes")
	TagPrefix.pipeNonupleFluid.defaultTagPath("nonuple_fluid_pipes/%s")
	TagPrefix.pipeNonupleFluid.unformattedTagPath("nonuple_fluid_pipes")

	TagPrefix.pipeSmallItem.defaultTagPath("small_item_pipes/%s")
	TagPrefix.pipeSmallItem.unformattedTagPath("small_item_pipes")
	TagPrefix.pipeNormalItem.defaultTagPath("normal_item_pipes/%s")
	TagPrefix.pipeNormalItem.unformattedTagPath("normal_item_pipes")
	TagPrefix.pipeLargeItem.defaultTagPath("large_item_pipes/%s")
	TagPrefix.pipeLargeItem.unformattedTagPath("large_item_pipes")
	TagPrefix.pipeHugeItem.defaultTagPath("huge_item_pipes/%s")
	TagPrefix.pipeHugeItem.unformattedTagPath("huge_item_pipes")

	TagPrefix.pipeSmallRestrictive.defaultTagPath("small_restrictive_pipes/%s")
	TagPrefix.pipeSmallRestrictive.unformattedTagPath("small_restrictive_pipes")
	TagPrefix.pipeNormalRestrictive.defaultTagPath("normal_restrictive_pipes/%s")
	TagPrefix.pipeNormalRestrictive.unformattedTagPath("normal_restrictive_pipes")
	TagPrefix.pipeLargeRestrictive.defaultTagPath("large_restrictive_pipes/%s")
	TagPrefix.pipeLargeRestrictive.unformattedTagPath("large_restrictive_pipes")
	TagPrefix.pipeHugeRestrictive.defaultTagPath("huge_restrictive_pipes/%s")
	TagPrefix.pipeHugeRestrictive.unformattedTagPath("huge_restrictive_pipes")

	TagPrefix.toolHeadDrill.defaultTagPath("drill_heads/%s")
	TagPrefix.toolHeadDrill.unformattedTagPath("drill_heads")

	TagPrefix.toolHeadChainsaw.defaultTagPath("chainsaw_heads/%s")
	TagPrefix.toolHeadChainsaw.unformattedTagPath("chainsaw_heads")

	TagPrefix.toolHeadBuzzSaw.defaultTagPath("buzz_saw_heads/%s")
	TagPrefix.toolHeadBuzzSaw.unformattedTagPath("buzz_saw_heads")

	TagPrefix.toolHeadWrench.defaultTagPath("wrench_tips/%s")
	TagPrefix.toolHeadWrench.unformattedTagPath("wrench_tips")

	TagPrefix.toolHeadScrewdriver.defaultTagPath("screwdriver_tips/%s")
	TagPrefix.toolHeadScrewdriver.unformattedTagPath("screwdriver_tips")

	TagPrefix.turbineBlade.defaultTagPath("turbine_blades/%s")
	TagPrefix.turbineBlade.unformattedTagPath("turbine_blades")

	TagPrefix.rawOreBlock.defaultTagPath("raw_ore_blocks/%s")
	TagPrefix.rawOreBlock.unformattedTagPath("raw_ore_blocks")

	TagPrefix.rawOre.setIgnored(GTMaterials.Iron);
	TagPrefix.gear.setIgnored(GTMaterials.Stone);
}
