import { buscarHeroe } from './js/callbacks';
import './styles.css';


//callback manda funcion como argumento, el objetivo es que se pueda disparar la funcion
//cuando termine el procedimiento
// buscarHeroe( heroeId , function(){

// });


const heroeId1 = 'capi';
const heroeId2 = 'iron';
const heroeId3 = 'spider';

buscarHeroe( heroeId1, (err, heroe1 )=>{

  if( err ){ return console.error( err ); }
  
  buscarHeroe(heroeId2, (err,heroe2)=>{
    if (err) { return console.error(err); }

    buscarHeroe(heroeId3, (err, heroe3) => {
      if (err) { return console.error(err); }
      
      console.log(`Enviando a ${heroe1.nombre}, ${heroe2.nombre} y ${heroe3.nombre}`);

    })

  })

});

