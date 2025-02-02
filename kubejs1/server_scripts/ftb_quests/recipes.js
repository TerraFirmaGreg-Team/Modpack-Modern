// priority: 0

const registerFTBQuestsRecipes = (event) => {
    
    // Удаление рецептов мода
    event.remove({ mod: 'ftbquests' })
    event.remove({ mod: 'ftbfiltersystem' });
}