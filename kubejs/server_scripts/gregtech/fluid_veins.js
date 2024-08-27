// priority: 0

const registerGTMFluidVeins = (event) => {

    event.add('tfg:fresh_water', vein => {
        vein.dimensions('minecraft:overworld')
        vein.fluid(() => Fluid.of('minecraft:water').fluid)
        vein.weight(5)
        vein.minimumYield(250)
        vein.maximumYield(300)
        vein.depletionAmount(1)
        vein.depletionChance(100)
        vein.depletedYield(15)
    })
}