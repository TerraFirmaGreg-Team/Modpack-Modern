const registerCreatedecoRecipes = (event) => {

	//#region Item Replacements
	const replacements = {
		'create:zinc_ingot': '#forge:ingots/zinc',
		'createdeco:zinc_sheet': '#forge:plates/zinc',
		'create:zinc_nugget': '#forge:nuggets/zinc',
		'create:brass_ingot': '#forge:ingots/brass',
		'create:brass_sheet': '#forge:plates/brass',
		'create:brass_nugget': '#forge:nuggets/brass',
		'minecraft:iron_ingot': '#forge:ingots/wrought_iron',
		'create:iron_sheet': '#forge:plates/wrought_iron',
		'minecraft:iron_nugget': '#forge:nuggets/wrought_iron',
		'createdeco:industrial_iron_ingot': '#forge:ingots/steel',
		'createdeco:industrial_iron_sheet': '#forge:plates/steel',
		'createdeco:industrial_iron_nugget': '#forge:nuggets/steel',
		'minecraft:torch': 'minecraft:glowstone_dust',
		'minecraft:vine': '#tfc:moss',
		'create:andesite_alloy': '#forge:ingots/tin_alloy',
		'createdeco:andesite_sheet': '#forge:plates/tin_alloy',
		'create:copper_nugget': '#forge:nuggets/copper',
		'createdeco:netherite_nugget': '#forge:nuggets/blue_steel',
		'minecraft:string': '#forge:string'
	};

	// Iterate through the replacement list and update recipes
	Object.keys(replacements).forEach(missingItem => {
		const replacementItem = replacements[missingItem];

		event.replaceInput({ mod: "createdeco" }, missingItem, replacementItem);
	});
	//#endregion

	//#region Recipe Removal
	event.remove({ output: 'createdeco:zinc_sheet' })
	event.remove({ output: 'createdeco:industrial_iron_sheet' })
	event.remove({ output: 'createdeco:industrial_iron_nugget' })
	event.remove({ output: 'createdeco:industrial_iron_ingot' })
	//#endregion

	//#region Lamp Recipes
	const lampColors = ['blue', 'green', 'red', 'yellow'];
	const lampTypes = ['zinc', 'brass', 'iron', 'industrial_iron', 'copper', 'andesite'];

	lampTypes.forEach(type => {
		lampColors.forEach(color => {
			event.remove({ output: `createdeco:${color}_${type}_lamp` });
		});
	});

	function lampRecipe(output, lampType, lampColor) {

		const replacementLampType = lampType;
		if (lampType == 'industrial_iron') {
			replacementLampType = 'steel';
		}
		if (lampType == 'andesite') {
			replacementLampType = 'wrought_iron';
		}

		let ingredients = {
			T: `minecraft:glowstone_dust`,
			N: `#forge:nuggets/${replacementLampType}`,
			P: `#forge:plates/${replacementLampType}`,
			D: null,
			X: null
		};

		// Adjust based on the color
		if (lampColor === 'green') {
			ingredients.D = 'gtceu:small_copper_dust';
		} else if (lampColor === 'blue') {
			ingredients.D = 'gtceu:small_sulfur_dust';
		} else if (lampColor === 'red') {
			ingredients.D = `gtceu:small_lithium_dust`;
		} else if (lampColor === 'yellow') {
			ingredients.D = `gtceu:small_salt_dust`;
		}

		if (lampType === 'iron') {
			ingredients.N = '#forge:nuggets/wrought_iron';
			ingredients.P = '#forge:plates/wrought_iron';
		}
		if (lampType === 'andesite') {
			ingredients.N = '#forge:nuggets/tin_alloy';
			ingredients.P = '#forge:plates/tin_alloy';
		}
		if (lampType === 'industrial_iron') {
			ingredients.N = '#forge:nuggets/steel';
			ingredients.P = '#forge:plates/steel';
		}


		// Create the shaped recipe

		event.shaped(output, [
			'XN ',
			'DTX',
			'XP '
		], ingredients);
	}

	// Loop through each lamp type and color to create the recipes
	lampTypes.forEach(lampType => {
		lampColors.forEach(lampColor => {
			let output = `createdeco:${lampColor}_${lampType}_lamp`; // Define the output item ID
			lampRecipe(output, lampType, lampColor); // Call the lampRecipe function for each combination
		});
	});
	//#endregion

	//#region Brick Recipes
	const brickTypes = ['blue', 'verdant', 'pearl', 'dean', 'dusk', 'scarlet', 'umber']
	const powderTypes = ['lapis_lazuli', 'malachite', 'soda_ash', 'limonite', 'charcoal', 'hematite', 'cassiterite']

	brickTypes.forEach(type => {
		event.remove({ output: `createdeco:${type}_bricks` });
	});

	brickTypes.forEach((type, index) => {
		const powder = `tfc:powder/${powderTypes[index]}`;
		event.shaped(Item.of(`createdeco:${type}_bricks`, 4),
			[
				'BDB',
				'MBM',
				'BMB'
			],
			{
				B: `minecraft:brick`,
				D: powder,
				M: `tfc:mortar`
			});
	});
	//#endregion

	//#region Dyes
	global.MINECRAFT_DYE_NAMES.forEach(color => {
		event.remove({ output: `createdeco:${color}_shipping_container`, input: 'minecraft:barrel' });

		event.replaceInput({ mod: "createdeco" }, `minecraft:${color}_dye`, `#forge:dyes/${color}`);
	});
	//#endregion

	//#region Coins

	event.recipes.gtceu.forming_press('createdeco:gold_coin')
		.itemInputs('#forge:nuggets/gold')
		.notConsumable('gtceu:credit_casting_mold')
		.itemOutputs('4x createdeco:gold_coin')
		.duration(50)
		.EUt(16)

	event.recipes.gtceu.forming_press('createdeco:netherite_coin')
		.itemInputs('#forge:nuggets/blue_steel')
		.notConsumable('gtceu:credit_casting_mold')
		.itemOutputs('4x createdeco:netherite_coin')
		.duration(50)
		.EUt(16)

	event.recipes.gtceu.forming_press('createdeco:brass_coin')
		.itemInputs('#forge:nuggets/brass')
		.notConsumable('gtceu:credit_casting_mold')
		.itemOutputs('4x createdeco:brass_coin')
		.duration(50)
		.EUt(16)

	event.recipes.gtceu.forming_press('createdeco:iron_coin')
		.itemInputs('#forge:nuggets/wrought_iron')
		.notConsumable('gtceu:credit_casting_mold')
		.itemOutputs('4x createdeco:iron_coin')
		.duration(50)
		.EUt(16)

	event.recipes.gtceu.forming_press('createdeco:copper_coin')
		.itemInputs('#forge:nuggets/copper')
		.notConsumable('gtceu:credit_casting_mold')
		.itemOutputs('4x createdeco:copper_coin')
		.duration(50)
		.EUt(16)

	event.recipes.gtceu.forming_press('createdeco:industrial_iron_coin')
		.itemInputs('#forge:nuggets/steel')
		.notConsumable('gtceu:credit_casting_mold')
		.itemOutputs('createdeco:industrial_iron_coin')
		.duration(50)
		.EUt(16)

	event.recipes.gtceu.forming_press('createdeco:zinc_coin')
		.itemInputs('#forge:nuggets/zinc')
		.notConsumable('gtceu:credit_casting_mold')
		.itemOutputs('createdeco:zinc_coin')
		.duration(50)
		.EUt(16)

	// #region
};