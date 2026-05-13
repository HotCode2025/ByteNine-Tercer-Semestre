 function aleatorio (max,min){
            return Math.floor(Math.random()*(max-min+1)+min);
        }

    function eleccion(jugada){
        let resultado = "";
        if(jugada == 1){
            resultado = "Piedra 🪨"
        } else if(jugada ==2){
            resultado = "Papel 📄"
        } else if(jugada == 3){
            resultado = "Tijera ✂️ "
        }else{
            resultado = "Mal elegido"
        }
        return resultado;
    }


        // 1 sera piedra; 2 sera papel; 3 sera tijera
        let jugador =0;
        let pc = 0
        let triunfos = 0
        let perdidas = 0

        while(triunfos < 3 && perdidas < 3){
            pc = aleatorio(3,1);
            jugador = prompt("Elige: 1 piedra, 2 papel, 3 tijera")
        //alert("Eilge jugada " + jugador)
        
       alert("PC elige " + eleccion(pc))
       alert("Tu eliges " + eleccion(jugador))

        //combate
        
        if(pc == jugador){
            alert("EMPATE")
        }else if(jugador == 1 && pc ==3){
            alert("GANASTE")
            triunfos++;
        }else if(jugador == 2 && pc == 1){
            alert("GANASTE")
            triunfos++;
        }else if(jugador == 3 && pc == 2){
            alert("GANASTE")
            triunfos++;
        }else{
            alert("PERDISTE")
            perdidas++;
        }
    }
        alert("Triunfos " + triunfos + " Perdidas " + perdidas)