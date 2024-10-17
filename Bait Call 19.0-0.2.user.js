// ==UserScript==
// @name         Bait Call 19.0
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       Khubaib
// @match       https://www.humanatic.com/x19/review.cfm
// @grant        none
// ==/UserScript==
(function() {
    'use strict';
    const interval = setInterval(function() {
    if(document.title=='Review'){
        let target = document.getElementById('form1')[0].value;
        let baitId= Array.from(String(target), Number);
            if(baitId[0]=6){
                document.getElementsByClassName('title')[0].innerHTML= "Warning! 44443.";
                document.getElementsByClassName('title')[0].style.color="#ffeb38";
                document.getElementsByClassName('title')[0].style.fontSize = "30px";
                document.getElementsByClassName('title')[0].style.fontFamily = "Comic Sans MS";
                clearInterval(interval);

            }
            else{
                let con = 0;
                let target1 = document.getElementById('form1')[0].value;
                const baitIds = [ "Category List"




];
                for(const check of baitIds){
                    if(check==target1){
                        con = 1;
                        document.getElementsByClassName('title')[0].innerHTML= "Warning!  Bait Call";
                        clearInterval(interval);
                    }

                }
                if(con!='1'){
                    document.getElementsByClassName('title')[0].innerHTML =target1;
                    clearInterval(interval);
                }

            }
    }

    }, 3000);

})();
