
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

    //forge:wax
    event.replaceInput({}, 'firmalife:beeswax', '#forge:wax')

    //paraffin
    event.recipes.gtceu.chemical_reactor('tfg:paraffin_wax_from_lubricant')
        .circuit(7)
        .itemOutputs('2x tfg:paraffin_wax')
        .outputFluids(Fluid.of('gtceu:oil_light', 25))
        .inputFluids(Fluid.of('gtceu:lubricant', 250), Fluid.of('gtceu:acetone', 25))
        .duration(500)
        .EUt(21)


    // lactose & curd
    event.recipes.gtceu.mixer('lactose_milk_cow')
        .circuit(1)
        .inputFluids(Fluid.of('minecraft:milk', 1000), Fluid.of('gtceu:acetic_acid', 25))
        .itemOutputs('1x gtceu:lactose_dust')
        .outputFluids(Fluid.of('tfc:curdled_milk', 1000))
        .duration(300)
        .EUt(30)

    event.recipes.gtceu.create_mixer('lactose_milk_cow')
        .circuit(1)
        .inputFluids(Fluid.of('minecraft:milk', 1000), Fluid.of('gtceu:acetic_acid', 25))
        .itemOutputs('1x gtceu:lactose_dust')
        .outputFluids(Fluid.of('tfc:curdled_milk', 1000))
        .duration(200)
        .EUt(30)
        .rpm(96)

    event.recipes.gtceu.mixer('lactose_milk_yak')
        .circuit(1)
        .inputFluids(Fluid.of('firmalife:yak_milk', 1000), Fluid.of('gtceu:acetic_acid', 25))
        .itemOutputs('1x gtceu:lactose_dust')
        .outputFluids(Fluid.of('firmalife:curdled_yak_milk', 1000))
        .duration(300)
        .EUt(30)

    event.recipes.gtceu.create_mixer('lactose_milk_yak')
        .circuit(1)
        .inputFluids(Fluid.of('firmalife:yak_milk', 1000), Fluid.of('gtceu:acetic_acid', 25))
        .itemOutputs('1x gtceu:lactose_dust')
        .outputFluids(Fluid.of('firmalife:curdled_yak_milk', 1000))
        .duration(200)
        .EUt(30)
        .rpm(96)

    event.recipes.gtceu.mixer('lactose_milk_goat')
        .circuit(1)
        .inputFluids(Fluid.of('firmalife:goat_milk', 1000), Fluid.of('gtceu:acetic_acid', 25))
        .itemOutputs('1x gtceu:lactose_dust')
        .outputFluids(Fluid.of('firmalife:curdled_goat_milk', 1000))
        .duration(300)
        .EUt(30)

    event.recipes.gtceu.create_mixer('lactose_milk_goat')
        .circuit(1)
        .inputFluids(Fluid.of('firmalife:goat_milk', 1000), Fluid.of('gtceu:acetic_acid', 25))
        .itemOutputs('1x gtceu:lactose_dust')
        .outputFluids(Fluid.of('firmalife:curdled_goat_milk', 1000))
        .duration(200)
        .EUt(30)
        .rpm(96)

//advanced kaolin

    event.recipes.gtceu.mixer('fire_clay_mixer')
        .itemInputs('#forge:dusts/clay', 'tfc:kaolin_clay', '#forge:dusts/carbon')
        .itemOutputs('1x tfc:fire_clay')
        .duration(40)
        .EUt(20)

    event.recipes.gtceu.create_mixer('fire_clay_mixer')
        .itemInputs('#forge:dusts/clay', 'tfc:kaolin_clay', '#forge:dusts/carbon')
        .itemOutputs('1x tfc:fire_clay')
        .duration(20)
        .EUt(20)
        .rpm(64)

//#medicine

//antipoison
const antipoison_ingredients = [
    'tfc:plant/blood_lily',
    'tfc:plant/pistia',
    'gtceu:bismuth_dust',
    'gtceu:mica_dust',
    'gtceu:fullers_earth_dust',
];

