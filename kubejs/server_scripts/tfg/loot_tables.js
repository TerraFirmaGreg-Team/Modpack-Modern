function registerTFGLoots(event) {

    //#region Vase Loot
	global.MINECRAFT_DYE_NAMES.forEach(color => {
        event.addBlockLootModifier(`tfg:decorative_vase/generated/${color}`)
        .removeLoot(Ingredient.all)
        //ore
        .pool((pool) => {
            pool.rolls([4, 6]);
            pool.addAlternativesLoot(
                LootEntry.of('tfc:ore/normal_bismuthinite').when((c) => c.randomChance(0.1)),
                LootEntry.of('tfc:ore/rich_bismuthinite').when((c) => c.randomChance(0.2)),

                LootEntry.of('tfc:ore/normal_native_copper').when((c) => c.randomChance(0.1)),
                LootEntry.of('tfc:ore/rich_native_copper').when((c) => c.randomChance(0.2)),

                LootEntry.of('tfc:ore/normal_sphalerite').when((c) => c.randomChance(0.1)),
                LootEntry.of('tfc:ore/rich_sphalerite').when((c) => c.randomChance(0.2)),

                LootEntry.of('tfc:ore/normal_cassiterite').when((c) => c.randomChance(0.1)),
                LootEntry.of('tfc:ore/rich_cassiterite').when((c) => c.randomChance(0.2)),

                LootEntry.of('tfc:ore/normal_native_gold').when((c) => c.randomChance(0.1)),
                LootEntry.of('tfc:ore/rich_native_gold').when((c) => c.randomChance(0.2)),

                LootEntry.of('tfc:ore/normal_native_silver').when((c) => c.randomChance(0.1)),
                LootEntry.of('tfc:ore/rich_native_silver').when((c) => c.randomChance(0.2)),

                LootEntry.of('tfc:ore/normal_hematite').when((c) => c.randomChance(0.1)),
                LootEntry.of('tfc:ore/rich_hematite').when((c) => c.randomChance(0.2)),

                LootEntry.of('gtceu:rich_raw_rock_salt').when((c) => c.randomChance(0.1)),
                LootEntry.of('gtceu:rich_raw_salt').when((c) => c.randomChance(0.1)),
                LootEntry.of('gtceu:rich_raw_saltpeter').when((c) => c.randomChance(0.1)),
            );
        })
        //seeds
        .pool((pool) => {
            pool.rolls([2, 8]);
            pool.addAlternativesLoot(
                LootEntry.of('tfc:seeds/onion').when((c) => c.randomChance(0.2)),
                LootEntry.of('tfc:seeds/cabbage').when((c) => c.randomChance(0.2)),
                LootEntry.of('tfc:seeds/potato').when((c) => c.randomChance(0.2)),
                LootEntry.of('tfc:seeds/jute').when((c) => c.randomChance(0.1)),
                LootEntry.of('tfc:seeds/sugarcane').when((c) => c.randomChance(0.1)),
                LootEntry.of('firmalife:plant/pineapple_bush').when((c) => c.randomChance(0.1)),
                LootEntry.of('tfc:plant/peach_sapling').when((c) => c.randomChance(0.1)),
                LootEntry.of('tfc:plant/red_apple_sapling').when((c) => c.randomChance(0.1)),
            );
        })
        //loot
        .pool((pool) => {
            pool.rolls([0, 3]);
            pool.addAlternativesLoot(
                LootEntry.of('tfc:wool_yarn').when((c) => c.randomChance(0.1)),
                LootEntry.of('tfc:blubber').when((c) => c.randomChance(0.1)),
                LootEntry.of('minecraft:bone').when((c) => c.randomChance(0.1)),
                LootEntry.of('tfc:kaolin_clay').when((c) => c.randomChance(0.1)),
                LootEntry.of('tfc:glue').when((c) => c.randomChance(0.1)),
                LootEntry.of('tfc:burlap_cloth').when((c) => c.randomChance(0.1)),
                LootEntry.of('tfc:wool_cloth').when((c) => c.randomChance(0.1)),
                LootEntry.of('tfc:mortar').when((c) => c.randomChance(0.1)),
                LootEntry.of('tfc:leather').when((c) => c.randomChance(0.1)),
                LootEntry.of('chalk:black_chalk').when((c) => c.randomChance(0.1)),
                LootEntry.of('chalk:red_chalk').when((c) => c.randomChance(0.1)),
                LootEntry.of('chalk:white_chalk').when((c) => c.randomChance(0.1)),
                LootEntry.of('minecraft:goat_horn').when((c) => c.randomChance(0.1)),
                LootEntry.of('tfg:regeneration_pill').when((c) => c.randomChance(0.1)),
                LootEntry.of('tfg:water_breathing_pill').when((c) => c.randomChance(0.1)),
                LootEntry.of('tfg:night_vision_pill').when((c) => c.randomChance(0.1)),
                LootEntry.of('tfg:haste_pill').when((c) => c.randomChance(0.1)),
                LootEntry.of('tfc:small_raw_hide').when((c) => c.randomChance(0.1)),
                LootEntry.of('tfc:medium_raw_hide').when((c) => c.randomChance(0.1)),
                LootEntry.of('tfc:large_raw_hide').when((c) => c.randomChance(0.1)),
                LootEntry.of('firmalife:beeswax').when((c) => c.randomChance(0.1)),
                LootEntry.of('gtceu:bismuth_bronze_pickaxe_head').when((c) => c.randomChance(0.1)),
                LootEntry.of('gtceu:bismuth_bronze_axe_head').when((c) => c.randomChance(0.1)),
                LootEntry.of('gtceu:bismuth_bronze_shovel_head').when((c) => c.randomChance(0.1)),
                LootEntry.of('gtceu:bismuth_bronze_knife_head').when((c) => c.randomChance(0.1)),
            );
        })
    });
};