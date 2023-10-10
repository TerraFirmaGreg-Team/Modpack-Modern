ServerEvents.recipes(event => {

  const gtceu = event.recipes.gtceu;

  WOOD_NAMES.forEach((wood) => {
   

    // tfc log -> lumber 
    event.shapeless(`8x tfc:wood/lumber/${wood}`, [`#tfc:${wood}_logs`, '#forge:tools/saws']).id(`tfg_gtceu_tfc_${wood}_lumber`);

    // planks -> lumber 
    event.shapeless(`4x tfc:wood/lumber/${wood}`, [`tfc:wood/planks/${wood}`, '#forge:tools/saws']).id(`tfg_gtceu_tfc_${wood}_planks_undo`);

    // plank slab -> lumber 
    event.shapeless(`2x tfc:wood/lumber/${wood}`, [`tfc:wood/planks/${wood}_slab`, '#forge:tools/saws']).id(`tfg_gtceu_tfc_${wood}_slab_undo`);

    // plank stairs -> lumber 
    event.shapeless(`3x tfc:wood/lumber/${wood}`, [`tfc:wood/planks/${wood}_stairs`, '#forge:tools/saws']).id(`tfg_gtceu_tfc_${wood}_stairs_undo`);

    // base log -> support 
    event.shapeless(`8x tfc:wood/support/${wood}`, [`#tfc:${wood}_logs`, `#tfc:${wood}_logs`, '#forge:tools/saws']).id(`tfg_gtceu_tfc_${wood}_support`);

    // base log -> cutting machine -> lumber
    gtceu.cutter(`tfg_gtceu_tfc_cutting_${wood}_log`)
      .itemInputs(`#tfc:${wood}_logs`)
      .inputFluids("gtceu:lubricant 1")
      .itemOutputs(`16x tfc:wood/lumber/${wood}`, '2x gtceu:wood_dust')
      .duration(200).EUt(7);

    // base log -> assembler -> support
    gtceu.assembler(`tfg_gtceu_tfc_${wood}_support`)
      .itemInputs(`2x #tfc:${wood}_logs`)
      .circuit(7)
      .itemOutputs(`16x tfc:wood/support/${wood}`)
      .duration(200).EUt(7);
  })
});