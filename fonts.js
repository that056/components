 export const fonts = {
    'playwrite': '"Playwrite DE Grund", cursive',
    'poppins': 'Poppins, sans-serif',
    'playfair': '"Playfair Display", serif',
    'bebas': '"Bebas Neue", sans-serif',
    'rubik': '"Rubik Mono One", monospace',
    'PT': '"PT Mono", monospace',
    'Roboto':'"Roboto", sans-serif'

};

export const host = document;
export const head = host.querySelector('head');

// Function to create and append font link to the head
const createFontLink = (href) => {
    const fontlink = document.createElement('link');
    fontlink.setAttribute('rel', 'stylesheet');
    fontlink.setAttribute('href', href);
    head.appendChild(fontlink);
};

// Adding Google Fonts for different font families
createFontLink("https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap");
createFontLink("https://fonts.googleapis.com/css2?family=PT+Mono&display=swap");
createFontLink("https://fonts.googleapis.com/css2?family=Rubik+Mono+One&display=swap");
createFontLink("https://fonts.googleapis.com/css2?family=Playwrite+DE+Grund:wght@100..400&display=swap");
createFontLink("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap");
createFontLink("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap");
createFontLink("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");

// Adding style for global reset
export const style = document.createElement('style');
style.textContent = `
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
`;
head.appendChild(style);

// Export the necessary elements

