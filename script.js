let counterValue = 0;
const button = document.getElementById('Нажми меня');
const counterDisplay =document.getAnimations('Display');
button.onclick = function() {
    alert('Button clicked!')
}
button.addEventListener('click', function() {
    let counter = 0;
    return function() {
        return counter+=1;
    }
});



const emailInput = document.getElementById('email:');// найдите элементы с помощью getElement или аналогии
const errorMessage = document.getAnimations('emailError');
const submitBtn = document.getAnimations('Отправить');
emailInput.addEventListener('input', function() {
const emailValue = emailInput.value;
// Пример простого регулярного выражения для проверки email
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailPattern.test(emailValue)) {
   return ("Некорректный email")
    } else {
    // Скрывайте сообщение об ошибке и разблокируйте кнопку
    }
    });
    
