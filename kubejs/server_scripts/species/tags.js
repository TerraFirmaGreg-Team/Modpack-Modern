const registerSpeciesBlockTags = (event) => {

	const DISABLED_BLOCKS = [
		'species:red_suspicious_sand',
		'species:bone_bark',
		'species:bone_vertebra',
		'species:bone_spike',
		'species:alphacene_moss_block',
		'species:alphacene_moss_carpet',
		'species:alphacene_grass_block',
		'species:alphacene_mushroom_block',
		'species:alphacene_mushroom_growth',
		'species:cruncher_pellet',
		'species:frozen_meat',
		'species:frozen_hair'
	]

	DISABLED_BLOCKS.forEach(block => {
		event.removeAllTagsFrom(block)
		event.add('c:hidden_from_recipe_viewers', block)
	})
}

const registerSpeciesItemTags = (event) => {

	const DISABLED_ITEMS = [
		'species:deepfish_bucket',
		'species:bone_spike',
		'species:ancient_pinecone',
		'species:petrified_egg',
		'species:alphacene_grass',
		'species:alphacene_tall_grass',
		'species:alphacene_mushroom',
		'species:cruncher_egg',
		'species:ichor_bottle',
		'species:youth_potion',
		'species:springling_egg'
	]

	DISABLED_ITEMS.forEach(item => {
		event.removeAllTagsFrom(item)
		event.add('c:hidden_from_recipe_viewers', item)
	})

	event.add('forge:eggs', 'species:birt_egg')
}