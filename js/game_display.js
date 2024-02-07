import getDetails from "./getdetails.js";
export default function displayData(arr) {
    function cutText(text) {
        var str = `${text}`;
    var wordsArray = str.split(' ');
    var firstFiveWords = wordsArray.slice(0, 8);
return firstFiveWords.join(' ');
    }
    let cartonaa =``;
    for (let i = 0; i < arr.length; i++) {
        cartonaa +=`
        <div class="col-lg-3">
        <id class="d-none">${arr[i].id}</id>
        <div class="card bg-dark">
            <div class="p-2">
                <img src="${arr[i].thumbnail}" class="card-img-top" alt="...">
            </div>
            <div class="card-body text-center">
                <div class="d-flex justify-content-between">
                    <p class="text-white nerko">${arr[i].title}</p>
                    <p class="btn btn-primary nerko badge">free</p>
                </div>
                <p class="max-width card-text text-white-50 text-center">${cutText(arr[i].short_description)}</p>
            </div>
            <div class="card-footer px-2 m-0">
                <div class="d-flex justify-content-between alighn-items-center m-0 p-0">
                <p class="btn btn-secondary comfortaa badge">${arr[i].genre}</p>
                <p class="btn btn-secondary comfortaa badge">${arr[i].platform}</p>
                </div>
            </div>
        </div>
    </div>`
    }
    const row = document.querySelector('#display')
    row.innerHTML = cartonaa
    for (let i = 0; i < row.children.length; i++) {
        row.children[i].addEventListener('click', function (e) {
            const descriptionPage = document.querySelector('#description');
            descriptionPage.classList.remove('d-none');
            row.classList.add('d-none');
            getDetails(this.firstElementChild.innerHTML); 
        })          
    }
}