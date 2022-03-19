/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту

 */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const promo = document.querySelector('.promo__adv'),
      promoGenre = document.querySelector('.promo__genre'),
      img = document.querySelector('.promo__bg'),
      ul = document.querySelector('.promo__interactive-list'),
      li = ul.querySelectorAll('.promo__interactive-item'),
      form = document.querySelector('.add'),
      inputField = form.querySelector('.adding__input'),
      submitButton = form.querySelector('button');

      function getBin () {
          return document.querySelectorAll('.delete');
      }

// Сортировка массива в алфавитном порядке
movieDB.movies.sort();

// Добавление нового фильма через форму
function addSubmittedMovies(e) {
    e.preventDefault();
    let inputValue = inputField.value;
    if (inputValue.length <= 21 && inputValue && inputValue !== " ") {
        movieDB.movies.push(inputValue.toUpperCase());
    } else if (inputValue.length > 21) {
        let slicedInputValue = inputValue.slice(0, 21) + "...";
        movieDB.movies.push(slicedInputValue.toUpperCase());
    }
    console.log(movieDB.movies)
    movieDB.movies.sort();
    addNewMovie();
}

// Удаление рекламного блока
promo.remove();

// Изменение заголовка
promoGenre.textContent = "драма";

// Изменение картинки фона
img.style.backgroundImage = 'url("img/bg.jpg")';

// Очистка списка фильмов и вывод элементов массива в список
function createList () {

    ul.innerHTML = "";

    movieDB.movies.forEach((item, index) => {
        ul.innerHTML += `
            <li class="promo__interactive-item">${index + 1}. ${item}
                <div class="delete"></div>
            </li>
        `;
    });
}

createList();

// Добавление нового фильма в список
function addNewMovie () {
    ul.innerHTML = "";

    movieDB.movies.forEach((item, index) => {
        ul.innerHTML += `
            <li class="promo__interactive-item">${index + 1}. ${item}
                <div class="delete"></div>
            </li>
        `;
    });
}

submitButton.addEventListener('click', addSubmittedMovies);
