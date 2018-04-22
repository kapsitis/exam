export function getExamlist() {
    var endpoint = "http://" + window.location.hostname + ":8080/exam/examlist.js"
    return fetch(endpoint, {method: "GET", credentials: 'same-origin'})
        .then(res => res.json())
        .catch(err => {
            console.log(err)
        })
};

export function getExamItems() {
    var ll = window.location.pathname.length
    var dash = window.location.pathname.lastIndexOf("/")
    var endpoint = "http://" + window.location.hostname + ":8080/exam/examItems11.js?subtype=" + window.location.pathname.substring(dash+1,ll-5)
    return fetch(endpoint, {method: "GET", credentials: 'same-origin'})
        .then(res => res.json())
        .catch(err => {
            console.log(err)
        })
};

export function getCompleteExamItems() {
    var ll = window.location.pathname.length
    var dash = window.location.pathname.lastIndexOf("/")
    var endpoint = "http://" + window.location.hostname + ":8080/exam/examItems11.js?subtype=" + window.location.pathname.substring(dash+1,ll-5)
    return fetch(endpoint, {method: "GET", credentials: 'same-origin'})
        .then(res => res.json())
        .catch(err => {
            console.log(err)
        })
};
