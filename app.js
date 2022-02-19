let buttonDOM = document.querySelector('#liveToastBtn')
let listTodoUlDOM = document.querySelector('.list-group')

addButton.addEventListener('onclick', newElement)

function newElement() {
    if (document.querySelector('#task').value !== "") {
        let todo = document.querySelector('#task').value
        let liDOM = document.createElement("li")

        liDOM.addEventListener('click', function() {
            listTodoUlDOM.removeChild(liDOM)
            $(".info").toast("show");
        })
        liDOM.innerHTML = ` ${todo} `
        listTodoUlDOM.appendChild(liDOM)
        localStorage.setItem(`Yapılacak : ${localStorage.length + 1}`, liDOM.innerText)
        document.querySelector('#task').value = ""

        $(".success").toast("show");
    } else {
        $(".error").toast("show");
    }
}