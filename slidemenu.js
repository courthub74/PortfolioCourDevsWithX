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

const hamburger = document.querySelector('.menuburger');

const wholebutton = document.querySelector('.hamburgermobile');

const buttontext = document.querySelector('.closetext');

const slide_menu_home = document.querySelector('.mobile-nav-home');

// apply the click function to the wholebutton
wholebutton.addEventListener('click', function () {
    // test print
    console.log("You've pressed the burger button");
    // toggle the is-gone class on the burger
    hamburger.classList.toggle('is-gone');
    // toggle the is-active class on the whole button to 
        // show the X and the slide in menu
    wholebutton.classList.toggle('is-active');
    // toggle the X to is-shown when the button is active
    buttontext.classList.toggle('is-shown');
    // toggle the slide in menu css class to slide-in
    slide_menu_home.classList.toggle('slide-in');
});


// ABOUT SECTION

const abouthamburger = document.querySelector('.menuburgerabout');

const aboutwholebutton = document.querySelector('.about_hamburgermobile');

const aboutbuttontext = document.querySelector('.about_closetext');

const slide_menu_about = document.querySelector('.mobile-nav-about');


// apply the click function to the wholebutton
aboutwholebutton.addEventListener('click', function () {
    // test print
    console.log("You've pressed the burger button");
    // toggle the is-gone class on the burger
        // to make the burger dissapear
    abouthamburger.classList.toggle('is-gone');
    // toggle the is-active class on the whole button to 
        // show the X and the slide in menu
    aboutwholebutton.classList.toggle('is-active');
    // toggle the X to is-shown when the button is active
    aboutbuttontext.classList.toggle('is-shown');
    // toggle the slide in menu css class to slide-in
    slide_menu_about.classList.toggle('slide-in');
});



