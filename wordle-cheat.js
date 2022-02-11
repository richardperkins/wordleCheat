/**
 * @file wordle-cheat.js
 * Fetch, input, submit wordle solution.
 *
 * @author Richard Perkins
 */

var reg  = /\"solution\":\"([^\"]+)\"/;

/**
 * @function WordleFetch
 * @returns {string} Wordle solution
 */
function wordleFetch() {
    return reg.exec(localStorage["nyt-wordle-state"])[1];
}

/**
 * @function wordleInput
 * @returns {null}
 */
function wordleInput() {
    var solution = wordleFetch();   
    if (!solution)
    {
        console.log("Error finding solution");
        return;
    }
    
    for(var c in solution)
    {
        window.dispatchEvent(new KeyboardEvent('keydown', {'key': solution[c]}));
    }
    window.dispatchEvent(new KeyboardEvent('keydown', {'key':'Enter'}));
}

wordleInput();
