// priority: 0

const registerAdAstraRecipes = (event) => {
    
    // Удаление рецептов мода
    // event.remove({ mod: 'ad_astra' });

    event.remove({ id: 'ad_astra:recipes/steel_trapdoor' })
    event.remove({ id: 'ad_astra:recipes/steel_door' })
    event.remove({ id: 'ad_astra:recipes/hammer' })
    event.remove({ id: 'ad_astra:recipes/iron_rod' })
    event.remove({ id: 'ad_astra:hammering/steel_plate' })
}