// Общие Переменные
const popups = document.querySelectorAll('.popup');
// Переменные Edit 
const popupEdit = document.getElementById('popup_type_edit');
const editButton = document.querySelector('.profile-info__edit-button');
const formElementEdit = popupEdit.querySelector('.popup__form');
const inputName = document.querySelector('[name="name"]');
const inputCaption = document.querySelector('[name="caption"]');
const userName = document.querySelector('.profile-info__title');
const userCaption = document.querySelector('.profile-info__subtitle');
// Переменные Card 
const addButtonCard = document.querySelector('.profile__add-button');
const popupCard = document.getElementById('popup_type_new-card');
const formElementCard = popupCard.querySelector('.popup__form');
const inputNameCard = document.querySelector('[name="place-name"]');
const inpitLinkCard = document.querySelector('[name="place-link"]');
const wrap = document.querySelector('.elements');
const elementTemplate = document.querySelector('.element_template').content;
//Переменные Image
const popupImage = document.getElementById ('popup_type_image');
const picture = popupImage.querySelector('.popup__picture');
const caption = popupImage.querySelector('.popup__caption');



/// ОБЩИЕ ФУНКЦИИ
// Открыть любой попап
function openPopup (popup) {
  popup.classList.add ('popup_type_opend');
  document.addEventListener('keydown', closeByEscape);
}
// Закрыть любой попап
function closePopup (popup) {
  popup.classList.remove ('popup_type_opend');
  document.removeEventListener('keydown', closeByEscape);
}
// Закрыть попап нажатием ESC
function closeByEscape(evt) {
  const openedPopup = document.querySelector('.popup_type_opened');
  if (evt.key === 'Escape') {
    closePopup(openedPopup);
  }
}
// Очистить форму от спанов с ошибками
function clearForm (popup) {
  const errorList = Array.from(popup.querySelectorAll('.popup__input-error'));
  errorList.forEach((errorElement) => {
    errorElement.textContent = '';
  });
  const inputErrorList = Array.from(popup.querySelectorAll('.popup__input_type_error'));
  inputErrorList.forEach((inputErrorElement) => {
    inputErrorElement.classList.remove('popup__input_type_error');
  });
}
// Вставить карточку в разметку
function renderCard(data, wrap) {
  wrap.prepend(createElement(data));
}



/// ФУНКЦИИ ПОПАПА EDIT
// Открыть попап Edit
function openPopupEdit () {
  openPopup (popupEdit);
  syncFormEdit ();
  clearForm (popupEdit);
}
// Синхронизация формы Edit
function syncFormEdit () {
  formElementEdit.reset();
  inputName.value = userName.textContent;
  inputCaption.value = userCaption.textContent;
} 
// Синхронизация профиля пользователя Edit
function submitEdit (evt) {
  evt.preventDefault();
  userName.textContent = inputName.value;
  userCaption.textContent = inputCaption.value;
  closePopup (popupEdit);
}



/// Функции попапа Card
// Открыть попап Card
function openPopupCard () {
  openPopup (popupCard);
  cleanPopupCard ();
  clearForm (popupCard);
}
// Очистить попап Card
function cleanPopupCard () {
  formElementCard.reset();
}
// Сабмит формы Card
function submitCard (evt) {
  evt.preventDefault();
  renderCard({
   name: inputNameCard.value,
   link: inpitLinkCard.value
 }, wrap);
 closePopup (popupCard);
}
// Создать карточку
function createElement(data) {
	const cloneElement = elementTemplate.cloneNode(true);
  const cloneElementHeading = cloneElement.querySelector('.element__heading');
  const cloneElementImage = cloneElement.querySelector('.element__image');
  const cloneElementLike = cloneElement.querySelector('.element__fovorite-button');
  const cloneElementDelete = cloneElement.querySelector('.element__delete');

  cloneElementHeading.textContent = data.name;
  cloneElementImage.src = data.link;
  cloneElementImage.alt = data.name;
  
  cloneElementDelete.addEventListener ('click', handleDelete);
  cloneElementLike.addEventListener ('click', handleLike);
  cloneElementImage.addEventListener('click', () => openPopupImage(data))

  return cloneElement;
}
function handleDelete(evt) {
  evt.target.closest('.element').remove();
  }
function handleLike(evt) {
  evt.target.classList.toggle("element__fovorite-button_active");
}



/// ФУНКЦИИ ПОПАПА IMAGE
// Открытие попапа Image
function openPopupImage (data) {
  openPopup (popupImage);
  caption.textContent = data.name;
  picture.src = data.link;
  picture.alt = data.name;
}



//// СЛУШАТЕЛИ
// Общие 
popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup__overlay')) {
        closePopup(popup)
      }
      if (evt.target.classList.contains('popup__close')) {
        closePopup(popup)
      }
  })
});
// Поап Edit 
editButton.addEventListener('click', openPopupEdit);
formElementEdit.addEventListener('submit', submitEdit);
// Поап Card 
addButtonCard.addEventListener('click', openPopupCard);
formElementCard.addEventListener('submit', submitCard);


/// ИНИЦИАЛИЗАЦИЯ
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
initialCards.forEach((data) => {
  renderCard(data, wrap)
});



