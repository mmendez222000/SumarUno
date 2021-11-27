let digitos = [9,2,3,5,7];
let ultimoDigito = digitos.length;
const maximo = 100;
const minimoDigito = 0;
const maximoDigito = 9;
if(ultimoDigito >= minimoDigito && ultimoDigito <= maximo){
    for(i = 0; i < digitos.length; i++){
        if(digitos[i] >= minimoDigito && digitos[i] <= maximoDigito){
            if(i+1 == ultimoDigito){
                document.write(digitos[i]+1);
            }else{
                document.write(digitos[i]);
            }
        }else{
            document.write("No cumple con los requisitos: valor permitido de 0 a 9");
            i = digitos.length +1;
        }
    }
}else{
    document.write("No cumple con los requisitos: valor permitido de 1 a 99");
}

