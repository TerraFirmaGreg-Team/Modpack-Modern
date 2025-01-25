const registerTFGItemTags = (event) =>
{
    event.add('tfg:hardwood_strips', 'tfg:hardwood_strip')
    event.add('tfg:hardwood_strips', 'tfg:soaked_hardwood_strip')
    //Adding any of these dusts to the forge dusts/wood tag will make it so you can craft softwood pulp using hardwood pulp. which is not ok.
    event.add('tfg:wood_dusts', 'gtceu:hardwood_dust')
    event.add('tfg:tiny_wood_dusts', 'gtceu:tiny_hardwood_dust')
    event.add('tfg:small_wood_dusts', 'gtceu:small_hardwood_dust')
    event.add('tfg:wood_dusts', 'gtceu:wood_dust')
    event.add('tfg:tiny_wood_dusts', 'gtceu:tiny_wood_dust')
    event.add('tfg:small_wood_dusts', 'gtceu:small_wood_dust')
}