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
    // toggle the slide in menu css class on to slide-in
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



// SKILLS SECTION

const skillshamburger = document.querySelector('.menuburgerskills');

const skillswholebutton = document.querySelector('.skills_hamburgermobile');

const skillsbuttontext = document.querySelector('.skills_closetext');

const slide_menu_skills = document.querySelector('.mobile-nav-skills');

// apply the click function to the wholebutton
skillswholebutton.addEventListener('click', function () {
    // test print
    console.log("You've pressed the skills burger button");
    // toggle the is-gone class on the burger
        // to make the burger dissapear
    skillshamburger.classList.toggle('is-gone');
    // toggle the is-active class on the whole button to 
        // show the X and the slide in menu
    skillswholebutton.classList.toggle('is-active');
    // toggle the X to is-shown when the button is active
    skillsbuttontext.classList.toggle('is-shown');
    // toggle the slide in menu css class to slide-in
    slide_menu_skills.classList.toggle('slide-in');
});

// PORTFOLIO SECTION

const portfoliohamburger = document.querySelector('.menuburgerportfolio');

const portfoliowholebutton = document.querySelector('.portfolio_hamburgermobile');

const portfoliobuttontext = document.querySelector('.portfolio_closetext');

const slide_menu_portfolio = document.querySelector('.mobile-nav-portfolio');

// apply the click function to the wholebutton
portfoliowholebutton.addEventListener('click', function () {
    // test print
    console.log("You've pressed the portfolio burger button");
    // toggle the is-gone class on the burger
        // to make the burger dissapear
    portfoliohamburger.classList.toggle('is-gone');
    // toggle the is-active class on the whole button to 
        // show the X and the slide in menu
    portfoliowholebutton.classList.toggle('is-active');
    // toggle the X to is-shown when the button is active
    portfoliobuttontext.classList.toggle('is-shown');
    // toggle the slide in menu css class to slide-in
    slide_menu_portfolio.classList.toggle('slide-in');
});

// EXPERIENCE SECTION

const experiencehamburger = document.querySelector('.menuburgerexperience');

const experiencewholebutton = document.querySelector('.experience_hamburgermobile');

const experiencebuttontext = document.querySelector('.experience_closetext');

const slide_menu_experience = document.querySelector('.mobile-nav-experience');

experiencewholebutton.addEventListener('click', function () {
    // test print
    console.log("You've pressed the Experience burger button");
    // toggle the is-gone class on the burger
        // to make the burger dissapear
    experiencehamburger.classList.toggle('is-gone');
    // toggle the is-active class on the whole button to 
        // show the X and the slide in menu
    experiencewholebutton.classList.toggle('is-active');
    // toggle the X to is-shown when the button is active
    experiencebuttontext.classList.toggle('is-shown');
    // toggle the slide in menu css class to slide-in
    slide_menu_experience.classList.toggle('slide-in');
});

// BLOG SECTION

const bloghamburger = document.querySelector('.menuburgerblog');

const blogwholebutton = document.querySelector('.blog_hamburgermobile');

const blogbuttontext = document.querySelector('.blog_closetext');

const slide_menu_blog = document.querySelector('.mobile-nav-blog');

blogwholebutton.addEventListener('click', function () {
    // test print
    console.log("You've pressed the Blog burger button");
    // toggle the is-gone class on the burger
        // to make the burger dissapear
    bloghamburger.classList.toggle('is-gone');
    // toggle the is-active class on the whole button to 
        // show the X and the slide in menu
    blogwholebutton.classList.toggle('is-active');
    // toggle the X to is-shown when the button is active
    blogbuttontext.classList.toggle('is-shown');
    // toggle the slide in menu css class to slide-in
    slide_menu_blog.classList.toggle('slide-in');
});

// CONTACT SECTION

const contacthamburger = document.querySelector('.menuburgercontact');

const contactwholebutton = document.querySelector('.contact_hamburgermobile');

const contactbuttontext = document.querySelector('.contact_closetext');

const slide_menu_contact = document.querySelector('.mobile-nav-contact');

contactwholebutton.addEventListener('click', function () {
    // test print
    console.log("You've pressed the Contact burger button");
    // toggle the is-gone class on the burger
        // to make the burger dissapear
    contacthamburger.classList.toggle('is-gone');
    // toggle the is-active class on the whole button to 
        // show the X and the slide in menu
    contactwholebutton.classList.toggle('is-active');
    // toggle the X to is-shown when the button is active
    contactbuttontext.classList.toggle('is-shown');
    // toggle the slide in menu css class to slide-in
    slide_menu_contact.classList.toggle('slide-in');
});


