
var templateList = document.getElementById('template-product-list').innerHTML;
var carouselOutput = document.querySelector('.main-carousel');

//Mustache.parse(templateList);

var elements = '';

for (var i = 0; i < productsData.length; i++) {
    //console.log(productsData);
    elements += Mustache.render(templateList, productsData[i]);
}
console.log(elements);

carouselOutput.innerHTML = elements;


var elem = document.querySelector('.main-carousel');
var flkty = new Flickity(elem, {
    //cellAlign: 'left',
    contain: true,
    pageDots: false,
    hash: true
})

var restartButton = document.querySelector('.restart');
restartButton.addEventListener('click', function () {
    flkty.selectCell(0);
})


var progressBar = document.querySelector('.progress-bar');

flkty.on('scroll', function (progress) {
    progress = Math.max(0, Math.min(1, progress));
    progressBar.style.width = progress * 100 + '%';
});


window.initMap = function () {
    var troll = productsData[0].cords;
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 5, center: troll }
    );

    for (var i = 0; i < productsData.length; i++) {
        (function () {
            var marker = new google.maps.Marker({ position: productsData[i].cords, map: map });
            var j = i;
            marker.addListener('click', function () {
                flkty.selectCell(j);
            })
        })()
    }
    flkty.on('change', function (index) {
        map.panTo(productsData[index].cords);
        map.setZoom(5);
    })
};


