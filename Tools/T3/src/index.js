function showImage() {
    var img = document.createElement('div');
    document.body.appendChild(img)
    img.innerHTML = "<img src='./paw.jpg'></img>";
}

module.exports = showImage;