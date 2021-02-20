// попап Edit
const editButton = document.querySelector('.profile-info__edit-button');
const popupEdit = document.getElementById('popup_type_edit');
const closeButtonEdit = popupEdit.querySelector('.popup__close');
const formElement = popupEdit.querySelector('.popup__form');
const formName = document.querySelector('[name="name"]');
const formCaption = document.querySelector('[name="caption"]');
const userName = document.querySelector('.profile-info__title');
const userCaption = document.querySelector('.profile-info__subtitle');

// открытие попапа Edit
function openPopup () {
  popupEdit.classList.add ('popup_type_edit');
  formName.setAttribute ('value', userName.textContent);
  formCaption.setAttribute ('value', userCaption.textContent);  
}

// закрытие попапа Edit
function closePopup () {
  //document.querySelector('.popup_type_edit').classList.remove('popup_type_edit');
  popupEdit.classList.remove ('popup_type_edit');
  formElement.reset ();
}

// синхронизация введенных значений в попап Edit и профиля пользователя
function handleFormSubmit (evt) {
  evt.preventDefault();
  // Вставьте новые значения с помощью textContent
  userName.textContent = formName.value;
  userCaption.textContent = formCaption.value;
  // закрываем форму
  closePopup ();
}

editButton.addEventListener('click', openPopup);
closeButtonEdit.addEventListener('click', closePopup);
formElement.addEventListener('submit', handleFormSubmit);

// попап New-card

const addButtonNewCard = document.querySelector('.profile__add-button');
const popupNewCard = document.getElementById('popup_type_new-card');
const closeButtonNewCard = popupNewCard.querySelector('.popup__close');
const formElementNewCard = popupNewCard.querySelector('.popup__form');
const formNameNewCard = document.querySelector('[name="place-name"]');
const formLinkNewCard = document.querySelector('[name="place-link"]');
const newCardName = document.querySelector('.element__heading');
const newCardLink = document.querySelector('.element__image');

// открытие попапа New-card
function openPopupNewCard () {
  popupNewCard.classList.add ('popup_type_new-card');
}

// закрытие попапа New-card
function closePopupNewCard () {
  popupNewCard.classList.remove ('popup_type_new-card');
  formElementNewCard.reset ();
}

// синхронизация введенных значений в попап New-card и профиля пользователя
function handleFormSubmitNewCard (evt) {
  evt.preventDefault();
  const cloneElement = elementTemplate.cloneNode(true);
  cloneElement.querySelector('.element__heading').innerText = formNameNewCard.value;
  cloneElement.querySelector('.element__image').src = formLinkNewCard.value;
  cloneElement.querySelector('.element__image').setAttribute ('alt', formNameNewCard.value);
  setListeners(cloneElement);
  elements.prepend(cloneElement);
  closePopupNewCard ();
}

addButtonNewCard.addEventListener('click', openPopupNewCard);
closeButtonNewCard.addEventListener('click', closePopupNewCard);
formElementNewCard.addEventListener('submit', handleFormSubmitNewCard);



// Render Initial Cards

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
render();


// Render New Card
function renderElement(data) {
	const cloneElement = elementTemplate.cloneNode(true);
  cloneElement.querySelector('.element__heading').innerText = data.name;
  cloneElement.querySelector('.element__image').src = data.link;
  cloneElement.querySelector('.element__image').setAttribute ('alt', data.name);
  setListeners(cloneElement);
	elements.prepend(cloneElement);
}
function setListeners(element) {
  element.querySelector('.element__delete').addEventListener('click', handleDelete);
  element.querySelector('.element__fovorite-button').addEventListener('click', handleLike);
  element.querySelector('.element__image').addEventListener('click', openPopupImage);
} 
function handleDelete(evt) {
  evt.target.closest('.element').remove();
  }
function handleLike(evt) {
  evt.target.closest('.element__fovorite-button').classList.toggle("element__fovorite-button_active");
} 


//попап Image
const popupImage = document.getElementById ('popup_type_image');
const closeButtonImage = popupImage.querySelector('.popup__close');

// открытие попапа Image
function openPopupImage (evt) {
  popupImage.classList.add ('popup_type_image');
  renderImage (evt);
}
// добавить картинку в popup Image
function renderImage (evt) {
  const image = popupImage.querySelector('.popup__picture');
  const imageCaption = popupImage.querySelector('.popup__caption');

  const elementImage = evt.target.closest('.element__image');
  const element = evt.target.parentNode;
  const elementCaption = element.querySelector('.element__heading');

  image.src = elementImage.src;
  imageCaption.innerText = elementCaption.innerText;
  image.setAttribute ('alt', imageCaption.innerText);
}
// закрытие попапа Edit
function closePopupImage () {
  popupImage.classList.remove ('popup_type_image');
}

closeButtonImage.addEventListener('click', closePopupImage);



