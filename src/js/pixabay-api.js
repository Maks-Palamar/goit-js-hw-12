// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

import axios from 'axios';

import renderCard from './render-functions.js';

const form = document.querySelector('.form');
const loader = document.getElementById('loader');
const loadmoreBtn = document.querySelector('.load-more-btn');
const newCard = document.querySelector('.card');
let lastScrollPosition = window.pageYOffset;

let page = 1;
let perPage = 15;
let userInput = '';

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    userInput = event.target.elements.search.value.trim();
    page = 1;

    if (userInput === "") {
        iziToast.show({
            title: 'Error',
            backgroundColor: '#EF4040',
            messageColor: '#FFFFFF',
            titleColor: '#FFFFFF',
            message: 'Please enter a search query!',
            position: 'bottomRight'
        });
        return;
    }

    showLoader();

    const options = {
        key: '42328453-99f2c5c34c77a0496905bbef3',
        q: userInput,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        page: page,
        per_page: perPage,
    }

const PARAMS = new URLSearchParams(options);

    try {
        const response = await axios.get(`https://pixabay.com/api/?${PARAMS}`)
        const data = response.data;
        window.scrollTo({ top: 0, behavior: 'smooth' });
            if (data.hits.length === 0) {
                const gallery = document.querySelector('.cards');
                gallery.innerHTML = '';
                hideLoader();
                hideLoadBtn();
                iziToast.show({
                    title: 'Error',
                    backgroundColor: '#EF4040',
                    messageColor: '#FFFFFF',
                    titleColor: '#FFFFFF',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    position: 'bottomRight'
                })
            } else {
                const gallery = document.querySelector('.cards');
                gallery.innerHTML = '';
                renderCard(data.hits);
                const lightbox = new SimpleLightbox(".cards a", { captionsData: "alt", captionDelay: 250, captionPosition: 'bottom' });
                lightbox.refresh();
                hideLoader();
                showLoadBtn();
            }
        
        page += 1;

        
        
    } catch (error) {
        console.log(error);   
    }
    
})

loadmoreBtn.addEventListener('click', async (event) => {
    showLoader();
    /*window.scrollBy(0, cardSize)*/

    const options = {
        key: '42328453-99f2c5c34c77a0496905bbef3',
        q: userInput,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        page: page,
        per_page: perPage,
    }

    const PARAMS = new URLSearchParams(options);

    try {
        if (page > 1) {
            const response = await axios.get(`https://pixabay.com/api/?${PARAMS}`)
            const data = response.data;
            const totalPages = Math.ceil(data.totalHits / perPage);
            if (page > totalPages) {
                hideLoadBtn();
                hideLoader();
                    return iziToast.error({
                    position: "bottomRight",
                        message: "We're sorry, but you've reached the end of search results."
                    })
            } else {
                renderCard(data.hits);
                const lightbox = new SimpleLightbox(".cards a", { captionsData: "alt", captionDelay: 250, captionPosition: 'bottom' });
                lightbox.refresh();
                hideLoader();
                scroll();
            }

        }

    }
    catch (error) {
        console.log(error);
    }
})

function showLoader() {
    loader.style.display = 'block';
}

function hideLoader() {
    loader.style.display = 'none';
}

function showLoadBtn(params) {
    loadmoreBtn.style.display = 'flex';   
}

function hideLoadBtn(params) {
    loadmoreBtn.style.display = 'none';   
}

function scroll() {
    const gallery = document.querySelector('.cards');
    const cardHeight = gallery.firstElementChild.getBoundingClientRect().height;
    window.scrollBy({ top: cardHeight * 2, behavior: 'smooth' });
}

window.addEventListener('scroll', () => {
    const currentScrollPosition = window.pageYOffset;

    if (currentScrollPosition > lastScrollPosition) {
        // Scroll down
        form.style.transform = 'translate(-50%, -130%)';
    } else {
        // Scroll up
        form.style.transform = 'translate(-50%, 0)';
    }

    lastScrollPosition = currentScrollPosition;
});