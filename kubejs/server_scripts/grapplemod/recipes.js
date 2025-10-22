"use strict";

/*
 * NBT Structure of a Grappling Hook:
 * 
 * {
 *      Damage:0, //The damage of the item, duh
 *      custom:
 *      {
 *          angle:5.0d, //Used for the double hook, defaults to 5, can be increased or decreased using a Screwdriver
 *          attract:0b, //Wether the magnet upgrade is equiped
 *          attractradius:3.0d, //Strength of the magnet upgrade, tiered with GT's magnetic metallic ingots
 *          crc32:2252267022L, //This fucking piece of shit is a Checksum, it needs to be calculated based off the boolean and double params.
 *          detachonkeyrelease:0b,
 *          doublehook:0b, //Wether we have a double hook, enabled by adding a black steel pickaxe head
 *          enderstaff:0b,
 *          hookgravity:1.0d, //The actual hook's gravity, can be set to 0.5 using a Helium Bucket, or to 0 using a Gravitation Engine Module
 *          maxlen:200.0d, //The maximum length of the rope, this can be increased with Jute Rope, and decreased using a knife
 *          motor:0b, //Wether the grappling hook has a motor.
 *          motoracceleration:0.2d, //The acceleration of the motor, tiered with GT's electric motors
 *          motordampener:0b,
 *          motormaxspeed:4.0d, //The max speed of the motor, tiered with GT's electric motors
 *          motorwhencrouching:0b,
 *          motorwhennotcrouching:1b,
 *          oneropepull:0b,
 *          phaserope:0b,
 *          playermovementmult:1.0d,
 *          pullbackwards:1b,
 *          reelin:1b,
 *          repel:0b, //Wether the Force Field upgrade is enabled
 *          repelforce:1.0d, //Strength of the Force Field upgrade, tiered with GT's Field Generators
 *          rocket:0b,
 *          rocket_active_time:0.5d,
 *          rocket_force:1.0d,
 *          rocket_refuel_ratio:15.0d,
 *          rocket_vertical_angle:0.0d,
 *          smartdoublemotor:1b, //Wether we have the smart motor enabled, this is enabled utilizing a basic electronic circuit
 *          smartmotor:0b,//Wether we have the smart motor enabled, this is enabled utilizing a basic electronic circuit
 *          sneakingangle:10.0d, //Used for the double hook while sneaking, Is always equal to angle / 2.
 *          sneakingverticalthrowangle:0.0d, //Vertical throwing angle while sneaking, Is always equal to verticalthrowingangle / 2
 *          sticky:0b, //Wether the rope is sticky, enabled using sticky resin
 *          throwspeed:2.0d, //The speed we use to throw the grappling hook, tiered with GT's pistons
 *          verticalthrowangle:0.0d //The angle at whicih we throw the hook vertically.
 *      }
 * }
 */

let $GrappleCustomization = Java.loadClass('com.yyon.grapplinghook.utils.GrappleCustomization');
/**
 * 
 * @param {Internal.RecipesEventJS} event 
 */
