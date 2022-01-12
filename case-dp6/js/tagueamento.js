// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

//-- Configuração do Google Analytics -->

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-12345-6', 'auto');
ga('send', 'pageview');

// Evento - Clicar em "Entre em Contato"
jQuery('.menu-lista-contato').on('click', function () {
    ga('send', {
        hitType: 'event',
        eventCategory: 'menu',
        eventAction: 'entre_em_contato',
        eventLabel: 'link_externo'  
      });
  });

// Evento - Clicar em "Download PDF"
jQuery('.menu-lista-download').on('click', function () {
    ga('send', {
        hitType: 'event',
        eventCategory: 'menu',
        eventAction: 'download_pdf',
        eventLabel: 'download_pdf'  
      });
  });   

// Evento - Clicar em um dos 3 botões (“Lorem”, “Ipsum” e “Dolor”)
jQuery('.card-montadoras').on('click', function () {
    ga('send', {
        hitType: 'event',
        eventCategory: 'analise',
        eventAction: 'ver_mais',
        eventLabel: jQuery(this).data("name")  
      });
  });  

// Evento - Preencher cada um dos campos do formulário
jQuery('.contato #nome, .contato #email, .contato #telefone, .contato #aceito').on('change', function () {
  // Se o checkbox estiver selecionado aciona o evento
  console.log(jQuery(this).attr("id"));
  if(jQuery(this).attr("id") === "aceito"){
    if(jQuery(this).prop('checked')){
      ga('send', {
        hitType: 'event',
        eventCategory: 'contato',
        eventAction: jQuery(this).attr("id"),
        eventLabel: 'preencheu'  
      });
    }; 
  // Cria eventos para os inputs de nome, e-mail e telefone
  }else{
    ga('send', {
      hitType: 'event',
      eventCategory: 'contato',
      eventAction: jQuery(this).attr("id"),
      eventLabel: 'preencheu'  
    });
  };
});  

// Evento - Submissão de formulário e exibição de pop-up
jQuery('.contato').on('submit', function () {
  ga('send', {
      hitType: 'event',
      eventCategory: 'contato',
      eventAction: 'enviado',
      eventLabel: 'enviado'
    });
});  