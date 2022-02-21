let photo = document.querySelector(".js-header__photo");
let hidePhotoButton = document.querySelector(".js-header__hidePhotoButton");
let backgroundChangeButton = document.querySelector(".js-header__backgroundChangeButton");
let content = document.querySelector(".js-content");

let aboutMe = document.querySelector(".js-navigation__linkAboutMe");
let education = document.querySelector(".js-navigation__linkEducation");
let foreignLanguages = document.querySelector(".js-navigation__linkForeignLanguages")
let hobby = document.querySelector(".js-navigation__linkHobby");
let contact = document.querySelector(".js-navigation__linkContact");

hidePhotoButton.addEventListener("click", () => {
    photo.classList.toggle("header__hiddenPhoto");

    hidePhotoButton.innerText = (photo.classList.contains("header__hiddenPhoto"))
        ? "Pokaż zdjęcie"
        : "Ukryj zdjęcie";
});

backgroundChangeButton.addEventListener("click", () => {
    content.classList.toggle("darkContent");
    aboutMe.classList.toggle("js-navigation__link--dark");
    education.classList.toggle("js-navigation__link--dark");
    foreignLanguages.classList.toggle("js-navigation__link--dark");
    hobby.classList.toggle("js-navigation__link--dark");
    contact.classList.toggle("js-navigation__link--dark");

    backgroundChangeButton.innerText = (content.classList.contains("darkContent"))
        ? "Włącz jasny motyw"
        : "Włącz ciemny motyw";
});