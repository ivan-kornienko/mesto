// попап ред. имя
let editButton = document.querySelector('.profile-info__edit-button');
let popup = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__close');
let formElement = document.querySelector('.popup__form');
let formName = document.querySelector('[name="name"]');
let formCaption = document.querySelector('[name="caption"]');
let userName = document.querySelector('.profile-info__title');
let userCaption = document.querySelector('.profile-info__subtitle');

// открытие попапа
function openPopup () {
    popup.classList.add('popup_opened');
    formName.setAttribute ('value', userName.textContent);
    formCaption.setAttribute ('value', userCaption.textContent);  
}

// закрытие попапа
function closePopup () {
    popup.classList.remove('popup_opened');
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




// карточки

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];
const elements = document.querySelector('.elements');
const elementTemplate = document.querySelector('.element_template').content;
const addButton = document.querySelector('.profile__add-button');

function render() {
	initialCards.forEach(renderElement);
}
function renderElement(data) {
	const cloneElement = elementTemplate.cloneNode(true);
    cloneElement.querySelector('.element__heading').innerText = data.name;
    cloneElement.querySelector('.element__image').src = data.link;
    //cloneElement.querySelector('.element__image').setAttribute("alt",{data.name});

    setListeners(cloneElement);
	elements.prepend(cloneElement);
}
render();

function setListeners(element) {
    element.querySelector('.element__delete').addEventListener('click', handleDelete);
    element.querySelector('.element__fovorite-button').addEventListener('click', handleLike);
    } 

function handleDelete(evt) {
        evt.target.closest('.element').remove();
        //resetEditMode();
    }
function handleLike(evt) {
  evt.target.closest('.element__fovorite-button').classList.toggle("element__fovorite-button_active");
} 

