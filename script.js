window.addEventListener("click", function () {
    let input = this.document.querySelector(".todo-input")
    let wrapper = this.document.querySelector('.wrapper')
    let btn = this.document.querySelector(".todo-btn")
    btn.onclick = () => {
        // Если поле инпута пустая
        if (input.value == "") {
            this.alert(' Add task ! ')
        }
        else {
            let div = this.document.createElement('div')
            div.classList.add("add-block")
            let p = this.document.createElement('p')
            p.classList.add("add-text")
            let img = this.document.createElement('img')
            img.classList.add("add-icon")
            let checkbox = this.document.createElement("input")
            checkbox.setAttribute("type", "checkbox");
            p.innerText = input.value
            img.src = "./icons/1.png"
            checkbox.classList.add("checkbox")
            wrapper.append(div)
            div.append(checkbox, p, img)
            //Функция вычеркнуть задачу
            checkbox.onclick = () => {
                p.classList.toggle("text-active")
            }
            //Функция удаление
            img.onclick = () => {
                div.remove()
            }
            input.value = ""
        }
    }

})