// priority: 10
"use strict";

function registerTFGRockLoots(event) {

	// Rock to cobble, cobble to gravel
	for (let [rockId, rock] of Object.entries(global.BIG_ROCK_TABLE)) {
		if (rock.raw != null && rock.cobble != null) {
			event.addBlockLootModifier(rock.raw.block)
				.matchMainHand('#forge:tools/hammers')
				.removeLoot(ItemFilter.ALWAYS_TRUE)
				.addLoot(rock.cobble.block)
		}

		if (rock.hardened != null && rock.cobble != null) {
			event.addBlockLootModifier(rock.hardened)
				.removeLoot(ItemFilter.ALWAYS_TRUE)
				.addWeightedLoot([1, 4], [
					LootEntry.of(rock.loose)
				])

			event.addBlockLootModifier(rock.hardened)
				.matchMainHand('#forge:tools/hammers')
				.removeLoot(ItemFilter.ALWAYS_TRUE)
				.addLoot(rock.cobble.block)
		}

		if (rock.cobble != null) {
			event.addBlockLootModifier(rock.cobble.block)
				.removeLoot(ItemFilter.ALWAYS_TRUE)
				.addLoot(rock.cobble.block)
		}

		if (rock.gravel != null) {
			event.addBlockLootModifier(rock.gravel.block)
				.addAlternativesLoot([
					LootEntry.of('minecraft:flint').when(c => c.randomChance(0.1)),
					LootEntry.of(rock.gravel.block)
				])
		}

		if (rock.cobble != null && rock.gravel != null) {
			event.addBlockLootModifier(rock.cobble.block)
				.matchMainHand('#forge:tools/hammers')
				.removeLoot(ItemFilter.ALWAYS_TRUE)
				.addLoot(rock.gravel)

			if (rock.cobble.mossy != null) {
				event.addBlockLootModifier(rock.cobble.mossy.block)
					.matchMainHand('#forge:tools/hammers')
					.removeLoot(ItemFilter.ALWAYS_TRUE)
					.addLoot(rock.gravel)
			}
		}
	}

	// Sand
	global.SAND_COLORS.forEach(sandColor => {
		let tag_array = Ingredient.of(`#tfc:${sandColor}_gravel`).itemIds.toArray().map(String);
		tag_array.forEach(item => {
			event.addBlockLootModifier(item)
				.matchMainHand('#forge:tools/hammers')
				.removeLoot(ItemFilter.ALWAYS_TRUE)
				.addLoot(`tfc:sand/${sandColor}`)
		})
	})

	global.HAMMERING.forEach(x => {
		if (x.raw.startsWith('#')) {
			let tag_array = Ingredient.of(x.raw).itemIds.toArray().map(String);
			tag_array.forEach(item => {
				event.addBlockLootModifier(item)
					.matchMainHand('#forge:tools/hammers')
					.removeLoot(ItemFilter.ALWAYS_TRUE)
					.addLoot(x.hammered)
			})
		}
		else {
			event.addBlockLootModifier(x.raw)
				.matchMainHand('#forge:tools/hammers')
				.removeLoot(ItemFilter.ALWAYS_TRUE)
				.addLoot(x.hammered)
		}
	})

	// Other rocks
	event.addBlockLootModifier('minecraft:gilded_blackstone')
		.matchMainHand('#forge:tools/hammers')
		.removeLoot(ItemFilter.ALWAYS_TRUE)
		.addSequenceLoot(
			LootEntry.of('tfg:rock/cobble_blackstone'),
			LootEntry.of('tfc:powder/native_gold')
		)

	event.addBlockLootModifier('beneath:ore/blackstone_sylvite')
		.removeLoot(ItemFilter.ALWAYS_TRUE)
		.addWeightedLoot([
			Item.of('gtceu:rich_raw_rock_salt').withChance(0.2),
			Item.of('gtceu:raw_rock_salt').withChance(0.6),
			Item.of('gtceu:poor_raw_rock_salt').withChance(0.2)
		])
		.addLoot(LootEntry.of('tfg:igneous_ultramafic_dust').when(c => c.randomChance(0.2)))
		.addLoot(LootEntry.of('gtceu:tiny_rock_salt_dust').when(c => c.randomChance(0.05)));

}