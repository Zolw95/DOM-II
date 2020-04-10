// Your code goes here 


///////////////////////////////////////////////////////////
//                      MOUSEOVER                        //
///////////////////////////////////////////////////////////

var intro = document.querySelectorAll('.intro')[0];
var busImg = intro.getElementsByTagName('img')[0];

busImg.addEventListener('mouseover', () => {
    busImg.style.transform = 'scale(0.9)'
    busImg.style.transition = '0.3s'
})


busImg.addEventListener('mouseleave', () => {
    busImg.style.transform = 'scale(1.0)'
    busImg.style.transition = '0.3s'
})


///////////////////////////////////////////////////////////
//                        KEYDOWN                        //
///////////////////////////////////////////////////////////

var text = document.getElementById('keyDown');
window.addEventListener("keydown", (event) => {
    let str = " KeyboardEvent: Key='" + event.key  + "' | code='" + event.code + "'";
    text.textContent = str;
    document.getElementById('output').appendChild(text);
}, true)


var key = document.getElementById('keyDown');
key.addEventListener('keydown', (event) => {
    if (event.keyCode === KeyboardEvent) {
        key.textContent += KeyboardEvent;
    }
    
    event.target.isComposing;
    key.textContent += key;
    console.log(key);
    
})



///////////////////////////////////////////////////////////
//                          WHEEL                        //
///////////////////////////////////////////////////////////

var boatDiv = document.getElementsByClassName('inverse-content')[0];
var boatImg = boatDiv.getElementsByTagName('img')[0];

// Don't have scroll - either target .document or element depending on what the wheel event targets
// Tested with scroll on .document and event and event works 
document.addEventListener('wheel', () => {
    boatImg.style.transform = 'scale(1.2)'
})




///////////////////////////////////////////////////////////
//                      DRAG AND DROP                    //
///////////////////////////////////////////////////////////


var dragged;
// events fired on the draggable target
document.addEventListener('drag', (event) => {
    
}, false);

document.addEventListener('dragstart', (event) => {
    event.stopPropagation()
    // store a ref. on the drag element
    dragged = event.target;
    // make it half transparent
    event.target.style.opacity = '0.5';
}, false);

document.addEventListener('dragend', (event) => {
    // reset the transparency
    event.target.style.opacity = "";
}, false);

// Events fired on the drop targets
document.addEventListener('dragover', (event) => {
    // prevent default to allow drop
    event.preventDefault();
}, false);

document.addEventListener('dragenter', (event) => {
    // Highlight potential drop target when the draggable element enters it
    if (event.target.className == 'dropzone') {
        event.target.style.background = 'lightblue';
    }
}, false)

document.addEventListener('dragleave', (event) => {
    // reset background of potential drop target when the draggable element leaves it
    if (event.target.className == 'dropzone') {
        event.target.style.background = '';
    }
}, false)

document.addEventListener('drop', (event) => {
    // prevent default action (opens a link for some elements)
    event.preventDefault();
    // move dragged element to the selected drop target

    if (event.target.className == 'dropzone') {
        event.target.style.background = '';
        dragged.parentNode.removeChild( dragged );
        event.target.appendChild( dragged );
    }
}, false);





///////////////////////////////////////////////////////////
//                          LOAD                         //
///////////////////////////////////////////////////////////


var allImages = document.getElementsByTagName('img');

for (var i = 0; i < allImages.length; i++) {
    allImages[i].addEventListener('load', (event) => {
        event.target.style.border = '1px solid red'
    })    
}



///////////////////////////////////////////////////////////
//                          FOCUS                        //
///////////////////////////////////////////////////////////

var nav = document.getElementsByClassName('nav')[0]
var focusNav = nav.getElementsByTagName('a');


for ( var i = 0; i < focusNav.length; i++ ) {
    /////// WITHOUT FOCUS OFF ///////
    //if (focusNav[i].addEventListener('focus', (event) => { event.target.///style.textDecoration = 'underline'}));
    focusNav[i].addEventListener('focus', (event) => {
        event.target.style.textDecoration = 'underline'
        event.target.style.color = 'Green'
        event.preventDefault()
        event.stopPropagation()
    })
    focusNav[i].addEventListener('focusout', (event) => {
        event.target.style.textDecoration = 'none'
        event.target.style.color = ''
        event.stopPropagation()
    }, false)
}



for ( var i = 0; i < focusNav.length; i++) {
    focusNav[i].addEventListener('focus', (event) => {
        event.target.style.textDecoration = 'underline'
        event.target.style.color = 'Green'
    })
}


///////////////////////////////////////////////////////////
//                         RESIZE                        //
///////////////////////////////////////////////////////////

var mapCont = document.getElementsByClassName('img-content')[0].childNodes[1];
//var mapImg = mapCont.getElementByTagName('img')[0];
window.addEventListener('resize', (event) => {
    mapCont.src = 'https://www.getmapping.com/sites/default/files/quick_media/getmapping_PlanningMaps_Editable.jpg'
});



///////////////////////////////////////////////////////////
//                      SCROLL                           //
///////////////////////////////////////////////////////////

document.addEventListener('scroll', (event) => {
    var mainContent = document.getElementById('container-home');
    var top = document.documentElement.scrollTop;
    var height = document.body.clientHeight;
    var viewHeight = document.documentElement.clientHeight;
    if (top < 100) {
        document.getElementById('scroll-container').textContent = 'You are on top';
    } else if (height - top - viewHeight < 100) {
        document.getElementById('scroll-container').textContent = 'You are on the botoom';
    } else {
        document.getElementById('scroll-container').textContent = 'You are in the middle';
    }
})




///////////////////////////////////////////////////////////
//                       CLICK                           //
///////////////////////////////////////////////////////////

var body = document.getElementsByTagName('body')[0];
body.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'yellow';
    event.stopPropagation()
});

var welcomeText = document.querySelector('.logo-heading');
welcomeText.addEventListener('click', (event) => {
    event.target.style.fontFamily = 'Arial';
    event.target.style.fontSize = '10rem';
    event.target.style.textTransform = 'uppercase';
})


///////////////////////////////////////////////////////////
//                      DBLCLICK                         //
///////////////////////////////////////////////////////////

var firstParagraph = intro.getElementsByTagName('p')[0];

firstParagraph.addEventListener('dblclick', (event) => {
    event.target.style.backgroundColor = 'Green';
    event.target.style.color = 'white';
});

