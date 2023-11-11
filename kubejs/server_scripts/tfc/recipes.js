// priority: 0

const registerTFCRecipes = (event) => {
  
    // Remove recipe (gem -> cut gem)
    event.remove({ id: 'tfc:crafting/vanilla/lapis_block' })

    event.remove({ id: 'tfc:quern/amethyst' })
    event.remove({ id: 'tfc:quern/diamond' })
    event.remove({ id: 'tfc:quern/lapis_lazuli' })
    event.remove({ id: 'tfc:quern/emerald' })
    event.remove({ id: 'tfc:quern/pyrite' })
    event.remove({ id: 'tfc:quern/opal' })
    event.remove({ id: 'tfc:quern/ruby' })
    event.remove({ id: 'tfc:quern/sapphire' })
    event.remove({ id: 'tfc:quern/topaz' })
}