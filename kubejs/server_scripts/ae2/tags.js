// priority: 0

const registerAE2ItemTags = (event) => {
    
    global.AE2_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
        event.add('c:hidden_from_recipe_viewers', item)
    })

    // We use the quartz block as a raw ore block
    event.remove('forge:storage_blocks', 'ae2:quartz_block')
    event.remove('forge:storage_blocks/certus_quartz', 'ae2:quartz_block')

    event.add('tfg:certus_quartz_blocks', 'ae2:cut_quartz_block')
	event.add('tfg:certus_quartz_blocks', 'ae2:smooth_quartz_block')
	event.add('tfg:certus_quartz_blocks', 'ae2:quartz_bricks')
	event.add('tfg:certus_quartz_blocks', 'ae2:quartz_pillar')
	event.add('tfg:certus_quartz_blocks', 'ae2:chiseled_quartz_block')

    event.add('tfg:sky_stone_blocks', 'ae2:sky_stone_block')
    event.add('tfg:sky_stone_blocks', 'ae2:smooth_sky_stone_block')
    event.add('tfg:sky_stone_blocks', 'ae2:sky_stone_brick')
    event.add('tfg:sky_stone_blocks', 'ae2:sky_stone_small_brick')
    
    event.add('tfg:stone_dusts', 'ae2:sky_dust')
}

const registerAE2BlockTags = (event) => {
    
    global.AE2_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
    })

}