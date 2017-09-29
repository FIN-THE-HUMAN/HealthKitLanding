/**
 * Created by hp on 29.09.2017.
 */
// Выбираем видео элемент
/*var vid = document.getElementById('#v0');
//var vid = $('#v0')[0]; // jquery опция

// остановка видео при загрузке
vid.pause();

// Пошаговое воспроизведение видео при прокрутке страницы
window.onscroll = function(){
    vid.pause();
};

// Обновления видеокадров для плавного воспроизведения при прокрутке
setInterval(function(){
    vid.currentTime = window.pageYOffset/400;
}, 40);*/
var vid = document.getElementById('gif');
window.onscroll = function(){
    vid.pause();
    vid.currentTime = window.pageYOffset/400;
    alert('11');
};
