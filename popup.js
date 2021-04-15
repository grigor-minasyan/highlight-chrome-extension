// Initialize button with user's preferred color
// let changeColor = document.getElementById("changeColor");

// chrome.storage.sync.get("color", ({ color }) => {
//   changeColor.style.backgroundColor = color;
// });

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: setPageBackgroundColor,
    });


  });
  
// let selectorFunc = document.querySelector('body').addEventListener('select',  logSelection);

  // The body of this function will be executed as a content script inside the
  // current page



  function setPageBackgroundColor() {


    // console.log("test");
    // chrome.storage.sync.get("color", ({ color }) => {
    //   document.body.style.backgroundColor = color;
    // });


    

    // function logSelection(event) {
    //     // const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    //     // console.log(selection);
    //     console.log('testaaa');
    // }

   
    // for(let i = 0; i < htmlStr; i++){
    //     let HTMLelement;
    //     if([i] = '<') {
    //         [i + 1] = HTMLelement
    //     }
    // }


    document.querySelector('body').addEventListener("mouseup", event => {
        // const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
        // let testEl = document.querySelector(event.composedPath());
        if (window.getSelection().toString().length > 0) {

            let selectionText = window.getSelection().toString();
            let htmlText = event.target.innerHTML;



            console.log(htmlText);
            console.log(selectionText);

            let regex = new RegExp(selectionText, 'gi');
            let selectionIndexes = new Array();
            while(regex.exec(htmlText)) {
                selectionIndexes.push(regex.lastIndex-selectionText.length);
            }

            for (let i = selectionIndexes.length - 1; i >= 0; i--) {
                // add </span> to the end of this index
                htmlText = htmlText.substr(0, selectionIndexes[i]+selectionText.length) + "</span>" + htmlText.substr(selectionIndexes[i] + selectionText.length);
                htmlText = htmlText.substr(0, selectionIndexes[i]) + '<span style="background-color: yellow;">' + htmlText.substr(selectionIndexes[i]);
            }


            event.target.innerHTML = htmlText;
            console.log(selectionIndexes);

            // let child = document.createElement('span');
            // child.style.backgroundColor = 'yellow';
            // child.innerText = "lol";
            // event.target.appendChild(child);

            // event.target.style.backgroundColor = 'yellow';
        }
        // console.log(event.target);
        // console.log(window.getSelection());
        // console.log(window.getSelection().toString());
    });

  }

