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
}
editButton.addEventListener('click', openPopup);



// закрытие попапа
function closePopup () {
    popup.classList.add('popup_opened');
}
closeButton.addEventListener('click', closePopup);



// очищение попапа после закрытия
function cleanPopup () {
    userName.getAttribute('value');
    userCaption.getAttribute('value');

    formElement.reset ();

    formName.setAttribute ('value', userName.textContent);
    formCaption.setAttribute ('value', userCaption.textContent);
}
closeButton.addEventListener('click', cleanPopup);



// синхронизация введенных значений в попап и профиля пользователя
function handleFormSubmit (evt) {
    evt.preventDefault();
    // Получите значение полей из свойства value
    formName.getAttribute('value');
    formCaption.getAttribute('value');
    // Вставьте новые значения с помощью textContent
    userName.textContent = formName.value;
    userCaption.textContent = formCaption.value;
    // закрываем форму
    closePopup ();
}
formElement.addEventListener('submit', handleFormSubmit);





