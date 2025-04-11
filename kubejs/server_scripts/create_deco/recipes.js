const replaceMe = {
	'#createdeco:internal/plates/andesite_plates': 'gtceu:wrought_iron_plate',
	'#createdeco:internal/plates/copper_plates': 'gtceu:copper_plate',
	'createdeco:zinc_sheet': 'gtceu:zinc_plate',
	'#createdeco:internal/plates/brass_plates': 'gtceu:brass_plate',
	'#createdeco:internal/plates/iron_plates': 'gtceu:iron_plate',
	'createdeco:andesite_bars': 'tfc:metal/bars/wrought_iron',
	'#createdeco:internal/ingots/copper_ingots': 'gtceu:copper_ingot',
	'create:zinc_ingot': 'gtceu:zinc_ingot',
	'#createdeco:internal/ingots/brass_ingots': 'gtceu:brass_ingot',
	'#createdeco:internal/ingots/iron_ingots': 'gtceu:iron_ingot',
	'create:andesite_alloy': 'gtceu:wrought_iron_ingot',
	'#createdeco:internal/ingots/andesite_ingots': 'gtceu:wrought_iron_ingot',
	'#createdeco:internal/blocks/andesite_blocks': 'tfc:rock/raw/andesite',
	'#createdeco:internal/blocks/andesite_blocks': 'gtceu:brass_block',
	'#createdeco:internal/blocks/andesite_blocks': 'tfc:rock/raw/andesite',
	'minecraft:vine': '#tfc:plants'
}

const decoBrickColors = {
	'createdeco:dusk_bricks': 'black',
	'createdeco:dean_bricks': 'orange',
	'createdeco:blue_bricks': 'blue',
	'createdeco:scarlet_bricks': 'red',
	'createdeco:verdant_bricks': 'green',
	'createdeco:umber_bricks': 'brown'
}

const decoLamps = {
	andesite: 'gtceu:wrought_iron_ingot',
	copper: 'minecraft:copper_ingot',
	zinc: 'gtceu:zinc_ingot',
	brass: 'gtceu:brass_ingot',
	industrial_iron: 'createdeco:industrial_iron_ingot',
	iron: 'minecraft:iron_ingot'
}

const decoLampColors = ['yellow', 'red', 'green', 'blue']

const createDecoIntegration = (event) => {
	event.remove({type: 'create:compacting', output: 'createdeco:industrial_iron_ingot'})
	event.recipes.create.filling('2x createdeco:industrial_iron_ingot', [Fluid.of('gtceu:iron', 144), 'minecraft:iron_ingot']).id(`gpedia:industrial_iron/spout`)
	event.recipes.gtceu.fluid_solidifier(`gpedia:industrial_iron/fluid_solidifier`)
		.itemInputs(`minecraft:iron_ingot`)
		.inputFluids(Fluid.of(`gtceu:iron`, 144))
		.itemOutputs(`2x createdeco:industrial_iron_ingot`)
		.EUt(24)
		.duration(20)
	
	Object.keys(replaceMe).forEach(replacement => {
		event.replaceInput({ mod: 'createdeco' }, replacement, replaceMe[`${replacement}`])
	})
	
	Object.keys(decoBrickColors).forEach(bricks => {
		event.remove({ output: `${bricks}`})
		event.recipes.tfc.barrel_sealed(100)
			.outputItem(Item.of(`${bricks}`))
			.inputItem(Item.of('minecraft:bricks'))
			.inputFluid(TFC.fluidStackIngredient(`tfc:${decoBrickColors[`${bricks}`]}_dye`, 144))
			.id(`gpedia:createdeco/brick_color_${decoBrickColors[`${bricks}`]}`)
		event.recipes.gtceu.chemical_bath(`gpedia:createdeco/chemical_bath/brick_color_${decoBrickColors[`${bricks}`]}`)
			.itemOutputs(Item.of(`${bricks}`))
			.itemInputs(Item.of('minecraft:bricks'))
			.inputFluids(Fluid.of(`gtceu:${decoBrickColors[`${bricks}`]}_dye`, 18))
			.EUt(24)
			.duration(20)
	})

	event.recipes.tfc.barrel_sealed(100)
		.outputItem(Item.of('createdeco:pearl_bricks'))
		.inputItem(Item.of('minecraft:bricks'))
		.inputFluid(TFC.fluidStackIngredient('tfc:lye', 144))
		.id('gpedia:createdeco/brick_color_white')

	event.recipes.gtceu.chemical_bath('gpedia:createdeco/chemical_bath/brick_color_white')
		.itemOutputs(Item.of('createdeco:pearl_bricks'))
		.itemInputs(Item.of('minecraft:bricks'))
		.inputFluids(Fluid.of('gtceu:chlorine', 18))
		.EUt(24)
		.duration(20)
	
	decoLampColors.forEach(color => {
		Object.keys(decoLamps).forEach(mat => {
			event.remove({ output: `createdeco:${color}_${mat}_lamp` })
			event.shaped(
				Item.of(`createdeco:${color}_${mat}_lamp`, 1),
				[
					'M  ',
					'GD ',
					'M  '
				],
				{
					M: `${decoLamps[`${mat}`]}`,
					G: `minecraft:glowstone_dust`,
					D: `#c:${color}_dyes`
				}
			)
		})
	})
	
	/* global.MINECRAFT_DYE_NAMES.forEach(dye => {
		event.
	}) */
}

ServerEvents.recipes( event => {
	createDecoIntegration(event)
})
