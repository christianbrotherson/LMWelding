function onPageLoad() {
    var images = document.getElementsByClassName('service-pic');

    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener('click', onImageClick);
        images[i].id = i;
    }
}

function onImageClick() {
    var modal = document.getElementById('modal');
    modal.style.display = 'block';

    document.body.addEventListener('mouseup', onCloseClick)

    var images = document.getElementsByClassName('service-pic');

    var img = document.getElementById('img');
    img.src = images[this.id].src;
}

function onCloseClick() {
    document.getElementById('modal').style.display = 'none';
    document.body.removeEventListener('mouseup', onCloseClick);
}