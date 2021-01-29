// Добавляем изображениям, по которым кликныл пользователь, класс bordered, в оформлении которого содержится граница и тень.

document.onclick = function(event){
    //console.log(event.target.tagName);
    event = event || window.event;
    if (event.target.tagName == 'IMG') {
        event.target.classList.add('bordered');
    }
}