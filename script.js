const counter = document.querySelector(".commentsSection__heder__counter");
const marker = document.querySelector(".commentsSection__heder__markout");
const userBox = document.querySelectorAll(".commentsSection__users");
const usersBox2 = document.querySelectorAll(".commentsSection__users__box2");



function addDeleteRedpoint(event) {
    const redpoint = event.currentTarget.querySelector(".commentsSection__users__box2__redpoint");
    const userBox = event.currentTarget;

    if (redpoint.style.display === "inline-block") {
        redpoint.style.display = "none";
        userBox.classList.remove("highlighted");
    } else {
        redpoint.style.display = "inline-block";
        userBox.classList.add("highlighted");
    }
}

userBox.forEach((element) => {
    element.addEventListener("click", addDeleteRedpoint);
});


