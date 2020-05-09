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
    console.log(cell1)
    flkty.selectCell(cell1);
})


var progressBar = document.querySelector('.progress-bar');

flkty.on('scroll', function(progress){
    progress = Math.max(0, Math.min(1, progress));
    progressBar.style.width = progress *100 +'%';
});
