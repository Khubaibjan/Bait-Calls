// ==UserScript==
// @name         Bait Call IDN
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  try to take over the world!
// @author       Khubaib
// @match       https://www.humanatic.com/x19/review.cfm
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.log("Script loaded successfully."); // Log message indicating the script has loaded

    const interval = setInterval(function() {
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
                clearInterval(interval);
            } else {
                let con = 0;
                let target1 = document.getElementById('form1')[0].value;
                const baitIds = [
                    // Old ids
                    6000350258627, 6000350918207, 6000351009355, 6000350188337, 6000350481983,
                ];
                
                for (const check of baitIds) {
                    console.log(`Checking bait ID: ${check}`); // Log the bait ID being checked
                    if (check == target1) {
                        con = 1;
                        console.log(`Matched bait ID: ${check} with target: ${target1}`); // Log the match
                        document.getElementsByClassName('title')[0].innerHTML = "Warning! Listen to this call carefully";
                        // Apply same CSS styles when check matches target
                        document.getElementsByClassName('title')[0].style.color = "#ffeb38";
                        document.getElementsByClassName('title')[0].style.fontSize = "30px";
                        document.getElementsByClassName('title')[0].style.fontFamily = "Comic Sans MS";
                        clearInterval(interval);
                    }
                }
                if (con !== '1') {
                    document.getElementsByClassName('title')[0].innerHTML = target1;
                    clearInterval(interval);
                }
            }
        }
    }, 1000);

    console.log("Script execution completed."); // Log message indicating the script has finished executing
})();
