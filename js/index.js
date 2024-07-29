alert("Bienvenidos a GAMEPUSH historia del juego")
alert("en este lugar dependiendo de el mes que elijas te damos un juego a buen precio")
alert("A conticuacion elija un mes:")
let meses ="meses"; 
const Enero = "tekken 8";
const Febrero = "Hogwarts legacy" ;
const Marzo = "It Takes Two " ;
const Abril = "Final Fantasy 7 Remake" ;
const Mayo= "A Plague Tale: Innocence" ;
const Junio = "Hollow Knight" ;
const Julio = " Kingdom Hearts 3 ";
const Agosto = "No Man's Sky" ;
const Septiembre = "Metal Gear Solid V: The Phantom Pain" ;
const Octubre = "La Tierra-Media: Sombras de Mordor" ;
const Noviembre = "Batman: Arkham Collection" ;
const Diciembre = "Assassin's Creed III - Secretos Escondidos" ;

let EneroPrecio = "$100.000";
let FebreroPrecio = "$80.000" ;
let MarzoPrecio = "$30.000 " ;
let abrilPrecio = "$85.000" ;
let MayoPrecio = "$52.000" ;
let JunioPrecio = "$25.000" ;
let JulioPrecio = "$20.000";
let AgostoPrecio = "$37.000" ;
let SeptiembrePrecio = "$56.000" ;
let OctubrePrecio = "$40.000" ;
let NoviembrePrecio = "$70.000" ;
let diciembrePrecio = "$15.000" ;

console.log(meses)


console.log(Enero,Febrero,Marzo,Abril,Mayo,Junio,Julio,Agosto,Septiembre,Octubre,Noviembre,Diciembre)

while ( meses != "listo") {
    meses = prompt(
    "Elija un numero del mes,al terminar su eleccion escriba *listo*:\n1)Enero \n2)Febrero \n3)Marzo \n4)Abril \n5)Mayo \n6)Junio \n7)Julio \n8)Agosto \n9)Septiembre \n10)Octubre \n11)Noviembre \n12)Diciembre \nlisto "
    ); 

    switch (meses) {
        case "Enero","1":
          Enero = parseInt(
            alert("elijiste enero, tu juego sera tekken 8 cuesta " + EneroPrecio)
          );
          break;
        case "Febrero","2":
          Febrero = parseInt(
           alert("elejiste febrero, tu juego sera Hogwarts legacy cuesta" + FebreroPrecio)
          );
          break;
        case "Marzo","3":
          Marzo = parseInt(
           alert("elejiste marzo, tu juego sera It Takes Two cuesta " + MarzoPrecio)
          );
          break;
        case "Abril","4":
          Abril = parseInt(
            alert("Elejiste Abril, tu juego sera Final Fantasy 7 Remake cuesta" + abrilPrecio)
          );
          break;
        case "Mayo","5":
          Mayo = parseInt(
            alert("¿elejiste mayo, tu juego sera A Plague Tale: Innocence cuesta" + MayoPrecio)
            );
          case "Junio","6":
            Junio= parseInt(
              alert("elejiste junio, tu juego sera Hollow Knight cuesta" + JunioPrecio)
            );
            break;
          case "Julio","7":
            Julio = parseInt(
              alert("elejiste julio, tu juego sera Kingdom Hearts 3 cuesta" + JulioPrecio)
            );
            break;
          case "Agosto","8":
            Agosto = parseInt(
             alert("elejiste agosto, tu juego sera No Man's Sky" + AgostoPrecio)
            );
            break;
          case "Septiembre","9":
            Septiembre = parseInt(
              ale4("elejiste septiembre, tu juego sera Metal Gear Solid V: The Phantom Pain cuesta" + SeptiembrePrecio)
            );
            case "Noviembre","10":
            Noviembre = parseInt(
              prompt("elejiste noviembre, La Tierra-Media: Sombras de Mordor cuesta" + NoviembrePrecio)
            );
            break;
          case "Octubre","11":
           Octubre = parseInt( 
            alert("elejiste octtubre, tu juego sera Batman: Arkham Collection cuesta" + OctubrePrecio)
            );
          
            break;
        case "Diciembre","12":
           Diciembre = parseInt( 
            alert("elejiste diciembre, tu juego sera Assassin's Creed III - Secretos Escondidos cuesta" + diciembrePrecio)
            );
            break;
            case "listo":
       
         break;
        default:
          alert("Opción inválida. Por favor, elija una opción válida.");
      
    }

   
}

 let producto = prompt("desea comprar el juego del mes?");
 if (producto ==="SI"){
    
 }