// priority: 0

const registerCreatePickyWheelsBiomeTags = (e) => {

    //#region Водные колеса
    e.remove('createpickywheels:waterwheels_whitelist', '#minecraft:is_overworld')
    e.add('createpickywheels:waterwheels_whitelist', '#tfg:is_overworld')

    e.remove('createpickywheels:waterwheels_boosted', "#minecraft:is_river")
    e.add('createpickywheels:waterwheels_whitelist', '#tfc:is_river')
    //#endregion

    //#region Ветрянные мельницы
    e.remove('createpickywheels:windmills_whitelist', '#minecraft:is_overworld')
    e.add('createpickywheels:windmills_whitelist', '#tfg:is_overworld')

    e.remove('createpickywheels:windmills_boosted', "#minecraft:is_ocean")
    e.remove('createpickywheels:windmills_boosted', "#minecraft:is_deep_ocean")
    e.remove('createpickywheels:windmills_boosted', "#minecraft:is_badlands")
    e.remove('createpickywheels:windmills_boosted', "#forge:is_desert")
    e.remove('createpickywheels:windmills_boosted', "#forge:is_peak")
    e.remove('createpickywheels:windmills_boosted', "#forge:is_plains" )

    e.add('createpickywheels:windmills_boosted', "#tfc:is_ocean")
    e.add('createpickywheels:windmills_boosted', "tfc:badlands")
    e.add('createpickywheels:windmills_boosted', "tfc:highlands")
    e.add('createpickywheels:windmills_boosted', "tfc:inverted_badlands")
    e.add('createpickywheels:windmills_boosted', "tfc:mountains")
    e.add('createpickywheels:windmills_boosted', "tfc:mountain_lake")
    e.add('createpickywheels:windmills_boosted', "tfc:old_mountain_lake")
    e.add('createpickywheels:windmills_boosted', "tfc:old_mountains")
    e.add('createpickywheels:windmills_boosted', "tfc:plains")
    e.add('createpickywheels:windmills_boosted', "tfc:rolling_hills")
    e.add('createpickywheels:windmills_boosted', "tfc:volcanic_mountain_lake")
    e.add('createpickywheels:windmills_boosted', "tfc:volcanic_mountains")
    e.add('createpickywheels:windmills_boosted', "tfc:volcanic_oceanic_mountain_lake")
    e.add('createpickywheels:windmills_boosted', "tfc:volcanic_oceanic_mountains")
    //#endregion
}