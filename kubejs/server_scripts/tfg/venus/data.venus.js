"use strict";

function registerTFGVenusBedrockFluidVeins(event) {

	event.add('tfg:venus_sulfuric_acid', vein => {
		vein.dimensions('ad_astra:venus')
		vein.fluid(() => Fluid.of('gtceu:sulfuric_acid').fluid)
		vein.weight(50)
		vein.minimumYield(100)
		vein.maximumYield(200)
		vein.depletionAmount(1)
		vein.depletionChance(50)
		vein.depletedYield(20)
	})

	event.add('tfg:venus_lava', vein => {
		vein.dimensions('ad_astra:venus')
		vein.fluid(() => Fluid.of('minecraft:lava').fluid)
		vein.weight(50)
		vein.minimumYield(200)
		vein.maximumYield(400)
		vein.depletionAmount(1)
		vein.depletionChance(1)
		vein.depletedYield(50)
	})
}