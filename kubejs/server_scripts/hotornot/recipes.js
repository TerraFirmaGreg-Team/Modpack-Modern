// priority: 0

const registerHotOrNotRecipes = (event) => {
    
    event.remove({ id: 'tfchotornot/heating/tong_part/cast_iron' })
    event.remove({ id: 'tfchotornot/anvil/tong_part/cast_iron' })

    event.remove({ id: 'tfchotornot/heating/tongs/cast_iron' })
    event.remove({ id: 'tfchotornot:crafting/tongs/cast_iron' })


    event.recipes.tfc.loom('tfchotornot:wool_potholder', '2x minecraft:blue_wool', 16, 'minecraft:block/white_wool')
        .id('tfchotornot:loom/wool_potholder')
}