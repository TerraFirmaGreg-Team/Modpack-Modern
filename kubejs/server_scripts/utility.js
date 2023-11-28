// priority: 0

/**
 * Метод создает нагревательную спецификацию json для предмета. 
 * Используется только в событии генерации датапаков, не является рецептом.
 * @param { ServerEvents.highPriorityData } event Событие в котором вызывается.
 * @param { String } customPath Путь, начинается с [tfc:tfc/item_heats/], если указан customPath, 
 * то добавляется после [tfc:tfc/item_heats/], если не указан, генерируется сам.
 * @param { Object } input Объект ингредиента, может включать предмет, или тэг.
 * @param { Number } heat_capacity Теплоемкость объекта.
 * @param { Number } forging_temperature Температура ковки.
 * @param { Number } welding_temperature Температура сварки.
 */
const addItemHeat = (event, customPath, input, heat_capacity, forging_temperature, welding_temperature) => {
    const defaultPath = `tfc:tfc/item_heats/`
    let json
    
    if (forging_temperature == null || welding_temperature == null)
    {
        json = {
            ingredient: input,
            heat_capacity: heat_capacity
        }
    }
    else
    {
        json = {
            ingredient: input,
            heat_capacity: heat_capacity,
            forging_temperature: forging_temperature,
            welding_temperature: welding_temperature
        }
    }

    

    event.addJson((customPath == null) ? defaultPath + makeId(20) : defaultPath + customPath, json)
};

/**
 * Создает рецепта нагрева, предмет -> жидкость, в основном используется для металлов.
 * @param { ServerEvents.recipes } event Событие в котором вызывается.
 * @param { String } recipeId Название рецепта.
 * @param { Object } input Объект входа, может принимать объект с тэгом или предметом.
 * @param { Object } result_fluid Результирующая жидкость после расплава предмета.
 * @param { Number } temperature Температура при которой произойдет рецепт.
 */
const addHeatingItemToFluidRecipe = (event, recipeId, input, result_fluid, temperature, useDurab) => {
    event.custom({
        type: "tfc:heating",
        ingredient: input,
        result_fluid: result_fluid,
        temperature: temperature,
        use_durability: useDurab
    }).id(recipeId)
};

/**
 * Создает рецепт нагрева, предмет -> предмет, в основном используется для обычных предметов.
 * @param { ServerEvents.recipes } event Событие в котором вызывается.
 * @param { String } recipeId Название рецепта.
 * @param { Object } input Объект входа, может принимать объект с тэгом или предметом.
 * @param { Object } result_fluid Результирующий предмет после достижения требуемой температуры.
 * @param { Number } temperature Температура при которой произойдет рецепт.
 */
const addHeatingItemToItemRecipe = (event, recipeId, input, result_item, temperature) => {
    event.custom({
        type: "tfc:heating",
        ingredient: input,
        result_item: result_item,
        temperature: temperature
    }).id(recipeId)
};

/**
 * Создает рецепт для доменной печки лоу тира.
 * @param { ServerEvents.recipes } event Событие в котором вызывается. 
 * @param { String } recipeId Название рецепта.
 * @param { Object } result Объект выхода, может принимать объект с тэгом или предметом.
 * @param { Object } fluid Объект жидкости, может принимать объект с жидкостью и ее кол-вом.
 * @param { Object } catalyst Объект катализатора, может принимать объект с тэгом или предметом.
 * @param { number } duration Длительность рецепта.
 */
const addBloomeryRecipe = (event, recipeId, result, fluid, catalyst, duration) => {
    event.custom({
        type: "tfc:bloomery",
        result: result,
        fluid: fluid,
        catalyst: catalyst,
        duration: duration
    }).id(recipeId)
};

/**
 * Создает рецепт для доменной печки нормал тира.
 * @param { ServerEvents.recipes } event Событие в котором вызывается. 
 * @param { String } recipeId Название рецепта.
 * @param { Object } fluid Объект жидкости, может принимать объект с жидкостью и ее кол-вом.
 * @param { Object } result Объект выхода, может принимать объект с тэгом или предметом.
 * @param { Object } catalyst Объект катализатора, может принимать объект с тэгом или предметом.
 */
const addTFCBlastFurnaceRecipe = (event, recipeId, fluid, result, catalyst) => {
    event.custom({
        type: "tfc:blast_furnace",
        fluid: fluid,
        result: result,
        catalyst: catalyst
    }).id(recipeId)
};

/**
 * Создает рецепт отливки чего-либо из молда в предмет.
 * @param { ServerEvents.recipes } event Событие в котором вызывается. 
 * @param { String } recipeId Название рецепта.
 * @param { Object } inputMold Форма на вход.
 * @param { Object } fluidInMold Объект жидкости, может принимать объект с жидкостью и ее кол-вом.
 * @param { Object } result Объект выхода, может принимать объект с тэгом или предметом.
 * @param { Number } break_chance Шанс, что форма сломается.
 */
const addCastingRecipe = (event, recipeId, inputMold, fluidInMold, resultOutput, break_chance) => {
    event.custom({
        type: "tfc:casting",
        mold: inputMold,
        fluid: fluidInMold,
        result: resultOutput,
        break_chance: break_chance
    }).id(recipeId)
};

/**
 * Создает рецепт наковальни.
 * @param { ServerEvents.recipes } event Событие в котором вызывается.
 * @param { String } recipeId Название рецепта.
 * @param { Object } input Объект входа, может принимать объект с тэгом или предметом.
 * @param { Object } result Объект выхода, может принимать объект только предметом.
 * @param { Number } tier Уровень рецепта, базируется на уровне металла тфк.
 * @param { Array } rules Правила ковки.
 */
const addAnvilRecipe = (event, recipeId, input, result, tier, rules) => {
    event.custom({
        type: "tfc:anvil",
        input: input,
        result: result,
        tier: tier,
        rules: rules
    }).id(recipeId)
};

/**
 * Создает рецепт сварки.
 * @param { ServerEvents.recipes } event Событие в котором вызывается.
 * @param { String } recipeId Название рецепта.
 * @param { Object } input1 Объект входа, может принимать объект с тэгом или предметом.
 * @param { Object } input2 Объект входа, может принимать объект с тэгом или предметом.
 * @param { Object } output Объект выхода, может принимать объект только предметом.
 * @param { Number } tier Уровень рецепта, базируется на уровне металла тфк.
 */
const addWeldingRecipe = (event, recipeId, input1, input2, output, tier) => {
    event.custom({
        type: "tfc:welding",
        first_input: input1,
        second_input: input2,
        result: output,
        tier: tier,
    }).id(recipeId)
};

/**
 * Создает рецепт дробилки.
 * @param { ServerEvents.recipes } event 
 * @param { String } recipeId 
 * @param { Object } input 
 * @param { Object } output 
 */
const addQuernRecipe = (event, recipeId, input, output) => {
    event.custom({
        type: "tfc:quern",
        ingredient: input,
        result: output
    }).id(recipeId)
};