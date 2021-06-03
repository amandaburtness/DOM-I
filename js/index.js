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
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Navigation Bar
const nav = document.getElementsByTagName('nav')
const navItem = document.querySelectorAll('a')

navItem[0].textContent = siteContent.nav["nav-item-1"]
navItem[1].textContent = siteContent.nav["nav-item-2"]
navItem[2].textContent = siteContent.nav["nav-item-3"]
navItem[3].textContent = siteContent.nav["nav-item-4"]
navItem[4].textContent = siteContent.nav["nav-item-5"]
navItem[5].textContent = siteContent.nav["nav-item-6"]

// h1 Header 

const header = document.querySelector('h1')

header.innerHTML = `DOM <br> IS <br> AWESOME`

// Image of Code Snippet 

const codeImg = document.querySelector('#cta-img')

codeImg.src = siteContent.cta["img-src"]

// Get Started Button

const getStartedBtn = document.querySelector('button')

getStartedBtn.textContent = siteContent.cta.button

// Second Image 

const bannerImg = document.querySelector('.middle-img')

bannerImg.src = siteContent["main-content"]["middle-img-src"]

// Text Content 

  // Titles 
const titles = document.querySelectorAll('h4')

titles[0].textContent = siteContent["main-content"]["features-h4"]
titles[1].textContent = siteContent["main-content"]["about-h4"]
titles[2].textContent = siteContent["main-content"]["services-h4"]
titles[3].textContent = siteContent["main-content"]["product-h4"]
titles[4].textContent = siteContent["main-content"]["vision-h4"]
titles[5].textContent = siteContent.contact["contact-h4"]

  // Text

const text = document.querySelectorAll('p')

text[0].textContent = siteContent["main-content"]["features-content"]
text[1].textContent = siteContent["main-content"]["about-content"]
text[2].textContent = siteContent["main-content"]["services-content"]
text[3].textContent = siteContent["main-content"]["product-content"]
text[4].textContent = siteContent["main-content"]["vision-content"]
text[5].textContent = siteContent.contact.address
text[6].textContent = siteContent.contact.phone
text[7].textContent = siteContent.contact.email
text[8].textContent = siteContent.footer.copyright
