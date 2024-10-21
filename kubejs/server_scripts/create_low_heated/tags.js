// priority: 0

const registerCreateLowHeatedItemTags = (e) => {
    //#region Белый список для печки Create

    // По дефолту ничего не делает, чтобы заработала нужно в конфиге поменять ignoresFuelTagWhitelist = true на false, но нам это не нужно.
    const FUEL_LIST = ['minecraft:coal', 'gtceu:poor_raw_coal', 'gtceu:raw_coal', 'gtceu:rich_raw_coal', 'gtceu:coke_gem'];

    FUEL_LIST.forEach(el => {
        e.add('createlowheated:basic_burner_fuel_whitelist', el)
    })

    //#endregion
    
    //#region Предметы которые могут поджигать печь Create
    const BURNDER_STARTER_LIST = [
        'tfc:firestarter', 'tfc:torch', 'gtceu:invar_lighter', 'gtceu:platinum_lighter'
    ];

    BURNDER_STARTER_LIST.forEach(el => {
        e.add('createlowheated:burner_starters', el)
    })
    //#endregion
}