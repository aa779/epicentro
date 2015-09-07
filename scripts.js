
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
    delay: 6000,
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


// Menu

  // Transparencia

    // $(window).scroll(function() {

    //   var menuTop = $('.menu:eq(0)').offset().top;

    //   if (menuTop === 0) {

    //     $('.menu:eq(0)').removeClass('transparencia');
    //   }

    //   if (menuTop > 0) {

    //     $('.menu:eq(0)').addClass('menu transparencia');
    //   } 
    // });

  // Mobile

    var isActive = false;

    $('.menu-bar').click(function() {

      console.log(isActive);

      if (isActive === false) {
        
        $('.menu-bar').attr('src','assets/img/Menu/menu-bar-active.png');
        $('.menu ul').slideDown();
        isActive = true;

      } else if (isActive === true) {
        
        $('.menu-bar').attr('src','assets/img/Menu/menu-bar.png');
        $('.menu ul').slideUp();
        isActive = false;
      }
      
      
      // 
    });

    // $('.rotate').click(function() {

    //   alert('saco');
      
    //   // $('.icone-menu.rotate').removeClass('icone-menu rotate');
    //   // $('.menu ul').slideUp();
    // });

  // Trocar Logo

    if ($(window).width() < 786) {

      $('.menu .logo').attr('src', 'assets/img/Menu/icone.png');
    }

  // Aumentar largura

    var activate = $(window).height();

    $(window).scroll(function() {

      var menuTop = $('.menu:eq(0)').offset().top;

      if (menuTop < activate) {

        $('.menu:eq(0)').removeClass('full');
      }

      if (menuTop > activate) {

        $('.menu:eq(0)').addClass('menu full');
      } 
    });
// Portfolio

  // Navegação
    $('.section.portfolio .laptop .nav-right').click(function() {

      $('.section.portfolio ul').css('left', '-100%');
    });

    $('.section.portfolio .laptop .nav-left').click(function() {

      $('.section.portfolio ul').css('left', '0');
    });

    // $('.section.portfolio .laptop .icone').click(function() {
    //   $('html,body').animate(function(){
    //    scrollTop: $('.section.portfolio nav.ancoraSite').offset().top;
    //   },1000);
    //   $('html, body').animate({scrollTop: $('#.section.portfolio nav.ancoraSite').offset().top -100 }, 'slow');
    // });

  // Ajustar notebook
  function scrollTop() {
    var myDiv = document.getElementById('containerDiv');
    myDiv.innerHTML = variableLongText;
    myDiv.scrollTop = 0;
  };

  // Mostrar sites
    function mostraImagem(arg) {
      $('.icone.'+arg).click(function() {
        $('.laptop-site').fadeOut(function() {

          $('.laptop-site').attr('src', 'assets/img/Portfolio/'+arg+'.jpg');
        });
        
        $('.laptop-site').fadeIn();
      });
    }

    mostraImagem('estudio-avante');
    mostraImagem('pousada-domus');
    mostraImagem('pizzaria-doritos');
    mostraImagem('descubra-ubatuba');
    mostraImagem('vilago-imoveis');
    mostraImagem('raddar');
    mostraImagem('a-maca');
    mostraImagem('papilon');
    mostraImagem('preventser');
    mostraImagem('apave');
// Equipe

function mostrarDescricao(arg) {

  $('.membro.'+arg+'').hover(function() {

    if ($('.descricao-membro.'+arg+'').css('display') != 'list-item') {

      $('.descricao-membro').slideUp();
      $('.descricao-membro.'+arg+'').slideDown();
    }

  console.log();
});
}

mostrarDescricao('alvaro');
mostrarDescricao('gabriel');
mostrarDescricao('jessica');
mostrarDescricao('joao');
mostrarDescricao('junior');$('.abre-mapa').click(function() {

  $('.map-modal').show();
  $('form').fadeOut();
});

$('.fecha-mapa').click(function() {

  $('.map-modal').hide();
  $('form').fadeIn();
});