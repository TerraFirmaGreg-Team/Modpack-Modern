ServerEvents.recipes(event => {
    const replacements = {
    // andesite alloy to ???
    // andesite alloy sheet to ???

        'create:zinc_ingot': 'gtceu:zinc_ingot',
        'createdeco:zinc_sheet': 'gtceu:zinc_plate',
        'create:brass_ingot': 'gtceu:brass_ingot',
        'create:iron_sheet': 'gtceu:iron_plate',
        'createdeco:industrial_iron_ingot': 'gtceu:steel_ingot',
        'createdeco:industrial_iron_sheet': 'gtceu:steel_plate',
        'create:brass_sheet' : 'gtceu:brass_plate',
        'minecraft:torch' : 'tfc:torch',
        'create:brass_nugget' : 'gtceu:brass_nugget',
        'create:andesite_alloy' : 'gtceu:tin_alloy_ingot',
        'createdeco:andesite_sheet' : 'gtceu:tin_alloy_plate',
    };

    event.shaped("tfc:metal/bars/wrought_iron", [
        'III',
        'III',
        '   '
    ], {I: 'minecraft:iron_ingot'});

    // Iterate through the replacement list and update recipes
    Object.keys(replacements).forEach(missingItem => {
        const replacementItem = replacements[missingItem];
    
        event.replaceInput({mod:"createdeco"}, missingItem, replacementItem);
      });

    event.remove({output: 'createdeco:zinc_sheet'})
    event.remove({output: 'createdeco:industrial_iron_sheet'})
    event.remove({output: 'createdeco:industrial_iron_nugget'})
    event.remove({output: 'createdeco:industrial_iron_ingot'})

    // lamp recipe fixes
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
            replacementLampType = 'tin_alloy';
        }

        let ingredients = {
            T: `tfc:torch`,
            N: `gtceu:${replacementLampType}_nugget`,
            P: `gtceu:${replacementLampType}_plate`,
            D: null,
            X: null
        };
    
        // Adjust based on the color
        if (lampColor === 'green') {
            ingredients.D = 'tfc:powder/malachite';
        } else if (lampColor === 'blue') {
            ingredients.D = 'tfc:powder/sulfur';
        } else if (lampColor === 'red') {
            ingredients.T = `minecraft:redstone_torch`;
        }

        if (lampType === 'iron') {
            ingredients.N = 'minecraft:iron_nugget';  // Use Minecraft iron nugget for iron lamps
        }
        if (lampType === 'andesite') {
            ingredients.N = 'gtceu:tin_alloy_nugget'; 
            ingredients.P = 'gtceu:tin_alloy_plate';
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

    const containerColors = ['white', 'orange', 'pink', 'magenta', 'light_blue', 'yellow', 'lime', 'gray', 'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black'];

    containerColors.forEach(color => {
        event.remove({ output: `createdeco:${color}_shipping_container`, input: 'minecraft:barrel' });
    });
});