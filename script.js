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

    pincel.strokeRect(40,40,1 ,150);
    pincel.strokeRect(40,40,100 ,1);
    pincel.strokeRect(140,40,1 ,50);
    pincel.strokeRect(20,190,40 ,1);




    iniciox = 100;
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
    
}

function comecar(){
var botaoInicial = document.querySelector(".botoes-inicio");
botaoInicial.hidden = true;
var canvas = document.querySelector("canvas")
canvas.hidden =false;
var botaoJogo = document.querySelector(".botoes-jogo")
botaoJogo.hidden=false;

sorteia();

}

function restart(){
    pincel.clearRect(0, 0, quadro.width, quadro.height);
    
    sorteia();

}





function telaaddpalavra(){

}


function addpalavra(palavra){
    palavras.push(palavra);
    console.log(palavras)

}




document.addEventListener('keydown', (event) => {
    var palpite = event.key;

    tentativa(palpite)

    
  }, false);


function tentativa(palpite,palavraConfere){
    var i = 0;
    while(i<palavraConfere.length){
        if(palavraConfere[i]== palpite){
            
            
        }
        i++;

    }
}

