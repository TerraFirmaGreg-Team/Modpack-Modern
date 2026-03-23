	const TFGBedrockFluidRegistry = Java.loadClass(
		"su.terrafirmagreg.core.common.data.tfgt.worldgen.TFGBedrockFluidRegistry")
	const ClimateWeightModifier = Java.loadClass(
		"su.terrafirmagreg.core.common.data.tfgt.worldgen.ClimateWeightModifier")
	const ClimateMode = Java.loadClass(
		"su.terrafirmagreg.core.common.data.tfgt.worldgen.ClimateWeightModifier$Mode")
	const ResourceLocation = Java.loadClass("net.minecraft.resources.ResourceLocation")

    /*
    ClimateMode.TEMPERATURE, Average Minimum, Average Maximum, Weight
    ClimateMode.RAINFALL, Minimum, Maximum, Weight
    */

	TFGBedrockFluidRegistry.addClimate(
		ResourceLocation.fromNamespaceAndPath("tfg", "natural_gas"),
		new ClimateWeightModifier(ClimateMode.TEMPERATURE, 15, 40, 300)
	)
    /*
	TFGBedrockFluidRegistry.addClimate(
		ResourceLocation.fromNamespaceAndPath("tfg", "natural_gas"),
		new ClimateWeightModifier(ClimateMode.RAINFALL, 50, 200, 15)
	)
        */