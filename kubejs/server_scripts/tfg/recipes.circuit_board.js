function registerTFGCircuitBoardsRecipes(event) {

//event.remove({ input: 'gtceu:plastic_printed_circuit_board' }, Item.of('gtceu:plastic_printed_circuit_board'), Item.of('tfg:ceramic_printed_circuit_board'))

    const toRemove = [
        'gtceu:chemical_reactor/plastic_board_pbi',
        'gtceu:chemical_reactor/plastic_board_polyethylene',
        'gtceu:chemical_reactor/plastic_board_ptfe',
        'gtceu:chemical_reactor/plastic_board_pvc',
        'gtceu:large_chemical_reactor/plastic_board_pbi',
        'gtceu:large_chemical_reactor/plastic_board_polyethylene',
        'gtceu:large_chemical_reactor/plastic_board_pvc',
        'gtceu:large_chemical_reactor/plastic_board_ptfe',
        'gtceu:chemical_reactor/plastic_circuit_board_iron3',
        'gtceu:chemical_reactor/plastic_circuit_board_persulfate',
        'gtceu:large_chemical_reactor/plastic_circuit_board_iron3',
        'gtceu:large_chemical_reactor/plastic_circuit_board_persulfate'
    ];
    toRemove.forEach(id => event.remove({ id: id }));

event.recipes.gtceu.arc_furnace('tfg:mo_activated_sic_substrate')
    .itemInputs(Item.of('tfg:silicon_carbide_plate'), Item.of('gtceu:molybdenum_foil', 4))
    .inputFluids(Fluid.of('gtceu:oxygen', 1000))
    .itemOutputs(Item.of('tfg:mo_activated_sic_substrate'))
    .duration(20*5)
	.EUt(GTValues.VA[GTValues.MV])

event.recipes.gtceu.chemical_bath('tfg:ceramic_circuit_board')
    .itemInputs(Item.of('tfg:mo_activated_sic_substrate'), Item.of('gtceu:nickel_dust', 1))
    .inputFluids(Fluid.of('gtceu:sulfuric_acid', 250))
    .itemOutputs(Item.of('gtceu:plastic_circuit_board', 4))
    .duration(20*25)
	.EUt(GTValues.VA[GTValues.LV])

event.recipes.gtceu.chemical_reactor('tfg:ceramic_printed_circuit_board_sodium_persulfate')
    .itemInputs(Item.of('gtceu:plastic_circuit_board'), Item.of('gtceu:annealed_copper_foil', 6))
    .inputFluids(Fluid.of('gtceu:sodium_persulfate', 500))
    .itemOutputs(Item.of('gtceu:plastic_printed_circuit_board'))
    .duration(20*30)
	.EUt(GTValues.VA[GTValues.LV])

event.recipes.gtceu.chemical_reactor('tfg:ceramic_printed_circuit_board_iron_iii_chloride')
    .itemInputs(Item.of('gtceu:plastic_circuit_board'), Item.of('gtceu:annealed_copper_foil', 6))
    .inputFluids(Fluid.of('gtceu:iron_iii_chloride', 250))
    .itemOutputs(Item.of('gtceu:plastic_printed_circuit_board'))
    .duration(20*30)
	.EUt(GTValues.VA[GTValues.LV])
}