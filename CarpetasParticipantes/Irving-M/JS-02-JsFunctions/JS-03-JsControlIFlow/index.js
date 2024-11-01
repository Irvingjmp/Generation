
    let resultado;
    let numero1, numero2;
    console.log(numero1)


    function onInputChange(){
        numero1 = parseFloat(document.getElementById("numero1").value);
        numero2 = parseFloat(document.getElementById("numero2").value);

        console.log(numero1)
        console.log(numero2)
    }

    function operacionMate(tipoOP){
        switch (tipoOP){
            case 1:
                resultado=numero1+numero2;
                console.log(resultado)
                break
            case 2:
                break
            case 3:
                break
            

        }
        document.getElementById("result").innerHTML= `Resultado: ${resultado}` ;
    
    }
