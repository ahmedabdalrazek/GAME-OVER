export default async function getDetails(id){
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
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
    show(result);
    document.querySelector('.loader').parentElement.classList.toggle('d-none');
} catch (error) {
	console.error(error);
}
}
function show(arr){
    const photo =document.querySelector('#gameImage')
    photo.setAttribute('src' , `${arr.thumbnail}`);
    const decrip = document.querySelector('#descrip');
    decrip.innerHTML = `${arr.description}`;
    const status = document.querySelector('#status');
    status.innerHTML = `${arr.status}`;
    const genre = document.querySelector('#genre');
    genre.innerHTML = `${arr.genre}`;
    const title = document.querySelector('#title');
    title.innerHTML = `${arr.title}`;
    const platform = document.querySelector('#platform');
    platform.innerHTML = `${arr.platform}`;
    const gameLink = document.querySelector('#gameLink');
    gameLink.setAttribute('href', `${arr.freetogame_profile_url}`);
}
const backHome = document.querySelector('#backToHome');
    backHome.addEventListener('click', function(eventInfo){
        const descriptionPage = document.querySelector('#description');
        descriptionPage.classList.add('d-none');
        const row = document.querySelector('#display')
        row.classList.remove('d-none');
    });