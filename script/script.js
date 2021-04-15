// Общие Переменные
const overlayList = Array.from(document.querySelectorAll('.popup__overlay'));
// Переменные Edit 
const popupEdit = document.getElementById('popup_type_edit');
const closeButtonEdit = popupEdit.querySelector('.popup__close');
const editButton = document.querySelector('.profile-info__edit-button');
const formElementEdit = popupEdit.querySelector('.popup__form');
const inputName = document.querySelector('[name="name"]');
const inputCaption = document.querySelector('[name="caption"]');
const userName = document.querySelector('.profile-info__title');
const userCaption = document.querySelector('.profile-info__subtitle');
// Переменные Card 
const addButtonCard = document.querySelector('.profile__add-button');
const popupCard = document.getElementById('popup_type_new-card');
const closeButtonCard = popupCard.querySelector('.popup__close');
const formElementCard = popupCard.querySelector('.popup__form');
const inputNameCard = document.querySelector('[name="place-name"]');
const inpitLinkCard = document.querySelector('[name="place-link"]');
const wrap = document.querySelector('.elements');
const elementTemplate = document.querySelector('.element_template').content;
//Переменные Image
const popupImage = document.getElementById ('popup_type_image');
const closeButtonImage = popupImage.querySelector('.popup__close');
const picture = popupImage.querySelector('.popup__picture');
const caption = popupImage.querySelector('.popup__caption');


/// ОБЩИЕ ФУНКЦИИ
// Тоггл попапов
function toggleModal (popup) {
  popup.classList.toggle ('popup_type_opend');
  clearForm (popup);
  toggleListener();
  handlePopupOverlay();
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

// Закрыть попап при клике на оверлей
const handlePopupOverlay = () => {
  overlayList.forEach((overlay) => {
    overlay.addEventListener('click', () => {
      closePopup();
    });
  });
}
// Закрыть попап при нажатии Escape
const handleEsc = () => {
  toggleModal (popupOpend);
}

// Тоггл лисенеров при нажатии Escape
const toggleListener = () => {
  const popupOpend = document.querySelector('.popup_type_opend');
  if (!popupOpend) {
    document.removeEventListener('keydown', (evt) => {
      if (evt.key === "Escape") {
        closePopup(popupOpend);
      }
    })
  }
  else {
    document.addEventListener('keydown', (evt) => {
      if (evt.key === "Escape") {
        closePopup(popupOpend);
      }
    })
  }
}

// Закрыть любой открытый попап
const closePopup = () => {
  const popupOpend = document.querySelector('.popup_type_opend');
  if (popupOpend) {
    popupOpend.classList.remove ('popup_type_opend');
  }
}

// Вставить карточку в разметку
function renderCard(data, wrap) {
  wrap.prepend(createElement(data));
}


/// ФУНКЦИИ ПОПАПА EDIT
// Синхронизация формы
function syncFormEdit () {
  formElementEdit.reset();
  inputName.value = userName.textContent;
  inputCaption.value = userCaption.textContent;
} 
// Синхронизация профиля пользователя
function submitEdit (evt) {
  evt.preventDefault();
  userName.textContent = inputName.value;
  userCaption.textContent = inputCaption.value;
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
   name: inputNameCard.value,
   link: inpitLinkCard.value
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

/// ФУНКЦИИ ПОПАПА IMAGE
// Открытие попапа
function openPopupImage (data) {
  toggleModal (popupImage);
  caption.textContent = data.name;
  picture.src = data.link;
  picture.alt = data.name;
}

//// СЛУШАТЕЛИ
// Поап Edit 
editButton.addEventListener('click', openPopupEdit);
closeButtonEdit.addEventListener('click', () => toggleModal (popupEdit));
formElementEdit.addEventListener('submit', submitEdit);
// Поап Card 
addButtonCard.addEventListener('click', openPopupCard);
closeButtonCard.addEventListener('click', () => toggleModal (popupCard));
formElementCard.addEventListener('submit', submitCard);
// Поап Image 
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



