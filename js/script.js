
var templateList = document.getElementById('template-product-list').innerHTML;
var carouselOutput = document.querySelector('.main-carousel');

//Mustache.parse(templateList);

var elements = '';

for ( var i=0; i < productsData.length; i++){
    //console.log(productsData);
    elements += Mustache.render(templateList, productsData[i]);
}
console.log(elements);

carouselOutput.innerHTML= elements;


var elem =document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {    
    //cellAlign: 'left',
    contain: true,
    pageDots: false,
    hash: true
})

var restartButton = document.querySelector('.restart');
restartButton.addEventListener('click', function(){
    var cell1 = document.getElementById('carousel-cell1');
    console.log(cell1);
    flkty.selectCell(cell1);
})


var progressBar = document.querySelector('.progress-bar');

flkty.on('scroll', function(progress){
    progress = Math.max(0, Math.min(1, progress));
    progressBar.style.width = progress *100 +'%';
});

window.initMap= function(){
    var troll = productsData[0].cords;
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 5, center: troll}
    );
    var marker = new google.maps.Marker({position: troll, map: map})
console.log(marker);
    for ( var i=0; i<productsData.length; i++){
        marker += new google.maps.Marker({position: productsData[i].cords, map: map})
    }

};
