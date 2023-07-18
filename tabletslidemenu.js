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
    // toggle the is-gone class on the burger
    tabburger.classList.toggle('is-gone');
    // toggle the is-active class on the whole button to 
        // show the X and the slide in menu
    wholebuttontablet.classList.toggle('is-active');
    // toggle the X to is-shown when the button is active
    tabletx.classList.toggle('is-shown');
    // toggle the slide in menu css class on to slide-in
    slide_menu_tablet.classList.toggle('slide-in');
});



////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////

// PORTFOLIO SLIDE INS

// APP 1

// query the app button
const app1 = document.querySelector('.app1');

// query the slide in description
const app1description = document.querySelector('.app-1-description');

// query the close button
const closeapp1 = document.querySelector('.close_description');

// apply the Event Listener to the app1 button
app1.addEventListener('click', function () {
    // test print
    console.log("You've pressed the app1 button");
    // toggle the is-active class on the slide in menu to on
        // so it slides in
    app1description.classList.toggle('slide-in');
});

// apply an Event Listener to the close button
    // to toggle the app1description class to off
closeapp1.addEventListener('click', function () {
    // test print
    console.log("You've pressed the app1 close button");
    // toggle the is-active class on the slide in menu to off
        // so it slides out
    app1description.classList.toggle('slide-in');
});



// APP 2

// query the app button
const app2 = document.querySelector('.app2');

// query the slide in description
const app2description = document.querySelector('.app-2-description');

// query the close button
const closeapp2 = document.querySelector('.close_description_two');

// apply the Event Listener to the app2 button
app2.addEventListener('click', function () {
    // test print
    console.log("You've pressed the app2 button");
    // toggle the is-active class on the slide in menu to on
        // so it slides in
    app2description.classList.toggle('slide-in');
});

// apply an Event Listener to the close button
    // to toggle the app1description class to off
closeapp2.addEventListener('click', function () {
    // test print
    console.log("You've pressed the app2 close button");
    // toggle the is-active class on the slide in menu to off
        // so it slides out
    app2description.classList.toggle('slide-in');
});


// APP 3

// query the app button
const app3 = document.querySelector('.app3');

// query the slide in description
const app3description = document.querySelector('.app-3-description');

// query the close button
const closeapp3 = document.querySelector('.close_description_three');

// apply the Event Listener to the app3 button
app3.addEventListener('click', function () {
    // test print
    console.log("You've pressed the app3 button");
    // toggle the is-active class on the slide in menu to on
        // so it slides in
    app3description.classList.toggle('slide-in');
});

// apply an Event Listener to the close button
    // to toggle the app1description class to off
closeapp3.addEventListener('click', function () {
    // test print
    console.log("You've pressed the app3 close button");
    // toggle the is-active class on the slide in menu to off
        // so it slides out
    app3description.classList.toggle('slide-in');
});


////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////

// BLOG SLIDE INS

// BLOG ONE

// query the blog 1 button
const blog1button = document.querySelector('.blogcontent');

// query the slide in menu
const blog1slidein = document.querySelector('.blogone-slide-in');

// query the close button
const closeblog1 = document.querySelector('.closeblog1');

// apply the Event Listener to the blog button
blog1button.addEventListener('click', function () {
    // test print
    console.log("You've pressed the blog1 button");
    // toggle the is-active class on the slide in menu to on
        // so it slides in
    blog1slidein.classList.toggle('slide-in');
});

// apply the Event Listener to the close button
closeblog1.addEventListener('click', function () {
    // test print
    console.log("You've pressed the blog1 close button");
    // toggle the is-active class on the slide in menu to off
        // so it slides out
    blog1slidein.classList.toggle('slide-in');
});