function registerGrapplingHookRecipes(event) {
    const ADDITIVE_UPGRADES_MINMAX = 
    {
        maxLen: { nbt: "maxlen", maxValue: 200, minValue: 20},
        verticalThrowAngle: { nbt: "verticalthrowangle", maxValue: 90, minValue: 0},
        angle: { nbt: "angle", maxValue: 90, minValue: 5}
    }

    let motorUpgrades =
    [
        {
            electricTier: "lv",
            motorMaxSpeed: 1,
            motorAcceleration: 0.125
        },
        {
            electricTier: "mv",
            motorMaxSpeed: 1.14,
            motorAcceleration: 0.25
        },
        {
            electricTier: "hv",
            motorMaxSpeed: 1.28,
            motorAcceleration: 0.375
        },
        {
            electricTier: "ev",
            motorMaxSpeed: 1.42,
            motorAcceleration: 0.5
        },
        {
            electricTier: "iv",
            motorMaxSpeed: 1.56,
            motorAcceleration: 0.625
        },
        {
            electricTier: "luv",
            motorMaxSpeed: 1.7,
            motorAcceleration: 0.75
        },
        {
            electricTier: "zpm",
            motorMaxSpeed: 1.84,
            motorAcceleration: 0.875
        },
        {
            electricTier: "uv",
            motorMaxSpeed: 2,
            motorAcceleration: 1
        }
    ]

    let forcefieldUpgrades =[
        {
            electricTier: "lv",
            repelForce: 0.625
        },
        {
            electricTier: "mv",
            repelForce: 1.25
        },
        {
            electricTier: "hv",
            repelForce: 1.875
        },
        {
            electricTier: "ev",
            repelForce: 2.5
        },
        {
            electricTier: "iv",
            repelForce: 3.125
        },
        {
            electricTier: "luv",
            repelForce: 3.75
        },
        {
            electricTier: "zpm",
            repelForce: 4.375
        },
        {
            electricTier: "uv",
            repelForce: 5
        },
    ]

    let magnetUpgrades =[
        {
            ingotName: 'magnetic_iron_ingot',
            attractionRadius: 1.25
        },
        {
            ingotName: 'magnetic_steel_ingot',
            attractionRadius: 2.5,
        },
        {
            ingotName: 'magnetic_neodymium_ingot',
            attractionRadius: 3.75,
        },
        {
            ingotName: 'magnetic_samarium_ingot',
            attractionRadius: 5
        }
    ]

    let throwUpgrades =[
        {
            electricTier: "lv",
            throwSpeed: 2.25
        },
        {
            electricTier: "mv",
            throwSpeed: 2.5
        },
        {
            electricTier: "hv",
            throwSpeed: 2.75
        },
        {
            electricTier: "ev",
            throwSpeed: 3
        },
        {
            electricTier: "iv",
            throwSpeed: 3.25
        },
        {
            electricTier: "luv",
            throwSpeed: 3.5
        },
        {
            electricTier: "zpm",
            throwSpeed: 3.75
        },
        {
            electricTier: "uv",
            throwSpeed: 4
        },
    ]

    /**
     * Helper method for creating an upgrade recipe utilizing the GrappleCustomization class. The method itself returns the REcipeBuilder so you can modify it further
     * @param {InputItem_[]} upgradeItems The items required to craft this upgrade
     * @param {(grappleCustomization: Internal.GrappleCustomization, orig: Internal.ItemStack, result: Internal.ItemStack) => Internal.ItemStack} grappleCustomizationCallback A function that's used to modify the GrapplingHook's NBT data. It must return the actual result of the crafting recipe, which can be result. If null is returned from this function then the result is Air, making it impossible to actually apply the upgrade.
     * @param {string} localizationToken A token to display as the item's name, only used in JEI to tell the end user what the upgrade does
     * @returns {Special.Recipes.ShapelessKubejs} The Recipe Builder
     */
    function shapelessUpgradeRecipe(upgradeItems, grappleCustomizationCallback, localizationToken) {
        let inputs = ['grapplemod:grapplinghook'].concat(upgradeItems);
        let recipeBuilder = event.recipes.kubejs.shapeless(Item.of('grapplemod:grapplinghook').withName(Text.translate(localizationToken)), inputs);
        recipeBuilder.modifyResult((grid, result) => {
            let fallbackItem = Item.of('minecraft:air');
            let orig = grid.find(Ingredient.of("grapplemod:grapplinghook"));
            
            let customization = new $GrappleCustomization();
            customization.loadNBT(orig.nbt.getCompound("custom"));
            
            result = grappleCustomizationCallback(customization, orig, result);
            if (result === null) {
                result = fallbackItem;
                return result;
            }
            
            result.nbt.put("custom", customization.writeNBT());
            result.nbt.put("Damage", orig.nbt.getInt("Damage"));

            if (orig.hasCustomHoverName()) {
                result.setHoverName(orig.hoverName);
            } else {
                result.resetHoverName();
            }
            return result;
        })
        return recipeBuilder;
    }

    /**
     * Helper method for creating an Shaped Upgrade Recipe utilizing the Grapple Customization class. The method itself returns the RecipeBuilder so you can modify it further.
     * @param {InputItem_[]} pattern The Pattern for the shaped recipe.
     * @param {{[key in string]: InputItem_}} keyMap The key map, a "grapplemod:grapplinghook" MUST be present
     * @param {(grappleCustomization: Internal.GrappleCustomization, orig: Internal.ItemStack, result: Internal.ItemStack) => Internal.ItemStack} grappleCustomizationCallback A function that's used to modify the GrapplingHook's NBT data. It must return the actual result of the crafting recipe, which can be result. If null is returned from this function then the result is Air, making it impossible to actually apply the upgrade.
     * @param {string} localizationToken A token to display as the item's name, only used in JEI to tell the end user what the upgrade does
     * @returns {Special.Recipes.ShapedKubejs} The Recipe Builder
     */
    function shapedUpgradeRecipe(pattern, keyMap, grappleCustomizationCallback, localizationToken) {
        let recipeBuilder = event.recipes.kubejs.shaped(Item.of('grapplemod:grapplinghook').withName(Text.translate(localizationToken)), pattern, keyMap)
        recipeBuilder.modifyResult((grid, result) => {
            let fallbackItem = Item.of('minecraft:air');
            let orig = grid.find(Ingredient.of("grapplemod:grapplinghook"));

            let customization = new $GrappleCustomization();
            customization.loadNBT(orig.nbt.getCompound("custom"));

            result = grappleCustomizationCallback(customization, orig, result);
            if (result === null) {
                result = fallbackItem;
                return result;
            }

            result.nbt.put("custom", customization.writeNBT());
            result.nbt.put("Damage", orig.nbt.getInt("Damage"));
            if (orig.hasCustomHoverName()) {
                result.setHoverName(orig.hoverName);
            } else {
                result.resetHoverName();
            }
            return result;
        })
        return recipeBuilder;
    }

    event.remove({mod: 'grapplemod'})

    event.recipes.kubejs.shaped('grapplemod:grapplinghook', [
        'A ',
        'B ',
        'BB'
    ], {
        A: 'gtceu:wrought_iron_pickaxe_head',
        B: 'firmaciv:rope_coil'
    })
    .modifyResult((craftingGrid, result) => {
        let grappleCustomization = new $GrappleCustomization();
        grappleCustomization.setDefaults();

        grappleCustomization.maxlen = 80;
        grappleCustomization.smartmotor = false;
        grappleCustomization.smartdoublemotor = false;
        result.nbt.putInt("Damage", 0);
        result.nbt.put("custom", grappleCustomization.writeNBT());
        return result;
    }).id('tfg:grapplemod/shapeless/grapplinghook');

    //Repair
    event.recipes.kubejs.shapeless(Item.of('grapplemod:grapplinghook').withName(Text.translate("tfg.grapplemod.repair")), ['grapplemod:grapplinghook', 'gtceu:wrought_iron_dust'])
        .modifyResult((craftingGrid, result) => {
        try {
            let fallbackItem = Item.of("minecraft:air");
            let orig = craftingGrid.find(Ingredient.of('grapplemod:grapplinghook'));
            let damage = orig.nbt.getInt("Damage");
    
            if (damage <= 0) {
                return fallbackItem;
            }
            let maxDamage = result.maxDamage;
            let restoredDamage = maxDamage / 3;
            result.nbt.putInt("Damage", Math.max(0, damage - restoredDamage));
            
            let customization = new $GrappleCustomization();
            customization.loadNBT(orig.nbt.getCompound("custom"));
            
            result.nbt.put("custom", customization.writeNBT());
            
    
            if (orig.hasCustomHoverName()) {
                result.setHoverName(orig.hoverName);
            } else {
                result.resetHoverName();
            }
            return result;
        } catch (exception) {
            console.error(exception);
        }
    }).id('tfg:grapplemod/shapeless/repair');

    //Upgrade: Max Length
    shapelessUpgradeRecipe(['firmaciv:rope_coil'], (customization, orig, result) => {
        let maxLen = customization.maxlen;
        if (maxLen >= ADDITIVE_UPGRADES_MINMAX.maxLen.maxValue)
            return null;

        maxLen = Math.min(ADDITIVE_UPGRADES_MINMAX.maxLen.maxValue, maxLen + 20);
        customization.maxlen = maxLen;
        return result;
    }, 'tfg.grapplemod.upgrades.maxlen').id('tfg:grapplemod/upgrades/maxlen');
    shapelessUpgradeRecipe(['#forge:tools/knives'], (customization, orig, result) => {
        let maxLen = customization.maxlen;
        if (maxLen <= ADDITIVE_UPGRADES_MINMAX.maxLen.minValue) {
            return null;
        }

        maxLen = Math.max(ADDITIVE_UPGRADES_MINMAX.maxLen.minValue, maxLen - 20);
        customization.maxlen = maxLen;
        return result;
    }, 'tfg.grapplemod.downgrades.maxlen').replaceIngredient('grapplemod:grapplinghook', 'firmaciv:rope_coil').id("tfg:grapplemod/downgrades/maxlen_decrease")

    //Upgrade: Motor
    motorUpgrades.forEach(motorUpgradeType => {
        //Add motor
        shapelessUpgradeRecipe([`gtceu:${motorUpgradeType.electricTier}_electric_motor`], (customization, orig, result) => {
            //If this already has a motor, disallow the recipe
            if (customization.motor) {
                return null;
            }

            customization.motor = true;
            customization.motormaxspeed = motorUpgradeType.motorMaxSpeed;
            customization.motoracceleration = motorUpgradeType.motorAcceleration;
            return result;
        }, `tfg.grapplemod.upgrades.motor.${motorUpgradeType.electricTier}`).id(`tfg:grapplemod/upgrades/motor/${motorUpgradeType.electricTier}`);

        //Remove Motor
        shapelessUpgradeRecipe([`gtceu:${motorUpgradeType.electricTier}_electric_motor`, '#forge:tools/hammers'], (customization, orig, result) => {
            let motorMaxSpeed = motorUpgradeType.motorMaxSpeed;
            let motorAcceleration = motorUpgradeType.motorAcceleration;
            if (!customization.motor) {
                return null;
            }

            if (customization.motormaxspeed !== motorMaxSpeed) return null;
            if (customization.motoracceleration !== motorAcceleration) return null;

            customization.motor = false;
            customization.motormaxspeed = 0;
            customization.motoracceleration = 0;
            return result;
        }, `tfg.grapplemod.downgrades.motor`)
        .replaceIngredient('grapplemod:grapplinghook', `gtceu:${motorUpgradeType.electricTier}_electric_motor`)
        .keepIngredient(`gtceu:${motorUpgradeType.electricTier}_electric_motor`)
        .id(`tfg:grapplemod/downgrades/motor/${motorUpgradeType.electricTier}`);
    })

    //Enable Smart Motor
    shapelessUpgradeRecipe(['gtceu:basic_electronic_circuit'], (customization, orig, result) => {
        if (!customization.motor) {
            return null;
        }

        if (customization.smartmotor || customization.smartdoublemotor) {
            return null;
        }

        customization.smartdoublemotor = true;
        customization.smartmotor = true;
        return result;
    }, 'tfg.grapplemod.upgrades.smart_motor').id('tfg:grapplemod/upgrades/smart_motor');

    //Disable Smart Motor
    shapelessUpgradeRecipe(['gtceu:basic_electronic_circuit', '#forge:tools/hammers'], (customization, orig, result) => {
        if (!customization.smartmotor || !customization.smartdoublemotor) {
            return null;
        }

        customization.smartmotor = false;
        customization.smartdoublemotor = false;
        return result;
    }, 'tfg.grapplemod.downgrades.smart_motor')
        .replaceIngredient('grapplemod:grapplinghook', 'gtceu:basic_electronic_circuit')
        .keepIngredient('gtceu:basic_electronic_circuit')
        .id('tfg:grapplemod/downgrades/smart_motor');

    //Enable Sticky Rope
    shapelessUpgradeRecipe(['gtceu:sticky_resin'], (customization, orig, result) => {
        if (customization.sticky) {
            return null;
        }

        customization.sticky = true;
        return result;
    }, 'tfg.grapplemod.upgrades.sticky')
    .id('tfg:grapplemod/upgrades/sticky')

    //Disable Sticky Rope
    shapelessUpgradeRecipe(['gtceu:sticky_resin', '#forge:tools/hammers'], (customization, orig, result) => {
        if (!customization.sticky) {
            return null;
        }

        customization.sticky = false;
        return result;
    }, 'tfg.grapplemod.downgrades.sticky')
        .replaceIngredient('grapplemod:grapplinghook', 'gtceu:sticky_resin')
        .keepIngredient('gtceu:sticky_resin')
        .id('tfg:grapplemod/downgrades/sticky')

    //Upgrade: Forcefield
    forcefieldUpgrades.forEach(forcefieldUpgradeType => {
        //Add Forcefield
        shapelessUpgradeRecipe([`gtceu:${forcefieldUpgradeType.electricTier}_field_generator`], (customization, orig, result) => {
            if (customization.repel) {
                return null;
            }

            customization.repel = true;
            customization.repelforce = forcefieldUpgradeType.repelForce;
            return result;
        }, `tfg.grapplemod.upgrades.forcefield.${forcefieldUpgradeType.electricTier}`).id(`tfg:grapplemod/upgrades/forcefield/${forcefieldUpgradeType.electricTier}`);

        //Remove Forcefield
        shapelessUpgradeRecipe([`gtceu:${forcefieldUpgradeType.electricTier}_field_generator`, '#forge:tools/hammers'], (customization, orig, result) => {
            let repelForce = forcefieldUpgradeType.repelForce;
            if (!customization.repel)
                return null;
            
            if (customization.repelforce !== repelForce) {
                return null;
            }

            customization.repel = false;
            customization.repelforce = 0;
            return result;
        }, 'tfg.grapplemod.downgrades.forcefield')
            .replaceIngredient('grapplemod:grapplinghook', `gtceu:${forcefieldUpgradeType.electricTier}_field_generator`)
            .keepIngredient(`gtceu:${forcefieldUpgradeType.electricTier}_field_generator`)
            .id(`tfg:grapplemod/downgrades/forcefield/${forcefieldUpgradeType.electricTier}`);
    })
    //Upgrade: Magnet
    magnetUpgrades.forEach(magnetUpgradeTier => {
        //Add Magnet
        shapelessUpgradeRecipe([`gtceu:${magnetUpgradeTier.ingotName}`], (customization, orig, result) => {
            if (customization.attract) {
                return null;
            }

            customization.attract = true;
            customization.attractradius = magnetUpgradeTier.attractionRadius;
            return result;
        }, `tfg.grapplemod.upgrades.magnet.${magnetUpgradeTier.ingotName}`).id(`tfg:grapplemod/upgrades/magnet/${magnetUpgradeTier.ingotName}`);

        //Remove Magnet
        shapelessUpgradeRecipe([`gtceu:${magnetUpgradeTier.ingotName}`, '#forge:tools/hammers'], (customization, orig, result) => {
            let attractionRadius = magnetUpgradeTier.attractionRadius;
            
            if (!customization.attract) return null;
            if (customization.attractradius !== attractionRadius) return null;

            customization.attract = false;
            customization.attractradius = attractionRadius;
            return result;
        }, 'tfg.grapplemod.downgrades.magnet')
            .replaceIngredient('grapplemod:grapplinghook', `gtceu:${magnetUpgradeTier.ingotName}`)
            .keepIngredient(`gtceu:${magnetUpgradeTier.ingotName}`)
            .id(`tfg:grapplemod/downgrades/magnet/${magnetUpgradeTier.ingotName}`);
    })

    //Set gravity to 0.5
    shapelessUpgradeRecipe(['gtceu:helium_bucket'], (customization, orig, result) => {
        if (customization.hookgravity !== 1) return null;
        customization.hookgravity = 0.5;
        return result;
    }, `tfg.grapplemod.upgrades.gravity.0.5`).id('tfg:grapplemod/upgrades/gravity/0.5');
    //Set gravity to 1, from 0.5
    shapelessUpgradeRecipe(['minecraft:bucket', '#forge:tools/hammers'], (customization, orig, result) => {
        if (customization.hookgravity !== 0.5) {
            return null;
        }
        customization.hookgravity = 1;
        return result;
    }, 'tfg.grapplemod.downgrades.gravity.0.5')
    .replaceIngredient('minecraft:bucket', 'gtceu:helium_bucket')
    .id('tfg:grapplemod/downgrades/gravity/0.5');

    //Set gravity to 0
    shapelessUpgradeRecipe(['gtceu:gravitation_engine_unit'], (customization, orig, result) => {
        if (customization.hookgravity !== 1) {
            return null;
        }

        customization.hookgravity = 0;
        return result;
    }, 'tfg.grapplemod.upgrades.gravity.0').id('tfg:grapplemod/upgrades/gravity/0');
    //Set gravity to 1, from 0
    shapelessUpgradeRecipe(['gtceu:tungsten_block', '#forge:tools/hammers'], (customization, orig, result) => {
        if (customization.hookgravity !== 0) {
            return null;
        }

        customization.hookgravity = 1;
        return result;
    }, 'tfg.grapplemod.downgrades.gravity.0')
    .replaceIngredient('grapplemod:grapplinghook', 'gtceu:gravitation_engine_unit')
    .keepIngredient('gtceu:tungsten_block')
    .id('tfg:grapplemod/downgrades/gravity/0')

    //Upgrade: Throw Speed
    throwUpgrades.forEach(throwUpgradeType => {
        //Add Throwspeed
        shapelessUpgradeRecipe([`gtceu:${throwUpgradeType.electricTier}_electric_piston`], (customization, orig, result) => {
            if (customization.throwspeed !== 2) {
                return null;
            }

            customization.throwspeed = throwUpgradeType.throwSpeed;
            return result;
        }, `tfg.grapplemod.upgrades.throwspeed.${throwUpgradeType.electricTier}`).id(`tfg:grapplemod/upgrades/throwspeed/${throwUpgradeType.electricTier}`);

        //Remove Throwspeed
        shapelessUpgradeRecipe([`gtceu:${throwUpgradeType.electricTier}_electric_piston`, '#forge:tools/hammers'], (customization, orig, result) => {
            let throwSpeed = throwUpgradeType.throwSpeed;
            
            if (customization.throwspeed !== throwSpeed) {
                return null;
            }

            customization.throwspeed = 2;
            return result;
        }, 'tfg.grapplemod.downgrades.throwspeed')
            .replaceIngredient('grapplemod:grapplinghook', `gtceu:${throwUpgradeType.electricTier}_electric_piston`)
            .keepIngredient(`gtceu:${throwUpgradeType.electricTier}_electric_piston`)
            .id(`tfg:grapplemod/downgrades/throwspeed/${throwUpgradeType.electricTier}`);

        })
    //Add Double Hook
    shapelessUpgradeRecipe(['gtceu:black_steel_pickaxe_head'], (customization, orig, result) => {
        if (customization.doublehook) {
            return null;
        }

        customization.doublehook = true;
        customization.angle = 5;
        customization.sneakingangle = 2.5;
        return result;
    }, 'tfg.grapplemod.upgrades.doublehook').id('tfg:grapplemod/upgrades/doublehook')

    //Remove Double Hook
    shapelessUpgradeRecipe(['gtceu:black_steel_pickaxe_head', '#forge:tools/hammers'], (customization, orig, result) => {
        if (!customization.doublehook) {
            return null;
        }

        customization.doublehook = false;
        customization.angle = 5;
        customization.sneakingangle = 2.5;
        return result;
    }, 'tfg.grapplemod.downgrades.doublehook')
        .replaceIngredient('grapplemod:grapplinghook', 'gtceu:black_steel_pickaxe_head')
        .keepIngredient('gtceu:black_steel_pickaxe_head')
        .id('tfg:grapplemod/downgrades/doublehook')

    // Increase Vertical Throw Angle
    shapedUpgradeRecipe([
        'A',
        'B'
    ],{
        A: '#forge:tools/wrenches',
        B: 'grapplemod:grapplinghook'
    }, (customization, orig, result) => {
        if (customization.verticalthrowangle >= ADDITIVE_UPGRADES_MINMAX.verticalThrowAngle.maxValue) {
            return null;
        }

        customization.verticalthrowangle = Math.min(ADDITIVE_UPGRADES_MINMAX.verticalThrowAngle.maxValue, customization.verticalthrowangle + 5);
        customization.sneakingverticalthrowangle = customization.verticalthrowangle / 2;
        return result;
    }, 'tfg.grapplemod.upgrades.vertical_throwing_angle').id('tfg:grapplemod/upgrades/vertical_throwing_angle');
    //Decrease Vertical Throw Angle
    shapedUpgradeRecipe([
        'A',
        'B'
    ],{
        A: 'grapplemod:grapplinghook',
        B: '#forge:tools/wrenches',
    }, (customization, orig, result) => {
        if (customization.verticalthrowangle <= ADDITIVE_UPGRADES_MINMAX.verticalThrowAngle.minValue) {
            return null;
        }

        customization.verticalthrowangle = Math.max(ADDITIVE_UPGRADES_MINMAX.verticalThrowAngle.minValue, customization.verticalthrowangle - 5);
        customization.sneakingverticalthrowangle = customization.verticalthrowangle / 2;
        return result;
    }, 'tfg.grapplemod.downgrades.vertical_throwing_angle').id('tfg:grapplemod/downgrades/vertical_throwing_angle')

    // Increase Horizontal Throw Angle
    shapedUpgradeRecipe([
        'AB',
    ],{
        A: 'grapplemod:grapplinghook',
        B: '#forge:tools/screwdrivers'
    }, (customization, orig, result) => {
        if (!customization.doublehook) {
            return null;
        }

        if (customization.angle >= ADDITIVE_UPGRADES_MINMAX.angle.maxValue) {
            return null;
        }

        customization.angle = Math.min(ADDITIVE_UPGRADES_MINMAX.angle.maxValue, customization.angle + 5);
        customization.sneakingangle = customization.angle / 2;
        return result;
    }, 'tfg.grapplemod.upgrades.angle').kjsMirror(false).id('tfg:grapplemod/upgrades/angle');
    //Decrease Horizontal Throw Angle
    shapedUpgradeRecipe([
        'AB',
    ],{
        A: '#forge:tools/screwdrivers',
        B: 'grapplemod:grapplinghook',
    }, (customization, orig, result) => {
        if (!customization.doublehook) {
            return null;
        }

        if (customization.angle <= ADDITIVE_UPGRADES_MINMAX.angle.minValue) {
            return null;
        }

        customization.angle = Math.max(ADDITIVE_UPGRADES_MINMAX.angle.minValue, customization.angle - 5);
        customization.sneakingangle = customization.angle / 2;
        return result;
    }, 'tfg.grapplemod.downgrades.angle').kjsMirror(false).id('tfg:grapplemod/downgrades/angle')
}