// priority: 0

const generateMixerRecipe = (event, input, fluid_input, output, circuit, fluid_output, duration, EUt, rpm, id) => {
	const recipe = event.recipes.gtceu.mixer(id)
		.itemInputs(input)
		.inputFluids(fluid_input)
		.itemOutputs(output)
		.outputFluids(fluid_output)
		.duration(duration)
		.EUt(EUt)

	if (circuit != null) {
		recipe.circuit(circuit)
	}
}

const generateCutterRecipe = (event, input, circuit, output, duration, EUt, id) => {
	// Вот зачем я, скажете вы, делаю тут всякие костыли, 
	// потому что блядский разработчик GTCEu не может исправить баги своего мода
	// Я так устал..

	const recipe1 = event.recipes.gtceu.cutter(`tfg:${id}_water`)
		.itemInputs(input)
		.inputFluids(Fluid.of('minecraft:water', 4))
		.itemOutputs(output)
		.duration(duration)
		.EUt(EUt)

	const recipe2 = event.recipes.gtceu.cutter(`tfg:${id}_dist_water`)
		.itemInputs(input)
		.inputFluids(Fluid.of('gtceu:distilled_water', 3))
		.itemOutputs(output)
		.duration(duration)
		.EUt(EUt)

	const recipe3 = event.recipes.gtceu.cutter(`tfg:${id}_lubricant`)
		.itemInputs(input)
		.inputFluids(Fluid.of('gtceu:lubricant', 1))
		.itemOutputs(output)
		.duration(duration)
		.EUt(EUt)

	event.recipes.createCutting(output, input)
		.id(`tfg:cutting/${id}`)


	if (circuit != null) {
		recipe1.circuit(circuit)
		recipe2.circuit(circuit)
		recipe3.circuit(circuit)
	}
}

const generateGreenHouseRecipe = (event, input, fluid_amount, output, id) => {

	// Без удобрения
	event.recipes.gtceu.greenhouse(id)
		.itemInputs(input)
		.circuit(1)
		.inputFluids(Fluid.of('minecraft:water', fluid_amount))
		.itemOutputs(output)
		.chancedOutput(input, 7500, 0)
		.chancedOutput(input, 5000, 0)
		.duration(36000) // 30 mins
		.EUt(72)

	// С удобрением
	event.recipes.gtceu.greenhouse(`${id}_fertilized`)
		.itemInputs(input)
		.itemInputs('8x gtceu:fertilizer')
		.circuit(2)
		.inputFluids(Fluid.of('minecraft:water', fluid_amount))
		.itemOutputs(output)
		.chancedOutput(input, 8500, 0)
		.chancedOutput(input, 6000, 0)
		.duration(12000) // 10 mins
		.EUt(196)
}

const getFillingNBT = (material, amount) => {
	return {
		tank: {
			FluidName: Fluid.of(material.getFluid()).getId(),
			Amount: amount
		}
	}
}

function generatePlatedBlockRecipe(event, material) {
	console.log(`MATERIAL: ${material}`)

	let plateItem = ChemicalHelper.get(TagPrefix.plate, material, 1);
	
	let platedBlock = ChemicalHelper.get(TFGTagPrefix.blockPlated, material, 1);
	let platedSlab = ChemicalHelper.get(TFGTagPrefix.slabPlated, material, 1);
	let platedStair = ChemicalHelper.get(TFGTagPrefix.stairPlated, material, 1);

	event.recipes.create.item_application(platedBlock, ['#forge:stone_bricks', plateItem])
		.id(`tfg:item_application/${material.getName()}_plated_block`)
	event.recipes.createDeploying(platedBlock, ['#forge:stone_bricks', plateItem])
		.id(`tfg:deploying/${material.getName()}_plated_block`)
	event.recipes.gtceu.assembler(`tfg:assembler/${material.getName()}_plated_block`)
		.itemInputs('#forge:stone_bricks', plateItem)
		.itemOutputs(platedBlock)
		.circuit(10)
		.duration(50)
		.EUt(4)

	event.recipes.create.item_application(platedSlab, ['#tfg:brick_slabs', plateItem])
		.id(`tfg:item_application/${material.getName()}_plated_slab`)
	event.recipes.createDeploying(platedSlab, ['#tfg:brick_slabs', plateItem])
		.id(`tfg:deploying/${material.getName()}_plated_slab`)
	event.recipes.gtceu.assembler(`tfg:assembler/${material.getName()}_plated_slab`)
		.itemInputs('#tfg:brick_slabs', plateItem)
		.itemOutputs(platedSlab)
		.circuit(10)
		.duration(50)
		.EUt(4)

	event.recipes.create.item_application(platedStair, ['#tfg:brick_stairs', plateItem])
		.id(`tfg:item_application/${material.getName()}_plated_stair`)
	event.recipes.createDeploying(platedStair, ['#tfg:brick_stairs', plateItem])
		.id(`tfg:deploying/${material.getName()}_plated_stair`)
	event.recipes.gtceu.assembler(`tfg:assembler/${material.getName()}_plated_stair`)
		.itemInputs('#tfg:brick_stairs', plateItem)
		.itemOutputs(platedStair)
		.circuit(10)
		.duration(50)
		.EUt(4)
}