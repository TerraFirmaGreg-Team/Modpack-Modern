const removeReworkedRecipes = (event) => {
    event.remove({ mod: 'create' });
    event.remove({ mod: 'extendedcrafting' });
}