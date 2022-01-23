let myHeaders = new Headers();
let url = "http://localhost:5000"



let GetInit = {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default'
};


export async function getPlaces() {
    try {
        const res = await fetch(url + '/api/places', GetInit);
        console.log(res);
    } catch (err) {
        console.error(err);
    }
}

let getPlacesById = function (id) {
    return fetch(url + '/api/places/' + id, GetInit)
}

let postPlace = function (place) {
    return fetch(url + '/api/places', {
        method: "POST",
        body: place
    })
}

let patchPlace = function (id) {
    return fetch(url + '/api/places/' + id, {
        method: "PATCH"
    })
}

let deletePlace = function (id) {
    return fetch(url + '/api/places/' + id, {
        method: "DELETE"
    })
}




