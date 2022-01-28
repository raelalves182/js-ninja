(function(win, doc) {
    'use strict';
  // escopo local se não usar o 'var' ele cria a variável em escopo global também
  // 'use strict' deixa em escopo restrito
    var name = 'Israel Alves'
    console.log(name);

  // "with" diminui a quantidade de chamadas se tiver obj com muitas propridades, ele não é permitido no modo "use strict"
  /* var obj = {
    prop1: {
      prop2: {
        prop3: {
          prop1: 'prop1',
          prop2: 'prop2',
          prop3: 'prop3'
        }
      }
    }
  };
  with(obj.prop1.prop2.prop3) {
    console.log( prop1, prop2, prop3);
  } */

  // com "use strict" no escopo global dentro de funções "this === undefined"
  // "use strict" delete lança uma SintaxError se não puder deletar / fora do restrito, delete não faz nada e é avaliado como false.
  // "use strict" objetos, variáveis e funcões devem ter nomes diferentes

  // Expressões regulares = manipular strings
  /* Flags --> g: global / i: ignore case 
     Termos --> \w: carcteres alfanuméricas e _
     \d: números (digitos)
  */

  /*  Regex
    [] -> Lista, corresponde a um dos que estiverem dentro
    () -> Grupo/Captura
    \w -> Caracteres alfanúmericos [A-Za-z0-9]
    \d -> Digítos [0-9]
    \s -> Espaço em branco
    \n -> Quebra de linha (nova linha)
    . -> qualquer caractere (exceto quebra de linha)
  */


  /* Window
    Todos os objetos globais não precisam ser referenciados no use strict
    window.prompt > faz uma pergunta 
      Ex.: 
      if (prompt( 'Pergunta?' ))
        console.log( 'resposta ok!' );
      else
        console.log( 'resposta não ok!' );

  */

  // var $inputs = doc.getElementsByTagName('input');
  // console.log( $inputs.length );

  /* Sync vs Async 

  console.log(0);
  for( var i = 1; i < 10; i++ ) {
    console.log(i);
  }
  console.log(11); 

  console.log('início');
  document.addEventListener('click', function() {
    console.log('clicou no documento');
  }, false);
  console.log('fim'); 

  // setTimeout()
  // setInterval()

  console.log('início');
    setTimeout(function() {
      console.log( 'executou setTimeout' )
    }, 1000);
  console.log('fim'); */

  // setTimeout() X setInterval()  

  // var counter = 0;
  // function timer() {
  //   console.log( 'timer', counter++ );
  //   if( counter > 10 )
  //     return;
  //   setTimeout( timer, 1000 );
  // }
  // timer();

  // clearTimeout(id), clearInterval(id) > serve para limpar o setInterval

  // var counter = 0;
  // var $button = doc.querySelector('[data-js="button"]');
  // var temporizador;
  // function timer() {
  //   console.log( 'timer', counter++ );
  //   if( counter > 20 )
  //     return;
  //   temporizador = setTimeout( timer, 1000 );
  // }
  // timer();

  // $button.addEventListener('click', function() {
  //   clearTimeout(temporizador);
  // }, false);

})(window, document);
