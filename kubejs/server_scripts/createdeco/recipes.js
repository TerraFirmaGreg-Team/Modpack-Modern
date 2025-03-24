const registerCreatedecoRecipes = (event) => {

//#region Item Replacements
    const replacements = {
        'create:zinc_ingot': 'gtceu:zinc_ingot',
        'createdeco:zinc_sheet': 'gtceu:zinc_plate',
        'create:brass_ingot': 'gtceu:brass_ingot',
        'create:iron_sheet': 'gtceu:iron_plate',
        'createdeco:industrial_iron_ingot': 'gtceu:steel_ingot',
        'createdeco:industrial_iron_sheet': 'gtceu:steel_plate',
        'create:brass_sheet' : 'gtceu:brass_plate',
        'minecraft:torch' : 'minecraft:glowstone_dust',
        'create:brass_nugget' : 'gtceu:brass_nugget',
        'create:andesite_alloy' : 'gtceu:wrought_iron_ingot',
        'createdeco:andesite_sheet' : 'gtceu:wrought_iron_plate',
        'create:copper_nugget' : 'gtceu:copper_nugget',
        'create:zinc_nugget' : 'gtceu:zinc_nugget',
        'createdeco:industrial_iron_nugget' : 'gtceu:steel_nugget',
        'createdeco:netherite_nugget' : 'gtceu:blue_steel_nugget',
    };

    // Iterate through the replacement list and update recipes
    Object.keys(replacements).forEach(missingItem => {
        const replacementItem = replacements[missingItem];
    
        event.replaceInput({mod:"createdeco"}, missingItem, replacementItem);
      });
//#endregion

//#region Recipe Removal
    const barRemove = ['andesite', 'brass', 'iron', 'copper', 'industrial_iron', 'zinc'];

    barRemove.forEach(barRemove => {
        event.remove({id: `createdeco:${barRemove}_bars`})
        event.remove({id: `createdeco:${barRemove}_bars_overlay`})
    });

    event.remove({output: 'createdeco:zinc_sheet'})
    event.remove({output: 'createdeco:industrial_iron_sheet'})
    event.remove({output: 'createdeco:industrial_iron_nugget'})
    event.remove({output: 'createdeco:industrial_iron_ingot'})
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
        console.log(`Creating recipe for: ${output} (Type: ${lampType}, Color: ${lampColor})`);

        const replacementLampType = lampType;
        if(lampType == 'industrial_iron') {
            replacementLampType = 'steel';
        }
        if(lampType == 'andesite') {
            replacementLampType = 'wrought_iron';
        }

        let ingredients = {
            T: `minecraft:glowstone_dust`,
            N: `gtceu:${replacementLampType}_nugget`,
            P: `gtceu:${replacementLampType}_plate`,
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
            ingredients.N = 'minecraft:iron_nugget';  // Use Minecraft iron nugget for iron lamps
        }
        if (lampType === 'andesite') {
            ingredients.N = 'gtceu:wrought_iron_nugget'; 
            ingredients.P = 'gtceu:wrought_iron_plate';
        }
        if (lampType === 'industrial_iron') {
            ingredients.N = 'gtceu:steel_nugget'; 
            ingredients.P = 'gtceu:steel_plate';
        }

        console.log(`Ingredients for ${output}:`, ingredients);
    
        // Create the shaped recipe

        event.shaped(output, [
            'XN ',
            'DTX',
            'XP '
        ], ingredients);
        console.log(`Recipe successfully created for: ${output}`);
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
    const brickTypes =   ['blue',         'verdant',   'pearl',    'dean',     'dusk',     'scarlet',  'umber']
    const powderTypes =  ['lapis_lazuli', 'malachite', 'soda_ash', 'limonite', 'charcoal', 'hematite', 'cassiterite']

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

//#region Container Recipes
    const containerColors = ['white', 'orange', 'pink', 'magenta', 'light_blue', 'yellow', 'lime', 'gray', 'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black'];

    containerColors.forEach(color => {
        event.remove({ output: `createdeco:${color}_shipping_container`, input: 'minecraft:barrel' });
    });
//#endregion
};