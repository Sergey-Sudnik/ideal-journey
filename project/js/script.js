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

const renderList = (items, listContainer) => {
    purgeList(ul)
    items.sort();
    items.forEach((item, index) => {
        renderListItem(`${index + 1}. ${item}`, listContainer)
    });

    getBin().forEach((el, index) => el.addEventListener('click', () => {
        items.splice(index, 1);
        renderList(items, listContainer)
    }))
}

const renderListItem = (item, list) => {
    list.innerHTML += `
            <li class="promo__interactive-item">${item}
                <div class="delete"></div>
            </li>
        `;
};

const purgeList = (list) => {
    list.innerHTML = "";
}

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
    console.log(movieDB.movies);
    renderList(movieDB.movies, ul)
}

// Удаление рекламного блока
promo.remove();

// Изменение заголовка
promoGenre.textContent = "драма";

// Изменение картинки фона
img.style.backgroundImage = 'url("img/bg.jpg")';

renderList(movieDB.movies, ul)


submitButton.addEventListener('click', addSubmittedMovies);
