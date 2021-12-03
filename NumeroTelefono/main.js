let V_arregloEntrada = [2,4];

function mostrarLetras(arregloEntrada){
    
    /*
    let tablero = [
        ['T','C','A','D','R','A','C','T'],
        ['P','P','P','P','P','P','P','P'],
        [' ',' ',' ',' ',' ',' ',' ',' '],
        [' ',' ',' ',' ',' ',' ',' ',' '],
        [' ',' ',' ',' ',' ',' ',' ',' '],
        [' ',' ',' ',' ',' ',' ',' ',' '],
        ['p','p','p','p','p','p','p','p'],
        ['t','c','a','d','r','a','c','t'] ]
      
      console.log(tablero.join('\n') + '\n\n')

      tablero[1][2] = tablero[3][4]
      //tablero[1][2] = ' '
      console.log(tablero.join('\n'))
        */
      
    let teclado = [['a','b','c'],['d','e','f'],['g','h','i'],['j','k','l'],['m','n','o'],['p','q','r','s'],['t','u','v'],['w','x','y','z']];
    let resultado = [];
    
    console.log(teclado.join('\n') + '\n\n');

    teclado[1][2] = teclado[2][2];
    console.log(teclado.join('\n'))
/*
    document.write(teclado.join());
    document.write("teclado.join");
    console.log(teclado.join());
  */      
}

mostrarLetras(V_arregloEntrada);
