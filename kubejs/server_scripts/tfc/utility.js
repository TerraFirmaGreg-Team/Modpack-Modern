// priority: 0

/**
 * Нужен для того, чтобы удалять рецепты или блокировать json файлы, 
 * которые нельзя удалить по id (допустим нагревательные спецификации предметов).
 * Рекомендуется не использовать.
 */
const emptyJson = {
    conditions: [
        { type: "forge:false" }
    ]
}

/**
 * Генерирует рандомную строку.
 * @param { Number } length Длина строки. 
 * @returns Строка из рандомных символов.
 */
const makeId = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

/**
 * Вставляет пустой json, по пути и блокирует что-либо по этому пути.
 * @param { ServerEvents.highPriorityData } event Событие в котором вызывается.
 * @param { String } path Путь по которому нужно вставить пустой json.
 */
const addEmptyJson = (event, path) => {
    event.addJson(path, emptyJson)
}

/**
 * Метод создает нагревательную спецификации для предмета. 
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
    const json = {
        ingredient: input,
        heat_capacity: heat_capacity,
        forging_temperature: forging_temperature,
        welding_temperature: welding_temperature
    }

    event.addJson((customPath == null) ? defaultPath + makeId(20) : defaultPath + customPath, json)
}

/**
 * Создает рецепт нагрева, предмет -> жидкость, в основном используется для металлов.
 * @param { ServerEvents.recipes } event Событие в котором вызывается.
 * @param { String } id Название рецепта, если не указать сгенерируется автоматически, рекомендуется задать вручную.
 * @param { Object } input Объект входа, может принимать объект с тэгом или предметом.
 * @param { Object } result_fluid Результирующая жидкость после расплава предмета.
 * @param { Number } temperature Температура при которой произойдет рецепт.
 */
const addHeatingItemToFluidRecipe = (event, id, input, result_fluid, temperature) => {
    event.custom({
        id: id,
        type: "tfc:heating",
        ingredient: input,
        result_fluid: result_fluid,
        temperature: temperature
    })
}

/**
 * Создает рецепт нагрева, предмет -> предмет, в основном используется для обычных предметов.
 * @param { ServerEvents.recipes } event Событие в котором вызывается.
 * @param { String } id Название рецепта, если не указать сгенерируется автоматически, рекомендуется задать вручную.
 * @param { Object } input Объект входа, может принимать объект с тэгом или предметом.
 * @param { Object } result_fluid Результирующий предмет после достижения требуемой температуры.
 * @param { Number } temperature Температура при которой произойдет рецепт.
 */
const addHeatingItemToItemRecipe = (event, id, input, result_item, temperature) => {
    event.custom({
        id: id,
        type: "tfc:heating",
        ingredient: input,
        result_item: result_item,
        temperature: temperature
    })
}

/*
const addWeldingRecipe = (event, id, input1, input2, output, tier) => {
    event.custom({
        id: id,
        type: "tfc:welding",
        first_input: input1,
        second_input: input2,
        result: output,
        tier: tier,
    })
}

const customAnvil = (event, input1, [result, count], tier, [firstRule, secondRule, thirdRule]) => {
    event.custom({
        type: "tfc:anvil",
        input: {
            tag: input1
        },
        result: {
            item: result,
            count: count
        },
        tier: tier,
        rules: [
            firstRule,
            secondRule,
            thirdRule
        ]
    })
}*/

const addQuernRecipe = (event, input, output) => {
    event.custom({
        type: "tfc:quern",
        ingredient: input,
        result: output
    })
}

