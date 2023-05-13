const toggleMode = () => {};

const renderCharacter = () => {
    let card = document.createElement('li');
    card.className = 'card';
    card.innerHTML = `
    <img src="${character.image}">
    <div class="content">
      <h4>${character.name}</h4>
      <p><em>Gender:</em> ${character.gender}</P>
      <p>Origin: ${character.origin.name}</P>
      <p>Location: ${character.location.name}</P>
      <p>${character.species} - ${character.status}</P>
    </div>`;
};

const getCharacters = () => {
    const numOfPages = 20;
    let page = 0;

    while (page <= numOfPages) {
        page++;
        fetch(`https://rickandmortyapi.com/api/character/?page=${page}`).then(
            res => res.json()
        );
    }
};

const init = () => {
    getCharacters();
};

document.addEventListener('DOMContentLoaded', init);
