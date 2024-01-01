// priority: 0

const registerFirmaCivRecipes = (event) => {
    
    event.remove({ id: '/firmaciv:quern/' })
        
    event.recipes.tfc.heating('firmaciv:oarlock', 1535)
        .resultFluid(Fluid.of('tfc:metal/cast_iron', 288))
        .id(`tfg:firmaciv/heating/oarlock`)
}