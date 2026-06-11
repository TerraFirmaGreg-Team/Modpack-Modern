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
			// Add normal gravel loot to non-tfc gravel blocks
			if (!rock.gravel.startsWith('tfc:')) {
				event.addBlockLootModifier(rock.gravel)
					.removeLoot(ItemFilter.ALWAYS_TRUE)
					.addWeightedLoot([
						Item.of('minecraft:flint').withChance(10),
						Item.of(rock.gravel).withChance(90)
					])
			}

			// Add gravel -> sand crushing
			if (rock.gravelTag != null && rock.gravelTag.startsWith('tfc:')) {
				let match = /^tfc:(.+)_gravel$/gm.exec(rock.gravelTag);
				if (match) {
					event.addBlockLootModifier(rock.gravel)
						.matchMainHand('#forge:tools/hammers')
						.removeLoot(ItemFilter.ALWAYS_TRUE)
						.addLoot(`tfc:sand/${match[1]}`)
				}

			}
			// the non-tfc sands are handled via global.HAMMERING
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

	event.addBlockLootModifier('tfg:halite')
		.removeLoot(ItemFilter.ALWAYS_TRUE)
		.addWeightedLoot([
			Item.of('gtceu:rich_raw_salt').withChance(20),
			Item.of('gtceu:raw_salt').withChance(60),
			Item.of('gtceu:poor_raw_salt').withChance(30)
		])
}