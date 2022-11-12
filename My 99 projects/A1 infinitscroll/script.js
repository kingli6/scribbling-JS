
const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];

// Unsplash api
const count = 30;
const apiKey = 'A-MLsGqLbBeVWFoKRgKp-TYkT5E086VSRjmsW3PZbt0';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// https://www.udemy.com/course/javascript-web-projects-to-build-your-portfolio-resume/learn/lecture/20249858#reviews
// Check if all images were loaded
function imageLoaded() {
    imagesLoaded++;
    console.log(imagesLoaded);
    if (imagesLoaded === totalImages) {
        ready = true;
        loader.hidden = true;
        console.log('ready =', ready);
    }
}

//https://www.udemy.com/course/javascript-web-projects-to-build-your-portfolio-resume/learn/lecture/20249854#overview
//Helper Function to Set Attributes on DOM Elements Timestamp:12:00 
function setAttributes(element, attributes) {   //attributes are objects, containing both the key and the value...
    for (const key in attributes) {             //key's are href, alt, src, title
        element.setAttribute(key, attributes[key]);
    }
}
// Create Elements for Links & Photos, Add to DOM
function displayPhotos() {
    imagesLoaded = 0;
    totalImages = photosArray.length;
    console.log('total images', totalImages);
    // Run function for each object in photoArray
    photosArray.forEach((photo) =>{
        // Create <a> to link to Unsplash
        const item = document.createElement('a');
        // item.setAttribute('href', photo.links.html);
        // item.setAttribute('target', '_blank');
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank',
        });

        // Create <img> for photo
        const img = document.createElement('img');
        // img.setAttribute('src', photo.urls.regular);
        // img.setAttribute('alt', photo.alt_description);   //.alt_description
        // img.setAttribute('title', photo.likes); // .alt_description
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.likes,
        });
        // Event Listener, check when ?each? is finished loading
        img.addEventListener('load', imageLoaded);  //??????????????????do I have 'load' in html? 

        //put <img> inside <a>, then put both inside imageContainer Element
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}

// Get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
        // console.log(photosArray)
    } catch (error){

    }
}

//check to see if scrolling near bottom of page, Load MORE Photos
window.addEventListener('scroll', () => {
    // console.log('scrolled'); // to see when scrolled is triggered
    if ((window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 )&& ready){
        ready = false;
        getPhotos();
    }
});
//on Load
getPhotos();
// /steps/
/*
1. getting the api key? A. no. From https://unsplash.com/documentation#location
    NOTE! we use a template string. you need back ticks `` and not regular quotes for the link above.
2. Getting a random photo
3. We register in unsplash to get the apiKey. Which needs to be private. Others can use yours. 
    They permit 50 requests per hour. You can't make a replica of the website. 
4. You learn about how to find different objects or elements in these json pictures. You use those
    objects. example (created_at, downloads, links.download_location, links.html, user.username?)
    
        Network- open the request with pictures, Response tab.
5. Creating the function for displayPhotos()
    We loop through the photoArray, for every image,
    we create <a>, fill it with html link, target, _blank is opens a new tab when clicked.
    We create a <img> tag. fill it with the src picture url, alt, title.
6. We place the img inside the <a>, we place <a> inside imageContainer. Hence
    creating the desired effect.
*/
/*
Inifint scroll
https://www.udemy.com/course/javascript-web-projects-to-build-your-portfolio-resume/learn/lecture/20249856#reviews

7. checking scroll event listener. window.addEventListener. Scroll function gets triggered every time you scroll. 
(timestamp 3:20)window.innerHeight, window.scrollY, document.body.offsetHeight
8. setting logic  window.addEventListener('scroll', () =>{}) to trigger getPhotos(); when you've scrolled to the bottom.
    ISSUE. This makes it load images too many times.
9. we are doing function imageLoaded()? I'm should sleep. 
*/