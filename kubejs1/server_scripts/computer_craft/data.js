// priority: 0

const registerComputerCraftData = (event) => {
    const TURTLE_TOOL_TYPES = [ GTToolType.SWORD, GTToolType.PICKAXE, GTToolType.AXE, GTToolType.SHOVEL, GTToolType.HOE ]

    GTMaterialRegistry.getRegisteredMaterials().forEach(material => {
        TURTLE_TOOL_TYPES.forEach(type => {
            let toolStack = ToolHelper.get(type, material)

            if (!toolStack.isEmpty()) {
                
                let json = {
                    type: "computercraft:tool",
                    item: toolStack.getId(),
                    adjective: `upgrade.minecraft.diamond_${type.name}.adjective`,
                    allowEnchantments: true,
                    consumeDurability: "always"
                }

                switch (type) {
                    case GTToolType.SWORD:
                        json["breakable"] = "computercraft:turtle_sword_harvestable"
                        break;

                    case GTToolType.SHOVEL:
                        json["breakable"] = "computercraft:turtle_shovel_harvestable"
                        break;


                    case GTToolType.HOE:
                        json["breakable"] = "computercraft:turtle_hoe_harvestable"
                        break;
                }

                event.addJson(`computercraft:computercraft/turtle_upgrades/${material.getName()}_${type.name}`, json)
            }
        })
    });
    
}