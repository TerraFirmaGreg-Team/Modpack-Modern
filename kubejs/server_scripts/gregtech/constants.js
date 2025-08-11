"use strict";

global.GTCEU_ANVIL_TOOL_TYPES = [

	GTToolType.SWORD,
	GTToolType.PICKAXE,
	GTToolType.SHOVEL,
	GTToolType.AXE,
	GTToolType.HOE,
	GTToolType.MINING_HAMMER,
	GTToolType.SPADE,
	GTToolType.SAW,
	GTToolType.HARD_HAMMER,
	// GTToolType.SOFT_MALLET,
	// GTToolType.WRENCH,
	GTToolType.FILE,
	// GTToolType.CROWBAR,
	// GTToolType.SCREWDRIVER,
	// GTToolType.MORTAR,
	// GTToolType.WIRE_CUTTER,
	GTToolType.SCYTHE,
	GTToolType.KNIFE,
	GTToolType.BUTCHERY_KNIFE,
	// GTToolType.PLUNGER
];

global.GTCEU_TOOLTYPES_WHICH_HAS_TFC_DUPS = {
	"tfc:swords": GTToolType.SWORD,
	"tfc:pickaxes": GTToolType.PICKAXE,
	"tfc:axes": GTToolType.AXE,
	"tfc:shovels": GTToolType.SHOVEL,
	"tfc:hoes": GTToolType.HOE,
	"tfc:hammers": GTToolType.HARD_HAMMER,
	"tfc:knives": GTToolType.KNIFE,
	"tfc:saws": GTToolType.SAW,
	"tfc:scythes": GTToolType.SCYTHE
};
