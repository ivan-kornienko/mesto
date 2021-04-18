// Валидация форм
const isValid = (formElement, inputElement, config) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage, config);
    } else {
      hideInputError(formElement, inputElement, config);
    }
  };
  
  const showInputError = (formElement, inputElement, errorMessage, config) => {
    // Находим элемент ошибки внутри самой функции
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    // Остальной код такой же
    inputElement.classList.add(config.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(config.errorClass);
  };
  
  const hideInputError = (formElement, inputElement, config) => {
    // Находим элемент ошибки
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    // Остальной код такой же
    inputElement.classList.remove(config.inputErrorClass);
    errorElement.classList.remove(config.errorClass);
    errorElement.textContent = '';
  };
  
  const setEventListeners = (formElement, config) => {
    // Находим все поля внутри формы,
    // сделаем из них массив методом Array.from
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    const buttonElement = formElement.querySelector('.' + config.submitButtonSelector);
  
    formElement.addEventListener('submit', (evt) => {
      // У каждой формы отменим стандартное поведение
      evt.preventDefault();
      buttonElement.setAttribute("disabled", "disabled");
      buttonElement.classList.add(config.inactiveButtonClass);
      buttonElement.classList.remove(config.submitButtonSelector);
    });

    // Вызовем toggleButtonState, чтобы не ждать ввода данных в поля
    toggleButtonState(inputList, buttonElement, config);
  
    // Обойдём все элементы полученной коллекции
    inputList.forEach((inputElement) => {
      // каждому полю добавим обработчик события input
      inputElement.addEventListener('input', () => {
        // Внутри колбэка вызовем isValid,
        // передав ей форму и проверяемый элемент
        isValid(formElement, inputElement, config);
  
        // Вызовем toggleButtonState и передадим ей массив полей и кнопку
        toggleButtonState(inputList, buttonElement, config);
  
      });
    });
  };
  
  const enableValidation = (config) => {
    // Найдём все формы с указанным классом в DOM,
    // сделаем из них массив методом Array.from
    const formList = Array.from(document.querySelectorAll(config.formSelector));
  
    // Переберём полученную коллекцию
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
        // У каждой формы отменим стандартное поведение
        evt.preventDefault();
      });
  
      // Для каждой формы вызовем функцию setEventListeners,
      // передав ей элемент формы
      setEventListeners(formElement, config);
  //}
    });
  };
  
  // Функция принимает массив полей
  
  const hasInvalidInput = (inputList,config) => {
    // проходим по этому массиву методом some
    return inputList.some((inputElement) => {
      // Если поле не валидно, колбэк вернёт true
      // Обход массива прекратится и вся фунцкция
      // hasInvalidInput вернёт true
  
      return !inputElement.validity.valid;
    })
  };
  
  // Функция принимает массив полей ввода
  // и элемент кнопки, состояние которой нужно менять
  
  const toggleButtonState = (inputList, buttonElement, config) => {
    // Если есть хотя бы один невалидный инпут
    if (hasInvalidInput(inputList, config)) {
      // сделай кнопку неактивной
      buttonElement.setAttribute("disabled", "disabled");
      buttonElement.classList.add(config.inactiveButtonClass);
      buttonElement.classList.remove(config.submitButtonSelector);
    
      
    } else {
      // иначе сделай кнопку активной
      buttonElement.removeAttribute("disabled", "disabled");
      buttonElement.classList.remove(config.inactiveButtonClass);
      buttonElement.classList.add(config.submitButtonSelector);
    }
  };
  
  // Вызовем функцию
  enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: 'popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_inactive',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
  });