// priority: 0

/**
 * Нужен для того, чтобы удалять рецепты или блокировать json файлы, 
 * которые нельзя удалить по id (допустим нагревательные спецификации предметов).
 * Рекомендуется не использовать.
 */
global.EMPTY_JSON = {
    conditions: [
        { type: "forge:false" }
    ]
}

/**
 * Генерирует рандомную строку.
 * @param { Number } length Длина строки. 
 * @returns Строка из рандомных символов.
 */
global.MAKE_ID = (length) => {
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
global.CREATE_EMPTY_JSON = (event, path) => {
    event.addJson(path, global.EMPTY_JSON)
}