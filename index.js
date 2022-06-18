const randomLyrics = ["MySQL", "Database", "Server", "Azure", "MacOS", "Windows", "Bash", "Markdown", "LaTeX", "Symphony", "student", "Duck", "Code", "Linux", "programmer", "C#", "PHP", "Python", "JavaScript", "GIT", "SVN", "C++", "C", "VUT", "FIT", "Nep", "Developer", "G4MER", "Back-End", "Front-End", "{}"]
const usedCharacters = "123456789aAáÁbBcCčČdDďĎeEéÉěĚfFgGhHiIíÍjJkKlLmMnNoOóÓpPqQrRřŘsSšŠtTťŤuUůŮúÚvVwWxXyYýÝzZžŽ #-{+}"
const titleText = "TOM"

// INIT
window.addEventListener('DOMContentLoaded', (event) => {
    initWelcome();
});

/**
 * Init welcome section 
 */
function initWelcome() {

    // Gets elements
    let welcomeSection = document.getElementById("welcome");
    let welcomeTitle = welcomeSection.querySelector(".title")
    let words;

    // Optimalization for smaller screens
    if (deviceIsMobile()) {
        words = welcomeSection.querySelectorAll(".mobile")
    } else {
        words = welcomeSection.querySelectorAll(".typewrite-text")

    }

    // Type Writes random words to background
    words.forEach(element => {
        // Gets random word
        let word = randomLyrics[Math.floor(Math.random()*randomLyrics.length)];
        
        // Shine with the nickname
        if (word === "Nep") {
            element.classList.add("shining");
        }

        let innerText = "";
        let index = 0;

        // Write word
        typeStringLetterByLetter(element, index, innerText, word, Math.floor(Math.random()*usedCharacters.length), 0);
        element.textContent = innerText.slice(0,-1)
    });

    typeStringLetterByLetter(welcomeTitle, 0, "", titleText, Math.floor(Math.random()*usedCharacters.length), 25);

}

/**
 * Types word letter by letter to element
 * @param {*} element    - container
 * @param {*} index      - index of last letter
 * @param {*} innerText  - text in element
 * @param {*} word       - typed word
 * @param {*} nextLetter - next letter index
 * @param {*} speed      - speed of typing
 */
function typeStringLetterByLetter(element, index, innerText, word, nextLetter, speed) {
    if (innerText.slice(0, -1) != word) {
        let lastLetter = innerText.slice(-1)
        
        // Gets next letter
        if (nextLetter >= usedCharacters.length) {
            nextLetter = 0;
            lastLetter = usedCharacters[nextLetter];
        } else {
            lastLetter = usedCharacters[nextLetter]
            nextLetter++;    
        }

        // Checks if last letter is equal to the letter on index in word
        if (lastLetter == word[index]) {
            index++;
            nextLetter = 0;
            innerText = innerText.slice(0, -1) + lastLetter + ',';
        } else {
            innerText = innerText.slice(0, -1) + lastLetter;
        }

        // Rewrites content
        element.textContent = innerText

        // Continue
        setTimeout(typeStringLetterByLetter, speed, element, index, innerText, word, nextLetter, speed);
    } else {
        element.textContent = innerText.slice(0,-1)
    }
}

/**
 * Checks the device
 * @returns bool
 */
function deviceIsMobile() {
    return window.innerWidth <= 800;
}