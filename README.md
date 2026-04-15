# Monster Scripts Instructions

Each monster has its own JavaScript file in the `js/` directory, named `script[MONSTER].js` (e.g., `scriptANGEL.js`, `scriptDRAGON.js`).

## Customizing Images

To use a custom image for a monster:

1. Place the image in the `images/[MONSTER]/[MONSTER].png` directory (e.g., `images/ANGEL/ANGEL.png` for the ANGEL monster).
2. If an image already exists, you can use it or replace it.
3. If you want multiple variants, create new names (e.g., `Griffin2.png`).

If no custom image is provided, the script will fall back to a default image.

## Script Variables

Each script defines the following variables that can be customized:

- `title[MONSTER]`: The title text for the monster card. (max 20 characters)
- `img[MONSTER]Url`: The URL to the monster's image.
- `text[MONSTER]`: The descriptive text for the monster. (max 72 characters)
- `cardColor[MONSTER]`: The background color for the monster card.

If all variables are set, the script will update the corresponding DOM elements. Otherwise, it uses default values.
