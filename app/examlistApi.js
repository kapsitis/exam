export function getExamlist() {
    var endpoint = "http://" + window.location.hostname + ":8080/exam/examlist.js"
    return fetch(endpoint, {method: "GET", credentials: 'same-origin'})
        .then(res => res.json())
        .catch(err => {
            console.log(err)
        })
}
