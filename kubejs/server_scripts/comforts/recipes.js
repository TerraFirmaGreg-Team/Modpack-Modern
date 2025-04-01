/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerComfortsRecipes = (evt) =>
{
    evt.remove({mod:"comforts"})

    //Rope and Nail
    evt.recipes.minecraft.crafting_shapeless("comforts:rope_and_nail", ["firmaciv:rope_coil", "gtceu:wrought_iron_screw"])
        .id("comforts:crafting/shaped/rope_and_nail");

    //sleeping bag
    evt.recipes.minecraft.crafting_shaped("comforts:sleeping_bag_white",
        [
            "AAA"
        ],
        {
            A: "#tfc:high_quality_cloth"
        }
    );

    evt.recipes.minecraft.crafting_shaped("comforts:hammock_white",
        [
            "ABA",
            "CCC",
            "ABA"
        ],
        {
            A: "#forge:string",
            B: "gtceu:long_wood_rod",
            C: "#tfc:high_quality_cloth",
        }
    )

    //decolor sleeping bag
    evt.recipes.gtceu.chemical_bath(`comforts:chemical_bath/decolor_sleeping_bag`)
        .itemInputs("#comforts:colored_sleeping_bags")
        .inputFluids(Fluid.of("gtceu:chlorine", 72))
        .itemOutputs("comforts:sleeping_bag_white")
        .duration(20 * 15)
        .EUt(4);
    global.MINECRAFT_DYE_NAMES.forEach(dyeName =>
    {
        /*evt.recipes.gtceu.chemical_bath(`comforts:chemical_bath/sleeping_bag_${dyeName}`)
            

        evt.recipes.gtceu.chemical_bath(`comforts:chemical_bath/decolor_hammock`)
        evt.recipes.gtceu.chemical_bath(`comforts:chemical_bath/hammock_${dyeName}`)*/
    })
}