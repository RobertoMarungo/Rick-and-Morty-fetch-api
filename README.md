# Rick-and-Morty-fetch-api

This project uses the [Rick and Morty API](https://rickandmortyapi.com/) to fetch a list of characters and display them on a webpage. The webpage also has a dark mode toggle button.

## Features

-   Fetches character data from the Rick and Morty API
-   Renders a card for each character displaying their image, name, gender, origin, location, species, and status
-   Dark mode toggle button to switch between light and dark mode

## Code Explanation

The `renderCharacter` function takes a character object as a parameter, creates an HTML card element, and assigns the character's properties to each HTML element in the card. The function then appends the card to an unordered list with an ID of `character-list`.

```javascript
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
```

The `getCharacters` function fetches character data from the Rick and Morty API by making multiple requests, each for a different page of characters. The number of pages to fetch is set to 20. For each page, the function uses the `renderCharacter` function to create a card for each character and append it to the `character-list` unordered list.

```javascript
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
```

The `toggleMode` function toggles a dark mode class on the webpage's body, unordered list, and toggle button. The text of the toggle button is also changed to "Light Mode" or "Dark Mode" depending on whether the body has the dark mode class or not.

```javascript
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
```

The `init` function is the entry point of the application. It calls the `getCharacters` function to fetch and render the character data, and sets up an event listener on the toggle button to toggle dark mode when clicked.

```javascript
const init = () => {
    getCharacters();

    const darkModeToggle = document.querySelector('button');
    darkModeToggle.addEventListener('click', toggleMode);
};
```

## Getting Started

To run this project locally, follow these steps:

1. Clone this repository to your local machine.
2. Open the `index.html` file in your web browser.
3. Click the toggle button to switch between light and dark mode.

## Note

This project requires an internet connection to fetch character data from the Rick and Morty API.

## App Example

![](https://github.com/RobertoMarungo/Rick-and-Morty-fetch-api/blob/main/Rick%20and%20morty%20Giph.gif)
