
const registerTFGRecipes = (event) =>
{
    var generateVatRecipe = (id, inputItem, fluid, fluidAmount, output) =>
    {
        event.custom({
            "type": "firmalife:vat",
            "input_item": {
              "ingredient": {
                "item": inputItem
              }
            },
            "input_fluid": {
              "ingredient": fluid,
              "amount": fluidAmount
            },
            "output_item": {
              "item": output
            }
          }).id(id)
    }

    var generatePotRecipe = (id, maxAmountOfInputItems, inputItem, inputFluid, inputFluidAmount, outputItem, ticks, temperature) =>
    {
      for(let i = 0; i < maxAmountOfInputItems; i++)
      {
        var iPlusOne = i + 1
        let inputsArray = new Array(iPlusOne)
        for(let j = 0; j < iPlusOne; j++)
        {
          inputsArray[j] = inputItem
        }

        event.recipes.tfc.pot(inputsArray, Fluid.of(inputFluid, inputFluidAmount * iPlusOne), ticks, temperature)
          .itemOutput(`${iPlusOne}x ${outputItem}`)
          .id(`tfg:pot/${iPlusOne}x_${id}`)
      }
    }
    //remove chemical bath recipe
    event.remove({id: 'gtceu:chemical_bath/paper_from_wood_dust'})
    event.remove({id: 'gtceu:chemical_bath/paper_from_wood_dust_distilled'})

    //Lathe - Replace regular logs tag with softwood tag
    event.replaceInput({id: 'gtceu:lathe/lathe_logs'}, '#minecraft:logs', '#tfg:softwood')
    //Create identical lathe recipe for hardwood
    event.recipes.gtceu.lathe('lathe_hardwood')
        .itemInputs('#tfg:hardwood')
        .itemOutputs('4x gtceu:long_wood_rod', '2x gtceu:hardwood_dust')
        .duration(160)
        .EUt(7)

    //Replace macerate logs into macerate softwood logs
    event.replaceInput({id: 'gtceu:macerator/macerate_logs'}, '#minecraft:logs', '#tfg:softwood')
    //Create identical macerator recipe for hardwood
    event.recipes.gtceu.macerator('macerate_hardwood')
        .itemInputs('#tfg:hardwood')
        .itemOutputs('6x gtceu:hardwood_dust')
        .chancedOutput('gtceu:hardwood_dust', 8000, 680)
        .duration(70)
        .EUt(2)

    //Replace any recipe that outputs wood dust to use hardwood dust if it's ID string contains the name of one of the hardwood types.
    //This absolutely fuckin sucks but it works
    event.forEachRecipe({output: 'gtceu:wood_dust'}, r =>{
      global.TFC_HARDWOOD_TYPES.forEach(hardwoodType =>
      {
          if(r.id.toString().includes(hardwoodType))
          {
              r.replaceOutput('gtceu:wood_dust', 'gtceu:hardwood_dust')
              r.replaceOutput('gtceu:small_wood_dust', 'gtceu:small_hardwood_dust')
              r.replaceOutput('gtceu:tiny_wood_dust', 'gtceu_tiny_hardwood_dust')
              return;
          }
      })
    })

        //Replace any input that uses softwood dust to use our custom tag (we cant add it to the forge tag because it will literally fuck everything up by making softwood pulp obtainable using hardwood pulp)
    event.replaceInput([
      {not:{output: 'gtceu:small_wood_dust'}},
      {not:{output: 'gtceu:tiny_wood_dust'}}
    ], 'gtceu:wood_dust', '#tfg:wood_dusts')
      
    //Craft hardwood strips
    event.recipes.tfc.damage_inputs_shapeless_crafting(event.shapeless('4x tfg:hardwood_strip', ['#minecraft:axes', '#tfg:stripped_hardwood']))
      .id('tfg:crafting/strip_hardwood')
    generateCutterRecipe(event, `#tfg:hardwood`, 2, `8x tfg:hardwood_strip`, 200, 6, 'cutter/strip_hardwood')

    //Soak hardwood strips
    event.recipes.tfc.barrel_sealed('12000')
        .inputs('tfg:hardwood_strip', TFC.fluidStackIngredient('#tfc:water', 100))
        .outputItem('tfg:soaked_hardwood_strip')
        .id('tfg:barrel/soak_hardwood_strip')

    //Create Hardwood Dust using Quern and Millstone/Crushing Wheels
    event.recipes.createMilling(['3x gtceu:small_hardwood_dust', Item.of('gtceu:small_hardwood_dust').withChance(0.5)], 'tfg:soaked_hardwood_strip')
        .processingTime(100)
        .id('tfg:mill/mill_soaked_hardwood_strip')
    event.recipes.gtceu.macerator('tfg:macerator/macerate_hardwood_strips')
        .itemInputs('#tfg:hardwood_strips')
        .itemOutputs('gtceu:hardwood_dust')
        .duration(50)
        .EUt(2)
    event.recipes.tfc.quern('2x gtceu:small_hardwood_dust', 'tfg:soaked_hardwood_strip')
      .id('tfg:quern/soaked_hardwood_strip')

    //Cook hardwood dust in lye
    generateVatRecipe('tfg:vat/thermochemically_treat_hardwood_dust', 'gtceu:hardwood_dust', 'tfc:lye', 300, 'gtceu:thermochemically_treated_hardwood_dust')
    generateVatRecipe('tfg:vat/thermochemically_treat_small_hardwood_dust', 'gtceu:small_hardwood_dust', 'tfc:lye', 75, 'gtceu:small_thermochemically_treated_hardwood_dust')
    generateVatRecipe('tfg:vat/thermochemically_treat_tiny_hardwood_dust', 'gtceu:tiny_hardwood_dust', 'tfc:lye', 33, 'gtceu:tiny_thermochemically_treated_hardwood_dust')
    generatePotRecipe('thermochemically_treat_hardwood_dust', 3, 'gtceu:hardwood_dust', 'tfc:lye', 300, 'gtceu:thermochemically_treated_hardwood_dust', 600, 300)
    generatePotRecipe('thermochemically_treat_small_hardwood_dust', 5, 'gtceu:small_hardwood_dust', 'tfc:lye', 75, 'gtceu:small_thermochemically_treated_hardwood_dust', 600, 300)
    generatePotRecipe('thermochemically_treat_tiny_hardwood_dust', 5, 'gtceu:tiny_hardwood_dust', 'tfc:lye', 33, 'gtceu:tiny_thermochemically_treated_hardwood_dust', 600, 300)
    generateMixerRecipe(event, 'gtceu:hardwood_dust', Fluid.of('tfc:lye', 150), 'gtceu:thermochemically_treated_hardwood_dust', null, [], 150, 4, 64, 'tfg:mixer/mix_hardwood_dust_with_lye')
    generateMixerRecipe(event, 'gtceu:small_hardwood_dust', Fluid.of('tfc:lye', 37), 'gtceu:small_thermochemically_treated_hardwood_dust', null, [], 100, 3, 64, 'tfg:mixer/mix_small_hardwood_dust_with_lye')
    generateMixerRecipe(event, 'gtceu:tiny_hardwood_dust', Fluid.of('tfc:lye', 16), 'gtceu:tiny_thermochemically_treated_hardwood_dust', null, [], 50, 2, 64, 'tfg:mixer/mix_tiny_hardwood_dust_with_lye')

    //Beat thermochemically treated hardwood dust into soaked unrefined paper
    event.recipes.tfc.anvil('tfg:soaked_unrefined_paper', 'gtceu:thermochemically_treated_hardwood_dust', ['hit_last', 'hit_last', 'hit_last'])
      .id('tfg:anvil/soaked_unrefined_paper')
    event.recipes.createPressing(Item.of('tfg:soaked_unrefined_paper').withChance(0.8), 'gtceu:thermochemically_treated_hardwood_dust')
      .id('tfg:pressing/soaked_unrefined_paper')
    event.custom({
      type: "firmalife:stomping",
      ingredient: {
        item: "gtceu:thermochemically_treated_hardwood_dust"
      },
      result:{
        item: 'tfg:soaked_unrefined_paper'
      },
      input_texture: 'tfg:blocks/thermochemically_treated_hardwood_dust',
      output_texture: 'tfg:blocks/soaked_unrefined_paper',
      sound: 'minecraft:entity.slime.squish'
    }).id('tfg:stomping/soaked_unrefined_paper')

    //Dry the soaked unrefined paper
    event.recipes.firmalife.drying('tfc:unrefined_paper', 'tfg:soaked_unrefined_paper')
      .id('tfg:drying/unrefined_paper')

    //alternatively, just put the thermochemically treated hardwood dust inside a forge hamemr
    event.recipes.gtceu.forge_hammer('tfg:forge_hammer/paper_from_thermochemically_treated_hardwood_dust')
      .itemInputs('gtceu:thermochemically_treated_hardwood_dust')
      .itemOutputs('minecraft:paper')
      .duration(20)
      .EUt(4)
    event.recipes.gtceu.forge_hammer('tfg:forge_hammer/paper_from_small_thermochemically_treated_hardwood_dust')
      .itemInputs('4x gtceu:small_thermochemically_treated_hardwood_dust')
      .itemOutputs('minecraft:paper')
      .duration(30)
      .EUt(4)
    event.recipes.gtceu.forge_hammer('tfg:forge_hammer/paper_from_tiny_thermochemically_treated_hardwood_dust')
      .itemInputs('9x gtceu:tiny_thermochemically_treated_hardwood_dust')
      .itemOutputs('minecraft:paper')
      .duration(40)
      .EUt(4)
}