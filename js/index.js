const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//call to action

const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])



// STEP ONE - Need to grab the element exactly and assign it to a variable.

const ctaHeader = document.querySelector('.cta-text h1');
ctaHeader.textContent = siteContent['cta']['h1'];

const ctaButton = document.querySelector('.cta-text button')
ctaButton.textContent = siteContent['cta']['h1'];
ctaButton.style.borderRadius = '.5rem'
ctaButton.style.borderWidth = '.15rem'


//Experimentation with an event listener.
ctaButton.addEventListener('click', buttonClick);

//when you click on the call to action button, 
function buttonClick() {
  if (window.confirm('You clicked the button! You deserve a reward. ')) 
  {
  window.location.href='https://www.youtube.com/watch?v=dQw4w9WgXcQ';
  };}

//nav items


const navItems = document.querySelectorAll('nav a');
navItems.forEach((element, i) => {
  element.style.color = 'green'
  element.textContent = siteContent['nav'][`nav-item-${i++}`];
})


//APPENDING/PREPENDING Items

const navBar = document.querySelectorAll('nav a')

const process = document.createElement('a')
process.textContent = 'Process'
navBar[2].append(process)


const studies = document.createElement('a')
studies.textContent = 'Studies'
navBar[5].prepend(studies)



//main content
const mainContent = document.getElementById('middle-img');
mainContent.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let topHeader = document.querySelectorAll('.top-content h4')
topHeader[0].textContent = siteContent['main-content']['features-h4'];
topHeader[1].textContent = siteContent['main-content']['about-h4'];

let topText = document.querySelectorAll('.top-content p')
topText[0].textContent = siteContent['main-content']['features-content'];
topText[1].textContent = siteContent['main-content']['about-content'];

//bottom content

let bottomHeader = document.querySelectorAll('.bottom-content h4');
bottomHeader[0].textContent = siteContent['main-content']['services-h4'];
bottomHeader[1].textContent = siteContent['main-content']['product-h4'];
bottomHeader[2].textContent = siteContent['main-content']['vision-h4'];

let bottomText = document.querySelectorAll('.bottom-content p')
bottomText[0].textContent = siteContent['main-content']['services-content'];
bottomText[1].textContent = siteContent['main-content']['services-content'];
bottomText[2].textContent = siteContent['main-content']['services-content'];

//contact section

let contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = siteContent['contact']['contact-h4'];

let contactElements = document.querySelectorAll('.contact p')
contactElements[0].textContent = siteContent['contact']['address'];
contactElements[1].textContent = siteContent['contact']['phone'];
contactElements[2].textContent = siteContent['contact']['email'];

//footer
let footer = document.querySelector('footer p');
footer.textContent = siteContent['footer']['copyright'];
// footer.style.color = 'green';
//THIS WORKED.