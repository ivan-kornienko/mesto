// Переменные Edit 
const popupEdit = document.getElementById('popup_type_edit');
const closeButtonEdit = popupEdit.querySelector('.popup__close');
const editButton = document.querySelector('.profile-info__edit-button');
const formElement = popupEdit.querySelector('.popup__form');
const formName = document.querySelector('[name="name"]');
const formCaption = document.querySelector('[name="caption"]');
const userName = document.querySelector('.profile-info__title');
const userCaption = document.querySelector('.profile-info__subtitle');
// Переменные Card 
const addButtonCard = document.querySelector('.profile__add-button');
const popupCard = document.getElementById('popup_type_new-card');
const closeButtonCard = popupCard.querySelector('.popup__close');
const formElementCard = popupCard.querySelector('.popup__form');
const formNameCard = document.querySelector('[name="place-name"]');
const formLinkCard = document.querySelector('[name="place-link"]');
const wrap = document.querySelector('.elements');
const elementTemplate = document.querySelector('.element_template').content;
//Переменные Image
const popupImage = document.getElementById ('popup_type_image');
const closeButtonImage = popupImage.querySelector('.popup__close');
const picture = popupImage.querySelector('.popup__picture');
const caption = popupImage.querySelector('.popup__caption');



/// Функции общие
// Тоггл попапов
function toggleModal (el) {
  el.classList.toggle ('popup_type_opend');
}
// Вставить карточку в разметку
function renderCard(data, wrap) {
  wrap.prepend(createElement(data));
}


/// Функции попапа Edit
// Синхронизация формы
function syncFormEdit () {
  formElement.reset();
  formName.value = userName.textContent;
  formCaption.value = userCaption.textContent;
} 
// Синхронизация профиля пользователя
function submitEdit (evt) {
  evt.preventDefault();
  userName.textContent = formName.value;
  userCaption.textContent = formCaption.value;
  toggleModal (popupEdit);
}
// Открыть попап
function openPopupEdit () {
  toggleModal (popupEdit);
  syncFormEdit ();
}


/// Функции попапа Card
// Открыть попап
function openPopupCard () {
  toggleModal (popupCard);
  cleanPopupCard ();
}
// Очистить попап
function cleanPopupCard () {
  formElementCard.reset();
}
// Сабмит формы
function submitCard (evt) {
  evt.preventDefault();
  renderCard({
   name: formNameCard.value,
   link: formLinkCard.value
 }, wrap);
 toggleModal (popupCard);
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



/// Функции попапа Image
// Открытие попапа
function openPopupImage (data) {
  toggleModal (popupImage);
  caption.textContent = data.name;
  picture.src = data.link;
  picture.alt = data.name;
}



//// Слушатели
// Edit popup 
editButton.addEventListener('click', openPopupEdit);
closeButtonEdit.addEventListener('click', () => toggleModal (popupEdit));
formElement.addEventListener('submit', submitEdit);
// Card popup 
addButtonCard.addEventListener('click', openPopupCard);
closeButtonCard.addEventListener('click', () => toggleModal (popupCard));
formElementCard.addEventListener('submit', submitCard);
// Image popup 
closeButtonImage.addEventListener('click', () => toggleModal (popupImage));




// Инициализация
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



