document.addEventListener('DOMContentLoaded', function () {
    new Vue({
      el: '#app',
      data: {
        SNILS: 'СНИЛС 000-000-000 00',
        altTEXT: 'Студент',
        image: 'https://wallpapers.com/images/hd/1920-x-1080-hd-1920-x-1080-vye1sz5gtvtcy5fz.jpg',
        details: ['Иван', 'Иванов', 31, 'Декабрь', 'мужской'],
        observation: true,
        health: ['давление повышено', 'пульс нормальный'],
        visible_passport_data: 0,
        name: 0,
        priv: 0,
        rating: 0,
        picked: 0,
      }
    });
  });