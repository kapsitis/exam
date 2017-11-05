const ENDPOINT = 'http://85.254.250.28:8080/exam/examlist.js'

export function getExamlist() {
    return fetch(ENDPOINT, {method: "GET", credentials: 'same-origin'})
        .then(res => res.json())
        .catch(err => {
            console.log(err)
        })
}
