/*
he toggleMode function is a simple function that toggles 
the "dark-mode" class on the body, button, and ul elements 
of the HTML page. It also changes the text of the button to 
"Light Mode" or "Dark Mode" depending on the current mode.
*/
const toggleMode = () => {
    const body = document.body;
    const ul = document.querySelector('ul');
    const button = document.querySelector('button');

    body.classList.toggle('dark-mode');
    button.classList.toggle('dark-mode');
    ul.classList.toggle('dark-mode');
    button.innerText = body.classList.contains('dark-mode')
        ? 'Light Mode'
        : 'Dark Mode';
};

/*
The renderCharacter function takes a character object as a parameter
 and creates an HTML card to display the character's information. 
 The character's properties are assigned to different HTML elements 
 of the card, such as the character's name, gender, origin, location, 
 species, and status.
*/
const renderCharacter = character => {
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

    document.getElementById('#character-list').appendChild(card);
};

/*
The getCharacters function fetches data from the Rick and Morty API and 
calls the renderCharacter function to display each character object in a card. 
It does this by setting the numOfPages variable to 20, and then looping through
 all pages of the API using a while loop. For each page, it fetches the data 
 using the fetch method, parses it into JSON using the json() method, and then
  iterates over each character object in the page using the forEach method, 
  calling renderCharacter on each object.
*/
const getCharacters = () => {
    const numOfPages = 20;
    let page = 0;

    while (page <= numOfPages) {
        page++;
        fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
            .then(res => res.json())
            .then(data =>
                data.results.forEach(character => renderCharacter(character))
            );
    }
};

/*
The init function initializes the app by calling getCharacters 
to load the character data, and then setting up an event listener 
on the button to toggle the dark mode when clicked.
*/
const init = () => {
    getCharacters();

    const darkModeToggle = document.querySelector('button');
    darkModeToggle.addEventListener('click', toggleMode);
};

/*
the DOMContentLoaded event listener calls the init 
function when the page is fully loaded, which starts 
the app.
*/
document.addEventListener('DOMContentLoaded', init);
