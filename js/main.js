(function() {
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

  /*
    [] -> Lista, corresponde a um dos que estiverem dentro
    () -> Grupo/Captura
    \w -> Caracteres alfanúmericos [A-Za-z0-9]
  */
})();
