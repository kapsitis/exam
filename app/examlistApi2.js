export function getCompleteExamItems() {
    var ll = window.location.pathname.length
    var dash = window.location.pathname.indexOf("-")
    var endpoint = "http://" + window.location.hostname + ":8080/exam/examItems2.js?subtype=" + window.location.pathname.substring(dash+1,ll-5)
    return fetch(endpoint, {method: "GET", credentials: 'same-origin'})
        .then(res => res.json())
        .catch(err => {
            console.log(err)
        })
};
