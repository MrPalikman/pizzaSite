$(document).ready(function() {
    $('.navbar-burger').click(function(event){
        $('.navbar-burger,.navbar').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

// document.querySelector('.navbar-burger').addEventListener('click', function(){
//     this.classList.toggle('activ');
//     document.querySelector('.nav').classList.toggle('open');
// })