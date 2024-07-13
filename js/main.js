const modal = document.getElementById("myModal");
const btn = document.getElementById("openModalBtn");
const span = document.getElementsByClassName("close")[0];
const form = document.getElementById("loginForm");


btn.onclick = function() {
    modal.style.display = "flex";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(form);
    const data = {
        email: formData.get("email"),
        password: formData.get("password"),
        rememberMe: formData.get("remember-me") ? true : false,
    };


    //!!!!Измените на правильный url!!!!
    fetch("/your-domain/endpoint-yourAPI/example", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log("Success:", data);
            modal.style.display = "none";
            alert("Сообщение отправлено. Ожидайте входа");
        })
        .catch((error) => {
            console.error("Error:", error);
            alert("Произошла ошибка при входе. Пожалуйста, попробуйте снова.");
        });
});