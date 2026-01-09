"use strict";

function registerTFGBiodieselRecipes(event) {

	// Biofuels

	event.recipes.gtceu.chemical_reactor(`seed_oil_alcohol_biodiesel`)
		.inputFluids("#tfg:alcohols 1000", Fluid.of('gtceu:seed_oil', 6000))
		.itemInputs('#forge:tiny_dusts/sodium_hydroxide')
		.outputFluids(Fluid.of('gtceu:bio_diesel', 6000))
		.duration(20 * 10)
		.EUt(GTValues.VHA[GTValues.ULV])

	// So you can craft Biodiesel without Chemical Reactor
	event.recipes.gtceu.mixer(`tfg:seed_oil_alcohol_biodiesel`)
		.inputFluids("#tfg:alcohols 1000", Fluid.of('gtceu:seed_oil', 1000))
		.itemInputs('#forge:tiny_dusts/sodium_hydroxide')
		.outputFluids(Fluid.of('gtceu:bio_diesel', 500))
		.duration(20 * 10)
		.EUt(GTValues.VHA[GTValues.ULV])

	event.recipes.gtceu.chemical_reactor(`olive_oil_alcohol_biodiesel`)
		.inputFluids("#tfg:alcohols 1000", Fluid.of('tfc:olive_oil', 4000))
		.itemInputs('#forge:tiny_dusts/sodium_hydroxide')
		.outputFluids(Fluid.of('gtceu:bio_diesel', 6000))
		.duration(20 * 10)
		.EUt(GTValues.VHA[GTValues.ULV])

	// So you can craft Biodiesel without Chemical Reactor
	event.recipes.gtceu.mixer(`tfg:olive_oil_alcohol_biodiesel`)
		.inputFluids("#tfg:alcohols 1000", Fluid.of('tfc:olive_oil', 1000))
		.itemInputs('#forge:tiny_dusts/sodium_hydroxide')
		.outputFluids(Fluid.of('gtceu:bio_diesel', 500))
		.duration(20 * 10)
		.EUt(GTValues.VHA[GTValues.ULV])

	event.recipes.gtceu.chemical_reactor(`soybean_oil_alcohol_biodiesel`)
		.inputFluids("#tfg:alcohols 1000", Fluid.of('firmalife:soybean_oil', 4000))
		.itemInputs('#forge:tiny_dusts/sodium_hydroxide')
		.outputFluids(Fluid.of('gtceu:bio_diesel', 6000))
		.duration(20 * 10)
		.EUt(GTValues.VHA[GTValues.ULV])

	// So you can craft Biodiesel without Chemical Reactor
	event.recipes.gtceu.mixer(`tfg:soybean_oil_alcohol_biodiesel`)
		.inputFluids("#tfg:alcohols 1000", Fluid.of('firmalife:soybean_oil', 1000))
		.itemInputs('#forge:tiny_dusts/sodium_hydroxide')
		.outputFluids(Fluid.of('gtceu:bio_diesel', 500))
		.duration(20 * 10)
		.EUt(GTValues.VHA[GTValues.ULV])

	event.recipes.gtceu.chemical_reactor(`fish_oil_alcohol_biodiesel`)
		.inputFluids("#tfg:alcohols 1000", Fluid.of('gtceu:fish_oil', 6000))
		.itemInputs('#forge:tiny_dusts/sodium_hydroxide')
		.outputFluids(Fluid.of('gtceu:bio_diesel', 6000))
		.duration(20 * 10)
		.EUt(GTValues.VHA[GTValues.ULV])

	event.recipes.gtceu.chemical_reactor(`tallow_alcohol_biodiesel`)
		.inputFluids("#tfg:alcohols 1000", Fluid.of('tfc:tallow', 6000))
		.itemInputs('#forge:tiny_dusts/sodium_hydroxide')
		.outputFluids(Fluid.of('gtceu:bio_diesel', 6000))
		.duration(20 * 10)
		.EUt(GTValues.VHA[GTValues.ULV])


	// So you can craft Biodiesel without Chemical Reactor
	event.recipes.gtceu.mixer(`tfg:fish_oil_alcohol_biodiesel`)
		.inputFluids("#tfg:alcohols 1000", Fluid.of('gtceu:fish_oil', 1000))
		.itemInputs('#forge:tiny_dusts/sodium_hydroxide')
		.outputFluids(Fluid.of('gtceu:bio_diesel', 500))
		.duration(20 * 10)
		.EUt(GTValues.VHA[GTValues.ULV])


	event.recipes.gtceu.mixer(`tfg:tallow_alcohol_biodiesel`)
		.inputFluids("#tfg:alcohols 1000", Fluid.of('tfc:tallow', 1000))
		.itemInputs('#forge:tiny_dusts/sodium_hydroxide')
		.outputFluids(Fluid.of('gtceu:bio_diesel', 500))
		.duration(20 * 10)
		.EUt(GTValues.VHA[GTValues.ULV])

	event.recipes.gtceu.chemical_reactor(`olive_oil_ethanol_biodiesel`)
		.inputFluids(Fluid.of('tfc:olive_oil', 4000), Fluid.of('gtceu:ethanol', 1000))
		.itemInputs('#forge:tiny_dusts/sodium_hydroxide')
		.outputFluids(Fluid.of('gtceu:glycerol'), Fluid.of('gtceu:bio_diesel', 6000))
		.duration(20 * 10)
		.EUt(GTValues.VHA[GTValues.LV])

	event.recipes.gtceu.chemical_reactor(`olive_oil_methanol_biodiesel`)
		.inputFluids(Fluid.of('tfc:olive_oil', 4000), Fluid.of('gtceu:methanol', 1000))
		.itemInputs('#forge:tiny_dusts/sodium_hydroxide')
		.outputFluids(Fluid.of('gtceu:glycerol'), Fluid.of('gtceu:bio_diesel', 6000))
		.duration(20 * 10)
		.EUt(GTValues.VHA[GTValues.LV])

	event.recipes.gtceu.chemical_reactor(`soybean_oil_ethanol_biodiesel`)
		.inputFluids(Fluid.of('firmalife:soybean_oil', 4000), Fluid.of('gtceu:ethanol', 1000))
		.itemInputs('#forge:tiny_dusts/sodium_hydroxide')
		.outputFluids(Fluid.of('gtceu:glycerol'), Fluid.of('gtceu:bio_diesel', 6000))
		.duration(20 * 10)
		.EUt(GTValues.VHA[GTValues.LV])

	event.recipes.gtceu.chemical_reactor(`soybean_oil_methanol_biodiesel`)
		.inputFluids(Fluid.of('firmalife:soybean_oil', 4000), Fluid.of('gtceu:methanol', 1000))
		.itemInputs('#forge:tiny_dusts/sodium_hydroxide')
		.outputFluids(Fluid.of('gtceu:glycerol'), Fluid.of('gtceu:bio_diesel', 6000))
		.duration(20 * 10)
		.EUt(GTValues.VHA[GTValues.LV])

	event.recipes.gtceu.chemical_reactor(`tallow_methanol_biodiesel`)
		.inputFluids(Fluid.of('tfc:tallow', 6000), Fluid.of('gtceu:methanol', 1000))
		.itemInputs('#forge:tiny_dusts/sodium_hydroxide')
		.outputFluids(Fluid.of('gtceu:glycerol'), Fluid.of('gtceu:bio_diesel', 6000))
		.duration(20 * 10)
		.EUt(GTValues.VHA[GTValues.LV])

	event.recipes.gtceu.chemical_reactor(`tallow_ethanol_biodiesel`)
		.inputFluids(Fluid.of('tfc:tallow', 6000), Fluid.of('gtceu:ethanol', 1000))
		.itemInputs('#forge:tiny_dusts/sodium_hydroxide')
		.outputFluids(Fluid.of('gtceu:glycerol'), Fluid.of('gtceu:bio_diesel', 6000))
		.duration(20 * 10)
		.EUt(GTValues.VHA[GTValues.LV])
}