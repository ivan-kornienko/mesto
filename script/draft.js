1

// Находим форму в DOM -
let formElement = document.querySelector('.popup__submit-button');


// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                        // Так мы можем определить свою логику отправки.
                        // О том, как это делать, расскажем позже.

    // Находим поля формы в DOM
    let fieldName = document.querySelector('.popup__field-name');
    let fieldCaption = document.querySelector('.popup__field-caption');

    // Получите значение полей из свойства value
    fieldName.getAttribute('value');
    fieldCaption.getAttribute('value');

    // Выберите элементы, куда должны быть вставлены значения полей
    let userName = document.querySelector('.profile-info__title');
    let userCaption = document.querySelector('.profile-info__subtitle');

    // Вставьте новые значения с помощью textContent
    userName.textContent = 'А это новый текст.';
    userCaption.textContent = 'А это новый текст.';
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);



let userName = document.querySelector('.profile-info__title');
userName.textContent = 'А это новый текст.';
console.log(userName.textContent);
console.log(fieldName.getAttribute('value'));