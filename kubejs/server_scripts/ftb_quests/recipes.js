// priority: 0
"use strict";

const registerFTBQuestsRecipes = (event) => {
    
    // Удаление рецептов мода
    event.remove({ mod: 'ftbquests' })
    event.remove({ mod: 'ftbfiltersystem' });
}