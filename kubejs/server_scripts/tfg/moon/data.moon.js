"use strict";

function registerTFGMoonBedrockFluidVeins(event) {
	
	event.add('tfg:moon_helium_3', vein => {
		vein.dimensions('ad_astra:moon')
		vein.fluid(() => Fluid.of('gtceu:helium_3').fluid)
		vein.weight(100)
		vein.minimumYield(200)
		vein.maximumYield(400)
		vein.depletionAmount(1)
		vein.depletionChance(1)
		vein.depletedYield(200)
	})

	event.add('tfg:moon_helium', vein => {
		vein.dimensions('ad_astra:moon')
		vein.fluid(() => Fluid.of('gtceu:helium').fluid)
		vein.weight(10)
		vein.minimumYield(20)
		vein.maximumYield(50)
		vein.depletionAmount(1)
		vein.depletionChance(1)
		vein.depletedYield(20)
	})

	event.add('tfg:moon_argon', vein => {
		vein.dimensions('ad_astra:moon')
		vein.fluid(() => Fluid.of('gtceu:argon').fluid)
		vein.weight(5)
		vein.minimumYield(10)
		vein.maximumYield(30)
		vein.depletionAmount(1)
		vein.depletionChance(1)
		vein.depletedYield(10)
	})

}