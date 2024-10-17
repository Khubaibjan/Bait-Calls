// ==UserScript==
// @name         Main Script
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Call a function from another repository
// @author       Your Name
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // URL of the JavaScript file in Repository A
    const scriptUrl = 'https://raw.githubusercontent.com/Khubaibjan/Bait-Call-Funtion/main/IDs
';

    fetch(scriptUrl)
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.text();
        })
        .then(code => {
            eval(code); // Evaluate the fetched script
            greet('World'); // Call the function from Repository A
        })
        .catch(error => console.error('Error loading script:', error));
})();
