{
    let photo = document.querySelector(".js-header__photo");
    let hidePhotoButton = document.querySelector(".js-header__hidePhotoButton");

    hidePhotoButton.addEventListener("click", () => {
        photo.classList.toggle("header__hiddenPhoto");

        hidePhotoButton.innerText = (photo.classList.contains("header__hiddenPhoto"))
            ? "Pokaż zdjęcie"
            : "Ukryj zdjęcie";
    });

    const onChangeBackgroundClick = () => {
        const content = document.querySelector(".js-content");
        const aboutMe = document.querySelector(".js-navigation__linkAboutMe");
        const education = document.querySelector(".js-navigation__linkEducation");
        const foreignLanguages = document.querySelector(".js-navigation__linkForeignLanguages")
        const hobby = document.querySelector(".js-navigation__linkHobby");
        const contact = document.querySelector(".js-navigation__linkContact");

        content.classList.toggle("darkContent");
        aboutMe.classList.toggle("js-navigation__link--dark");
        education.classList.toggle("js-navigation__link--dark");
        foreignLanguages.classList.toggle("js-navigation__link--dark");
        hobby.classList.toggle("js-navigation__link--dark");
        contact.classList.toggle("js-navigation__link--dark");

        backgroundChangeButton.innerText = (content.classList.contains("darkContent"))
            ? "Włącz jasny motyw"
            : "Włącz ciemny motyw";
    };

    const init = () => {
        const backgroundChangeButton = document.querySelector(".js-header__backgroundChangeButton");
        backgroundChangeButton.addEventListener("click", onChangeBackgroundClick);
    };
    
    init();
}