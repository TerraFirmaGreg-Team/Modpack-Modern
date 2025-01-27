// priority: 0

const registerKubejsRecipes = (event) => {

    //replace input
    event.replaceInput({}, 'firmalife:beeswax', '#forge:wax')

    //chemical reactor
    event.recipes.gtceu.chemical_reactor('kubejs:paraffin_wax_from_lubricant')
        .circuit(7)
        .itemOutputs('2x kubejs:paraffin_wax')
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
        '1x kubejs:antipoison_pill',
        ['#forge:wax', `${antipoison_ingredients}`, 'gtceu:tricalcium_phosphate_dust', Fluid.of('tfc:spring_water', 250)])
        .id(`kubejs:create/mixer/spring_water/pill_antipoison_${antipoison_ingredients.replace(':','/')}`)
    event.recipes.create.mixing(
        '1x kubejs:antipoison_pill',
        ['#forge:wax', `${antipoison_ingredients}`, 'gtceu:tricalcium_phosphate_dust', Fluid.of('gtceu:distilled_water', 50)])
        .id(`kubejs:create/mixer/distilled_water/pill_antipoison_${antipoison_ingredients.replace(':','/')}`)
    event.recipes.gtceu.create_mixer(`kubejs:gtceu/mixer/spring_water/pill_antipoison_${antipoison_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('tfc:spring_water', 250))
        .itemOutputs('2x kubejs:antipoison_pill')
        .itemInputs('#forge:wax', `${antipoison_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
    event.recipes.gtceu.create_mixer(`kubejs:gtceu/mixer/distilled_water/pill_antipoison_${antipoison_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:distilled_water', 50))
        .itemOutputs('2x kubejs:antipoison_pill')
        .itemInputs('#forge:wax', `${antipoison_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
    event.recipes.gtceu.mixer(`kubejs:gtceu/mixer/spring_water/pill_antipoison_${antipoison_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('tfc:spring_water', 250))
        .itemOutputs('2x kubejs:antipoison_pill')
        .itemInputs('#forge:wax', `${antipoison_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(200)
        .EUt(21)
    event.recipes.gtceu.mixer(`kubejs:gtceu/mixer/distilled_water/pill_antipoison_${antipoison_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:distilled_water', 50))
        .itemOutputs('2x kubejs:antipoison_pill')
        .itemInputs('#forge:wax', `${antipoison_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(200)
        .EUt(21)
    event.recipes.gtceu.create_mixer(`kubejs:gtceu/mixer/spring_water/tablet_antipoison_${antipoison_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('tfc:spring_water', 250))
        .itemOutputs('2x kubejs:antipoison_tablet')
        .itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', `${antipoison_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
    event.recipes.gtceu.create_mixer(`kubejs:gtceu/mixer/distilled_water/tablet_antipoison_${antipoison_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:distilled_water', 50))
        .itemOutputs('2x kubejs:antipoison_tablet')
        .itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', `${antipoison_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
    event.recipes.gtceu.mixer(`kubejs:gtceu/mixer/spring_water/tablet_antipoison_${antipoison_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('tfc:spring_water', 250))
        .itemOutputs('2x kubejs:antipoison_tablet')
        .itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', `${antipoison_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(200)
        .EUt(21)
    event.recipes.gtceu.mixer(`kubejs:gtceu/mixer/distilled_water/tablet_antipoison_${antipoison_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:distilled_water', 50))
        .itemOutputs('2x kubejs:antipoison_tablet')
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
        '1x kubejs:poison_pill',
        ['#forge:wax', `${poison_ingredients}`, 'gtceu:sulfur_dust', Fluid.of('tfc:spring_water', 250)])
        .id(`kubejs:create/mixer/spring_water/pill_poison_${poison_ingredients.replace(':','/')}`)
    event.recipes.create.mixing(
        '1x kubejs:poison_pill',
        ['#forge:wax', `${poison_ingredients}`, 'gtceu:sulfur_dust', Fluid.of('gtceu:distilled_water', 50)])
        .id(`kubejs:create/mixer/distilled_water/pill_poison_${poison_ingredients.replace(':','/')}`)
    event.recipes.gtceu.create_mixer(`kubejs:gtceu/mixer/spring_water/pill_poison_${poison_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('tfc:spring_water', 250))
        .itemOutputs('2x kubejs:poison_pill')
        .itemInputs('#forge:wax', `${poison_ingredients}`, 'gtceu:sulfur_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
    event.recipes.gtceu.create_mixer(`kubejs:gtceu/mixer/distilled_water/pill_poison_${poison_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:distilled_water', 50))
        .itemOutputs('2x kubejs:poison_pill')
        .itemInputs('#forge:wax', `${poison_ingredients}`, 'gtceu:sulfur_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
    event.recipes.gtceu.mixer(`kubejs:gtceu/mixer/spring_water/pill_poison_${poison_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('tfc:spring_water', 250))
        .itemOutputs('2x kubejs:poison_pill')
        .itemInputs('#forge:wax', `${poison_ingredients}`, 'gtceu:sulfur_dust')
        .duration(200)
        .EUt(21)
    event.recipes.gtceu.mixer(`kubejs:gtceu/mixer/distilled_water/pill_poison_${poison_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:distilled_water', 50))
        .itemOutputs('2x kubejs:poison_pill')
        .itemInputs('#forge:wax', `${poison_ingredients}`, 'gtceu:sulfur_dust')
        .duration(200)
        .EUt(21)
    event.recipes.gtceu.create_mixer(`kubejs:gtceu/mixer/spring_water/tablet_poison_${poison_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('tfc:spring_water', 250))
        .itemOutputs('2x kubejs:poison_tablet')
        .itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', `${poison_ingredients}`, 'gtceu:sulfur_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
    event.recipes.gtceu.create_mixer(`kubejs:gtceu/mixer/distilled_water/tablet_poison_${poison_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:distilled_water', 50))
        .itemOutputs('2x kubejs:poison_tablet')
        .itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', `${poison_ingredients}`, 'gtceu:sulfur_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
    event.recipes.gtceu.mixer(`kubejs:gtceu/mixer/spring_water/tablet_poison_${poison_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('tfc:spring_water', 250))
        .itemOutputs('2x kubejs:poison_tablet')
        .itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', `${poison_ingredients}`, 'gtceu:sulfur_dust')
        .duration(200)
        .EUt(21)
    event.recipes.gtceu.mixer(`kubejs:gtceu/mixer/distilled_water/tablet_poison_${poison_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:distilled_water', 50))
        .itemOutputs('2x kubejs:poison_tablet')
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
        '1x kubejs:regeneration_pill',
        ['#forge:wax', `${regeneration_ingredients}`, 'gtceu:tricalcium_phosphate_dust', Fluid.of('tfc:spring_water', 250)])
        .id(`kubejs:create/mixer/spring_water/pill_regeneration_${regeneration_ingredients.replace(':','/')}`)
    event.recipes.create.mixing(
        '1x kubejs:regeneration_pill',
        ['#forge:wax', `${regeneration_ingredients}`, 'gtceu:tricalcium_phosphate_dust', Fluid.of('gtceu:distilled_water', 50)])
        .id(`kubejs:create/mixer/distilled_water/pill_regeneration_${regeneration_ingredients.replace(':','/')}`)
    event.recipes.gtceu.create_mixer(`kubejs:gtceu/mixer/spring_water/pill_regeneration_${regeneration_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('tfc:spring_water', 250))
        .itemOutputs('2x kubejs:regeneration_pill')
        .itemInputs('#forge:wax', `${regeneration_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
    event.recipes.gtceu.create_mixer(`kubejs:gtceu/mixer/distilled_water/pill_regeneration_${regeneration_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:distilled_water', 50))
        .itemOutputs('2x kubejs:regeneration_pill')
        .itemInputs('#forge:wax', `${regeneration_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
    event.recipes.gtceu.mixer(`kubejs:gtceu/mixer/spring_water/pill_regeneration_${regeneration_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('tfc:spring_water', 250))
        .itemOutputs('2x kubejs:regeneration_pill')
        .itemInputs('#forge:wax', `${regeneration_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(200)
        .EUt(21)
    event.recipes.gtceu.mixer(`kubejs:gtceu/mixer/distilled_water/pill_regeneration_${regeneration_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:distilled_water', 50))
        .itemOutputs('2x kubejs:regeneration_pill')
        .itemInputs('#forge:wax', `${regeneration_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(200)
        .EUt(21)
    event.recipes.gtceu.create_mixer(`kubejs:gtceu/mixer/spring_water/tablet_regeneration_${regeneration_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('tfc:spring_water', 250))
        .itemOutputs('2x kubejs:regeneration_tablet')
        .itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', `${regeneration_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
    event.recipes.gtceu.create_mixer(`kubejs:gtceu/mixer/distilled_water/tablet_regeneration_${regeneration_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:distilled_water', 50))
        .itemOutputs('2x kubejs:regeneration_tablet')
        .itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', `${regeneration_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
    event.recipes.gtceu.mixer(`kubejs:gtceu/mixer/spring_water/tablet_regeneration_${regeneration_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('tfc:spring_water', 250))
        .itemOutputs('2x kubejs:regeneration_tablet')
        .itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', `${regeneration_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(200)
        .EUt(21)
    event.recipes.gtceu.mixer(`kubejs:gtceu/mixer/distilled_water/tablet_regeneration_${regeneration_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:distilled_water', 50))
        .itemOutputs('2x kubejs:regeneration_tablet')
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
        '1x kubejs:speed_pill',
        ['#forge:wax', `${speed_ingredients}`, 'gtceu:tricalcium_phosphate_dust', Fluid.of('tfc:spring_water', 250)])
        .id(`kubejs:create/mixer/spring_water/pill_speed_${speed_ingredients.replace(':','/')}`)
    event.recipes.create.mixing(
        '1x kubejs:speed_pill',
        ['#forge:wax', `${speed_ingredients}`, 'gtceu:tricalcium_phosphate_dust', Fluid.of('gtceu:distilled_water', 50)])
        .id(`kubejs:create/mixer/distilled_water/pill_speed_${speed_ingredients.replace(':','/')}`)
    event.recipes.gtceu.create_mixer(`kubejs:gtceu/mixer/spring_water/pill_speed_${speed_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('tfc:spring_water', 250))
        .itemOutputs('2x kubejs:speed_pill')
        .itemInputs('#forge:wax', `${speed_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
    event.recipes.gtceu.create_mixer(`kubejs:gtceu/mixer/distilled_water/pill_speed_${speed_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:distilled_water', 50))
        .itemOutputs('2x kubejs:speed_pill')
        .itemInputs('#forge:wax', `${speed_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
    event.recipes.gtceu.mixer(`kubejs:gtceu/mixer/spring_water/pill_speed_${speed_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('tfc:spring_water', 250))
        .itemOutputs('2x kubejs:speed_pill')
        .itemInputs('#forge:wax', `${speed_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(200)
        .EUt(21)
    event.recipes.gtceu.mixer(`kubejs:gtceu/mixer/distilled_water/pill_speed_${speed_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:distilled_water', 50))
        .itemOutputs('2x kubejs:speed_pill')
        .itemInputs('#forge:wax', `${speed_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(200)
        .EUt(21)
    event.recipes.gtceu.create_mixer(`kubejs:gtceu/mixer/spring_water/tablet_speed_${speed_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('tfc:spring_water', 250))
        .itemOutputs('2x kubejs:speed_tablet')
        .itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', `${speed_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
    event.recipes.gtceu.create_mixer(`kubejs:gtceu/mixer/distilled_water/tablet_speed_${speed_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:distilled_water', 50))
        .itemOutputs('2x kubejs:speed_tablet')
        .itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', `${speed_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
    event.recipes.gtceu.mixer(`kubejs:gtceu/mixer/spring_water/tablet_speed_${speed_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('tfc:spring_water', 250))
        .itemOutputs('2x kubejs:speed_tablet')
        .itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', `${speed_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(200)
        .EUt(21)
    event.recipes.gtceu.mixer(`kubejs:gtceu/mixer/distilled_water/tablet_speed_${speed_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:distilled_water', 50))
        .itemOutputs('2x kubejs:speed_tablet')
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
        '1x kubejs:slowness_pill',
        ['#forge:wax', `${slowness_ingredients}`, 'gtceu:sulfur_dust', Fluid.of('tfc:spring_water', 250)])
        .id(`kubejs:create/mixer/spring_water/pill_slowness_${slowness_ingredients.replace(':','/')}`)
    event.recipes.create.mixing(
        '1x kubejs:slowness_pill',
        ['#forge:wax', `${slowness_ingredients}`, 'gtceu:sulfur_dust', Fluid.of('gtceu:distilled_water', 50)])
        .id(`kubejs:create/mixer/distilled_water/pill_slowness_${slowness_ingredients.replace(':','/')}`)
    event.recipes.gtceu.create_mixer(`kubejs:gtceu/mixer/spring_water/pill_slowness_${slowness_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('tfc:spring_water', 250))
        .itemOutputs('2x kubejs:slowness_pill')
        .itemInputs('#forge:wax', `${slowness_ingredients}`, 'gtceu:sulfur_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
    event.recipes.gtceu.create_mixer(`kubejs:gtceu/mixer/distilled_water/pill_slowness_${slowness_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:distilled_water', 50))
        .itemOutputs('2x kubejs:slowness_pill')
        .itemInputs('#forge:wax', `${slowness_ingredients}`, 'gtceu:sulfur_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
    event.recipes.gtceu.mixer(`kubejs:gtceu/mixer/spring_water/pill_slowness_${slowness_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('tfc:spring_water', 250))
        .itemOutputs('2x kubejs:slowness_pill')
        .itemInputs('#forge:wax', `${slowness_ingredients}`, 'gtceu:sulfur_dust')
        .duration(200)
        .EUt(21)
    event.recipes.gtceu.mixer(`kubejs:gtceu/mixer/distilled_water/pill_slowness_${slowness_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:distilled_water', 50))
        .itemOutputs('2x kubejs:slowness_pill')
        .itemInputs('#forge:wax', `${slowness_ingredients}`, 'gtceu:sulfur_dust')
        .duration(200)
        .EUt(21)
    event.recipes.gtceu.create_mixer(`kubejs:gtceu/mixer/spring_water/tablet_slowness_${slowness_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('tfc:spring_water', 250))
        .itemOutputs('2x kubejs:slowness_tablet')
        .itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', `${slowness_ingredients}`, 'gtceu:sulfur_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
    event.recipes.gtceu.create_mixer(`kubejs:gtceu/mixer/distilled_water/tablet_slowness_${slowness_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:distilled_water', 50))
        .itemOutputs('2x kubejs:slowness_tablet')
        .itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', `${slowness_ingredients}`, 'gtceu:sulfur_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
    event.recipes.gtceu.mixer(`kubejs:gtceu/mixer/spring_water/tablet_slowness_${slowness_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('tfc:spring_water', 250))
        .itemOutputs('2x kubejs:slowness_tablet')
        .itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', `${slowness_ingredients}`, 'gtceu:sulfur_dust')
        .duration(200)
        .EUt(21)
    event.recipes.gtceu.mixer(`kubejs:gtceu/mixer/distilled_water/tablet_slowness_${slowness_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:distilled_water', 50))
        .itemOutputs('2x kubejs:slowness_tablet')
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
        '1x kubejs:weakness_pill',
        ['#forge:wax', `${weakness_ingredients}`, 'gtceu:sulfur_dust', Fluid.of('tfc:spring_water', 250)])
        .id(`kubejs:create/mixer/spring_water/pill_weakness_${weakness_ingredients.replace(':','/')}`)
    event.recipes.create.mixing(
        '1x kubejs:weakness_pill',
        ['#forge:wax', `${weakness_ingredients}`, 'gtceu:sulfur_dust', Fluid.of('gtceu:distilled_water', 50)])
        .id(`kubejs:create/mixer/distilled_water/pill_weakness_${weakness_ingredients.replace(':','/')}`)
    event.recipes.gtceu.create_mixer(`kubejs:gtceu/mixer/spring_water/pill_weakness_${weakness_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('tfc:spring_water', 250))
        .itemOutputs('2x kubejs:weakness_pill')
        .itemInputs('#forge:wax', `${weakness_ingredients}`, 'gtceu:sulfur_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
    event.recipes.gtceu.create_mixer(`kubejs:gtceu/mixer/distilled_water/pill_weakness_${weakness_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:distilled_water', 50))
        .itemOutputs('2x kubejs:weakness_pill')
        .itemInputs('#forge:wax', `${weakness_ingredients}`, 'gtceu:sulfur_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
    event.recipes.gtceu.mixer(`kubejs:gtceu/mixer/spring_water/pill_weakness_${weakness_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('tfc:spring_water', 250))
        .itemOutputs('2x kubejs:weakness_pill')
        .itemInputs('#forge:wax', `${weakness_ingredients}`, 'gtceu:sulfur_dust')
        .duration(200)
        .EUt(21)
    event.recipes.gtceu.mixer(`kubejs:gtceu/mixer/distilled_water/pill_weakness_${weakness_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:distilled_water', 50))
        .itemOutputs('2x kubejs:weakness_pill')
        .itemInputs('#forge:wax', `${weakness_ingredients}`, 'gtceu:sulfur_dust')
        .duration(200)
        .EUt(21)
    event.recipes.gtceu.create_mixer(`kubejs:gtceu/mixer/spring_water/tablet_weakness_${weakness_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('tfc:spring_water', 250))
        .itemOutputs('2x kubejs:weakness_tablet')
        .itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', `${weakness_ingredients}`, 'gtceu:sulfur_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
    event.recipes.gtceu.create_mixer(`kubejs:gtceu/mixer/distilled_water/tablet_weakness_${weakness_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:distilled_water', 50))
        .itemOutputs('2x kubejs:weakness_tablet')
        .itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', `${weakness_ingredients}`, 'gtceu:sulfur_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
    event.recipes.gtceu.mixer(`kubejs:gtceu/mixer/spring_water/tablet_weakness_${weakness_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('tfc:spring_water', 250))
        .itemOutputs('2x kubejs:weakness_tablet')
        .itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', `${weakness_ingredients}`, 'gtceu:sulfur_dust')
        .duration(200)
        .EUt(21)
    event.recipes.gtceu.mixer(`kubejs:gtceu/mixer/distilled_water/tablet_weakness_${weakness_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:distilled_water', 50))
        .itemOutputs('2x kubejs:weakness_tablet')
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
        '1x kubejs:haste_pill',
        ['#forge:wax', `${haste_ingredients}`, 'gtceu:tricalcium_phosphate_dust', Fluid.of('tfc:spring_water', 250)])
        .id(`kubejs:create/mixer/spring_water/pill_haste_${haste_ingredients.replace(':','/')}`)
    event.recipes.create.mixing(
        '1x kubejs:haste_pill',
        ['#forge:wax', `${haste_ingredients}`, 'gtceu:tricalcium_phosphate_dust', Fluid.of('gtceu:distilled_water', 50)])
        .id(`kubejs:create/mixer/distilled_water/pill_haste_${haste_ingredients.replace(':','/')}`)
    event.recipes.gtceu.create_mixer(`kubejs:gtceu/mixer/spring_water/pill_haste_${haste_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('tfc:spring_water', 250))
        .itemOutputs('2x kubejs:haste_pill')
        .itemInputs('#forge:wax', `${haste_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
    event.recipes.gtceu.create_mixer(`kubejs:gtceu/mixer/distilled_water/pill_haste_${haste_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:distilled_water', 50))
        .itemOutputs('2x kubejs:haste_pill')
        .itemInputs('#forge:wax', `${haste_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
    event.recipes.gtceu.mixer(`kubejs:gtceu/mixer/spring_water/pill_haste_${haste_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('tfc:spring_water', 250))
        .itemOutputs('2x kubejs:haste_pill')
        .itemInputs('#forge:wax', `${haste_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(200)
        .EUt(21)
    event.recipes.gtceu.mixer(`kubejs:gtceu/mixer/distilled_water/pill_haste_${haste_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:distilled_water', 50))
        .itemOutputs('2x kubejs:haste_pill')
        .itemInputs('#forge:wax', `${haste_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(200)
        .EUt(21)
    event.recipes.gtceu.create_mixer(`kubejs:gtceu/mixer/spring_water/tablet_haste_${haste_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('tfc:spring_water', 250))
        .itemOutputs('2x kubejs:haste_tablet')
        .itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', `${haste_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
    event.recipes.gtceu.create_mixer(`kubejs:gtceu/mixer/distilled_water/tablet_haste_${haste_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:distilled_water', 50))
        .itemOutputs('2x kubejs:haste_tablet')
        .itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', `${haste_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
    event.recipes.gtceu.mixer(`kubejs:gtceu/mixer/spring_water/tablet_haste_${haste_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('tfc:spring_water', 250))
        .itemOutputs('2x kubejs:haste_tablet')
        .itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', `${haste_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(200)
        .EUt(21)
    event.recipes.gtceu.mixer(`kubejs:gtceu/mixer/distilled_water/tablet_haste_${haste_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:distilled_water', 50))
        .itemOutputs('2x kubejs:haste_tablet')
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
        '1x kubejs:water_breathing_pill',
        ['#forge:wax', `${water_breathing_ingredients}`, 'gtceu:tricalcium_phosphate_dust', Fluid.of('tfc:spring_water', 250)])
        .id(`kubejs:create/mixer/spring_water/pill_water_breathing_${water_breathing_ingredients.replace(':','/')}`)
    event.recipes.create.mixing(
        '1x kubejs:water_breathing_pill',
        ['#forge:wax', `${water_breathing_ingredients}`, 'gtceu:tricalcium_phosphate_dust', Fluid.of('gtceu:distilled_water', 50)])
        .id(`kubejs:create/mixer/distilled_water/pill_water_breathing_${water_breathing_ingredients.replace(':','/')}`)
    event.recipes.gtceu.create_mixer(`kubejs:gtceu/mixer/spring_water/pill_water_breathing_${water_breathing_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('tfc:spring_water', 250))
        .itemOutputs('2x kubejs:water_breathing_pill')
        .itemInputs('#forge:wax', `${water_breathing_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
    event.recipes.gtceu.create_mixer(`kubejs:gtceu/mixer/distilled_water/pill_water_breathing_${water_breathing_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:distilled_water', 50))
        .itemOutputs('2x kubejs:water_breathing_pill')
        .itemInputs('#forge:wax', `${water_breathing_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
    event.recipes.gtceu.mixer(`kubejs:gtceu/mixer/spring_water/pill_water_breathing_${water_breathing_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('tfc:spring_water', 250))
        .itemOutputs('2x kubejs:water_breathing_pill')
        .itemInputs('#forge:wax', `${water_breathing_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(200)
        .EUt(21)
    event.recipes.gtceu.mixer(`kubejs:gtceu/mixer/distilled_water/pill_water_breathing_${water_breathing_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:distilled_water', 50))
        .itemOutputs('2x kubejs:water_breathing_pill')
        .itemInputs('#forge:wax', `${water_breathing_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(200)
        .EUt(21)
    event.recipes.gtceu.create_mixer(`kubejs:gtceu/mixer/spring_water/tablet_water_breathing_${water_breathing_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('tfc:spring_water', 250))
        .itemOutputs('2x kubejs:water_breathing_tablet')
        .itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', `${water_breathing_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
    event.recipes.gtceu.create_mixer(`kubejs:gtceu/mixer/distilled_water/tablet_water_breathing_${water_breathing_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:distilled_water', 50))
        .itemOutputs('2x kubejs:water_breathing_tablet')
        .itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', `${water_breathing_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
    event.recipes.gtceu.mixer(`kubejs:gtceu/mixer/spring_water/tablet_water_breathing_${water_breathing_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('tfc:spring_water', 250))
        .itemOutputs('2x kubejs:water_breathing_tablet')
        .itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', `${water_breathing_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(200)
        .EUt(21)
    event.recipes.gtceu.mixer(`kubejs:gtceu/mixer/distilled_water/tablet_water_breathing_${water_breathing_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:distilled_water', 50))
        .itemOutputs('2x kubejs:water_breathing_tablet')
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
        '1x kubejs:night_vision_pill',
        ['#forge:wax', `${night_vision_ingredients}`, 'gtceu:tricalcium_phosphate_dust', Fluid.of('tfc:spring_water', 250)])
        .id(`kubejs:create/mixer/spring_water/pill_night_vision_${night_vision_ingredients.replace(':','/')}`)
    event.recipes.create.mixing(
        '1x kubejs:night_vision_pill',
        ['#forge:wax', `${night_vision_ingredients}`, 'gtceu:tricalcium_phosphate_dust', Fluid.of('gtceu:distilled_water', 50)])
        .id(`kubejs:create/mixer/distilled_water/pill_night_vision_${night_vision_ingredients.replace(':','/')}`)
    event.recipes.gtceu.create_mixer(`kubejs:gtceu/mixer/spring_water/pill_night_vision_${night_vision_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('tfc:spring_water', 250))
        .itemOutputs('2x kubejs:night_vision_pill')
        .itemInputs('#forge:wax', `${night_vision_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
    event.recipes.gtceu.create_mixer(`kubejs:gtceu/mixer/distilled_water/pill_night_vision_${night_vision_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:distilled_water', 50))
        .itemOutputs('2x kubejs:night_vision_pill')
        .itemInputs('#forge:wax', `${night_vision_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
    event.recipes.gtceu.mixer(`kubejs:gtceu/mixer/spring_water/pill_night_vision_${night_vision_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('tfc:spring_water', 250))
        .itemOutputs('2x kubejs:night_vision_pill')
        .itemInputs('#forge:wax', `${night_vision_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(200)
        .EUt(21)
    event.recipes.gtceu.mixer(`kubejs:gtceu/mixer/distilled_water/pill_night_vision_${night_vision_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:distilled_water', 50))
        .itemOutputs('2x kubejs:night_vision_pill')
        .itemInputs('#forge:wax', `${night_vision_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(200)
        .EUt(21)
    event.recipes.gtceu.create_mixer(`kubejs:gtceu/mixer/spring_water/tablet_night_vision_${night_vision_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('tfc:spring_water', 250))
        .itemOutputs('2x kubejs:night_vision_tablet')
        .itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', `${night_vision_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
    event.recipes.gtceu.create_mixer(`kubejs:gtceu/mixer/distilled_water/tablet_night_vision_${night_vision_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:distilled_water', 50))
        .itemOutputs('2x kubejs:night_vision_tablet')
        .itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', `${night_vision_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
    event.recipes.gtceu.mixer(`kubejs:gtceu/mixer/spring_water/tablet_night_vision_${night_vision_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('tfc:spring_water', 250))
        .itemOutputs('2x kubejs:night_vision_tablet')
        .itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', `${night_vision_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(200)
        .EUt(21)
    event.recipes.gtceu.mixer(`kubejs:gtceu/mixer/distilled_water/tablet_night_vision_${night_vision_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:distilled_water', 50))
        .itemOutputs('2x kubejs:night_vision_tablet')
        .itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', `${night_vision_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(200)
        .EUt(21)
});

//invisibility
const invisibility_ingredients = [
    'tfc:plant/calendula',
];

invisibility_ingredients.forEach(invisibility_ingredients => {

    event.recipes.gtceu.mixer(`kubejs:gtceu/mixer/salvo_invisibility_${invisibility_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:phenol', 250))
        .itemOutputs('1x kubejs:invisibility_salvo')
        .itemInputs('gtceu:sticky_resin', `${invisibility_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(200)
        .EUt(21)
    event.recipes.gtceu.create_mixer(`kubejs:gtceu/mixer/salvo_invisibility_${invisibility_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:phenol', 250))
        .itemOutputs('1x kubejs:invisibility_salvo')
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

    event.recipes.gtceu.mixer(`kubejs:gtceu/mixer/salvo_fire_resistance_${fire_resistance_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:phenol', 250))
        .itemOutputs('1x kubejs:fire_resistance_salvo')
        .itemInputs('gtceu:sticky_resin', `${fire_resistance_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(200)
        .EUt(21)
    event.recipes.gtceu.create_mixer(`kubejs:gtceu/mixer/salvo_fire_resistance_${fire_resistance_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:phenol', 250))
        .itemOutputs('1x kubejs:fire_resistance_salvo')
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

    event.recipes.gtceu.mixer(`kubejs:gtceu/mixer/salvo_resistance_${resistance_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:phenol', 250))
        .itemOutputs('1x kubejs:resistance_salvo')
        .itemInputs('gtceu:sticky_resin', `${resistance_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(200)
        .EUt(21)
    event.recipes.gtceu.create_mixer(`kubejs:gtceu/mixer/salvo_resistance_${resistance_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:phenol', 250))
        .itemOutputs('1x kubejs:resistance_salvo')
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

    event.recipes.gtceu.mixer(`kubejs:gtceu/mixer/salvo_instant_health_${instant_health_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:phenol', 250))
        .itemOutputs('1x kubejs:instant_health_salvo')
        .itemInputs('gtceu:sticky_resin', `${instant_health_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(200)
        .EUt(21)
    event.recipes.gtceu.create_mixer(`kubejs:gtceu/mixer/salvo_instant_health_${instant_health_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:phenol', 250))
        .itemOutputs('1x kubejs:instant_health_salvo')
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

    event.recipes.gtceu.mixer(`kubejs:gtceu/mixer/salvo_absorption_${absorption_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:phenol', 250))
        .itemOutputs('1x kubejs:absorption_salvo')
        .itemInputs('gtceu:sticky_resin', `${absorption_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(200)
        .EUt(21)
    event.recipes.gtceu.create_mixer(`kubejs:gtceu/mixer/salvo_absorption_${absorption_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:phenol', 250))
        .itemOutputs('1x kubejs:absorption_salvo')
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

    event.recipes.gtceu.mixer(`kubejs:gtceu/mixer/salvo_luck_${luck_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:phenol', 250))
        .itemOutputs('1x kubejs:luck_salvo')
        .itemInputs('gtceu:sticky_resin', `${luck_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(200)
        .EUt(21)
    event.recipes.gtceu.create_mixer(`kubejs:gtceu/mixer/salvo_luck_${luck_ingredients.replace(':','/')}`)
        .circuit(4)
        .inputFluids(Fluid.of('gtceu:phenol', 250))
        .itemOutputs('1x kubejs:luck_salvo')
        .itemInputs('gtceu:sticky_resin', `${luck_ingredients}`, 'gtceu:tricalcium_phosphate_dust')
        .duration(100)
        .EUt(21)
        .rpm(96)
});

};