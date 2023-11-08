let menulist = document.querySelector(".menulist");
let bandera = false

function openMenu (){

    menulist.style.display="none"

    
   if(bandera){
    menulist.style.display="none"
    bandera=false


   }
   else{
    menulist.style.display="block"
    bandera=true

   }
}
