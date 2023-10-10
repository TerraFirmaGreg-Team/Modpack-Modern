ServerEvents.recipes(event => {

  const gtceu = event.recipes.gtceu;

  WOOD_NAMES.forEach((wood) => {
   
    // tfc log -> stripped log
    event.custom({
      type: 'create:cutting',
      ingredients: [
        {
          "item": `tfc:wood/log/${wood}`
        }
      ],
      results: [
        {
          "item": `tfc:wood/stripped_log/${wood}`
        }
      ],
      processingTime: 100
    })


    // stripped log -> lumber
    event.custom({
      type: 'create:cutting',
    ingredients: [
      {
        "item": `tfc:wood/stripped_log/${wood}`
      }
    ],
    results: [
      {
        "item": `tfc:wood/lumber/${wood}`,
        count: 10
      }
    ],
    processingTime: 100
    })
  })
});