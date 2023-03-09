const modal = document.getElementById("myModal")
const button = document.getElementById("myButton")
const span = document.getElementsByClassName("close")[0]
const show_pass = document.getElementById("show_pass")

function onFormSubmit(event){
    const form = event.currentTarget
    event.preventDefault()
    const inputs = form.querySelectorAll("input[required]")

    const formData = new FormData(form)
    console.table({
        "Пароль": formData.get("password"),
        "Email": formData.get("email")
    })
}


function onInputBlur(event) {
    const input = event.currentTarget;
    const validState = input.validity;
    console.log(event);

    let errorMessage = "";
    if(validState.valueMissing) {
        errorMessage = "Поле не заполнено";
    }
    else if (validState.badInput) {
        errorMessage = "Поле заполнено неверно";
    }
    else if (validState.tooShort) {
        errorMessage = `Минимальная длина ${input.minLength} сим.`;
    }
    else if (validState.typeMismatch) {
        errorMessage = "Неправильный формат ввода ";
    }
    else if (validState.valid) {
        errorMessage = "";
    }

    input.setCustomValidity(errorMessage);

    const wrapper = input.closest("li");
    const errorMsgElem = wrapper.querySelector(".error");

    errorMsgElem.textContent = errorMessage;
}


function showPass() {
    const pass = document.getElementById("password")
    if (pass.type === "text"){
        pass.type = "password"
    }else{
        pass.type = "text"
    }
}

button.onclick = function() {
    modal.style.display = "block"
}

span.onclick = function() {
    modal.style.display = "none"
}

show_pass.addEventListener("pointerdown", showPass)
show_pass.addEventListener("pointerup", showPass)

const form = document.getElementById("registerModal")
form.addEventListener("submit", onFormSubmit)
form.querySelectorAll("input[required]").forEach(input => {
    input.addEventListener("blur", onInputBlur)
})

window.onclick = function() {
    modal.style.display = "block"
}