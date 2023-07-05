import {fetchAPI} from "../request/request.js"

export const eventClickFetch = (element, url, callback) => {
    element.addEventListener("click", () => {
        fetchAPI(url)
        .then(data => {
            callback(data)
        })
        .catch(err => {
            console.log(err)
        })
    })
}