var palavras = ["arroz", "sapato", "cachorro","calopsita"]

// tela
var quadro = document.querySelector("canvas");
var pincel = quadro.getContext('2d');
var palavraConfere='';





//sorteia palavra
function sorteia(){
    
    

    
    var sorteio = Math.floor(Math.random() * palavras.length);
    var palavraDavez = palavras[sorteio]

    var segredo = [];
    segredo.length = palavraDavez.length;
    var i = 0;
    
    while(i<segredo.length){
        segredo[i]=" ";
        i++;
    }

     desenhaForca(segredo,palavraDavez)
    
     palavraConfere=palavraDavez;
     return palavraConfere;

}

//Desenha forca

function desenhaForca(letras){
    
    
    
        pincel.strokeStyle="#0A3871"

    pincel.strokeRect(40,40,1 ,200);
    pincel.strokeRect(40,40,100 ,1);
    pincel.strokeRect(140,40,1 ,50);
    pincel.strokeRect(20,240,40 ,1);




   desenhaLetras(letras);
    
}

function atualizaForca(vida){
    if(vida > 0){

        pincel.beginPath();
        pincel.arc(140, 110, 20, 0, 2 * Math.PI);
        pincel.stroke();


        if(vida > 1){
            pincel.strokeRect(140,130,1 ,80);


        
            if(vida >2){
                pincel.beginPath()
                pincel.moveTo(140,150);
                pincel.lineTo(190,190);
                pincel.stroke();
                pincel.closePath();

            
                if(vida >3){
                
                    pincel.beginPath()
                    pincel.moveTo(140,150);
                    pincel.lineTo(90,190);
                    pincel.stroke();
                    pincel.closePath();

                    if(vida >4){
                        pincel.beginPath()
                        pincel.moveTo(140,210);
                        pincel.lineTo(190,250);
                        pincel.stroke();
                        pincel.closePath();


                    }

                }
            }}  
    }

}

function desenhaLetras(letras){
    console.log(vidaVitoria)
    console.log(letras.length)
    iniciox = 200;
    inicioy = 290;
    var i = 0;
    pincel.font="30px arial";
    pincel.fillStyle="#0A3871"
    
    while(i< letras.length){
    
    pincel.strokeRect(iniciox,inicioy+40,40 ,0);
    pincel.fillText(letras[i], (iniciox+10), (inicioy+27));
    iniciox=iniciox+45;

    if(iniciox>600){
        iniciox= 50;
        inicioy= inicioy +40;

    }
    
    
    i++;
    }
    if(vidaVitoria == letras.length){

    restart(alert(`a palavra era ${palavraConfere}, vc venceu`))
    }
    
    
}
var desligaChat = false;

function comecar(){

desligaChat = true;
var botaoInicial = document.querySelector(".botoes-inicio");
botaoInicial.hidden = true;
var canvas = document.querySelector("canvas")
canvas.hidden =false;
var botaoJogo = document.querySelector(".botoes-jogo")
botaoJogo.hidden=false;
letrasjausadas=[];

    pincel.clearRect(0, 0, quadro.width, quadro.height);
    vida = 0;
    vidaVitoria=0;

sorteia();

}

function restart(){
    letrasjausadas=[];

    pincel.clearRect(0, 0, quadro.width, quadro.height);
    vida = 0;
    vidaVitoria=0;
    
    sorteia();

}
function desabilitaPc(){
    chatLigado = false;
}





function telaaddpalavra(){
    desligaChat = false;

    var botaoInicial = document.querySelector(".botoes-inicio");
    botaoInicial.hidden = true;
    
    var botaoJogo = document.querySelector(".botoes-add")
    botaoJogo.hidden=false;

}


function salvar(palavra){
    var palavra = document.querySelector('.add').value

    if(palavra.length != 0){
    palavras.push(palavra);
    console.log(palavras)
    }
    parar();
    comecar();

}



var letrasjausadas=[];
var chatLigado = true
if(chatLigado){
document.addEventListener('keydown', (event) => {
    var palpite = event.key;
    var dentro = false;
    var i = 0;
    while(i< letrasjausadas.length){
    if(palpite == letrasjausadas[i] && desligaChat){
        dentro=true;
        alert(`vc já chutou ${palpite}, tente outra palavra`)
    }
    i++
    }
    if(dentro==false && desligaChat){
        tentativa(palpite,palavraConfere)
    } 
  }, false);
}
  vida = 0;
  vidaVitoria= 0;

function tentativa(palpite,palavraConfere){
    
    letrasjausadas.push(palpite)

    contador = 0;
    var segredo2 =[];
    
    segredo2.length = palavraConfere.length;

    var i =0;
    
    while(i < segredo2.length){

       
    if(palavraConfere[i]==palpite){
        segredo2[i] = palpite;
        vidaVitoria++;
        contador++;

    }else{
        segredo2[i] =" ";
        
        
        console.log(vida)
    }
    
    i++;
}

    


    if(contador==0){
        vida++;
        console.log(vida)
        if(vida<=5){
            atualizaForca(vida);
        }

        if(vida ==6){
            
            restart(alert(`Vc morreu, a palavra era ${palavraConfere} e o jogo irá recomeçar`));

        }
    }
    desenhaLetras(segredo2);
    return vidaVitoria;
    
   

    
}

function teclado(){
    var teclador = document.querySelector(".teclado")

    if(teclador.value.length>=1){
        teclador.value=""
    }
    
    
}

function parar(){

    desligaChat = false;

    var botaoInicial = document.querySelector(".botoes-inicio");
    botaoInicial.hidden = false;
    var canvas = document.querySelector("canvas")
    canvas.hidden =true;
    var botaoJogo = document.querySelector(".botoes-jogo")
    botaoJogo.hidden=true;

    var botaoInicial = document.querySelector(".botoes-add");
    botaoInicial.hidden = true;

}
