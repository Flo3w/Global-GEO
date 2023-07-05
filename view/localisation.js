import {eventClickFetch} from '../event/click.js'
import {urlBase} from "../request/api.js"



export const displayLocAndButtons = (data) => {
    const spanCountries = document.querySelector('.spanCountries');
    spanCountries.innerHTML = "";
    
    data.data.forEach((dt) => {
        spanCountries.innerHTML += dt.name + "<br>";
    })
    
    data.links.forEach((links) => {
        const btnNext = document.createElement('div');
        btnNext.setAttribute('class', 'btn');
        btnNext.setAttribute('id', 'btn'+links['rel']);
        btnNext.setAttribute('href', links['href']);
        btnNext.innerHTML = links['rel'];
        spanCountries.appendChild(btnNext);
        
        eventClickFetch(btnNext, urlBase+btnNext.getAttribute('href'), displayLocAndButtons)

    })
}
