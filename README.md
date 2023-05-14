# Rick-and-Morty-fetch-api

This project uses the [Rick and Morty API](https://rickandmortyapi.com/) to fetch a list of characters and display them on a webpage. The webpage also has a dark mode toggle button.

## Features

-   Fetches character data from the Rick and Morty API
-   Renders a card for each character displaying their image, name, gender, origin, location, species, and status
-   Dark mode toggle button to switch between light and dark mode

## Code Explanation

The `renderCharacter` function takes a character object as a parameter, creates an HTML card element, and assigns the character's properties to each HTML element in the card. The function then appends the card to an unordered list with an ID of `character-list`.
