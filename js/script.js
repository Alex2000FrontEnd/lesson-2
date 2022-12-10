/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    removeAdv();
    drama();
    imgBg();
    moviesDB();

    function moviesDB() {
        const list = document.querySelector('.promo__interactive-list');
        movieDB.movies.sort();
        list.innerHTML = '';
        movieDB.movies.forEach((item, i) => {
            list.innerHTML += `<li class="promo__interactive-item">${i + 1} ${movieDB.movies[i]}
                <div class="delete"></div>
            </li>`;
        });

    }

    function imgBg() {
        document.querySelector('.promo__bg').style.backgroundImage = 'url(../img/bg.jpg)'
    }

    function drama() {
        document.querySelector('.promo__genre').textContent = 'драма';
    }

    function removeAdv() {
        const adv = document.querySelectorAll('.promo__adv img');
        adv.forEach(item => {
            item.remove();
        });
    }
});

