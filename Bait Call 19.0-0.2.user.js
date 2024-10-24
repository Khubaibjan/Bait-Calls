// ==UserScript==
// @name         Bait Call IDN
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  try to take over the world!
// @author       Khubaib
// @match       https://www.humanatic.com/x19/review.cfm
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.log("Script loaded successfully."); // Log message indicating the script has loaded

    const checkTarget = () => {
        if (document.title === 'Review') {
            let target = document.getElementById('form1')[0].value;
            let baitId = Array.from(String(target), Number);

            // Check if the last two digits are between 10 and 20
            let lastTwoDigits = baitId.slice(-2).join(''); // Get the last two digits as a number
            if (lastTwoDigits < 10 || lastTwoDigits > 20) {
                document.getElementsByClassName('title')[0].innerHTML = "Warning! Listen to this call carefully";
                document.getElementsByClassName('title')[0].style.color = "#ffeb38";
                document.getElementsByClassName('title')[0].style.fontSize = "30px";
                document.getElementsByClassName('title')[0].style.fontFamily = "Comic Sans MS";
            } else {
                let con = 0;
                const baitIds = [
                    // Old ids
                    6000350258627
                ];
                
                for (const check of baitIds) {
                    if (check == target) {
                        con = 1;
                        document.getElementsByClassName('title')[0].innerHTML = "Warning! Listen to this call carefully";
                        // Apply same CSS styles when check matches target
                        document.getElementsByClassName('title')[0].style.color = "#ffeb38";
                        document.getElementsByClassName('title')[0].style.fontSize = "30px";
                        document.getElementsByClassName('title')[0].style.fontFamily = "Comic Sans MS";
                        break; // Break out of the loop once a match is found
                    }
                }

                if (con !== '1') {
                    document.getElementsByClassName('title')[0].innerHTML = target;
                }
            }
        }
    };

    // Create a MutationObserver to monitor changes in the form
    const observer = new MutationObserver(() => {
        checkTarget(); // Call the function when changes are detected
    });

    // Observe changes to the entire body
    observer.observe(document.body, { childList: true, subtree: true });

    // Call the function initially to check the target on script load
    checkTarget();

    console.log("Script execution completed."); // Log message indicating the script has finished executing
})();
