import {fetchAPI} from './request/request.js';
import {citiesUrl, countriesUrl} from './request/api.js';
import {displayLocAndButtons} from './view/localisation.js'
import {eventClickFetch} from "./event/click.js"

const btns = []

btns.push(document.querySelector('#btn1'));
btns.push(document.querySelector('#btn2'));

const selectBtnUrl = (btnID) => {
    return btnID === "btn1" ? citiesUrl : countriesUrl;
}

btns.forEach((btn) => {
    console.log(btn.getAttribute('id'));
    eventClickFetch(btn, selectBtnUrl(btn.getAttribute('id')), displayLocAndButtons)
})
