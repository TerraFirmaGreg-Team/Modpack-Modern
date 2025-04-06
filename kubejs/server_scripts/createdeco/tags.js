const registerCreatedecoItemTags = (event) => {

//#region Hidden Items  
  global.CREATEDECO_DISABLED_ITEMS.forEach(item => {
      event.removeAllTagsFrom(item)
      event.add('c:hidden_from_recipe_viewers', item)
  });
//#endregion

//#region Apply Tags
  const metalBars = ['andesite', 'brass', 'iron', 'copper', 'industrial_iron', 'zinc'];

  metalBars.forEach(metalBars => {
      event.add('tfc:metal_bars', `createdeco:${metalBars}_bars`)
      event.add('tfc:metal_bars', `createdeco:${metalBars}_bars_overlay`)
  });

  event.add("createdeco:internal/plates/iron_plates", "gtceu:iron_plate")
  event.add("createdeco:internal/plates/copper_plates", "gtceu:copper_plate")
  event.add("createdeco:internal/plates/brass_plates", "gtceu:brass_plate")
  event.add('createdeco:internal/plates/andesite_plates', '#forge:sheets/wrought_iron')
  event.add('createdeco:internal/plates/industrial_iron_plates', '#forge:sheets/steel')
  event.add('createdeco:internal/plates/zinc_plates', '#forge:sheets/zinc')
  event.add("createdeco:internal/nuggets/zinc_nuggets", "gtceu:zinc_nugget")
  event.add("createdeco:internal/nuggets/industrial_iron_nuggets", "gtceu:steel_nugget")
  event.add("createdeco:internal/nuggets/brass_nuggets", "gtceu:brass_nugget")
  event.add("createdeco:internal/nuggets/copper_nuggets", "gtceu:copper_nugget")
  event.add("createdeco:internal/ingots/brass_ingots", "gtceu:brass_ingot")
  event.add("createdeco:internal/ingots/zinc_ingots", "gtceu:zinc_ingot")
  event.add("createdeco:internal/ingots/andesite_ingots", "gtceu:wrought_iron_ingot")
  event.add("createdeco:internal/ingots/industrial_iron_ingots", `#forge:ingots/steel`)
  event.add("createdeco:internal/blocks/brass_blocks", "gtceu:brass_block")
  event.add("createdeco:internal/blocks/industrial_iron_blocks", "gtceu:steel_block")
  event.add("createdeco:internal/blocks/zinc_blocks", "gtceu:zinc_block")
  event.add("createdeco:internal/blocks/andesite_blocks", "gtceu:wrought_iron_block")
//#endregion
};