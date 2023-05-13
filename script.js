const toggleMode = () => {};

const renderCharacter = () => {};

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
