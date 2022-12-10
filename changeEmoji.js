var targetAlt = '';
var emojiElement = '';

document.body.addEventListener('click', function(e) {
    targetAlt = e.target.alt;

    if (targetAlt) {
        e.target.alt = targetAlt.replace( e.target.alt, "😁");
        console.log(targetAlt);
        console.log(e.target.alt);

        var divs = document.getElementsByTagName("div");
        for (var i = 0; i < divs.length; i++) {
            if (divs[i].ariaLabel === 'Send a '+  targetAlt ) {
                divs[i].ariaLabel = 'Send a 😁️ ';
                divs[i].removeAttribute('src');
            }
        }

        var images = document.getElementsByTagName('img');
        for (var i = 0; i < images.length; i++) {
            if (images[i].alt === targetAlt) {
                images[i].alt = "😁";
                images[i].removeAttribute('src');
            }
        }
    }
});


// Select the node that will be observed for mutations
var targetNode = document.body;

// Options for the observer (which mutations to observe)
var config = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = (mutationList, observer) => {
    for (const mutation of mutationList) {
        var divs = document.getElementsByTagName("div");
        for(var i = 0; i < divs.length; i++){
            if(divs[i].ariaLabel === 'Send a '+  targetAlt ){
                divs[i].ariaLabel = 'Send a 😁️ ';
                divs[i].removeAttribute('src');
            }
        }

        var images = document.getElementsByTagName('img');
        for(var i = 0; i < images.length; i++){
            if (images[i].alt === targetAlt) {
                images[i].alt = "😁";
                images[i].removeAttribute('src');
            }
        }
    }
};

// Create an observer instance linked to the callback function
var observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);