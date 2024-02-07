'use strict';
import displayData from "./game_display.js";
async function getReleaseDate(category = 'mmorpg'){
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '8a96165e71msh83a7b18a86691c8p137c10jsn8facd37a6245',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    try {
        document.querySelector('.loader').parentElement.classList.toggle('d-none');
        document.querySelector('.loader').parentElement.classList.add('d-flex');
        const response = await fetch(url, options);
        const result = await response.json();
        displayData(result);
        document.querySelector('.loader').parentElement.classList.toggle('d-none');
    } catch (error) {
        console.error(error);
    }
}
getReleaseDate();
const category = document.querySelector('#switchCategory');
    category.addEventListener('click' , function (eventInfo) {
        for (let i = 0; i < category.children.length; i++) {
            category.children[i].classList.remove('active');
        }
        eventInfo.target.classList.add('active');
        getReleaseDate(eventInfo.target.innerHTML);
    })