antipoison_ingredients.forEach(antipoison_ingredients => {

    event.recipes.create.mixing(
        '1x tfg:antipoison_pill',
        ['#forge:wax', `${antipoison_ingredients}`, 'gtceu:tricalcium_phosphate_dust', Fluid.of('tfc:spring_water', 250)])
        .id(`tfg:create/mixer/spring_water/pill_antipoison_${antipoison_ingredients.replace(':','/')}`)
    event.recipes.create.mixing(
        '1x tfg:antipoison_pill',
        ['#forge:wax', `${antipoison_ingredients}`, 'gtceu:tricalcium_phosphate_dust', Fluid.of('gtceu:distilled_water', 50)])
        .id(`tfg:create/mixer/distilled_water/pill_antipoison_${antipoison_ingredients.replace(':','/')}`)
    event.recipes.gtceu.create_mixer(`tfg:gtceu/mixer/spring_water/pill_antipoison_${antipoison_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('tfc:spring_water', 250))
        .itemOutputs('2x tfg:antipoison_pill')
        .itemInputs('#forge:wax', `${antipoison_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
    event.recipes.gtceu.create_mixer(`tfg:gtceu/mixer/distilled_water/pill_antipoison_${antipoison_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:distilled_water', 50))
        .itemOutputs('2x tfg:antipoison_pill')
        .itemInputs('#forge:wax', `${antipoison_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
    event.recipes.gtceu.mixer(`tfg:gtceu/mixer/spring_water/pill_antipoison_${antipoison_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('tfc:spring_water', 250))
        .itemOutputs('2x tfg:antipoison_pill')
        .itemInputs('#forge:wax', `${antipoison_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(200)
        .EUt(21)
    event.recipes.gtceu.mixer(`tfg:gtceu/mixer/distilled_water/pill_antipoison_${antipoison_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:distilled_water', 50))
        .itemOutputs('2x tfg:antipoison_pill')
        .itemInputs('#forge:wax', `${antipoison_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(200)
        .EUt(21)
    event.recipes.gtceu.create_mixer(`tfg:gtceu/mixer/spring_water/tablet_antipoison_${antipoison_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('tfc:spring_water', 250))
        .itemOutputs('2x tfg:antipoison_tablet')
        .itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', `${antipoison_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
    event.recipes.gtceu.create_mixer(`tfg:gtceu/mixer/distilled_water/tablet_antipoison_${antipoison_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:distilled_water', 50))
        .itemOutputs('2x tfg:antipoison_tablet')
        .itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', `${antipoison_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
    event.recipes.gtceu.mixer(`tfg:gtceu/mixer/spring_water/tablet_antipoison_${antipoison_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('tfc:spring_water', 250))
        .itemOutputs('2x tfg:antipoison_tablet')
        .itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', `${antipoison_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(200)
        .EUt(21)
    event.recipes.gtceu.mixer(`tfg:gtceu/mixer/distilled_water/tablet_antipoison_${antipoison_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:distilled_water', 50))
        .itemOutputs('2x tfg:antipoison_tablet')
        .itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', `${antipoison_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(200)
        .EUt(21)
});

//poison
const poison_ingredients = [
    'tfc:plant/butterfly_milkweed',
    'tfc:plant/grape_hyacinth',
    'tfc:plant/lily_of_the_valley',
    'tfc:plant/pulsatilla',
];

poison_ingredients.forEach(poison_ingredients => {

    event.recipes.create.mixing(
        '1x tfg:poison_pill',
        ['#forge:wax', `${poison_ingredients}`, 'gtceu:sulfur_dust', Fluid.of('tfc:spring_water', 250)])
        .id(`tfg:create/mixer/spring_water/pill_poison_${poison_ingredients.replace(':','/')}`)
    event.recipes.create.mixing(
        '1x tfg:poison_pill',
        ['#forge:wax', `${poison_ingredients}`, 'gtceu:sulfur_dust', Fluid.of('gtceu:distilled_water', 50)])
        .id(`tfg:create/mixer/distilled_water/pill_poison_${poison_ingredients.replace(':','/')}`)
    event.recipes.gtceu.create_mixer(`tfg:gtceu/mixer/spring_water/pill_poison_${poison_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('tfc:spring_water', 250))
        .itemOutputs('2x tfg:poison_pill')
        .itemInputs('#forge:wax', `${poison_ingredients}`, 'gtceu:sulfur_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
    event.recipes.gtceu.create_mixer(`tfg:gtceu/mixer/distilled_water/pill_poison_${poison_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:distilled_water', 50))
        .itemOutputs('2x tfg:poison_pill')
        .itemInputs('#forge:wax', `${poison_ingredients}`, 'gtceu:sulfur_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
    event.recipes.gtceu.mixer(`tfg:gtceu/mixer/spring_water/pill_poison_${poison_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('tfc:spring_water', 250))
        .itemOutputs('2x tfg:poison_pill')
        .itemInputs('#forge:wax', `${poison_ingredients}`, 'gtceu:sulfur_dust')
        .duration(200)
        .EUt(21)
    event.recipes.gtceu.mixer(`tfg:gtceu/mixer/distilled_water/pill_poison_${poison_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:distilled_water', 50))
        .itemOutputs('2x tfg:poison_pill')
        .itemInputs('#forge:wax', `${poison_ingredients}`, 'gtceu:sulfur_dust')
        .duration(200)
        .EUt(21)
    event.recipes.gtceu.create_mixer(`tfg:gtceu/mixer/spring_water/tablet_poison_${poison_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('tfc:spring_water', 250))
        .itemOutputs('2x tfg:poison_tablet')
        .itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', `${poison_ingredients}`, 'gtceu:sulfur_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
    event.recipes.gtceu.create_mixer(`tfg:gtceu/mixer/distilled_water/tablet_poison_${poison_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:distilled_water', 50))
        .itemOutputs('2x tfg:poison_tablet')
        .itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', `${poison_ingredients}`, 'gtceu:sulfur_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
    event.recipes.gtceu.mixer(`tfg:gtceu/mixer/spring_water/tablet_poison_${poison_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('tfc:spring_water', 250))
        .itemOutputs('2x tfg:poison_tablet')
        .itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', `${poison_ingredients}`, 'gtceu:sulfur_dust')
        .duration(200)
        .EUt(21)
    event.recipes.gtceu.mixer(`tfg:gtceu/mixer/distilled_water/tablet_poison_${poison_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:distilled_water', 50))
        .itemOutputs('2x tfg:poison_tablet')
        .itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', `${poison_ingredients}`, 'gtceu:sulfur_dust')
        .duration(200)
        .EUt(21)
});

//regeneration
const regeneration_ingredients = [
    'tfc:plant/lilac',
    'tfc:plant/field_horsetail',
    'tfc:plant/licorice_fern',
    'tfc:plant/sacred_datura',
];

regeneration_ingredients.forEach(regeneration_ingredients => {

    event.recipes.create.mixing(
        '1x tfg:regeneration_pill',
        ['#forge:wax', `${regeneration_ingredients}`, 'gtceu:tricalcium_phosphate_dust', Fluid.of('tfc:spring_water', 250)])
        .id(`tfg:create/mixer/spring_water/pill_regeneration_${regeneration_ingredients.replace(':','/')}`)
    event.recipes.create.mixing(
        '1x tfg:regeneration_pill',
        ['#forge:wax', `${regeneration_ingredients}`, 'gtceu:tricalcium_phosphate_dust', Fluid.of('gtceu:distilled_water', 50)])
        .id(`tfg:create/mixer/distilled_water/pill_regeneration_${regeneration_ingredients.replace(':','/')}`)
    event.recipes.gtceu.create_mixer(`tfg:gtceu/mixer/spring_water/pill_regeneration_${regeneration_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('tfc:spring_water', 250))
        .itemOutputs('2x tfg:regeneration_pill')
        .itemInputs('#forge:wax', `${regeneration_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
    event.recipes.gtceu.create_mixer(`tfg:gtceu/mixer/distilled_water/pill_regeneration_${regeneration_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:distilled_water', 50))
        .itemOutputs('2x tfg:regeneration_pill')
        .itemInputs('#forge:wax', `${regeneration_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
    event.recipes.gtceu.mixer(`tfg:gtceu/mixer/spring_water/pill_regeneration_${regeneration_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('tfc:spring_water', 250))
        .itemOutputs('2x tfg:regeneration_pill')
        .itemInputs('#forge:wax', `${regeneration_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(200)
        .EUt(21)
    event.recipes.gtceu.mixer(`tfg:gtceu/mixer/distilled_water/pill_regeneration_${regeneration_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:distilled_water', 50))
        .itemOutputs('2x tfg:regeneration_pill')
        .itemInputs('#forge:wax', `${regeneration_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(200)
        .EUt(21)
    event.recipes.gtceu.create_mixer(`tfg:gtceu/mixer/spring_water/tablet_regeneration_${regeneration_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('tfc:spring_water', 250))
        .itemOutputs('2x tfg:regeneration_tablet')
        .itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', `${regeneration_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
    event.recipes.gtceu.create_mixer(`tfg:gtceu/mixer/distilled_water/tablet_regeneration_${regeneration_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:distilled_water', 50))
        .itemOutputs('2x tfg:regeneration_tablet')
        .itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', `${regeneration_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
    event.recipes.gtceu.mixer(`tfg:gtceu/mixer/spring_water/tablet_regeneration_${regeneration_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('tfc:spring_water', 250))
        .itemOutputs('2x tfg:regeneration_tablet')
        .itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', `${regeneration_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(200)
        .EUt(21)
    event.recipes.gtceu.mixer(`tfg:gtceu/mixer/distilled_water/tablet_regeneration_${regeneration_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:distilled_water', 50))
        .itemOutputs('2x tfg:regeneration_tablet')
        .itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', `${regeneration_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(200)
        .EUt(21)
});

//speed
const speed_ingredients = [
    'tfc:plant/labrador_tea',
    'firmalife:raw_honey',
];

speed_ingredients.forEach(speed_ingredients => {

    event.recipes.create.mixing(
        '1x tfg:speed_pill',
        ['#forge:wax', `${speed_ingredients}`, 'gtceu:tricalcium_phosphate_dust', Fluid.of('tfc:spring_water', 250)])
        .id(`tfg:create/mixer/spring_water/pill_speed_${speed_ingredients.replace(':','/')}`)
    event.recipes.create.mixing(
        '1x tfg:speed_pill',
        ['#forge:wax', `${speed_ingredients}`, 'gtceu:tricalcium_phosphate_dust', Fluid.of('gtceu:distilled_water', 50)])
        .id(`tfg:create/mixer/distilled_water/pill_speed_${speed_ingredients.replace(':','/')}`)
    event.recipes.gtceu.create_mixer(`tfg:gtceu/mixer/spring_water/pill_speed_${speed_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('tfc:spring_water', 250))
        .itemOutputs('2x tfg:speed_pill')
        .itemInputs('#forge:wax', `${speed_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
    event.recipes.gtceu.create_mixer(`tfg:gtceu/mixer/distilled_water/pill_speed_${speed_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:distilled_water', 50))
        .itemOutputs('2x tfg:speed_pill')
        .itemInputs('#forge:wax', `${speed_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
    event.recipes.gtceu.mixer(`tfg:gtceu/mixer/spring_water/pill_speed_${speed_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('tfc:spring_water', 250))
        .itemOutputs('2x tfg:speed_pill')
        .itemInputs('#forge:wax', `${speed_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(200)
        .EUt(21)
    event.recipes.gtceu.mixer(`tfg:gtceu/mixer/distilled_water/pill_speed_${speed_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:distilled_water', 50))
        .itemOutputs('2x tfg:speed_pill')
        .itemInputs('#forge:wax', `${speed_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(200)
        .EUt(21)
    event.recipes.gtceu.create_mixer(`tfg:gtceu/mixer/spring_water/tablet_speed_${speed_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('tfc:spring_water', 250))
        .itemOutputs('2x tfg:speed_tablet')
        .itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', `${speed_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
    event.recipes.gtceu.create_mixer(`tfg:gtceu/mixer/distilled_water/tablet_speed_${speed_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:distilled_water', 50))
        .itemOutputs('2x tfg:speed_tablet')
        .itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', `${speed_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
    event.recipes.gtceu.mixer(`tfg:gtceu/mixer/spring_water/tablet_speed_${speed_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('tfc:spring_water', 250))
        .itemOutputs('2x tfg:speed_tablet')
        .itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', `${speed_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(200)
        .EUt(21)
    event.recipes.gtceu.mixer(`tfg:gtceu/mixer/distilled_water/tablet_speed_${speed_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:distilled_water', 50))
        .itemOutputs('2x tfg:speed_tablet')
        .itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', `${speed_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(200)
        .EUt(21)
});

//slowness
const slowness_ingredients = [
    'tfc:plant/marigold',
];

slowness_ingredients.forEach(slowness_ingredients => {

    event.recipes.create.mixing(
        '1x tfg:slowness_pill',
        ['#forge:wax', `${slowness_ingredients}`, 'gtceu:sulfur_dust', Fluid.of('tfc:spring_water', 250)])
        .id(`tfg:create/mixer/spring_water/pill_slowness_${slowness_ingredients.replace(':','/')}`)
    event.recipes.create.mixing(
        '1x tfg:slowness_pill',
        ['#forge:wax', `${slowness_ingredients}`, 'gtceu:sulfur_dust', Fluid.of('gtceu:distilled_water', 50)])
        .id(`tfg:create/mixer/distilled_water/pill_slowness_${slowness_ingredients.replace(':','/')}`)
    event.recipes.gtceu.create_mixer(`tfg:gtceu/mixer/spring_water/pill_slowness_${slowness_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('tfc:spring_water', 250))
        .itemOutputs('2x tfg:slowness_pill')
        .itemInputs('#forge:wax', `${slowness_ingredients}`, 'gtceu:sulfur_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
    event.recipes.gtceu.create_mixer(`tfg:gtceu/mixer/distilled_water/pill_slowness_${slowness_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:distilled_water', 50))
        .itemOutputs('2x tfg:slowness_pill')
        .itemInputs('#forge:wax', `${slowness_ingredients}`, 'gtceu:sulfur_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
    event.recipes.gtceu.mixer(`tfg:gtceu/mixer/spring_water/pill_slowness_${slowness_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('tfc:spring_water', 250))
        .itemOutputs('2x tfg:slowness_pill')
        .itemInputs('#forge:wax', `${slowness_ingredients}`, 'gtceu:sulfur_dust')
        .duration(200)
        .EUt(21)
    event.recipes.gtceu.mixer(`tfg:gtceu/mixer/distilled_water/pill_slowness_${slowness_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:distilled_water', 50))
        .itemOutputs('2x tfg:slowness_pill')
        .itemInputs('#forge:wax', `${slowness_ingredients}`, 'gtceu:sulfur_dust')
        .duration(200)
        .EUt(21)
    event.recipes.gtceu.create_mixer(`tfg:gtceu/mixer/spring_water/tablet_slowness_${slowness_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('tfc:spring_water', 250))
        .itemOutputs('2x tfg:slowness_tablet')
        .itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', `${slowness_ingredients}`, 'gtceu:sulfur_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
    event.recipes.gtceu.create_mixer(`tfg:gtceu/mixer/distilled_water/tablet_slowness_${slowness_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:distilled_water', 50))
        .itemOutputs('2x tfg:slowness_tablet')
        .itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', `${slowness_ingredients}`, 'gtceu:sulfur_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
    event.recipes.gtceu.mixer(`tfg:gtceu/mixer/spring_water/tablet_slowness_${slowness_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('tfc:spring_water', 250))
        .itemOutputs('2x tfg:slowness_tablet')
        .itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', `${slowness_ingredients}`, 'gtceu:sulfur_dust')
        .duration(200)
        .EUt(21)
    event.recipes.gtceu.mixer(`tfg:gtceu/mixer/distilled_water/tablet_slowness_${slowness_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:distilled_water', 50))
        .itemOutputs('2x tfg:slowness_tablet')
        .itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', `${slowness_ingredients}`, 'gtceu:sulfur_dust')
        .duration(200)
        .EUt(21)
});

//weakness
const weakness_ingredients = [
    'tfc:plant/laminaria',
];

weakness_ingredients.forEach(weakness_ingredients => {

    event.recipes.create.mixing(
        '1x tfg:weakness_pill',
        ['#forge:wax', `${weakness_ingredients}`, 'gtceu:sulfur_dust', Fluid.of('tfc:spring_water', 250)])
        .id(`tfg:create/mixer/spring_water/pill_weakness_${weakness_ingredients.replace(':','/')}`)
    event.recipes.create.mixing(
        '1x tfg:weakness_pill',
        ['#forge:wax', `${weakness_ingredients}`, 'gtceu:sulfur_dust', Fluid.of('gtceu:distilled_water', 50)])
        .id(`tfg:create/mixer/distilled_water/pill_weakness_${weakness_ingredients.replace(':','/')}`)
    event.recipes.gtceu.create_mixer(`tfg:gtceu/mixer/spring_water/pill_weakness_${weakness_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('tfc:spring_water', 250))
        .itemOutputs('2x tfg:weakness_pill')
        .itemInputs('#forge:wax', `${weakness_ingredients}`, 'gtceu:sulfur_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
    event.recipes.gtceu.create_mixer(`tfg:gtceu/mixer/distilled_water/pill_weakness_${weakness_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:distilled_water', 50))
        .itemOutputs('2x tfg:weakness_pill')
        .itemInputs('#forge:wax', `${weakness_ingredients}`, 'gtceu:sulfur_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
    event.recipes.gtceu.mixer(`tfg:gtceu/mixer/spring_water/pill_weakness_${weakness_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('tfc:spring_water', 250))
        .itemOutputs('2x tfg:weakness_pill')
        .itemInputs('#forge:wax', `${weakness_ingredients}`, 'gtceu:sulfur_dust')
        .duration(200)
        .EUt(21)
    event.recipes.gtceu.mixer(`tfg:gtceu/mixer/distilled_water/pill_weakness_${weakness_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:distilled_water', 50))
        .itemOutputs('2x tfg:weakness_pill')
        .itemInputs('#forge:wax', `${weakness_ingredients}`, 'gtceu:sulfur_dust')
        .duration(200)
        .EUt(21)
    event.recipes.gtceu.create_mixer(`tfg:gtceu/mixer/spring_water/tablet_weakness_${weakness_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('tfc:spring_water', 250))
        .itemOutputs('2x tfg:weakness_tablet')
        .itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', `${weakness_ingredients}`, 'gtceu:sulfur_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
    event.recipes.gtceu.create_mixer(`tfg:gtceu/mixer/distilled_water/tablet_weakness_${weakness_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:distilled_water', 50))
        .itemOutputs('2x tfg:weakness_tablet')
        .itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', `${weakness_ingredients}`, 'gtceu:sulfur_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
    event.recipes.gtceu.mixer(`tfg:gtceu/mixer/spring_water/tablet_weakness_${weakness_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('tfc:spring_water', 250))
        .itemOutputs('2x tfg:weakness_tablet')
        .itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', `${weakness_ingredients}`, 'gtceu:sulfur_dust')
        .duration(200)
        .EUt(21)
    event.recipes.gtceu.mixer(`tfg:gtceu/mixer/distilled_water/tablet_weakness_${weakness_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:distilled_water', 50))
        .itemOutputs('2x tfg:weakness_tablet')
        .itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', `${weakness_ingredients}`, 'gtceu:sulfur_dust')
        .duration(200)
        .EUt(21)
});

//haste
const haste_ingredients = [
    'minecraft:sugar',
];

haste_ingredients.forEach(haste_ingredients => {

    event.recipes.create.mixing(
        '1x tfg:haste_pill',
        ['#forge:wax', `${haste_ingredients}`, 'gtceu:tricalcium_phosphate_dust', Fluid.of('tfc:spring_water', 250)])
        .id(`tfg:create/mixer/spring_water/pill_haste_${haste_ingredients.replace(':','/')}`)
    event.recipes.create.mixing(
        '1x tfg:haste_pill',
        ['#forge:wax', `${haste_ingredients}`, 'gtceu:tricalcium_phosphate_dust', Fluid.of('gtceu:distilled_water', 50)])
        .id(`tfg:create/mixer/distilled_water/pill_haste_${haste_ingredients.replace(':','/')}`)
    event.recipes.gtceu.create_mixer(`tfg:gtceu/mixer/spring_water/pill_haste_${haste_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('tfc:spring_water', 250))
        .itemOutputs('2x tfg:haste_pill')
        .itemInputs('#forge:wax', `${haste_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
    event.recipes.gtceu.create_mixer(`tfg:gtceu/mixer/distilled_water/pill_haste_${haste_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:distilled_water', 50))
        .itemOutputs('2x tfg:haste_pill')
        .itemInputs('#forge:wax', `${haste_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
    event.recipes.gtceu.mixer(`tfg:gtceu/mixer/spring_water/pill_haste_${haste_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('tfc:spring_water', 250))
        .itemOutputs('2x tfg:haste_pill')
        .itemInputs('#forge:wax', `${haste_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(200)
        .EUt(21)
    event.recipes.gtceu.mixer(`tfg:gtceu/mixer/distilled_water/pill_haste_${haste_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:distilled_water', 50))
        .itemOutputs('2x tfg:haste_pill')
        .itemInputs('#forge:wax', `${haste_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(200)
        .EUt(21)
    event.recipes.gtceu.create_mixer(`tfg:gtceu/mixer/spring_water/tablet_haste_${haste_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('tfc:spring_water', 250))
        .itemOutputs('2x tfg:haste_tablet')
        .itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', `${haste_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
    event.recipes.gtceu.create_mixer(`tfg:gtceu/mixer/distilled_water/tablet_haste_${haste_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:distilled_water', 50))
        .itemOutputs('2x tfg:haste_tablet')
        .itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', `${haste_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
    event.recipes.gtceu.mixer(`tfg:gtceu/mixer/spring_water/tablet_haste_${haste_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('tfc:spring_water', 250))
        .itemOutputs('2x tfg:haste_tablet')
        .itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', `${haste_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(200)
        .EUt(21)
    event.recipes.gtceu.mixer(`tfg:gtceu/mixer/distilled_water/tablet_haste_${haste_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:distilled_water', 50))
        .itemOutputs('2x tfg:haste_tablet')
        .itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', `${haste_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(200)
        .EUt(21)
});

//water_breathing
const water_breathing_ingredients = [
    'gtceu:saltpeter_dust',
    'gtceu:charcoal_dust',
];

water_breathing_ingredients.forEach(water_breathing_ingredients => {

    event.recipes.create.mixing(
        '1x tfg:water_breathing_pill',
        ['#forge:wax', `${water_breathing_ingredients}`, 'gtceu:tricalcium_phosphate_dust', Fluid.of('tfc:spring_water', 250)])
        .id(`tfg:create/mixer/spring_water/pill_water_breathing_${water_breathing_ingredients.replace(':','/')}`)
    event.recipes.create.mixing(
        '1x tfg:water_breathing_pill',
        ['#forge:wax', `${water_breathing_ingredients}`, 'gtceu:tricalcium_phosphate_dust', Fluid.of('gtceu:distilled_water', 50)])
        .id(`tfg:create/mixer/distilled_water/pill_water_breathing_${water_breathing_ingredients.replace(':','/')}`)
    event.recipes.gtceu.create_mixer(`tfg:gtceu/mixer/spring_water/pill_water_breathing_${water_breathing_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('tfc:spring_water', 250))
        .itemOutputs('2x tfg:water_breathing_pill')
        .itemInputs('#forge:wax', `${water_breathing_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
    event.recipes.gtceu.create_mixer(`tfg:gtceu/mixer/distilled_water/pill_water_breathing_${water_breathing_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:distilled_water', 50))
        .itemOutputs('2x tfg:water_breathing_pill')
        .itemInputs('#forge:wax', `${water_breathing_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
    event.recipes.gtceu.mixer(`tfg:gtceu/mixer/spring_water/pill_water_breathing_${water_breathing_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('tfc:spring_water', 250))
        .itemOutputs('2x tfg:water_breathing_pill')
        .itemInputs('#forge:wax', `${water_breathing_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(200)
        .EUt(21)
    event.recipes.gtceu.mixer(`tfg:gtceu/mixer/distilled_water/pill_water_breathing_${water_breathing_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:distilled_water', 50))
        .itemOutputs('2x tfg:water_breathing_pill')
        .itemInputs('#forge:wax', `${water_breathing_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(200)
        .EUt(21)
    event.recipes.gtceu.create_mixer(`tfg:gtceu/mixer/spring_water/tablet_water_breathing_${water_breathing_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('tfc:spring_water', 250))
        .itemOutputs('2x tfg:water_breathing_tablet')
        .itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', `${water_breathing_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
    event.recipes.gtceu.create_mixer(`tfg:gtceu/mixer/distilled_water/tablet_water_breathing_${water_breathing_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:distilled_water', 50))
        .itemOutputs('2x tfg:water_breathing_tablet')
        .itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', `${water_breathing_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
    event.recipes.gtceu.mixer(`tfg:gtceu/mixer/spring_water/tablet_water_breathing_${water_breathing_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('tfc:spring_water', 250))
        .itemOutputs('2x tfg:water_breathing_tablet')
        .itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', `${water_breathing_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(200)
        .EUt(21)
    event.recipes.gtceu.mixer(`tfg:gtceu/mixer/distilled_water/tablet_water_breathing_${water_breathing_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:distilled_water', 50))
        .itemOutputs('2x tfg:water_breathing_tablet')
        .itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', `${water_breathing_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(200)
        .EUt(21)
});

//night_vision
const night_vision_ingredients = [
    'tfc:food/carrot',
];

night_vision_ingredients.forEach(night_vision_ingredients => {

    event.recipes.create.mixing(
        '1x tfg:night_vision_pill',
        ['#forge:wax', `${night_vision_ingredients}`, 'gtceu:tricalcium_phosphate_dust', Fluid.of('tfc:spring_water', 250)])
        .id(`tfg:create/mixer/spring_water/pill_night_vision_${night_vision_ingredients.replace(':','/')}`)
    event.recipes.create.mixing(
        '1x tfg:night_vision_pill',
        ['#forge:wax', `${night_vision_ingredients}`, 'gtceu:tricalcium_phosphate_dust', Fluid.of('gtceu:distilled_water', 50)])
        .id(`tfg:create/mixer/distilled_water/pill_night_vision_${night_vision_ingredients.replace(':','/')}`)
    event.recipes.gtceu.create_mixer(`tfg:gtceu/mixer/spring_water/pill_night_vision_${night_vision_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('tfc:spring_water', 250))
        .itemOutputs('2x tfg:night_vision_pill')
        .itemInputs('#forge:wax', `${night_vision_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
    event.recipes.gtceu.create_mixer(`tfg:gtceu/mixer/distilled_water/pill_night_vision_${night_vision_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:distilled_water', 50))
        .itemOutputs('2x tfg:night_vision_pill')
        .itemInputs('#forge:wax', `${night_vision_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
    event.recipes.gtceu.mixer(`tfg:gtceu/mixer/spring_water/pill_night_vision_${night_vision_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('tfc:spring_water', 250))
        .itemOutputs('2x tfg:night_vision_pill')
        .itemInputs('#forge:wax', `${night_vision_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(200)
        .EUt(21)
    event.recipes.gtceu.mixer(`tfg:gtceu/mixer/distilled_water/pill_night_vision_${night_vision_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:distilled_water', 50))
        .itemOutputs('2x tfg:night_vision_pill')
        .itemInputs('#forge:wax', `${night_vision_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(200)
        .EUt(21)
    event.recipes.gtceu.create_mixer(`tfg:gtceu/mixer/spring_water/tablet_night_vision_${night_vision_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('tfc:spring_water', 250))
        .itemOutputs('2x tfg:night_vision_tablet')
        .itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', `${night_vision_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
    event.recipes.gtceu.create_mixer(`tfg:gtceu/mixer/distilled_water/tablet_night_vision_${night_vision_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:distilled_water', 50))
        .itemOutputs('2x tfg:night_vision_tablet')
        .itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', `${night_vision_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
    event.recipes.gtceu.mixer(`tfg:gtceu/mixer/spring_water/tablet_night_vision_${night_vision_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('tfc:spring_water', 250))
        .itemOutputs('2x tfg:night_vision_tablet')
        .itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', `${night_vision_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(200)
        .EUt(21)
    event.recipes.gtceu.mixer(`tfg:gtceu/mixer/distilled_water/tablet_night_vision_${night_vision_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:distilled_water', 50))
        .itemOutputs('2x tfg:night_vision_tablet')
        .itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', `${night_vision_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(200)
        .EUt(21)
});

//invisibility
const invisibility_ingredients = [
    'tfc:plant/calendula',
];

invisibility_ingredients.forEach(invisibility_ingredients => {

    event.recipes.gtceu.mixer(`tfg:gtceu/mixer/salvo_invisibility_${invisibility_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:phenol', 250))
        .itemOutputs('1x tfg:invisibility_salvo')
        .itemInputs('gtceu:sticky_resin', `${invisibility_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(200)
        .EUt(21)
    event.recipes.gtceu.create_mixer(`tfg:gtceu/mixer/salvo_invisibility_${invisibility_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:phenol', 250))
        .itemOutputs('1x tfg:invisibility_salvo')
        .itemInputs('gtceu:sticky_resin', `${invisibility_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
});

//fire_resistance
const fire_resistance_ingredients = [
    'tfc:plant/cattail',
    'tfc:plant/meads_milkweed',
    'firmalife:plant/bay_laurel',
];

fire_resistance_ingredients.forEach(fire_resistance_ingredients => {

    event.recipes.gtceu.mixer(`tfg:gtceu/mixer/salvo_fire_resistance_${fire_resistance_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:phenol', 250))
        .itemOutputs('1x tfg:fire_resistance_salvo')
        .itemInputs('gtceu:sticky_resin', `${fire_resistance_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(200)
        .EUt(21)
    event.recipes.gtceu.create_mixer(`tfg:gtceu/mixer/salvo_fire_resistance_${fire_resistance_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:phenol', 250))
        .itemOutputs('1x tfg:fire_resistance_salvo')
        .itemInputs('gtceu:sticky_resin', `${fire_resistance_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
});

//resistance
const resistance_ingredients = [
    'tfc:plant/hibiscus',
    'gtceu:calcium_dust',
];

resistance_ingredients.forEach(resistance_ingredients => {

    event.recipes.gtceu.mixer(`tfg:gtceu/mixer/salvo_resistance_${resistance_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:phenol', 250))
        .itemOutputs('1x tfg:resistance_salvo')
        .itemInputs('gtceu:sticky_resin', `${resistance_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(200)
        .EUt(21)
    event.recipes.gtceu.create_mixer(`tfg:gtceu/mixer/salvo_resistance_${resistance_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:phenol', 250))
        .itemOutputs('1x tfg:resistance_salvo')
        .itemInputs('gtceu:sticky_resin', `${resistance_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
});

//instant_health
const instant_health_ingredients = [
    'tfc:plant/foxglove',
    'tfc:plant/artists_conk',
];

instant_health_ingredients.forEach(instant_health_ingredients => {

    event.recipes.gtceu.mixer(`tfg:gtceu/mixer/salvo_instant_health_${instant_health_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:phenol', 250))
        .itemOutputs('1x tfg:instant_health_salvo')
        .itemInputs('gtceu:sticky_resin', `${instant_health_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(200)
        .EUt(21)
    event.recipes.gtceu.create_mixer(`tfg:gtceu/mixer/salvo_instant_health_${instant_health_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:phenol', 250))
        .itemOutputs('1x tfg:instant_health_salvo')
        .itemInputs('gtceu:sticky_resin', `${instant_health_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
});

//absorption
const absorption_ingredients = [
    'tfc:plant/poppy',
];

absorption_ingredients.forEach(absorption_ingredients => {

    event.recipes.gtceu.mixer(`tfg:gtceu/mixer/salvo_absorption_${absorption_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:phenol', 250))
        .itemOutputs('1x tfg:absorption_salvo')
        .itemInputs('gtceu:sticky_resin', `${absorption_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(200)
        .EUt(21)
    event.recipes.gtceu.create_mixer(`tfg:gtceu/mixer/salvo_absorption_${absorption_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:phenol', 250))
        .itemOutputs('1x tfg:absorption_salvo')
        .itemInputs('gtceu:sticky_resin', `${absorption_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
});

//luck
const luck_ingredients = [
    'tfc:plant/goldenrod',
    'tfc:plant/heather',
];

luck_ingredients.forEach(luck_ingredients => {

    event.recipes.gtceu.mixer(`tfg:gtceu/mixer/salvo_luck_${luck_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:phenol', 250))
        .itemOutputs('1x tfg:luck_salvo')
        .itemInputs('gtceu:sticky_resin', `${luck_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(200)
        .EUt(21)
    event.recipes.gtceu.create_mixer(`tfg:gtceu/mixer/salvo_luck_${luck_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:phenol', 250))
        .itemOutputs('1x tfg:luck_salvo')
        .itemInputs('gtceu:sticky_resin', `${luck_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
});
}