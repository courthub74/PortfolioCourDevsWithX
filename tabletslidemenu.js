// MY MENU STYLE PSUEDO-CODE

// query the burger button to set it to dissapearing class

// query the button space to change the innerHTML

// store that query in a variable

// set a class in css to make the burger img dissapear

// set a class to be toggled on for the button innerHTML

// set an eventlistener to the wholebutton and write a click function for the query

// toggle the class of the burger img upon the onclick

// change the innerHTML of the button space upon the onclick

// toggle the innerHTML off 

// set the burger position to RELATIVE

// set the close text position to ABSOLUTE

// FOR SLIDE MENU

// query the slide in menu

// toggle the css class to slide in


// HOME SECTION

const tabburger = document.querySelector('.tabletburger');

const wholebuttontablet = document.querySelector('.hamburgertablet');

const tabletx = document.querySelector('.tabletclose');

const slide_menu_tablet = document.querySelector('.tablet-nav-home');

// apply the click function to the wholebutton
wholebuttontablet.addEventListener('click', function () {
    // test print
    console.log("You've pressed the burger button");
});