
// Detectar tela

var resolucao = window.innerWidth;
var numeroDeImagens = $('.jumbotron .banner .image-list li').length;

if (resolucao < 440) {

  $('.jumbotron .banner').removeClass('slider');
  $('.jumbotron').addClass('mobile');

} else {

  $('.jumbotron').removeClass('mobile');
  $('.jumbotron .banner').addClass('slider');
}

if ($('.jumbotron.mobile').length > 0) {

  console.log('mobile');

  $('.jumbotron.mobile .banner').remove();

  $('.jumbotron.mobile .menu').after('<div class="banner"><ul><li class="jumbo-bg"><div class="frase"><p>A Epicentro Tecnologia desenvolve <br>soluções em páginas web, <br>sistemas de gerenciamento de<br> conteúdo e design gráfico</p></div></li></ul></div>');

  $('.jumbo-bg').css('background-image','url("assets/img/Jumbotron/jumbotron'+Math.floor((Math.random() * numeroDeImagens) + 1)+'800.jpg")');
}


// Slider

$(function() {
  var slider = $('.slider').unslider({
    dots: true,
    delay: 8000,
    speed: 800,
    fluid: true,
    keys: false
  });

  var data = slider.data('unslider');
  $('.thumbs')
  .on('click', 'li', function() {
    data.move($(this).index());
  })
  .on('mouseover', function() {
   	data.stop();
  })
  .on('mouseout', function() {
   	data.start();
  });
});

