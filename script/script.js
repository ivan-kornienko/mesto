let editButton = document.querySelector('.edit-button');
let popup = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__close');
let formElement = document.querySelector('.popup__form');
let formName = document.querySelector('.popup__field-name');
let formCaption = document.querySelector('.popup__field-caption');
let userName = document.querySelector('.profile-info__title');
let userCaption = document.querySelector('.profile-info__subtitle');

// открытие попапа
function openPopup () {
    popup.classList.remove('popup_opened');
    formName.setAttribute ('value', userName.textContent);
    formCaption.setAttribute ('value', userCaption.textContent);  
}

// закрытие попапа
function closePopup () {
    popup.classList.add('popup_opened');
    formElement.reset ();
}

// синхронизация введенных значений в попап и профиля пользователя
function handleFormSubmit (evt) {
    evt.preventDefault();
    // Вставьте новые значения с помощью textContent
    userName.textContent = formName.value;
    userCaption.textContent = formCaption.value;
    // закрываем форму
    closePopup ();
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', handleFormSubmit);