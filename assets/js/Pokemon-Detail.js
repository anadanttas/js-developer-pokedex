const pokemon = document.getElementById('pokemonList');
const selectMore = document.querySelector(".pagination");

//coversao para listagem de habilidades
  //pegando a imagem do pokemon, porém não sei porque não tá carregando
const convertPokemons = (pokemon) => {
    return ` 
    <h2>${pokemon.name}</h2>
    <img scr="${pokemon.sprites.front_default}" alt="${pokemon.name}"><br>
    <h3>Abilities</h3>
    <ul>
    ${pokemon.abilities.map(ability => ` <li>${ability.ability.name}</li>`).join('')}
    </ul>
    `
}

//adicionando eventoa clicar e ir ate os detalhes
pokemon.addEventListener('click', async (event) => {
    const pokemonMoreCard = event.target.closest ('.pokemon');

    const moreInfo = pokemonMoreCard.querySelector(".name").innerText;
    const finalPokemonInfo = await getPokemon(moreInfo.toLowerCase());

//removendo depois de seiliconar o pokemon
 pokemon.removeAttribute(".pokemon")
 pokemon.innerHTML = convertPokemons(finalPokemonInfo)

// removendo botão loadmore
 selectMore.removeAttribute("#loadMoreButton")
 selectMore.innerHTML = "Pokemon"
});

//tentando fazer um botão que voltasse a lista de pokemons, mas não deu certo, mas vou deixar aio que importa é a intençaõ kkkk
Back.addEventListener('click', () => {
    window.history.back()
})










