function irArriba (){
    windows.addEventListener('scroll', () => {
        var scroll = document.documentElement.scrollTop;
        console.log(scroll);
        var botonArriba = document.getElementById('botonArriba');

        if(scroll > 300){
            botonArriba.style.rigth = 20 + "px";
        } else {
            botonArriba.style.rigth = -100 + "px";
        }
    })
}

irArriba();