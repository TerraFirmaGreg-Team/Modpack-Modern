// priority: 0

const registerHotOrNotRecipes = (event) => {
    
    event.remove({ id: 'tfchotornot/heating/tong_part/cast_iron' })
    event.remove({ id: 'tfchotornot/anvil/tong_part/cast_iron' })

    event.remove({ id: 'tfchotornot/heating/tongs/cast_iron' })
    event.remove({ id: 'tfchotornot:crafting/tongs/cast_iron' })
}