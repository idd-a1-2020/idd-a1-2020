// let carousel = document.querySelector('#carousel')
// let carouselEnd = document.querySelector('#lastimage')

// function autoScroll() {
//     carouselEnd.scrollIntoView({ 
//         behavior: 'smooth' 
//     });
// }
// window.onload = autoScroll();

let aboutButton = document.querySelector('#aboutBtn')
let placesButton = document.querySelector('#placesBtn')
let foodButton = document.querySelector('#foodBtn')
let leisureButton = document.querySelector('#leisureBtn')

let aboutSection = document.querySelector('#about')
let placesSection = document.querySelector('#places')
let foodSection = document.querySelector('#food')
let leisureSection = document.querySelector('#leisure')


aboutButton.addEventListener('click', event => {
    aboutSection.scrollIntoView({
        behavior: 'smooth'
    });

    aboutButton.classList.add(`activeSpy`)
    placesButton.classList.remove(`activeSpy`)
    foodButton.classList.remove(`activeSpy`)
    leisureButton.classList.remove(`activeSpy`)
})

placesButton.addEventListener('click', event => {
    placesSection.scrollIntoView({
        behavior: 'smooth'
    });

    placesButton.classList.add(`activeSpy`)
    aboutButton.classList.remove(`activeSpy`)
    foodButton.classList.remove(`activeSpy`)
    leisureButton.classList.remove(`activeSpy`)
})

foodButton.addEventListener('click', event => {
    foodSection.scrollIntoView({
        behavior: 'smooth'
    });

    foodButton.classList.add(`activeSpy`)
    aboutButton.classList.remove(`activeSpy`)
    placesButton.classList.remove(`activeSpy`)
    leisureButton.classList.remove(`activeSpy`)
})

leisureButton.addEventListener('click', event => {
    leisureSection.scrollIntoView({
        behavior: 'smooth'
    });

    leisureButton.classList.add(`activeSpy`)
    aboutButton.classList.remove(`activeSpy`)
    placesButton.classList.remove(`activeSpy`)
    foodButton.classList.remove(`activeSpy`)
})

setInterval(() => {
    document.getElementById("images-container").classList.add("images-container-animate");
    document.getElementById("images-container").classList.remove("images-container");
  }, 500);