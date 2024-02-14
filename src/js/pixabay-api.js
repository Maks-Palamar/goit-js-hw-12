// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

import renderCard from './render-functions.js';

const form = document.querySelector('.form');
const loader = document.getElementById('loader');

function getImages(imgName) {
    const BASE_URL = 'https://pixabay.com';
    const END_POINT = '/api/';
    const options = {
        key: '42328453-99f2c5c34c77a0496905bbef3',
        q: imgName,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
    }
    const PARAMS = new URLSearchParams(options);    
    const url = BASE_URL + END_POINT + '?' + PARAMS;

    return fetch(url, options)
        .then(res => {
            if (!res.ok) {
                throw new Error('Server responded with error');
            }
            return res.json();
        })
}

form.addEventListener('submit', event => {
    event.preventDefault();
    const userInput = event.target.elements.search.value.trim();

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

    getImages(userInput)
        .then(data => {
            if (data.hits.length === 0) {
                const gallery = document.querySelector('.cards');
                gallery.innerHTML = '';
                hideLoader();
                iziToast.show({
                    title: 'Error',
                    backgroundColor: '#EF4040',
                    messageColor: '#FFFFFF',
                    titleColor: '#FFFFFF',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    position: 'bottomRight'
                })
            } else {
                renderCard(data.hits);
                const lightbox = new SimpleLightbox(".cards a", { captionsData: "alt", captionDelay: 250, captionPosition: 'bottom' });
                lightbox.refresh();
                hideLoader();
            }
        })
        .catch(error => {
            console.log(error);
        })
})

function showLoader() {
    loader.style.display = 'block';
}

function hideLoader() {
    loader.style.display = 'none';
}
